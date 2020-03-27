namespace com.keyman.keyboards {
  /**
   * Stores preprocessed properties of a keyboard for quick retrieval later.
   */
  class CacheTag {
    stores: {[storeName: string]: text.ComplexKeyboardStore};

    constructor() {
      this.stores = {};
    }
  }

  /**
   * Acts as a wrapper class for Keyman keyboards compiled to JS, providing type information
   * and keyboard-centered functionality in an object-oriented way without modifying the 
   * wrapped keyboard itself.
   */
  export class Keyboard {
    /**
     * This is the object provided to KeyboardInterface.registerKeyboard - that is, the keyboard
     * being wrapped.
     * 
     * TODO:  Make this private instead.  But there are a LOT of references that must be rooted out first.
     */
    public readonly scriptObject: any;

    constructor(keyboardScript: any) {
      this.scriptObject = keyboardScript;
    }

    /**
     * Calls the keyboard's `gs` function, which represents the keyboard source's group(main).
     */
    process(outputTarget: text.OutputTarget, keystroke: text.KeyEvent): boolean {
      return this.scriptObject['gs'](outputTarget, keystroke);
    }

    get id(): string {
      return this.scriptObject['KI'];
    }

    get name(): string {
      return this.scriptObject['KN'];
    }

    get displaysUnderlyingKeys(): boolean {
      // Returns false if undefined or false-like (including 0), true otherwise.
      return !!this.scriptObject['KDU'];
    }

    // TODO:  Better typing.
    get legacyLayoutSpec(): any {
      return this.scriptObject['KV'];  // used with buildDefaultLayout; layout must be constructed at runtime.
    }

    // TODO:  Better typing.
    // May return null.
    get layouts(): any {
      return this.scriptObject['KVKL'];  // This one is compiled by Developer's visual keyboard layout editor.
    }

    get compilerVersion(): utils.Version {
      return new utils.Version(this.scriptObject['KVER']);
    }

    get isMnemonic(): boolean {
      return !!this.scriptObject['KM'];
    }

    get definesPositionalOrMnemonic(): boolean {
      return typeof this.scriptObject['KM'] != 'undefined';
    }

    /**
     * HTML help text which is a one liner intended for the status bar of the desktop OSK originally.
     * 
     * Reference: https://help.keyman.com/developer/language/reference/kmw_helptext
     */
    get helpText(): string {
      return this.scriptObject['KH'];
    }

    get hasHelpHTML(): boolean {
      return !!this.scriptObject['KHF'];
    }

    /**
     * Replaces the OSK with custom HTML, which may be interactive (like with sil_euro_latin).
     * 
     * Reference: https://help.keyman.com/developer/language/reference/kmw_helpfile
     */
    insertHelpHTML(e: any) {
      // e:  Expects the OSKManager's _Box element.  We don't add type info here b/c it would
      //     reference the DOM.
      this.scriptObject['KHF'](e);
    }

    get oskStyling(): string {
      return this.scriptObject['KCSS'];
    }

    /**
     * true if this keyboard uses a (legacy) pick list (Chinese, Japanese, Korean, etc.)
     * 
     * TODO:  Make a property on keyboards (say, `isPickList` / `KPL`) to signal this when we
     *        get around to better, generalized picker-list support.
     */    
    get isCJK(): boolean { // I3363 (Build 301)
      var lg: string;
      if(typeof(this.scriptObject['KLC']) != 'undefined') {
        lg = this.scriptObject['KLC'];
      } else if(typeof(this.scriptObject['LanguageCode']) != 'undefined') {
        lg = this.scriptObject['LanguageCode'];
      }
      
      // While some of these aren't proper BCP-47 language codes, the CJK keyboards predate our use of BCP-47.
      // So, we preserve the old ISO 639-3 codes, as that's what the keyboards are matching against.
      return ((lg == 'cmn') || (lg == 'jpn') || (lg == 'kor'));
    }

    get isRTL(): boolean {
      return !!this.scriptObject['KRTL'];
    }

    /**
     * Obtains the currently-active modifier bitmask for the active keyboard.
     */
    get modifierBitmask(): number {
      // NON_CHIRAL is the default bitmask if KMBM is not defined.
      // We always need a bitmask to compare against, as seen in `isChiral`.
      return this.scriptObject['KMBM'] || text.Codes.modifierBitmasks['NON_CHIRAL'];
    }

    get isChiral(): boolean {
      return !!(this.modifierBitmask & text.Codes.modifierBitmasks['IS_CHIRAL']);
    }

    get desktopFont(): string {
      if(this.scriptObject['KV']) {
        return this.scriptObject['KV']['F'];
      } else {
        return null;
      }
    }

    private get cacheTag(): CacheTag {
      let tag = this.scriptObject['_kmw'];

      if(!tag) {
        tag = new CacheTag();
        this.scriptObject['_kmw'] = tag;
      }

      return tag; 
    }

    get explodedStores(): {[storeName: string]: text.ComplexKeyboardStore} {
      return this.cacheTag.stores;
    }

    /**
     * Signifies whether or not a layout or OSK should include AltGr / Right-alt emulation for this keyboard.
     * @param   {Object=}   keyLabels
     * @return  {boolean}
     */
    get emulatesAltGr(): boolean {
      let modifierCodes = text.Codes.modifierCodes;

      // If we're not chiral, we're not emulating.
      if(!this.isChiral) {
        return false;
      }

      if(this.legacyLayoutSpec == null) {
        return false;
      }
      
      // Only exists in KMW 10.0+, but before that Web had no chirality support, so... return false.
      let layers = this.legacyLayoutSpec['KLS'];
      if(!layers) {
        return false;
      }

      var emulationMask = modifierCodes['LCTRL'] | modifierCodes['LALT'];
      var unshiftedEmulationLayer = layers[Layouts.getLayerId(emulationMask)];
      var shiftedEmulationLayer = layers[Layouts.getLayerId(modifierCodes['SHIFT'] | emulationMask)];
      
      // buildDefaultLayout ensures that these are aliased to the original modifier set being emulated.
      // As a result, we can directly test for reference equality.
      //
      // This allows us to still return `true` after creating the layers for emulation; during keyboard
      // construction, the two layers should be null for AltGr emulation to succeed.
      if(unshiftedEmulationLayer != null && 
          unshiftedEmulationLayer != layers[Layouts.getLayerId(modifierCodes['RALT'])]) {
        return false;
      }

      if(shiftedEmulationLayer != null && 
          shiftedEmulationLayer != layers[Layouts.getLayerId(modifierCodes['RALT'] | modifierCodes['SHIFT'])]) {
        return false;
      }

      // It's technically possible for the OSK to not specify anything while allowing chiral input.  A last-ditch catch:
      var bitmask = this.modifierBitmask;
      if((bitmask & emulationMask) != emulationMask) {
        // At least one of the emulation modifiers is never used by the keyboard!  We can confirm everything's safe.
        return true;
      }

      if(unshiftedEmulationLayer == null && shiftedEmulationLayer == null) {
        // We've run out of things to go on; we can't detect if chiral AltGr emulation is intended or not.
        // TODO:  handle this again!
        // if(!osk.altGrWarning) {
        //   console.warn("Could not detect if AltGr emulation is safe, but defaulting to active emulation!")
        //   // Avoid spamming the console with warnings on every call of the method.
        //   osk.altGrWarning = true;
        // }
        return true;
      }
      return true;
    }

    usesDesktopLayoutOnDevice(device: text.EngineDeviceSpec) {
      if(this.scriptObject['KVKL']) {
        // A custom mobile layout is defined... but are we using it?
        return device.formFactor == text.FormFactor.Desktop;
      } else {
        return true;
      }
    }

    /**
     * @param       {number}    _PCommand     event code (16,17,18) or 0
     * @param       {Object}    _PTarget      target element
     * @param       {number}    _PData        1 or 0    
     * Notifies keyboard of keystroke or other event
     */    
    notify(_PCommand: number, _PTarget: text.OutputTarget, _PData: number) { // I2187
      // Good example use case - the Japanese CJK-picker keyboard
      if(typeof(this.scriptObject['KNS']) == 'function') {
        this.scriptObject['KNS'](_PCommand, _PTarget, _PData);
      }
    }
  }
}