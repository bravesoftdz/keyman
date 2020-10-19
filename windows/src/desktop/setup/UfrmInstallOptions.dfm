object frmInstallOptions: TfrmInstallOptions
  Left = 0
  Top = 0
  BorderIcons = [biSystemMenu]
  BorderStyle = bsDialog
  Caption = 'ssOptionsTitle'
  ClientHeight = 386
  ClientWidth = 646
  Color = clBtnFace
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -13
  Font.Name = 'Tahoma'
  Font.Style = []
  OldCreateOrder = False
  Position = poScreenCenter
  OnCreate = FormCreate
  DesignSize = (
    646
    386)
  PixelsPerInch = 96
  TextHeight = 16
  object lblInstallOptions: TLabel
    Left = 8
    Top = 8
    Width = 179
    Height = 16
    Caption = 'ssOptionsTitleInstallOptions'
    Font.Charset = DEFAULT_CHARSET
    Font.Color = clWindowText
    Font.Height = -13
    Font.Name = 'Tahoma'
    Font.Style = [fsBold]
    ParentFont = False
  end
  object lblDefaultKeymanSettings: TLabel
    Left = 8
    Top = 78
    Width = 242
    Height = 16
    Caption = 'ssOptionsTitleDefaultKeymanSettings'
    Font.Charset = DEFAULT_CHARSET
    Font.Color = clWindowText
    Font.Height = -13
    Font.Name = 'Tahoma'
    Font.Style = [fsBold]
    ParentFont = False
  end
  object lblSelectModulesToInstall: TLabel
    Left = 8
    Top = 172
    Width = 238
    Height = 16
    Caption = 'ssOptionsTitleSelectModulesToInstall'
    Font.Charset = DEFAULT_CHARSET
    Font.Color = clWindowText
    Font.Height = -13
    Font.Name = 'Tahoma'
    Font.Style = [fsBold]
    ParentFont = False
  end
  object lblAssociatedKeyboardLanguage: TLabel
    Left = 322
    Top = 172
    Width = 287
    Height = 16
    Alignment = taRightJustify
    Anchors = [akTop, akRight]
    Caption = 'ssOptionsTitleAssociatedKeyboardLanguage'
    Font.Charset = DEFAULT_CHARSET
    Font.Color = clWindowText
    Font.Height = -13
    Font.Name = 'Tahoma'
    Font.Style = [fsBold]
    ParentFont = False
  end
  object lblInstallerVersion: TLabel
    Left = 8
    Top = 358
    Width = 102
    Height = 16
    Caption = 'lblInstallerVersion'
  end
  object chkStartWithWindows: TCheckBox
    Left = 8
    Top = 100
    Width = 473
    Height = 17
    Caption = 'ssOptionsStartWithWindows'
    TabOrder = 2
  end
  object chkStartAfterInstall: TCheckBox
    Left = 8
    Top = 30
    Width = 473
    Height = 17
    Caption = 'ssOptionsStartAfterInstall'
    TabOrder = 0
  end
  object chkCheckForUpdates: TCheckBox
    Left = 8
    Top = 146
    Width = 473
    Height = 17
    Caption = 'ssOptionsCheckForUpdates'
    TabOrder = 4
  end
  object chkUpgradeKeyman7: TCheckBox
    Left = 8
    Top = 53
    Width = 473
    Height = 17
    Caption = 'ssOptionsUpgradeKeyboards'
    TabOrder = 1
  end
  object cmdOK: TButton
    Left = 242
    Top = 353
    Width = 73
    Height = 25
    Caption = 'ssOkButton'
    Default = True
    TabOrder = 6
    OnClick = cmdOKClick
  end
  object cmdCancel: TButton
    Left = 330
    Top = 353
    Width = 73
    Height = 25
    Cancel = True
    Caption = 'ssCancelButton'
    ModalResult = 2
    TabOrder = 7
  end
  object chkAutomaticallyReportUsage: TCheckBox
    Left = 8
    Top = 123
    Width = 473
    Height = 17
    Caption = 'ssOptionsAutomaticallyReportUsage'
    TabOrder = 3
  end
  object sbTargets: TScrollBox
    Left = 6
    Top = 192
    Width = 619
    Height = 151
    BorderStyle = bsNone
    ParentBackground = True
    TabOrder = 5
  end
end
