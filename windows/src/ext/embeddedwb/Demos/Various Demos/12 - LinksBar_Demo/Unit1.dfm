object Form2: TForm2
  Left = 357
  Top = 320
  BorderStyle = bsSingle
  Caption = 'Links Bar Demo'
  ClientHeight = 541
  ClientWidth = 554
  Color = clBtnFace
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -11
  Font.Name = 'Tahoma'
  Font.Style = []
  OldCreateOrder = False
  Position = poScreenCenter
  Scaled = False
  OnShow = FormShow
  PixelsPerInch = 96
  TextHeight = 13
  object Panel1: TPanel
    Left = 0
    Top = 329
    Width = 554
    Height = 193
    Align = alBottom
    TabOrder = 0
    object Button1: TButton
      Left = 0
      Top = 13
      Width = 137
      Height = 25
      Caption = 'Add Site To Links Bar'
      TabOrder = 0
      OnClick = Button1Click
    end
    object Button3: TButton
      Left = 144
      Top = 13
      Width = 137
      Height = 25
      Caption = 'Clear The Link List'
      TabOrder = 1
      OnClick = Button3Click
    end
    object Button4: TButton
      Left = 288
      Top = 13
      Width = 137
      Height = 25
      Caption = 'Remove The Site From List'
      TabOrder = 2
      OnClick = Button4Click
    end
    object Memo1: TMemo
      Left = 0
      Top = 64
      Width = 273
      Height = 99
      TabOrder = 3
    end
    object Memo2: TMemo
      Left = 280
      Top = 64
      Width = 263
      Height = 100
      TabOrder = 4
    end
    object Button5: TButton
      Left = 0
      Top = 168
      Width = 273
      Height = 17
      Caption = 'Get The Link List'
      TabOrder = 5
      OnClick = Button5Click
    end
    object Button6: TButton
      Left = 280
      Top = 168
      Width = 265
      Height = 17
      Caption = 'Get The Url From List'
      TabOrder = 6
      OnClick = Button6Click
    end
    object ShowImages: TCheckBox
      Left = 432
      Top = 8
      Width = 113
      Height = 17
      Caption = 'Hide/Show Images'
      TabOrder = 7
      OnClick = ShowImagesClick
    end
    object ViewHideLinksbar: TCheckBox
      Left = 432
      Top = 24
      Width = 113
      Height = 17
      Caption = 'Hide/Show LinksBar'
      TabOrder = 8
      OnClick = ViewHideLinksbarClick
    end
  end
  object StatusBar1: TStatusBar
    Left = 0
    Top = 522
    Width = 554
    Height = 19
    Panels = <>
    SimplePanel = True
  end
  object Panel2: TPanel
    Left = 0
    Top = 0
    Width = 554
    Height = 29
    Align = alTop
    TabOrder = 3
    object Edit1: TEdit
      Left = 5
      Top = 3
      Width = 484
      Height = 21
      TabOrder = 0
      Text = 'http://bsalsa.com'
    end
    object Button2: TButton
      Left = 501
      Top = 3
      Width = 48
      Height = 21
      Caption = 'Go'
      TabOrder = 1
      OnClick = Button2Click
    end
  end
  object LinksBar1: TLinksBar
    Left = 0
    Top = 29
    Width = 554
    Height = 26
    AutoSize = True
    Caption = 'LinksBar1'
    Flat = True
    Images = ImageList1
    ParentShowHint = False
    PopupMenu = PopupMenu1
    ShowCaptions = True
    ShowHint = True
    TabOrder = 2
    About = 'LinksBar by bsalsa : bsalsa@gmail.com'
    MaxCaptionLength = 15
    WebBrowser = EmbeddedWB1
    StatusBar = StatusBar1
  end
  object EmbeddedWB1: TEmbeddedWB
    Left = 0
    Top = 55
    Width = 554
    Height = 274
    Align = alClient
    TabOrder = 4
    Silent = False
    OnDocumentComplete = EmbeddedWB1DocumentComplete
    DisableCtrlShortcuts = 'N'
    UserInterfaceOptions = [EnablesFormsAutoComplete, EnableThemes]
    About = ' EmbeddedWB http://bsalsa.com/'
    PrintOptions.Margins.Left = 19.050000000000000000
    PrintOptions.Margins.Right = 19.050000000000000000
    PrintOptions.Margins.Top = 19.050000000000000000
    PrintOptions.Margins.Bottom = 19.050000000000000000
    PrintOptions.Header = '&w&bSeite &p von &P'
    PrintOptions.HTMLHeader.Strings = (
      '<HTML></HTML>')
    PrintOptions.Footer = '&u&b&d'
    PrintOptions.Orientation = poPortrait
    UserAgent = 'EmbeddedWB 14.55 from: http://www.bsalsa.com/'
    ControlData = {
      4C0000000D390000871900000000000000000000000000000000000000000000
      000000004C000000000000000000000001000000E0D057007335CF11AE690800
      2B2E126208000000000000004C0000000114020000000000C000000000000046
      8000000000000000000000000000000000000000000000000000000000000000
      00000000000000000100000000000000000000000000000000000000}
  end
  object ImageList1: TImageList
    Left = 16
    Top = 56
    Bitmap = {
      494C010101000400040010001000FFFFFFFFFF10FFFFFFFFFFFFFFFF424D3600
      0000000000003600000028000000400000001000000001002000000000000010
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      00000000000000000000000000000000000000000000E3D2BEFFD8A259FFD49A
      4BFFD8BE9FFFEFE8E1FFD8CCC1FFC2B0A0FFC1B1A0FFC7B9A8FFDCD5CBFFEAE6
      E2FFFAF9F7FF0000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      00000000000000000000000000000000000000000000E1B067FFBF9D75FFFFFF
      FFFFC69860FFA3764AFF755031FF68472AFF66472CFF5D4430FF634C38FF8A78
      5CFFECEAE5FFF9F7F6FF00000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      00000000000000000000000000000000000000000000EEB047FFCCB69DFFE6DF
      D8FF8A582BFFC37E34FFDE943CFFEAA847FFF0B454FFDFB364FFA98751FF6349
      2EFFB3A78DFFECE9E4FFFAF9F7FF000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      00000000000000000000000000000000000000000000E0AF61FFDD992EFFBB7D
      2BFFEB9B32FFE7932FFFE79030FFB36D27FFBA732BFFE69531FFF4B142FFFBD4
      6CFF71553AFF8D765CFFDDD5CBFF000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      00000000000000000000000000000000000000000000E7D2B5FFF6B53DFFF3AC
      34FFE5962BFFDA8A29FF85582DFFFFFFFFFFFFFFFFFFE3C6ABFFD48632FFF4A8
      3CFFD7B77EFF866C4FFFD7CCC0FF000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      00000000000000000000000000000000000000000000FAF9F7FFE2B767FFF4B4
      36FFE29526FFA46720FF4F331FFF6B5037FF72563FFF7D5739FF8D5B30FF8C5B
      2EFF916C42FF83654AFFB7A08BFF000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      00000000000000000000000000000000000000000000FFFFFFFFDED5C4FFF4BD
      3FFFE59D27FFD0802CFFD0802CFFD0802CFFD0802CFFD0802CFFD0802CFFD080
      2CFFD0802CFF654934FFAF9884FF000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      00000000000000000000000000000000000000000000F0EBE4FFFFFFFFFFECD7
      A8FFECAC2EFFE59F27FFDE9628FFE09529FFE0942DFFDD9537FFE7932EFFE995
      32FFEDA142FF6E4E37FFC4B5AAFF000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      00000000000000000000000000000000000000000000F5F2EDFFCAAF7EFFFFFF
      FFFFF5C642FFB88429FF6C4926FFFFFFFFFFFFFFFFFFB0906BFFBF832EFFE896
      2EFFCF8B37FF856950FFD5CDC6FF000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000D2BD8DFFEBCF
      91FFF5E5A8FFE0AF3BFF705129FF5A4330FF715638FFB67925FFE6982AFFE797
      2DFFA36D30FFC1B0A0FFF4F1EEFF000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      000000000000000000000000000000000000000000000000000000000000E5D9
      B5FFF6EED6FFF2DB8FFFE1B23BFFB68125FFCD8F25FFE5A029FFE49C28FFEAA0
      2EFFA48666FFE3DBD4FFFFFFFFFF000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000E6D8AFFFF3E19BFFFAE981FFFBE96BFFF4CC45FFF8CF4BFFDDB350FFB497
      6FFFFFFFFFFFE7C98AFFE8DECFFF000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      000000000000ECE6DBFFDED2BDFFD1BC9CFFCDB593FFCEA966FFEFD285FFE9C5
      7CFFE8DABFFFE1C286FFECE4D9FF000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      000000000000000000000000000000000000000000000000000000000000EDE3
      D3FFEACF9CFFDFD0BBFF00000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      0000000000000000000000000000000000000000000000000000000000000000
      000000000000000000000000000000000000424D3E000000000000003E000000
      2800000040000000100000000100010000000000800000000000000000000000
      000000000000000000000000FFFFFF00FFFF0000000000008007000000000000
      8003000000000000800100000000000080010000000000008001000000000000
      8001000000000000800100000000000080010000000000008001000000000000
      C001000000000000E001000000000000F001000000000000F801000000000000
      FFE3000000000000FFFF00000000000000000000000000000000000000000000
      000000000000}
  end
  object PopupMenu1: TPopupMenu
    Left = 80
    Top = 56
    object AddCurrentSiteToTheLinksList1: TMenuItem
      Caption = 'Add Current Site To The Links List'
      OnClick = Button1Click
    end
    object RemoveTheCurrentSiteFromTheLinksList1: TMenuItem
      Caption = 'Remove The Current Site From The Links List'
      OnClick = Button4Click
    end
    object N14: TMenuItem
      Caption = '-'
    end
    object ClearTheLinksList1: TMenuItem
      Caption = 'Clear The Links List'
      OnClick = Button3Click
    end
    object ShowTheList2: TMenuItem
      Caption = 'Show The List'
      OnClick = Button6Click
    end
  end
end