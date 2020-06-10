//
//  KeymanPackage.swift
//  KeymanEngine
//
//  Created by Jacob Bullock on 2/16/18.
//  Copyright © 2018 SIL International. All rights reserved.
//

import Foundation
import Zip

public enum KMPError : String, Error {
  case noMetadata = "Could not find kmp.json for package."
  case invalidPackage = "Invalid Keyman Package."
  case fileSystem = "Unable to create directory structure in file system."
  case copyFiles = "Unable to copy keyboard files to file system."
  case wrongPackageType = "Package provided does not match the type expected by this method"
  case resourceNotInPackage = "Resource cannot be found in specified package"
}

public class KeymanPackage {
  static private let kmpFile = "kmp.json"
  public let sourceFolder: URL
  internal let metadata: KMPMetadata

  init(metadata: KMPMetadata, folder: URL) {
    sourceFolder = folder
    self.metadata = metadata
  }

  public func isKeyboard() -> Bool {
    return metadata.packageType == .Keyboard
  }

  // to be overridden by subclasses
  public func defaultInfoHtml() -> String {
    return "base class!"
  }
  
  public func infoHtml() -> String {
    let welcomePath = self.sourceFolder.appendingPathComponent("welcome.htm")
    
    if FileManager.default.fileExists(atPath: welcomePath.path) {
      if let html = try? String(contentsOfFile: welcomePath.path, encoding: String.Encoding.utf8) {
        return html
      }
    }
  
    return defaultInfoHtml()
  }

  public var version: String? {
    return metadata.version
  }

  var resources: [AnyKMPResource] {
    fatalError("abstract base method went uninplemented by derived class")
  }

  /**
   * Returns an array of arrays corresponding to the available permutations of resource + language for each resource
   * specified by the package.
   *
   * Example:  nrc.en.mtnt supports three languages.  A package containing only said lexical model would return an array
   * with 1 entry:  an array with three InstallableLexicalModel entries, one for each supported language of the model, identical
   * aside from language-specific metadata.
   */
  public var installableResourceSets: [[AnyLanguageResource]] {
    fatalError("abstract base method went unimplemented by derived class")
  }
  
  static public func parse(_ folder: URL) -> KeymanPackage? {
    do {
      var path = folder
      path.appendPathComponent(kmpFile)
      if FileManager.default.fileExists(atPath: path.path) {
        let data = try Data(contentsOf: path, options: .mappedIfSafe)
        let decoder = JSONDecoder()

        var metadata: KMPMetadata

        do {
          metadata = try decoder.decode(KMPMetadata.self, from: data)
        } catch {
          throw KMPError.noMetadata
        }

        switch metadata.packageType {
          case .Keyboard:
            return KeyboardKeymanPackage(metadata: metadata, folder: folder)
          case .LexicalModel:
            return LexicalModelKeymanPackage(metadata: metadata, folder: folder)
          default:
            throw KMPError.invalidPackage
        }
      }
    } catch {
      log.error("error parsing keyman package: \(error)")
    }
    
    return nil
  }
  
  static public func extract(fileUrl: URL, destination: URL, complete: @escaping (KeymanPackage?) -> Void) throws {
    try unzipFile(fileUrl: fileUrl, destination: destination) {
      complete(KeymanPackage.parse(destination))
    }
  }

  static public func unzipFile(fileUrl: URL, destination: URL, complete: @escaping () -> Void) throws {
    try Zip.unzipFile(fileUrl, destination: destination, overwrite: true,
                      password: nil,
                      progress: { (progress) -> () in
                        //TODO: add timeout
                        if(progress == 1.0) {
                          complete()
                        }
                      })
  }

  public func findMatch(_ resource: AnyLanguageResource) -> AnyLanguageResource? {
    let matchesFound: [AnyLanguageResource] = self.installableResourceSets.compactMap { set in
      let setMatches: [AnyLanguageResource] = set.compactMap { other in
        if resource.id == other.id && resource.languageID == other.languageID {
          return other
        } else {
          return nil
        }
      }

      return setMatches.count > 0 ? setMatches[0] : nil
    }

    return matchesFound.count > 0 ? matchesFound[0] : nil
  }
}

public class TypedKeymanPackage<TypedLanguageResource: LanguageResource>: KeymanPackage {
  public private(set) var installables: [[TypedLanguageResource]] = []

  internal func setInstallableResourceSets<Resource: KMPResource>(for kmpResources: [Resource]) where Resource.LanguageResourceType == TypedLanguageResource {
    self.installables = kmpResources.map { resource in
      return resource.typedInstallableResources
    } as [[TypedLanguageResource]]
  }

  // Cannot directly override base class's installableResourceSets with more specific type,
  // despite covariance.  So, we have to provide two separate properties.  Joy.
  // See https://forums.swift.org/t/confusing-limitations-on-covariant-overriding/16252
  public override var installableResourceSets: [[AnyLanguageResource]] {
    return installables
  }
}
