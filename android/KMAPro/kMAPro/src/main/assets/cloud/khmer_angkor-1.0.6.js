if(typeof keyman === 'undefined') {
  console.log('Keyboard requires KeymanWeb 10.0 or later');
  if(typeof tavultesoft !== 'undefined') tavultesoft.keymanweb.util.alert("This keyboard requires KeymanWeb 10.0 or later");
} else {
KeymanWeb.KR(new Keyboard_khmer_angkor());
}
function Keyboard_khmer_angkor()
{
  var modCodes = keyman.osk.modifierCodes;
  var keyCodes = keyman.osk.keyCodes;

  this.KI="Keyboard_khmer_angkor";
  this.KN="Khmer Angkor";
  this.KMINVER="10.0";
  this.KV={F:' 1em "Arial"',K102:0};
  this.KV.KLS={
    "rightalt": ["‍","‌","@","៑","$","€","៙","៚","*","{","}","≈","៎","","","","ៜ","៝","ឯ","ឫ","ឨ","[","]","ឦ","ឱ","ឰ","ឩ","ឳ","\\","","","","+","-","×","÷",":","‘","’","ឝ","៘","៖","ៈ","","","","","","","<",">","#","&","ឞ",";","៓",",",".","/","","","","",""," "],
    "rightalt-shift": ["","៱","៲","៳","៴","៵","៶","៷","៸","៹","៰","","","","","","᧠","᧡","᧢","᧣","᧤","᧥","᧦","᧧","᧨","᧩","᧪","᧫","","","","","᧬","᧭","᧮","᧯","᧰","᧱","᧲","᧳","᧴","᧵","᧶","","","","","","","᧷","᧸","᧹","᧺","᧻","᧼","᧽","᧾","᧿","","","","","","",""],
    "default": ["«","១","២","៣","៤","៥","៦","៧","៨","៩","០","ឥ","ឲ","","","","ឆ","ឹ","េ","រ","ត","យ","ុ","ិ","ោ","ផ","ៀ","ឪ","ឮ","","","","ា","ស","ដ","ថ","ង","ហ","្","ក","ល","ើ","់","","","","","","","ឋ","ខ","ច","វ","ប","ន","ម","ុំ","។","៊","","","","","","​"],
    "shift": ["»","!","ៗ","\"","៛","%","៍","័","៏","(",")","៌","=","","","","ឈ","ឺ","ែ","ឬ","ទ","ួ","ូ","ី","ៅ","ភ","ឿ","ឧ","ឭ","","","","ាំ","ៃ","ឌ","ធ","អ","ះ","ញ","គ","ឡ","ោះ","៉","","","","","","","ឍ","ឃ","ជ","េះ","ព","ណ","ំ","ុះ","៕","?","","","","","",""]
  };
  this.KV.BK=(function(x){
    var
      empty=Array.apply(null, Array(65)).map(String.prototype.valueOf,""),
      result=[], v, i,
      modifiers=['default','shift','ctrl','shift-ctrl','alt','shift-alt','ctrl-alt','shift-ctrl-alt'];
    for(i=modifiers.length-1;i>=0;i--) {
      v = x[modifiers[i]];
      if(v || result.length > 0) {
        result=(v ? v : empty).slice().concat(result);
      }
    }
    return result;
  })(this.KV.KLS);
  this.KDU=0;
  this.KH='';
  this.KM=0;
  this.KBVER="1.0.6";
  this.KMBM=modCodes.RALT | modCodes.SHIFT /* 0x0018 */;
  this.KVKD="T_17D2_1780 T_17D2_1781 T_17D2_1782 T_17D2_1783 T_17D2_1784 T_17D2_1785 T_17D2_1786 T_17D2_1787 T_17D2_1788 T_17D2_1789 T_17D2_178A T_17D2_178B T_17D2_178C T_17D2_178D T_17D2_178E T_17D2_178F T_17D2_1790 T_17D2_1791 T_17D2_1792 T_17D2_1793 T_17D2_1794 T_17D2_1795 T_17D2_1796 T_17D2_1797 T_17D2_1798 T_17D2_1799 T_17D2_179A T_17D2_179B T_17D2_179C T_17D2_179D T_17D2_179E T_17D2_179F T_17D2_17A0 T_17D2_17A1 T_17D2_17A2 U_0030 U_0031 U_0032 U_0033 U_0034 U_0035 U_0036 U_0037 U_0038 U_0039";
  this.KVKL={
  "tablet": {
    "font": "Khmer OS",
    "displayUnderlying": false,
    "layer": [
      {
        "id": "default",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "K_Q",
                "pad": "20",
                "text": "\u1786",
                "sk": [
                  {
                    "layer": "shift",
                    "id": "K_Q",
                    "text": "\u1788"
                  },
                  {
                    "id": "T_17D2_1786",
                    "text": "\u17D2\u1786"
                  },
                  {
                    "id": "T_17D2_1788",
                    "text": "\u17D2\u1788"
                  }
                ]
              },
              {
                "id": "K_W",
                "text": "\u17B9",
                "sk": [
                  {
                    "layer": "shift",
                    "id": "K_W",
                    "text": "\u17BA"
                  }
                ]
              },
              {
                "id": "K_E",
                "text": "\u17C1",
                "sk": [
                  {
                    "layer": "shift",
                    "id": "K_E",
                    "text": "\u17C2"
                  },
                  {
                    "layer": "shift",
                    "id": "K_S",
                    "text": "\u17C3"
                  },
                  {
                    "layer": "shift",
                    "id": "K_V",
                    "text": "\u17C1\u17C7"
                  },
                  {
                    "id": "U_17AF",
                    "text": "\u17AF"
                  },
                  {
                    "id": "U_17B0",
                    "text": "\u17B0"
                  }
                ]
              },
              {
                "id": "K_R",
                "text": "\u179A",
                "sk": [
                  {
                    "id": "T_17D2_179A",
                    "text": "\u17D2\u179A"
                  },
                  {
                    "id": "U_17AB",
                    "text": "\u17AB"
                  },
                  {
                    "id": "U_17AC",
                    "text": "\u17AC"
                  }
                ]
              },
              {
                "id": "K_T",
                "text": "\u178F",
                "sk": [
                  {
                    "layer": "shift",
                    "id": "K_T",
                    "text": "\u1791"
                  },
                  {
                    "id": "T_17D2_178F",
                    "text": "\u17D2\u178F"
                  },
                  {
                    "layer": "default",
                    "id": "T_17D2_1791",
                    "text": "\u17D2\u1791"
                  }
                ]
              },
              {
                "id": "K_Y",
                "text": "\u1799",
                "sk": [
                  {
                    "id": "T_17D2_1799",
                    "text": "\u17D2\u1799"
                  }
                ]
              },
              {
                "id": "K_U",
                "text": "\u17BB",
                "sk": [
                  {
                    "layer": "shift",
                    "id": "K_U",
                    "text": "\u17BC"
                  },
                  {
                    "layer": "shift",
                    "id": "K_Y",
                    "text": "\u17BD"
                  },
                  {
                    "id": "U_17A7",
                    "text": "\u17A7"
                  },
                  {
                    "layer": "shift",
                    "id": "U_17AA",
                    "text": "\u17AA"
                  },
                  {
                    "layer": "shift",
                    "id": "U_17A9",
                    "text": "\u17A9"
                  },
                  {
                    "id": "U_17A8",
                    "text": "\u17A8"
                  }
                ]
              },
              {
                "id": "K_I",
                "text": "\u17B7",
                "sk": [
                  {
                    "layer": "shift",
                    "id": "K_I",
                    "text": "\u17B8"
                  },
                  {
                    "id": "U_17A5",
                    "text": "\u17A5"
                  },
                  {
                    "layer": "shift",
                    "id": "U_17A6",
                    "text": "\u17A6"
                  }
                ]
              },
              {
                "id": "K_O",
                "text": "\u17C4",
                "sk": [
                  {
                    "layer": "shift",
                    "id": "K_O",
                    "text": "\u17C5"
                  },
                  {
                    "id": "K_LBRKT",
                    "text": "\u17C0"
                  },
                  {
                    "layer": "shift",
                    "id": "K_LBRKT",
                    "text": "\u17BF"
                  },
                  {
                    "layer": "shift",
                    "id": "K_COLON",
                    "text": "\u17C4\u17C7"
                  },
                  {
                    "id": "U_17B1",
                    "text": "\u17B1"
                  },
                  {
                    "id": "U_17B2",
                    "text": "\u17B2"
                  },
                  {
                    "layer": "shift",
                    "id": "U_17B3",
                    "text": "\u17B3"
                  }
                ]
              },
              {
                "id": "K_P",
                "text": "\u1795",
                "sk": [
                  {
                    "layer": "shift",
                    "id": "K_P",
                    "text": "\u1797"
                  },
                  {
                    "id": "T_17D2_1795",
                    "text": "\u17D2\u1795"
                  },
                  {
                    "layer": "default",
                    "id": "T_17D2_1797",
                    "text": "\u17D2\u1797"
                  }
                ]
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "width": "100",
                "id": "K_A",
                "pad": "20",
                "text": "\u17B6",
                "sk": [
                  {
                    "layer": "shift",
                    "id": "K_A",
                    "text": "\u17B6\u17C6"
                  }
                ]
              },
              {
                "id": "K_S",
                "text": "\u179F",
                "sk": [
                  {
                    "id": "T_17D2_179F",
                    "text": "\u17D2\u179F"
                  },
                  {
                    "id": "U_179D",
                    "text": "\u179D"
                  },
                  {
                    "id": "U_179E",
                    "text": "\u179E"
                  }
                ]
              },
              {
                "id": "K_D",
                "text": "\u178A",
                "sk": [
                  {
                    "layer": "shift",
                    "id": "K_D",
                    "text": "\u178C"
                  },
                  {
                    "id": "T_17D2_178A",
                    "text": "\u17D2\u178A"
                  },
                  {
                    "layer": "default",
                    "id": "T_17D2_178C",
                    "text": "\u17D2\u178C"
                  }
                ]
              },
              {
                "id": "K_F",
                "text": "\u1790",
                "sk": [
                  {
                    "layer": "shift",
                    "id": "K_F",
                    "text": "\u1792"
                  },
                  {
                    "id": "T_17D2_1790",
                    "text": "\u17D2\u1790"
                  },
                  {
                    "layer": "default",
                    "id": "T_17D2_1792",
                    "text": "\u17D2\u1792"
                  }
                ]
              },
              {
                "id": "K_G",
                "text": "\u1784",
                "sk": [
                  {
                    "layer": "shift",
                    "id": "K_G",
                    "text": "\u17A2"
                  },
                  {
                    "id": "T_17D2_1784",
                    "text": "\u17D2\u1784"
                  },
                  {
                    "layer": "default",
                    "id": "T_17D2_17A2",
                    "text": "\u17D2\u17A2"
                  }
                ]
              },
              {
                "id": "K_H",
                "text": "\u17A0",
                "sk": [
                  {
                    "id": "T_17D2_17A0",
                    "text": "\u17D2\u17A0"
                  },
                  {
                    "layer": "shift",
                    "id": "K_H",
                    "text": "\u17C7"
                  },
                  {
                    "id": "U_17C8",
                    "text": "\u17C8"
                  }
                ]
              },
              {
                "layer": "shift",
                "id": "K_J",
                "text": "\u1789",
                "sk": [
                  {
                    "id": "T_17D2_1789",
                    "text": "\u17D2\u1789"
                  }
                ]
              },
              {
                "id": "K_K",
                "text": "\u1780",
                "sk": [
                  {
                    "layer": "shift",
                    "id": "K_K",
                    "text": "\u1782"
                  },
                  {
                    "id": "T_17D2_1780",
                    "text": "\u17D2\u1780"
                  },
                  {
                    "id": "T_17D2_1782",
                    "text": "\u17D2\u1782"
                  }
                ]
              },
              {
                "id": "K_L",
                "text": "\u179B",
                "sk": [
                  {
                    "layer": "shift",
                    "id": "K_L",
                    "text": "\u17A1"
                  },
                  {
                    "id": "T_17D2_179B",
                    "text": "\u17D2\u179B"
                  },
                  {
                    "id": "U_17AD",
                    "text": "\u17AD"
                  },
                  {
                    "id": "U_17AE",
                    "text": "\u17AE"
                  }
                ]
              },
              {
                "id": "K_COLON",
                "text": "\u17BE"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "id": "K_Z",
                "text": "\u178B",
                "sk": [
                  {
                    "layer": "shift",
                    "id": "K_Z",
                    "text": "\u178D"
                  },
                  {
                    "id": "T_17D2_178B",
                    "text": "\u17D2\u178B"
                  },
                  {
                    "layer": "default",
                    "id": "T_17D2_178D",
                    "text": "\u17D2\u178D"
                  }
                ]
              },
              {
                "id": "K_X",
                "text": "\u1781",
                "sk": [
                  {
                    "layer": "shift",
                    "id": "K_X",
                    "text": "\u1783"
                  },
                  {
                    "id": "T_17D2_1781",
                    "text": "\u17D2\u1781"
                  },
                  {
                    "layer": "default",
                    "id": "T_17D2_1783",
                    "text": "\u17D2\u1783"
                  }
                ]
              },
              {
                "id": "K_C",
                "text": "\u1785",
                "sk": [
                  {
                    "layer": "shift",
                    "id": "K_C",
                    "text": "\u1787"
                  },
                  {
                    "id": "T_17D2_1785",
                    "text": "\u17D2\u1785"
                  },
                  {
                    "layer": "default",
                    "id": "T_17D2_1787",
                    "text": "\u17D2\u1787"
                  }
                ]
              },
              {
                "id": "K_V",
                "text": "\u179C",
                "sk": [
                  {
                    "id": "T_17D2_179C",
                    "text": "\u17D2\u179C"
                  }
                ]
              },
              {
                "id": "K_B",
                "text": "\u1794",
                "sk": [
                  {
                    "layer": "shift",
                    "id": "K_B",
                    "text": "\u1796"
                  },
                  {
                    "id": "T_17D2_1794",
                    "text": "\u17D2\u1794"
                  },
                  {
                    "layer": "default",
                    "id": "T_17D2_1796",
                    "text": "\u17D2\u1796"
                  }
                ]
              },
              {
                "id": "K_N",
                "text": "\u1793",
                "sk": [
                  {
                    "layer": "shift",
                    "id": "K_N",
                    "text": "\u178E"
                  },
                  {
                    "id": "T_17D2_1793",
                    "text": "\u17D2\u1793"
                  },
                  {
                    "layer": "default",
                    "id": "T_17D2_178E",
                    "text": "\u17D2\u178E"
                  }
                ]
              },
              {
                "id": "K_M",
                "text": "\u1798",
                "sk": [
                  {
                    "id": "T_17D2_1798",
                    "text": "\u17D2\u1798"
                  },
                  {
                    "layer": "shift",
                    "id": "K_M",
                    "text": "\u17C6"
                  }
                ]
              },
              {
                "id": "K_COMMA",
                "text": "\u17BB\u17C6",
                "sk": [
                  {
                    "layer": "shift",
                    "id": "K_COMMA",
                    "text": "\u17BB\u17C7"
                  },
                  {
                    "layer": "shift",
                    "id": "K_6",
                    "text": "\u17CD"
                  },
                  {
                    "layer": "shift",
                    "id": "K_7",
                    "text": "\u17D0"
                  },
                  {
                    "layer": "shift",
                    "id": "K_8",
                    "text": "\u17CF"
                  },
                  {
                    "layer": "shift",
                    "id": "K_HYPHEN",
                    "text": "\u17CC"
                  },
                  {
                    "layer": "shift",
                    "id": "U_17D1",
                    "text": "\u17D1"
                  },
                  {
                    "layer": "shift",
                    "id": "U_17DD",
                    "text": "\u17DD"
                  },
                  {
                    "layer": "shift",
                    "id": "U_17CE",
                    "text": "\u17CE"
                  }
                ]
              },
              {
                "width": "100",
                "id": "K_QUOTE",
                "text": "\u17CB",
                "sk": [
                  {
                    "layer": "shift",
                    "id": "K_QUOTE",
                    "text": "\u17C9"
                  },
                  {
                    "id": "K_SLASH",
                    "text": "\u17CA"
                  }
                ]
              },
              {
                "width": "130",
                "id": "K_BKSP",
                "sp": "1",
                "text": "*BkSp*"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "nextlayer": "numeric",
                "width": "150",
                "id": "K_NUMLOCK",
                "sp": "1",
                "text": "\u17E1\u17E2\u17E3"
              },
              {
                "width": "100",
                "id": "K_LOPT",
                "sp": "1",
                "text": "*Menu*"
              },
              {
                "width": "575",
                "id": "K_SPACE",
                "text": "\u200B",
                "sk": [
                  {
                    "layer": "default",
                    "id": "U_0020",
                    "text": " "
                  }
                ]
              },
              {
                "id": "K_PERIOD",
                "text": "\u17D4",
                "sk": [
                  {
                    "layer": "shift",
                    "id": "K_PERIOD",
                    "text": "\u17D5"
                  },
                  {
                    "id": "U_0021",
                    "text": "!"
                  },
                  {
                    "id": "U_003F",
                    "text": "?"
                  }
                ]
              },
              {
                "width": "130",
                "id": "K_ENTER",
                "sp": "1",
                "text": "*Enter*"
              }
            ]
          }
        ]
      },
      {
        "id": "numeric",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "K_1",
                "text": "\u17E1",
                "sk": [
                  {
                    "id": "U_0031",
                    "text": "1"
                  }
                ]
              },
              {
                "id": "K_2",
                "text": "\u17E2",
                "sk": [
                  {
                    "id": "U_0032",
                    "text": "2"
                  }
                ]
              },
              {
                "id": "K_3",
                "text": "\u17E3",
                "sk": [
                  {
                    "id": "U_0033",
                    "text": "3"
                  }
                ]
              },
              {
                "id": "K_4",
                "text": "\u17E4",
                "sk": [
                  {
                    "id": "U_0034",
                    "text": "4"
                  }
                ]
              },
              {
                "id": "K_5",
                "text": "\u17E5",
                "sk": [
                  {
                    "id": "U_0035",
                    "text": "5"
                  }
                ]
              },
              {
                "id": "K_6",
                "text": "\u17E6",
                "sk": [
                  {
                    "id": "U_0036",
                    "text": "6"
                  }
                ]
              },
              {
                "id": "K_7",
                "text": "\u17E7",
                "sk": [
                  {
                    "id": "U_0037",
                    "text": "7"
                  }
                ]
              },
              {
                "id": "K_8",
                "text": "\u17E8",
                "sk": [
                  {
                    "id": "U_0038",
                    "text": "8"
                  }
                ]
              },
              {
                "id": "K_9",
                "text": "\u17E9",
                "sk": [
                  {
                    "id": "U_0039",
                    "text": "9"
                  }
                ]
              },
              {
                "id": "K_0",
                "text": "\u17E0",
                "sk": [
                  {
                    "id": "U_0030",
                    "text": "0"
                  },
                  {
                    "id": "U_17D3",
                    "text": "\u17D3"
                  }
                ]
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "U_0040",
                "text": "@",
                "sk": [
                  {
                    "id": "U_00A9",
                    "text": "\u00A9"
                  },
                  {
                    "id": "U_00AE",
                    "text": "\u00AE"
                  }
                ]
              },
              {
                "id": "U_0023",
                "text": "#",
                "sk": [
                  {
                    "id": "U_2116",
                    "text": "\u2116"
                  },
                  {
                    "id": "U_007E",
                    "text": "~"
                  }
                ]
              },
              {
                "id": "U_17DB",
                "text": "\u17DB",
                "sk": [
                  {
                    "id": "U_0024",
                    "text": "$"
                  },
                  {
                    "id": "U_0E3F",
                    "text": "\u0E3F"
                  },
                  {
                    "id": "U_00A2",
                    "text": "\u00A2"
                  },
                  {
                    "id": "U_00A3",
                    "text": "\u00A3"
                  },
                  {
                    "id": "U_00A5",
                    "text": "\u00A5"
                  }
                ]
              },
              {
                "id": "U_0026",
                "text": "&"
              },
              {
                "id": "U_0025",
                "text": "%",
                "sk": [
                  {
                    "id": "U_2030",
                    "text": "\u2030"
                  },
                  {
                    "id": "U_2031",
                    "text": "\u2031"
                  }
                ]
              },
              {
                "id": "U_002B",
                "text": "+",
                "sk": [
                  {
                    "id": "U_002D",
                    "text": "-"
                  },
                  {
                    "id": "U_00D7",
                    "text": "\u00D7"
                  },
                  {
                    "id": "U_00F7",
                    "text": "\u00F7"
                  },
                  {
                    "id": "U_00B1",
                    "text": "\u00B1"
                  }
                ]
              },
              {
                "id": "U_003D",
                "text": "=",
                "sk": [
                  {
                    "id": "U_005F",
                    "text": "_"
                  },
                  {
                    "id": "U_2260",
                    "text": "\u2260"
                  }
                ]
              },
              {
                "id": "U_002A",
                "text": "*",
                "sk": [
                  {
                    "id": "U_005E",
                    "text": "^"
                  }
                ]
              },
              {
                "id": "U_003F",
                "text": "?",
                "sk": [
                  {
                    "id": "U_00BF",
                    "text": "\u00BF"
                  }
                ]
              },
              {
                "id": "U_0021",
                "text": "!",
                "sk": [
                  {
                    "id": "U_00A1",
                    "text": "\u00A1"
                  }
                ]
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "nextlayer": "lunar_date",
                "width": "150",
                "id": "K_SYMBOLS",
                "sp": "1",
                "text": "\u19E0\u19E1\u19E2"
              },
              {
                "id": "U_00AB",
                "text": "\u00AB",
                "sk": [
                  {
                    "id": "U_00BB",
                    "text": "\u00BB"
                  },
                  {
                    "id": "U_2018",
                    "text": "\u2018"
                  },
                  {
                    "id": "U_2019",
                    "text": "\u2019"
                  },
                  {
                    "id": "U_201C",
                    "text": "\u201C"
                  },
                  {
                    "id": "U_201D",
                    "text": "\u201D"
                  }
                ]
              },
              {
                "id": "U_002F",
                "text": "/",
                "sk": [
                  {
                    "id": "U_005C",
                    "text": "\\"
                  },
                  {
                    "id": "U_007C",
                    "text": "|"
                  },
                  {
                    "id": "U_00A6",
                    "text": "\u00A6"
                  }
                ]
              },
              {
                "id": "U_0028",
                "text": "(",
                "sk": [
                  {
                    "id": "U_0029",
                    "text": ")"
                  },
                  {
                    "id": "U_005B",
                    "text": "["
                  },
                  {
                    "id": "U_005D",
                    "text": "]"
                  },
                  {
                    "id": "U_007B",
                    "text": "{"
                  },
                  {
                    "id": "U_007D",
                    "text": "}"
                  }
                ]
              },
              {
                "id": "U_17D9",
                "text": "\u17D9",
                "sk": [
                  {
                    "id": "U_17DA",
                    "text": "\u17DA"
                  },
                  {
                    "id": "U_17DC",
                    "text": "\u17DC"
                  },
                  {
                    "id": "U_00A7",
                    "text": "\u00A7"
                  },
                  {
                    "id": "U_00D8",
                    "text": "\u00D8"
                  }
                ]
              },
              {
                "id": "U_17D7",
                "text": "\u17D7"
              },
              {
                "id": "U_003C",
                "text": "<",
                "sk": [
                  {
                    "id": "U_2264",
                    "text": "\u2264"
                  },
                  {
                    "id": "U_003E",
                    "text": ">"
                  },
                  {
                    "id": "U_2265",
                    "text": "\u2265"
                  }
                ]
              },
              {
                "id": "U_17D6",
                "text": "\u17D6",
                "sk": [
                  {
                    "id": "U_003A",
                    "text": ":"
                  },
                  {
                    "id": "U_003B",
                    "text": ";"
                  },
                  {
                    "id": "U_2026",
                    "text": "\u2026"
                  }
                ]
              },
              {
                "width": "155",
                "id": "K_BKSP",
                "sp": "1",
                "text": "*BkSp*"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "nextlayer": "default",
                "width": "150",
                "id": "K_LCONTROL",
                "sp": "1",
                "text": "\u1780\u1781\u1782"
              },
              {
                "width": "100",
                "id": "K_LOPT",
                "sp": "1",
                "text": "*Menu*"
              },
              {
                "layer": "shift",
                "width": "520",
                "id": "K_SPACE",
                "text": "\u200B"
              },
              {
                "id": "K_PERIOD",
                "text": "\u17D4",
                "sk": [
                  {
                    "layer": "shift",
                    "id": "K_PERIOD",
                    "text": "\u17D5"
                  },
                  {
                    "id": "U_0021",
                    "text": "!"
                  },
                  {
                    "id": "U_003F",
                    "text": "?"
                  }
                ]
              },
              {
                "width": "155",
                "id": "K_ENTER",
                "sp": "1",
                "text": "*Enter*"
              }
            ]
          }
        ]
      },
      {
        "id": "lunar_date",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "U_17F1",
                "text": "\u17F1"
              },
              {
                "id": "U_17F2",
                "text": "\u17F2"
              },
              {
                "id": "U_17F3",
                "text": "\u17F3"
              },
              {
                "id": "U_17F4",
                "text": "\u17F4"
              },
              {
                "id": "U_17F5",
                "text": "\u17F5"
              },
              {
                "id": "U_17F6",
                "text": "\u17F6"
              },
              {
                "id": "U_17F7",
                "text": "\u17F7"
              },
              {
                "id": "U_17F8",
                "text": "\u17F8"
              },
              {
                "id": "U_17F9",
                "text": "\u17F9"
              },
              {
                "id": "U_17F0",
                "text": "\u17F0"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "U_19E0",
                "text": "\u19E0",
                "sk": [
                  {
                    "id": "U_19F0",
                    "text": "\u19F0"
                  }
                ]
              },
              {
                "id": "U_19E1",
                "text": "\u19E1",
                "sk": [
                  {
                    "id": "U_19F1",
                    "text": "\u19F1"
                  }
                ]
              },
              {
                "id": "U_19E2",
                "text": "\u19E2",
                "sk": [
                  {
                    "id": "U_19F2",
                    "text": "\u19F2"
                  }
                ]
              },
              {
                "id": "U_19E3",
                "text": "\u19E3",
                "sk": [
                  {
                    "id": "U_19F3",
                    "text": "\u19F3"
                  }
                ]
              },
              {
                "id": "U_19E4",
                "text": "\u19E4",
                "sk": [
                  {
                    "id": "U_19F4",
                    "text": "\u19F4"
                  }
                ]
              },
              {
                "id": "U_19E5",
                "text": "\u19E5",
                "sk": [
                  {
                    "id": "U_19F5",
                    "text": "\u19F5"
                  }
                ]
              },
              {
                "id": "U_19E6",
                "text": "\u19E6",
                "sk": [
                  {
                    "id": "U_19F6",
                    "text": "\u19F6"
                  }
                ]
              },
              {
                "id": "U_19E7",
                "text": "\u19E7",
                "sk": [
                  {
                    "id": "U_19F7",
                    "text": "\u19F7"
                  }
                ]
              },
              {
                "id": "U_19E8",
                "text": "\u19E8",
                "sk": [
                  {
                    "id": "U_19F8",
                    "text": "\u19F8"
                  }
                ]
              },
              {
                "id": "U_19E9",
                "text": "\u19E9",
                "sk": [
                  {
                    "id": "U_19F9",
                    "text": "\u19F9"
                  }
                ]
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "nextlayer": "numeric",
                "width": "150",
                "id": "K_NUMLOCK",
                "sp": "1",
                "text": "\u17E1\u17E2\u17E3"
              },
              {
                "id": "U_19EA",
                "text": "\u19EA",
                "sk": [
                  {
                    "id": "U_19FA",
                    "text": "\u19FA"
                  }
                ]
              },
              {
                "id": "U_19EB",
                "text": "\u19EB",
                "sk": [
                  {
                    "id": "U_19FB",
                    "text": "\u19FB"
                  }
                ]
              },
              {
                "id": "U_19EC",
                "text": "\u19EC",
                "sk": [
                  {
                    "id": "U_19FC",
                    "text": "\u19FC"
                  }
                ]
              },
              {
                "id": "U_19ED",
                "text": "\u19ED",
                "sk": [
                  {
                    "id": "U_19FD",
                    "text": "\u19FD"
                  }
                ]
              },
              {
                "id": "U_19EE",
                "text": "\u19EE",
                "sk": [
                  {
                    "id": "U_19FE",
                    "text": "\u19FE"
                  }
                ]
              },
              {
                "id": "U_19EF",
                "text": "\u19EF",
                "sk": [
                  {
                    "id": "U_19FF",
                    "text": "\u19FF"
                  }
                ]
              },
              {
                "id": "U_17D9",
                "text": "\u17D9",
                "sk": [
                  {
                    "id": "U_17DA",
                    "text": "\u17DA"
                  }
                ]
              },
              {
                "width": "155",
                "id": "K_BKSP",
                "sp": "1",
                "text": "*BkSp*"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "nextlayer": "default",
                "width": "150",
                "id": "K_LCONTROL",
                "sp": "1",
                "text": "\u1780\u1781\u1782"
              },
              {
                "width": "100",
                "id": "K_LOPT",
                "sp": "1",
                "text": "*Menu*"
              },
              {
                "layer": "shift",
                "width": "520",
                "id": "K_SPACE",
                "text": "\u200B"
              },
              {
                "id": "K_PERIOD",
                "text": "\u17D4",
                "sk": [
                  {
                    "layer": "shift",
                    "id": "K_PERIOD",
                    "text": "\u17D5"
                  },
                  {
                    "id": "U_0021",
                    "text": "!"
                  },
                  {
                    "id": "U_003F",
                    "text": "?"
                  }
                ]
              },
              {
                "width": "155",
                "id": "K_ENTER",
                "sp": "1",
                "text": "*Enter*"
              }
            ]
          }
        ]
      }
    ]
  }
}
;
  this.s_c_key=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  this.s_c_out="កខគឃងចឆជឈញដឋឌឍណតថទធនបផពភមយរលវសហឡអឝឞ";
  this.s_v_gen_key=['','','','','','','','','','','','','','','',''];
  this.s_v_gen="ាិីឹឺុូួើឿៀេែៃោៅ";
  this.s_v_pseudo_key=['','',''];
  this.s_v_pseudo="ំះៈ";
  this.s_v_key=['','','','','','','','','','','','','','','','','','',''];
  this.s_v_out="ាិីឹឺុូួើឿៀេែៃោៅំះៈ";
  this.s_v_any="ាិីឹឺុូួើឿៀេែៃោៅំះៈ";
  this.s_v_combo_R="េោុិីឹែ";
  this.s_v_combo_N="ាុ";
  this.s_v_combo="េោុិីឹែាុ";
  this.s_ind_v_key=['','','','','','','','','','','','','','',''];
  this.s_ind_v_out="ឥឦឧឨឩឪឫឬឭឮឯឰឱឲឳ";
  this.s_diacritic_key=['','','','','','','','','','',''];
  this.s_diacritic_out="់័៌៏៍ៈ៎៑៝ៜ្";
  this.s_c_shifter_key=['',''];
  this.s_c_shifter="៉៊";
  this.s_punct_key=['','','','','','','',''];
  this.s_punct_out="។៕៖ៗ៘៙៚៓";
  this.s_latin_punct_key=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  this.s_latin_punct_out="«»()!\"%=?{}\\@*,×./[]‍‌+-÷:≈‘’;<>#&";
  this.s_spaces_key=['','',''];
  this.s_spaces_out="​  ";
  this.s_currency_key=['','',''];
  this.s_currency_out="៛$€";
  this.s_digit_key=['','','','','','','','','',''];
  this.s_digit_out="០១២៣៤៥៦៧៨៩";
  this.s_lek_attak_key=['','','','','','','','','',''];
  this.s_lek_attak_out="៰៱៲៳៴៵៶៷៸៹";
  this.s_lunar_date_key=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  this.s_lunar_date_out="᧬᧻᧹᧮᧢᧯᧰᧱᧧᧲᧳᧴᧽᧼᧨᧩᧠᧣᧭᧤᧦᧺᧡᧸᧥᧷᧵᧾᧿᧪᧫᧶";
  this.s_input_subcons=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  this.s_subcons="កខគឃងចឆជឈញដឋឌឍណតថទធនបផពភមយរលវឝឞសហឡអ";
  this.s_arabic_digit_key=['','','','','','','','','',''];
  this.s_arabic_digit_out="0123456789";
  this.s_v_above="ិីឹឺើ";
  this.s_shiftable_c_1st="សហអ";
  this.s_shiftable_c_2nd="ងញមយរវ";
  this.s_c_2nd_combo_LO="យមងបវ";
  this.s_c_2nd_combo_MO="យលងរ";
  this.s_c_1st_combo_LO="បហអ";
  this.s_c_1st_combo_MO="ហសអ";
  this.s_c_combo_SA="បយលមនញងរវអ";
  this.s_c_combo_QA="ឆឈបផតទ";
  this.s_c_combo_HA="វឣ";
  this.s61="touch";
  this.KVER="13.0.112.0";
  this.gs=function(t,e) {
    return this.g_main(t,e);
  };
  this.g_main=function(t,e) {
    var k=KeymanWeb,r=0,m=0;
    if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_BKSP /* 0x08 */)) {
      if(k.KFCM(2,t,['្',{t:'a',a:this.s_c_out}])&&k.KIFS(31,this.s61,t)){
        r=m=1;   // Line 264
        k.KDC(2,t);
      }
      else if(k.KFCM(2,t,[{t:'a',a:this.s_v_combo_N},'ំ'])){
        r=m=1;   // Line 227
        k.KDC(2,t);
      }
      else if(k.KFCM(2,t,[{t:'a',a:this.s_v_combo_R},'ះ'])){
        r=m=1;   // Line 228
        k.KDC(2,t);
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_K /* 0x4B */)) {
      if(1){
        r=m=1;   // Line 186
        k.KDC(0,t);
        k.KO(-1,t,"ឝ");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_B /* 0x42 */)) {
      if(1){
        r=m=1;   // Line 186
        k.KDC(0,t);
        k.KO(-1,t,"ឞ");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_QUOTE /* 0xDE */)) {
      if(1){
        r=m=1;   // Line 187
        k.KDC(0,t);
        k.KO(-1,t,"ៈ");
      }
      else if(1){
        r=m=1;   // Line 189
        k.KDC(0,t);
        k.KO(-1,t,"ៈ");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_RBRKT /* 0xDD */)) {
      if(1){
        r=m=1;   // Line 188
        k.KDC(0,t);
        k.KO(-1,t,"ឳ");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_P /* 0x50 */)) {
      if(1){
        r=m=1;   // Line 188
        k.KDC(0,t);
        k.KO(-1,t,"ឰ");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_I /* 0x49 */)) {
      if(1){
        r=m=1;   // Line 188
        k.KDC(0,t);
        k.KO(-1,t,"ឦ");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_T /* 0x54 */)) {
      if(1){
        r=m=1;   // Line 188
        k.KDC(0,t);
        k.KO(-1,t,"ឨ");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_O /* 0x4F */)) {
      if(1){
        r=m=1;   // Line 188
        k.KDC(0,t);
        k.KO(-1,t,"ឱ");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_LBRKT /* 0xDB */)) {
      if(1){
        r=m=1;   // Line 188
        k.KDC(0,t);
        k.KO(-1,t,"ឩ");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_R /* 0x52 */)) {
      if(1){
        r=m=1;   // Line 188
        k.KDC(0,t);
        k.KO(-1,t,"ឫ");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_E /* 0x45 */)) {
      if(1){
        r=m=1;   // Line 188
        k.KDC(0,t);
        k.KO(-1,t,"ឯ");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_W /* 0x57 */)) {
      if(1){
        r=m=1;   // Line 189
        k.KDC(0,t);
        k.KO(-1,t,"៝");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_3 /* 0x33 */)) {
      if(1){
        r=m=1;   // Line 189
        k.KDC(0,t);
        k.KO(-1,t,"៑");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_EQUAL /* 0xBB */)) {
      if(1){
        r=m=1;   // Line 189
        k.KDC(0,t);
        k.KO(-1,t,"៎");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_Q /* 0x51 */)) {
      if(1){
        r=m=1;   // Line 189
        k.KDC(0,t);
        k.KO(-1,t,"ៜ");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_COLON /* 0xBA */)) {
      if(1){
        r=m=1;   // Line 191
        k.KDC(0,t);
        k.KO(-1,t,"៖");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_M /* 0x4D */)) {
      if(1){
        r=m=1;   // Line 191
        k.KDC(0,t);
        k.KO(-1,t,"៓");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_L /* 0x4C */)) {
      if(1){
        r=m=1;   // Line 191
        k.KDC(0,t);
        k.KO(-1,t,"៘");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_6 /* 0x36 */)) {
      if(1){
        r=m=1;   // Line 191
        k.KDC(0,t);
        k.KO(-1,t,"៙");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_7 /* 0x37 */)) {
      if(1){
        r=m=1;   // Line 191
        k.KDC(0,t);
        k.KO(-1,t,"៚");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_BKQUOTE /* 0xC0 */)) {
      if(1){
        r=m=1;   // Line 192
        k.KDC(0,t);
        k.KO(-1,t,"‍");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_1 /* 0x31 */)) {
      if(1){
        r=m=1;   // Line 192
        k.KDC(0,t);
        k.KO(-1,t,"‌");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_U /* 0x55 */)) {
      if(1){
        r=m=1;   // Line 192
        k.KDC(0,t);
        k.KO(-1,t,"]");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_Y /* 0x59 */)) {
      if(1){
        r=m=1;   // Line 192
        k.KDC(0,t);
        k.KO(-1,t,"[");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_SLASH /* 0xBF */)) {
      if(1){
        r=m=1;   // Line 192
        k.KDC(0,t);
        k.KO(-1,t,"/");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_A /* 0x41 */)) {
      if(1){
        r=m=1;   // Line 192
        k.KDC(0,t);
        k.KO(-1,t,"+");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_S /* 0x53 */)) {
      if(1){
        r=m=1;   // Line 192
        k.KDC(0,t);
        k.KO(-1,t,"-");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_F /* 0x46 */)) {
      if(1){
        r=m=1;   // Line 192
        k.KDC(0,t);
        k.KO(-1,t,"÷");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_PERIOD /* 0xBE */)) {
      if(1){
        r=m=1;   // Line 192
        k.KDC(0,t);
        k.KO(-1,t,".");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_BKSLASH /* 0xDC */)) {
      if(1){
        r=m=1;   // Line 192
        k.KDC(0,t);
        k.KO(-1,t,"\\");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_0 /* 0x30 */)) {
      if(1){
        r=m=1;   // Line 192
        k.KDC(0,t);
        k.KO(-1,t,"}");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_G /* 0x47 */)) {
      if(1){
        r=m=1;   // Line 192
        k.KDC(0,t);
        k.KO(-1,t,":");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_D /* 0x44 */)) {
      if(1){
        r=m=1;   // Line 192
        k.KDC(0,t);
        k.KO(-1,t,"×");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_COMMA /* 0xBC */)) {
      if(1){
        r=m=1;   // Line 192
        k.KDC(0,t);
        k.KO(-1,t,",");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_HYPHEN /* 0xBD */)) {
      if(1){
        r=m=1;   // Line 192
        k.KDC(0,t);
        k.KO(-1,t,"≈");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_8 /* 0x38 */)) {
      if(1){
        r=m=1;   // Line 192
        k.KDC(0,t);
        k.KO(-1,t,"*");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_H /* 0x48 */)) {
      if(1){
        r=m=1;   // Line 192
        k.KDC(0,t);
        k.KO(-1,t,"‘");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_2 /* 0x32 */)) {
      if(1){
        r=m=1;   // Line 192
        k.KDC(0,t);
        k.KO(-1,t,"@");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_J /* 0x4A */)) {
      if(1){
        r=m=1;   // Line 192
        k.KDC(0,t);
        k.KO(-1,t,"’");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_N /* 0x4E */)) {
      if(1){
        r=m=1;   // Line 192
        k.KDC(0,t);
        k.KO(-1,t,";");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_Z /* 0x5A */)) {
      if(1){
        r=m=1;   // Line 192
        k.KDC(0,t);
        k.KO(-1,t,"<");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_X /* 0x58 */)) {
      if(1){
        r=m=1;   // Line 192
        k.KDC(0,t);
        k.KO(-1,t,">");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_9 /* 0x39 */)) {
      if(1){
        r=m=1;   // Line 192
        k.KDC(0,t);
        k.KO(-1,t,"{");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_V /* 0x56 */)) {
      if(1){
        r=m=1;   // Line 192
        k.KDC(0,t);
        k.KO(-1,t,"&");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_C /* 0x43 */)) {
      if(1){
        r=m=1;   // Line 192
        k.KDC(0,t);
        k.KO(-1,t,"#");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_5 /* 0x35 */)) {
      if(1){
        r=m=1;   // Line 193
        k.KDC(0,t);
        k.KO(-1,t,"€");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_4 /* 0x34 */)) {
      if(1){
        r=m=1;   // Line 193
        k.KDC(0,t);
        k.KO(-1,t,"$");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_4 /* 0x34 */)) {
      if(1){
        r=m=1;   // Line 195
        k.KDC(0,t);
        k.KO(-1,t,"៴");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_8 /* 0x38 */)) {
      if(1){
        r=m=1;   // Line 195
        k.KDC(0,t);
        k.KO(-1,t,"៸");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_0 /* 0x30 */)) {
      if(1){
        r=m=1;   // Line 195
        k.KDC(0,t);
        k.KO(-1,t,"៰");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_1 /* 0x31 */)) {
      if(1){
        r=m=1;   // Line 195
        k.KDC(0,t);
        k.KO(-1,t,"៱");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_2 /* 0x32 */)) {
      if(1){
        r=m=1;   // Line 195
        k.KDC(0,t);
        k.KO(-1,t,"៲");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_3 /* 0x33 */)) {
      if(1){
        r=m=1;   // Line 195
        k.KDC(0,t);
        k.KO(-1,t,"៳");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_9 /* 0x39 */)) {
      if(1){
        r=m=1;   // Line 195
        k.KDC(0,t);
        k.KO(-1,t,"៹");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_5 /* 0x35 */)) {
      if(1){
        r=m=1;   // Line 195
        k.KDC(0,t);
        k.KO(-1,t,"៵");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_6 /* 0x36 */)) {
      if(1){
        r=m=1;   // Line 195
        k.KDC(0,t);
        k.KO(-1,t,"៶");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_7 /* 0x37 */)) {
      if(1){
        r=m=1;   // Line 195
        k.KDC(0,t);
        k.KO(-1,t,"៷");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_RBRKT /* 0xDD */)) {
      if(1){
        r=m=1;   // Line 196
        k.KDC(0,t);
        k.KO(-1,t,"᧫");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_LBRKT /* 0xDB */)) {
      if(1){
        r=m=1;   // Line 196
        k.KDC(0,t);
        k.KO(-1,t,"᧪");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_A /* 0x41 */)) {
      if(1){
        r=m=1;   // Line 196
        k.KDC(0,t);
        k.KO(-1,t,"᧬");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_B /* 0x42 */)) {
      if(1){
        r=m=1;   // Line 196
        k.KDC(0,t);
        k.KO(-1,t,"᧻");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_C /* 0x43 */)) {
      if(1){
        r=m=1;   // Line 196
        k.KDC(0,t);
        k.KO(-1,t,"᧹");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_D /* 0x44 */)) {
      if(1){
        r=m=1;   // Line 196
        k.KDC(0,t);
        k.KO(-1,t,"᧮");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_E /* 0x45 */)) {
      if(1){
        r=m=1;   // Line 196
        k.KDC(0,t);
        k.KO(-1,t,"᧢");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_F /* 0x46 */)) {
      if(1){
        r=m=1;   // Line 196
        k.KDC(0,t);
        k.KO(-1,t,"᧯");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_G /* 0x47 */)) {
      if(1){
        r=m=1;   // Line 196
        k.KDC(0,t);
        k.KO(-1,t,"᧰");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_H /* 0x48 */)) {
      if(1){
        r=m=1;   // Line 196
        k.KDC(0,t);
        k.KO(-1,t,"᧱");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_QUOTE /* 0xDE */)) {
      if(1){
        r=m=1;   // Line 196
        k.KDC(0,t);
        k.KO(-1,t,"᧶");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_J /* 0x4A */)) {
      if(1){
        r=m=1;   // Line 196
        k.KDC(0,t);
        k.KO(-1,t,"᧲");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_K /* 0x4B */)) {
      if(1){
        r=m=1;   // Line 196
        k.KDC(0,t);
        k.KO(-1,t,"᧳");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_L /* 0x4C */)) {
      if(1){
        r=m=1;   // Line 196
        k.KDC(0,t);
        k.KO(-1,t,"᧴");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_M /* 0x4D */)) {
      if(1){
        r=m=1;   // Line 196
        k.KDC(0,t);
        k.KO(-1,t,"᧽");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_N /* 0x4E */)) {
      if(1){
        r=m=1;   // Line 196
        k.KDC(0,t);
        k.KO(-1,t,"᧼");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_O /* 0x4F */)) {
      if(1){
        r=m=1;   // Line 196
        k.KDC(0,t);
        k.KO(-1,t,"᧨");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_P /* 0x50 */)) {
      if(1){
        r=m=1;   // Line 196
        k.KDC(0,t);
        k.KO(-1,t,"᧩");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_Q /* 0x51 */)) {
      if(1){
        r=m=1;   // Line 196
        k.KDC(0,t);
        k.KO(-1,t,"᧠");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_R /* 0x52 */)) {
      if(1){
        r=m=1;   // Line 196
        k.KDC(0,t);
        k.KO(-1,t,"᧣");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_S /* 0x53 */)) {
      if(1){
        r=m=1;   // Line 196
        k.KDC(0,t);
        k.KO(-1,t,"᧭");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_T /* 0x54 */)) {
      if(1){
        r=m=1;   // Line 196
        k.KDC(0,t);
        k.KO(-1,t,"᧤");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_U /* 0x55 */)) {
      if(1){
        r=m=1;   // Line 196
        k.KDC(0,t);
        k.KO(-1,t,"᧦");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_V /* 0x56 */)) {
      if(1){
        r=m=1;   // Line 196
        k.KDC(0,t);
        k.KO(-1,t,"᧺");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_W /* 0x57 */)) {
      if(1){
        r=m=1;   // Line 196
        k.KDC(0,t);
        k.KO(-1,t,"᧡");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_X /* 0x58 */)) {
      if(1){
        r=m=1;   // Line 196
        k.KDC(0,t);
        k.KO(-1,t,"᧸");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_Y /* 0x59 */)) {
      if(1){
        r=m=1;   // Line 196
        k.KDC(0,t);
        k.KO(-1,t,"᧥");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_PERIOD /* 0xBE */)) {
      if(1){
        r=m=1;   // Line 196
        k.KDC(0,t);
        k.KO(-1,t,"᧿");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_Z /* 0x5A */)) {
      if(1){
        r=m=1;   // Line 196
        k.KDC(0,t);
        k.KO(-1,t,"᧷");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_COLON /* 0xBA */)) {
      if(1){
        r=m=1;   // Line 196
        k.KDC(0,t);
        k.KO(-1,t,"᧵");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_COMMA /* 0xBC */)) {
      if(1){
        r=m=1;   // Line 196
        k.KDC(0,t);
        k.KO(-1,t,"᧾");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4018 */, keyCodes.K_I /* 0x49 */)) {
      if(1){
        r=m=1;   // Line 196
        k.KDC(0,t);
        k.KO(-1,t,"᧧");
      }
    }
    else if(k.KKM(e, modCodes.RALT | modCodes.VIRTUAL_KEY /* 0x4008 */, keyCodes.K_SPACE /* 0x20 */)) {
      if(1){
        r=m=1;   // Line 197
        k.KDC(0,t);
        k.KO(-1,t," ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x105)) {
      if(1){
        r=m=1;   // Line 260
        k.KDC(0,t);
        k.KO(-1,t,"្ច");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x104)) {
      if(1){
        r=m=1;   // Line 260
        k.KDC(0,t);
        k.KO(-1,t,"្ង");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x108)) {
      if(1){
        r=m=1;   // Line 260
        k.KDC(0,t);
        k.KO(-1,t,"្ឈ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x109)) {
      if(1){
        r=m=1;   // Line 260
        k.KDC(0,t);
        k.KO(-1,t,"្ញ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x106)) {
      if(1){
        r=m=1;   // Line 260
        k.KDC(0,t);
        k.KO(-1,t,"្ឆ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x103)) {
      if(1){
        r=m=1;   // Line 260
        k.KDC(0,t);
        k.KO(-1,t,"្ឃ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x10A)) {
      if(1){
        r=m=1;   // Line 260
        k.KDC(0,t);
        k.KO(-1,t,"្ដ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x10B)) {
      if(1){
        r=m=1;   // Line 260
        k.KDC(0,t);
        k.KO(-1,t,"្ឋ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x10C)) {
      if(1){
        r=m=1;   // Line 260
        k.KDC(0,t);
        k.KO(-1,t,"្ឌ");
      }
    }
      if(m) {}
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x122)) {
      if(1){
        r=m=1;   // Line 260
        k.KDC(0,t);
        k.KO(-1,t,"្អ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x121)) {
      if(1){
        r=m=1;   // Line 260
        k.KDC(0,t);
        k.KO(-1,t,"្ឡ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x120)) {
      if(1){
        r=m=1;   // Line 260
        k.KDC(0,t);
        k.KO(-1,t,"្ហ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x11F)) {
      if(1){
        r=m=1;   // Line 260
        k.KDC(0,t);
        k.KO(-1,t,"្ស");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x11E)) {
      if(1){
        r=m=1;   // Line 260
        k.KDC(0,t);
        k.KO(-1,t,"្ឞ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x11D)) {
      if(1){
        r=m=1;   // Line 260
        k.KDC(0,t);
        k.KO(-1,t,"្ឝ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x11C)) {
      if(1){
        r=m=1;   // Line 260
        k.KDC(0,t);
        k.KO(-1,t,"្វ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x11B)) {
      if(1){
        r=m=1;   // Line 260
        k.KDC(0,t);
        k.KO(-1,t,"្ល");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x11A)) {
      if(1){
        r=m=1;   // Line 260
        k.KDC(0,t);
        k.KO(-1,t,"្រ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x119)) {
      if(1){
        r=m=1;   // Line 260
        k.KDC(0,t);
        k.KO(-1,t,"្យ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x118)) {
      if(1){
        r=m=1;   // Line 260
        k.KDC(0,t);
        k.KO(-1,t,"្ម");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x117)) {
      if(1){
        r=m=1;   // Line 260
        k.KDC(0,t);
        k.KO(-1,t,"្ភ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x116)) {
      if(1){
        r=m=1;   // Line 260
        k.KDC(0,t);
        k.KO(-1,t,"្ព");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x115)) {
      if(1){
        r=m=1;   // Line 260
        k.KDC(0,t);
        k.KO(-1,t,"្ផ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x114)) {
      if(1){
        r=m=1;   // Line 260
        k.KDC(0,t);
        k.KO(-1,t,"្ប");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x113)) {
      if(1){
        r=m=1;   // Line 260
        k.KDC(0,t);
        k.KO(-1,t,"្ន");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x112)) {
      if(1){
        r=m=1;   // Line 260
        k.KDC(0,t);
        k.KO(-1,t,"្ធ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x111)) {
      if(1){
        r=m=1;   // Line 260
        k.KDC(0,t);
        k.KO(-1,t,"្ទ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x110)) {
      if(1){
        r=m=1;   // Line 260
        k.KDC(0,t);
        k.KO(-1,t,"្ថ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x10F)) {
      if(1){
        r=m=1;   // Line 260
        k.KDC(0,t);
        k.KO(-1,t,"្ត");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x100)) {
      if(1){
        r=m=1;   // Line 260
        k.KDC(0,t);
        k.KO(-1,t,"្ក");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x10E)) {
      if(1){
        r=m=1;   // Line 260
        k.KDC(0,t);
        k.KO(-1,t,"្ណ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x101)) {
      if(1){
        r=m=1;   // Line 260
        k.KDC(0,t);
        k.KO(-1,t,"្ខ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x102)) {
      if(1){
        r=m=1;   // Line 260
        k.KDC(0,t);
        k.KO(-1,t,"្គ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x10D)) {
      if(1){
        r=m=1;   // Line 260
        k.KDC(0,t);
        k.KO(-1,t,"្ឍ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x107)) {
      if(1){
        r=m=1;   // Line 260
        k.KDC(0,t);
        k.KO(-1,t,"្ជ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_NPSTAR /* 0x6A */)) {
      if(1){
        r=m=1;   // Line 266
        k.KDC(0,t);
        k.KO(-1,t,"*");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_NPSTAR /* 0x6A */)) {
      if(1){
        r=m=1;   // Line 267
        k.KDC(0,t);
        k.KO(-1,t,"*");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_NPPLUS /* 0x6B */)) {
      if(1){
        r=m=1;   // Line 268
        k.KDC(0,t);
        k.KO(-1,t,"+");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_NPPLUS /* 0x6B */)) {
      if(1){
        r=m=1;   // Line 269
        k.KDC(0,t);
        k.KO(-1,t,"+");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_NPMINUS /* 0x6D */)) {
      if(1){
        r=m=1;   // Line 270
        k.KDC(0,t);
        k.KO(-1,t,"-");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_NPMINUS /* 0x6D */)) {
      if(1){
        r=m=1;   // Line 271
        k.KDC(0,t);
        k.KO(-1,t,"-");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_NPDOT /* 0x6E */)) {
      if(1){
        r=m=1;   // Line 272
        k.KDC(0,t);
        k.KO(-1,t,".");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_NPDOT /* 0x6E */)) {
      if(1){
        r=m=1;   // Line 273
        k.KDC(0,t);
        k.KO(-1,t,".");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_NPSLASH /* 0x6F */)) {
      if(1){
        r=m=1;   // Line 274
        k.KDC(0,t);
        k.KO(-1,t,"/");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_NPSLASH /* 0x6F */)) {
      if(1){
        r=m=1;   // Line 275
        k.KDC(0,t);
        k.KO(-1,t,"/");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_SPACE /* 0x20 */)) {
      if(k.KFCM(1,t,['​'])){
        r=m=1;   // Line 223
        k.KDC(1,t);
        k.KO(-1,t," ");
      }
      else if(1){
        r=m=1;   // Line 197
        k.KDC(0,t);
        k.KO(-1,t,"​");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_SPACE /* 0x20 */)) {
      if(1){
        r=m=1;   // Line 197
        k.KDC(0,t);
        k.KO(-1,t," ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_1 /* 0x31 */)) {
      if(1){
        r=m=1;   // Line 192
        k.KDC(0,t);
        k.KO(-1,t,"!");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_QUOTE /* 0xDE */)) {
      if(k.KFCM(3,t,[{t:'a',a:this.s_c_combo_QA},'្','អ'])){
        r=m=1;   // Line 242
        k.KDC(3,t);
        k.KIO(-1,this.s_c_combo_QA,1,t);
        k.KO(-1,t,"្អ៉");
        k.KB(t);
      }
      else if(k.KFCM(3,t,['ល','្',{t:'a',a:this.s_c_1st_combo_LO}])){
        r=m=1;   // Line 243
        k.KDC(3,t);
        k.KO(-1,t,"ល្");
        k.KIO(-1,this.s_c_1st_combo_LO,3,t);
        k.KO(-1,t,"៉");
        k.KB(t);
      }
      else if(k.KFCM(3,t,['ម','្',{t:'a',a:this.s_c_1st_combo_MO}])){
        r=m=1;   // Line 244
        k.KDC(3,t);
        k.KO(-1,t,"ម្");
        k.KIO(-1,this.s_c_1st_combo_MO,3,t);
        k.KO(-1,t,"៉");
        k.KB(t);
      }
      else if(k.KFCM(3,t,['ស','្',{t:'a',a:this.s_c_combo_SA}])){
        r=m=1;   // Line 245
        k.KDC(3,t);
        k.KO(-1,t,"ស្");
        k.KIO(-1,this.s_c_combo_SA,3,t);
        k.KO(-1,t,"៉");
        k.KB(t);
      }
      else if(k.KFCM(3,t,[{t:'a',a:this.s_c_combo_HA},'្','ហ'])){
        r=m=1;   // Line 246
        k.KDC(3,t);
        k.KIO(-1,this.s_c_combo_HA,1,t);
        k.KO(-1,t,"្ហ៉");
        k.KB(t);
      }
      else if(k.KFCM(3,t,['អ','្','ង'])){
        r=m=1;   // Line 247
        k.KDC(3,t);
        k.KO(-1,t,"អ្ង៉");
        k.KB(t);
      }
      else if(k.KFCM(3,t,['អ','្','វ'])){
        r=m=1;   // Line 248
        k.KDC(3,t);
        k.KO(-1,t,"អ្វ៉");
        k.KB(t);
      }
      else if(k.KFCM(1,t,[{t:'a',a:this.s_c_shifter}])){
        r=m=1;   // Line 213
        k.KDC(1,t);
        k.KIO(-1,this.s_c_shifter,1,t);
        k.KB(t);
      }
      else if(k.KFCM(1,t,[{t:'a',a:this.s_shiftable_c_1st}])){
        r=m=1;   // Line 237
        k.KDC(1,t);
        k.KIO(-1,this.s_shiftable_c_1st,1,t);
        k.KO(-1,t,"៉");
        k.KB(t);
      }
      else if(1){
        r=m=1;   // Line 190
        k.KDC(0,t);
        k.KO(-1,t,"៉");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_3 /* 0x33 */)) {
      if(1){
        r=m=1;   // Line 192
        k.KDC(0,t);
        k.KO(-1,t,"\"");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_4 /* 0x34 */)) {
      if(1){
        r=m=1;   // Line 193
        k.KDC(0,t);
        k.KO(-1,t,"៛");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_5 /* 0x35 */)) {
      if(1){
        r=m=1;   // Line 192
        k.KDC(0,t);
        k.KO(-1,t,"%");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_7 /* 0x37 */)) {
      if(1){
        r=m=1;   // Line 189
        k.KDC(0,t);
        k.KO(-1,t,"័");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_QUOTE /* 0xDE */)) {
      if(k.KFCM(2,t,['្',{t:'a',a:this.s_c_out}])){
        r=m=1;   // Line 212
        k.KDC(2,t);
        k.KO(-1,t,"្");
        k.KIO(-1,this.s_c_out,2,t);
        k.KB(t);
      }
      else if(k.KFCM(1,t,[{t:'a',a:this.s_v_gen}])){
        r=m=1;   // Line 209
        k.KDC(1,t);
        k.KIO(-1,this.s_v_gen,1,t);
        k.KB(t);
      }
      else if(k.KFCM(1,t,[{t:'a',a:this.s_v_pseudo}])){
        r=m=1;   // Line 210
        k.KDC(1,t);
        k.KIO(-1,this.s_v_pseudo,1,t);
        k.KB(t);
      }
      else if(k.KFCM(1,t,[{t:'a',a:this.s_c_shifter}])){
        r=m=1;   // Line 211
        k.KDC(1,t);
        k.KIO(-1,this.s_c_shifter,1,t);
        k.KB(t);
      }
      else if(1){
        r=m=1;   // Line 189
        k.KDC(0,t);
        k.KO(-1,t,"់");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_9 /* 0x39 */)) {
      if(1){
        r=m=1;   // Line 192
        k.KDC(0,t);
        k.KO(-1,t,"(");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_0 /* 0x30 */)) {
      if(1){
        r=m=1;   // Line 192
        k.KDC(0,t);
        k.KO(-1,t,")");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_8 /* 0x38 */)) {
      if(1){
        r=m=1;   // Line 189
        k.KDC(0,t);
        k.KO(-1,t,"៏");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_EQUAL /* 0xBB */)) {
      if(1){
        r=m=1;   // Line 192
        k.KDC(0,t);
        k.KO(-1,t,"=");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_COMMA /* 0xBC */)) {
      if(1){
        r=m=1;   // Line 204
        k.KDC(0,t);
        k.KO(-1,t,"ុំ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_HYPHEN /* 0xBD */)) {
      if(1){
        r=m=1;   // Line 188
        k.KDC(0,t);
        k.KO(-1,t,"ឥ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_PERIOD /* 0xBE */)) {
      if(1){
        r=m=1;   // Line 191
        k.KDC(0,t);
        k.KO(-1,t,"។");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_SLASH /* 0xBF */)) {
      if(k.KFCM(3,t,['ល','្',{t:'a',a:this.s_c_2nd_combo_LO}])){
        r=m=1;   // Line 252
        k.KDC(3,t);
        k.KO(-1,t,"ល្");
        k.KIO(-1,this.s_c_2nd_combo_LO,3,t);
        k.KO(-1,t,"៊");
        k.KB(t);
      }
      else if(k.KFCM(3,t,['ម','្',{t:'a',a:this.s_c_2nd_combo_MO}])){
        r=m=1;   // Line 253
        k.KDC(3,t);
        k.KO(-1,t,"ម្");
        k.KIO(-1,this.s_c_2nd_combo_MO,3,t);
        k.KO(-1,t,"៊");
        k.KB(t);
      }
      else if(k.KFCM(1,t,[{t:'a',a:this.s_c_shifter}])){
        r=m=1;   // Line 213
        k.KDC(1,t);
        k.KIO(-1,this.s_c_shifter,1,t);
        k.KB(t);
      }
      else if(k.KFCM(1,t,[{t:'a',a:this.s_shiftable_c_2nd}])){
        r=m=1;   // Line 238
        k.KDC(1,t);
        k.KIO(-1,this.s_shiftable_c_2nd,1,t);
        k.KO(-1,t,"៊");
        k.KB(t);
      }
      else if(1){
        r=m=1;   // Line 190
        k.KDC(0,t);
        k.KO(-1,t,"៊");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_0 /* 0x30 */)) {
      if(1){
        r=m=1;   // Line 194
        k.KDC(0,t);
        k.KO(-1,t,"០");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_1 /* 0x31 */)) {
      if(1){
        r=m=1;   // Line 194
        k.KDC(0,t);
        k.KO(-1,t,"១");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_2 /* 0x32 */)) {
      if(1){
        r=m=1;   // Line 194
        k.KDC(0,t);
        k.KO(-1,t,"២");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_3 /* 0x33 */)) {
      if(1){
        r=m=1;   // Line 194
        k.KDC(0,t);
        k.KO(-1,t,"៣");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_4 /* 0x34 */)) {
      if(1){
        r=m=1;   // Line 194
        k.KDC(0,t);
        k.KO(-1,t,"៤");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_5 /* 0x35 */)) {
      if(1){
        r=m=1;   // Line 194
        k.KDC(0,t);
        k.KO(-1,t,"៥");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_6 /* 0x36 */)) {
      if(1){
        r=m=1;   // Line 194
        k.KDC(0,t);
        k.KO(-1,t,"៦");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_7 /* 0x37 */)) {
      if(1){
        r=m=1;   // Line 194
        k.KDC(0,t);
        k.KO(-1,t,"៧");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_8 /* 0x38 */)) {
      if(1){
        r=m=1;   // Line 194
        k.KDC(0,t);
        k.KO(-1,t,"៨");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_9 /* 0x39 */)) {
      if(1){
        r=m=1;   // Line 194
        k.KDC(0,t);
        k.KO(-1,t,"៩");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_COLON /* 0xBA */)) {
      if(1){
        r=m=1;   // Line 203
        k.KDC(0,t);
        k.KO(-1,t,"ោះ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_COLON /* 0xBA */)) {
      if(1){
        r=m=1;   // Line 187
        k.KDC(0,t);
        k.KO(-1,t,"ើ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_COMMA /* 0xBC */)) {
      if(1){
        r=m=1;   // Line 205
        k.KDC(0,t);
        k.KO(-1,t,"ុះ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_EQUAL /* 0xBB */)) {
      if(1){
        r=m=1;   // Line 188
        k.KDC(0,t);
        k.KO(-1,t,"ឲ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_PERIOD /* 0xBE */)) {
      if(1){
        r=m=1;   // Line 191
        k.KDC(0,t);
        k.KO(-1,t,"៕");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_SLASH /* 0xBF */)) {
      if(1){
        r=m=1;   // Line 192
        k.KDC(0,t);
        k.KO(-1,t,"?");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_2 /* 0x32 */)) {
      if(1){
        r=m=1;   // Line 191
        k.KDC(0,t);
        k.KO(-1,t,"ៗ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_A /* 0x41 */)) {
      if(1){
        r=m=1;   // Line 201
        k.KDC(0,t);
        k.KO(-1,t,"ាំ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_B /* 0x42 */)) {
      if(1){
        r=m=1;   // Line 186
        k.KDC(0,t);
        k.KO(-1,t,"ព");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_C /* 0x43 */)) {
      if(1){
        r=m=1;   // Line 186
        k.KDC(0,t);
        k.KO(-1,t,"ជ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_D /* 0x44 */)) {
      if(1){
        r=m=1;   // Line 186
        k.KDC(0,t);
        k.KO(-1,t,"ឌ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_E /* 0x45 */)) {
      if(1){
        r=m=1;   // Line 187
        k.KDC(0,t);
        k.KO(-1,t,"ែ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_F /* 0x46 */)) {
      if(1){
        r=m=1;   // Line 186
        k.KDC(0,t);
        k.KO(-1,t,"ធ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_G /* 0x47 */)) {
      if(1){
        r=m=1;   // Line 186
        k.KDC(0,t);
        k.KO(-1,t,"អ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_H /* 0x48 */)) {
      if(k.KFCM(1,t,['ះ'])){
        r=m=1;   // Line 217
        k.KDC(1,t);
        k.KO(-1,t,"ៈ");
      }
      else if(k.KFCM(1,t,['ៈ'])){
        r=m=1;   // Line 218
        k.KDC(1,t);
        k.KO(-1,t,"ះ");
      }
      else if(1){
        r=m=1;   // Line 187
        k.KDC(0,t);
        k.KO(-1,t,"ះ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_I /* 0x49 */)) {
      if(1){
        r=m=1;   // Line 187
        k.KDC(0,t);
        k.KO(-1,t,"ី");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_J /* 0x4A */)) {
      if(1){
        r=m=1;   // Line 186
        k.KDC(0,t);
        k.KO(-1,t,"ញ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_K /* 0x4B */)) {
      if(1){
        r=m=1;   // Line 186
        k.KDC(0,t);
        k.KO(-1,t,"គ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_L /* 0x4C */)) {
      if(1){
        r=m=1;   // Line 186
        k.KDC(0,t);
        k.KO(-1,t,"ឡ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_M /* 0x4D */)) {
      if(1){
        r=m=1;   // Line 187
        k.KDC(0,t);
        k.KO(-1,t,"ំ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_N /* 0x4E */)) {
      if(1){
        r=m=1;   // Line 186
        k.KDC(0,t);
        k.KO(-1,t,"ណ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_O /* 0x4F */)) {
      if(1){
        r=m=1;   // Line 187
        k.KDC(0,t);
        k.KO(-1,t,"ៅ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_P /* 0x50 */)) {
      if(1){
        r=m=1;   // Line 186
        k.KDC(0,t);
        k.KO(-1,t,"ភ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Q /* 0x51 */)) {
      if(1){
        r=m=1;   // Line 186
        k.KDC(0,t);
        k.KO(-1,t,"ឈ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_R /* 0x52 */)) {
      if(1){
        r=m=1;   // Line 188
        k.KDC(0,t);
        k.KO(-1,t,"ឬ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_S /* 0x53 */)) {
      if(1){
        r=m=1;   // Line 187
        k.KDC(0,t);
        k.KO(-1,t,"ៃ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_T /* 0x54 */)) {
      if(1){
        r=m=1;   // Line 186
        k.KDC(0,t);
        k.KO(-1,t,"ទ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_U /* 0x55 */)) {
      if(1){
        r=m=1;   // Line 187
        k.KDC(0,t);
        k.KO(-1,t,"ូ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_V /* 0x56 */)) {
      if(1){
        r=m=1;   // Line 202
        k.KDC(0,t);
        k.KO(-1,t,"េះ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_W /* 0x57 */)) {
      if(1){
        r=m=1;   // Line 187
        k.KDC(0,t);
        k.KO(-1,t,"ឺ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_X /* 0x58 */)) {
      if(1){
        r=m=1;   // Line 186
        k.KDC(0,t);
        k.KO(-1,t,"ឃ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Y /* 0x59 */)) {
      if(1){
        r=m=1;   // Line 187
        k.KDC(0,t);
        k.KO(-1,t,"ួ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Z /* 0x5A */)) {
      if(1){
        r=m=1;   // Line 186
        k.KDC(0,t);
        k.KO(-1,t,"ឍ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_LBRKT /* 0xDB */)) {
      if(1){
        r=m=1;   // Line 187
        k.KDC(0,t);
        k.KO(-1,t,"ៀ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_BKSLASH /* 0xDC */)) {
      if(1){
        r=m=1;   // Line 188
        k.KDC(0,t);
        k.KO(-1,t,"ឮ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_RBRKT /* 0xDD */)) {
      if(1){
        r=m=1;   // Line 188
        k.KDC(0,t);
        k.KO(-1,t,"ឪ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_6 /* 0x36 */)) {
      if(1){
        r=m=1;   // Line 189
        k.KDC(0,t);
        k.KO(-1,t,"៍");
      }
    }
      if(m) {}
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_HYPHEN /* 0xBD */)) {
      if(1){
        r=m=1;   // Line 189
        k.KDC(0,t);
        k.KO(-1,t,"៌");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_BKQUOTE /* 0xC0 */)) {
      if(1){
        r=m=1;   // Line 192
        k.KDC(0,t);
        k.KO(-1,t,"«");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_A /* 0x41 */)) {
      if(1){
        r=m=1;   // Line 187
        k.KDC(0,t);
        k.KO(-1,t,"ា");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_B /* 0x42 */)) {
      if(1){
        r=m=1;   // Line 186
        k.KDC(0,t);
        k.KO(-1,t,"ប");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_C /* 0x43 */)) {
      if(1){
        r=m=1;   // Line 186
        k.KDC(0,t);
        k.KO(-1,t,"ច");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_D /* 0x44 */)) {
      if(1){
        r=m=1;   // Line 186
        k.KDC(0,t);
        k.KO(-1,t,"ដ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_E /* 0x45 */)) {
      if(1){
        r=m=1;   // Line 187
        k.KDC(0,t);
        k.KO(-1,t,"េ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_F /* 0x46 */)) {
      if(1){
        r=m=1;   // Line 186
        k.KDC(0,t);
        k.KO(-1,t,"ថ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_G /* 0x47 */)) {
      if(1){
        r=m=1;   // Line 186
        k.KDC(0,t);
        k.KO(-1,t,"ង");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_H /* 0x48 */)) {
      if(1){
        r=m=1;   // Line 186
        k.KDC(0,t);
        k.KO(-1,t,"ហ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_I /* 0x49 */)) {
      if(1){
        r=m=1;   // Line 187
        k.KDC(0,t);
        k.KO(-1,t,"ិ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_J /* 0x4A */)) {
      if(1){
        r=m=1;   // Line 189
        k.KDC(0,t);
        k.KO(-1,t,"្");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_K /* 0x4B */)) {
      if(1){
        r=m=1;   // Line 186
        k.KDC(0,t);
        k.KO(-1,t,"ក");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_L /* 0x4C */)) {
      if(1){
        r=m=1;   // Line 186
        k.KDC(0,t);
        k.KO(-1,t,"ល");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_M /* 0x4D */)) {
      if(1){
        r=m=1;   // Line 186
        k.KDC(0,t);
        k.KO(-1,t,"ម");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_N /* 0x4E */)) {
      if(1){
        r=m=1;   // Line 186
        k.KDC(0,t);
        k.KO(-1,t,"ន");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_O /* 0x4F */)) {
      if(1){
        r=m=1;   // Line 187
        k.KDC(0,t);
        k.KO(-1,t,"ោ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_P /* 0x50 */)) {
      if(1){
        r=m=1;   // Line 186
        k.KDC(0,t);
        k.KO(-1,t,"ផ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Q /* 0x51 */)) {
      if(1){
        r=m=1;   // Line 186
        k.KDC(0,t);
        k.KO(-1,t,"ឆ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_R /* 0x52 */)) {
      if(1){
        r=m=1;   // Line 186
        k.KDC(0,t);
        k.KO(-1,t,"រ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_S /* 0x53 */)) {
      if(1){
        r=m=1;   // Line 186
        k.KDC(0,t);
        k.KO(-1,t,"ស");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_T /* 0x54 */)) {
      if(1){
        r=m=1;   // Line 186
        k.KDC(0,t);
        k.KO(-1,t,"ត");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_U /* 0x55 */)) {
      if(k.KFCM(3,t,[{t:'a',a:this.s_shiftable_c_1st},'ា','ំ'])){
        r=m=1;   // Line 232
        k.KDC(3,t);
        k.KIO(-1,this.s_shiftable_c_1st,1,t);
        k.KO(-1,t,"៊");
        k.KO(-1,t,"ា");
        k.KO(-1,t,"ំ");
      }
      else if(k.KFCM(3,t,[{t:'a',a:this.s_shiftable_c_2nd},'ា','ំ'])){
        r=m=1;   // Line 233
        k.KDC(3,t);
        k.KIO(-1,this.s_shiftable_c_2nd,1,t);
        k.KO(-1,t,"៉");
        k.KO(-1,t,"ា");
        k.KO(-1,t,"ំ");
      }
      else if(1){
        r=m=1;   // Line 187
        k.KDC(0,t);
        k.KO(-1,t,"ុ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_V /* 0x56 */)) {
      if(1){
        r=m=1;   // Line 186
        k.KDC(0,t);
        k.KO(-1,t,"វ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_W /* 0x57 */)) {
      if(1){
        r=m=1;   // Line 187
        k.KDC(0,t);
        k.KO(-1,t,"ឹ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_X /* 0x58 */)) {
      if(1){
        r=m=1;   // Line 186
        k.KDC(0,t);
        k.KO(-1,t,"ខ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Y /* 0x59 */)) {
      if(1){
        r=m=1;   // Line 186
        k.KDC(0,t);
        k.KO(-1,t,"យ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Z /* 0x5A */)) {
      if(1){
        r=m=1;   // Line 186
        k.KDC(0,t);
        k.KO(-1,t,"ឋ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_LBRKT /* 0xDB */)) {
      if(1){
        r=m=1;   // Line 187
        k.KDC(0,t);
        k.KO(-1,t,"ឿ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_BKSLASH /* 0xDC */)) {
      if(1){
        r=m=1;   // Line 188
        k.KDC(0,t);
        k.KO(-1,t,"ឭ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_RBRKT /* 0xDD */)) {
      if(1){
        r=m=1;   // Line 188
        k.KDC(0,t);
        k.KO(-1,t,"ឧ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_BKQUOTE /* 0xC0 */)) {
      if(1){
        r=m=1;   // Line 192
        k.KDC(0,t);
        k.KO(-1,t,"»");
      }
    }
    if(m) {
    
      k.KDC(-1,t);
      r=this.g_normalise(t,e);
    }
    return r;
  };
  this.g_normalise=function(t,e) {
    var k=KeymanWeb,r=1,m=0;
      if(k.KFCM(7,t,[{t:'a',a:this.s_c_combo_QA},'្','អ','ុ','ំ','ា','ំ'])){
        m=1;   // Line 373
        k.KDC(7,t);
        k.KIO(-1,this.s_c_combo_QA,1,t);
        k.KO(-1,t,"្");
        k.KO(-1,t,"អ៊");
        k.KO(-1,t,"ា");
        k.KO(-1,t,"ំ");
      }
      else if(k.KFCM(7,t,['ល','្',{t:'a',a:this.s_c_1st_combo_LO},'ុ','ំ','ា','ំ'])){
        m=1;   // Line 378
        k.KDC(7,t);
        k.KO(-1,t,"ល");
        k.KO(-1,t,"្");
        k.KIO(-1,this.s_c_1st_combo_LO,3,t);
        k.KO(-1,t,"៊");
        k.KO(-1,t,"ា");
        k.KO(-1,t,"ំ");
      }
      else if(k.KFCM(7,t,['ម','្',{t:'a',a:this.s_c_1st_combo_MO},'ុ','ំ','ា','ំ'])){
        m=1;   // Line 383
        k.KDC(7,t);
        k.KO(-1,t,"ម");
        k.KO(-1,t,"្");
        k.KIO(-1,this.s_c_1st_combo_MO,3,t);
        k.KO(-1,t,"៊");
        k.KO(-1,t,"ា");
        k.KO(-1,t,"ំ");
      }
      else if(k.KFCM(7,t,['ស','្',{t:'a',a:this.s_c_combo_SA},'ុ','ំ','ា','ំ'])){
        m=1;   // Line 388
        k.KDC(7,t);
        k.KO(-1,t,"ស");
        k.KO(-1,t,"្");
        k.KIO(-1,this.s_c_combo_SA,3,t);
        k.KO(-1,t,"៊");
        k.KO(-1,t,"ា");
        k.KO(-1,t,"ំ");
      }
      else if(k.KFCM(7,t,[{t:'a',a:this.s_c_combo_HA},'្','ហ','ុ','ំ','ា','ំ'])){
        m=1;   // Line 393
        k.KDC(7,t);
        k.KIO(-1,this.s_c_combo_HA,1,t);
        k.KO(-1,t,"្");
        k.KO(-1,t,"ហ៊");
        k.KO(-1,t,"ា");
        k.KO(-1,t,"ំ");
      }
      else if(k.KFCM(7,t,['អ','្','ង','ុ','ំ','ា','ំ'])){
        m=1;   // Line 398
        k.KDC(7,t);
        k.KO(-1,t,"អ");
        k.KO(-1,t,"្");
        k.KO(-1,t,"ង៊");
        k.KO(-1,t,"ា");
        k.KO(-1,t,"ំ");
      }
      else if(k.KFCM(7,t,['អ','្','វ','ុ','ំ','ា','ំ'])){
        m=1;   // Line 403
        k.KDC(7,t);
        k.KO(-1,t,"អ");
        k.KO(-1,t,"្");
        k.KO(-1,t,"វ៊");
        k.KO(-1,t,"ា");
        k.KO(-1,t,"ំ");
      }
      else if(k.KFCM(7,t,['ល','្',{t:'a',a:this.s_c_2nd_combo_LO},'ុ','ំ','ា','ំ'])){
        m=1;   // Line 410
        k.KDC(7,t);
        k.KO(-1,t,"ល");
        k.KO(-1,t,"្");
        k.KIO(-1,this.s_c_2nd_combo_LO,3,t);
        k.KO(-1,t,"៉");
        k.KO(-1,t,"ា");
        k.KO(-1,t,"ំ");
      }
      else if(k.KFCM(7,t,['ម','្',{t:'a',a:this.s_c_2nd_combo_MO},'ុ','ំ','ា','ំ'])){
        m=1;   // Line 415
        k.KDC(7,t);
        k.KO(-1,t,"ម");
        k.KO(-1,t,"្");
        k.KIO(-1,this.s_c_2nd_combo_MO,3,t);
        k.KO(-1,t,"៉");
        k.KO(-1,t,"ា");
        k.KO(-1,t,"ំ");
      }
      else if(k.KFCM(6,t,['្','ដ',{t:'a',a:this.s_v_combo_N},'ំ','្','រ'])){
        m=1;   // Line 344
        k.KDC(6,t);
        k.KO(-1,t,"្ត");
        k.KO(-1,t,"្");
        k.KO(-1,t,"រ");
        k.KIO(-1,this.s_v_combo_N,3,t);
        k.KO(-1,t,"ំ");
      }
      else if(k.KFCM(6,t,['្','ដ',{t:'a',a:this.s_v_combo_R},'ះ','្','រ'])){
        m=1;   // Line 345
        k.KDC(6,t);
        k.KO(-1,t,"្ត");
        k.KO(-1,t,"្");
        k.KO(-1,t,"រ");
        k.KIO(-1,this.s_v_combo_R,3,t);
        k.KO(-1,t,"ះ");
      }
      else if(k.KFCM(6,t,['្','រ',{t:'a',a:this.s_v_combo_N},'ំ','្','ដ'])){
        m=1;   // Line 348
        k.KDC(6,t);
        k.KO(-1,t,"្ត");
        k.KO(-1,t,"្");
        k.KO(-1,t,"រ");
        k.KIO(-1,this.s_v_combo_N,3,t);
        k.KO(-1,t,"ំ");
      }
      else if(k.KFCM(6,t,['្','រ',{t:'a',a:this.s_v_combo_R},'ះ','្','ដ'])){
        m=1;   // Line 349
        k.KDC(6,t);
        k.KO(-1,t,"្ត");
        k.KO(-1,t,"្");
        k.KO(-1,t,"រ");
        k.KIO(-1,this.s_v_combo_R,3,t);
        k.KO(-1,t,"ះ");
      }
      else if(k.KFCM(6,t,['្','រ',{t:'a',a:this.s_v_combo_N},'ំ','្',{t:'a',a:this.s_subcons}])){
        m=1;   // Line 354
        k.KDC(6,t);
        k.KO(-1,t,"្");
        k.KIO(-1,this.s_subcons,6,t);
        k.KO(-1,t,"្");
        k.KO(-1,t,"រ");
        k.KIO(-1,this.s_v_combo_N,3,t);
        k.KO(-1,t,"ំ");
      }
      else if(k.KFCM(6,t,['្','រ',{t:'a',a:this.s_v_combo_R},'ះ','្',{t:'a',a:this.s_subcons}])){
        m=1;   // Line 355
        k.KDC(6,t);
        k.KO(-1,t,"្");
        k.KIO(-1,this.s_subcons,6,t);
        k.KO(-1,t,"្");
        k.KO(-1,t,"រ");
        k.KIO(-1,this.s_v_combo_R,3,t);
        k.KO(-1,t,"ះ");
      }
      else if(k.KFCM(6,t,[{t:'a',a:this.s_c_combo_QA},'្','អ','ុ','ា','ំ'])){
        m=1;   // Line 371
        k.KDC(6,t);
        k.KIO(-1,this.s_c_combo_QA,1,t);
        k.KO(-1,t,"្");
        k.KO(-1,t,"អ៊");
        k.KO(-1,t,"ា");
        k.KO(-1,t,"ំ");
      }
      else if(k.KFCM(6,t,['ល','្',{t:'a',a:this.s_c_1st_combo_LO},'ុ','ា','ំ'])){
        m=1;   // Line 376
        k.KDC(6,t);
        k.KO(-1,t,"ល");
        k.KO(-1,t,"្");
        k.KIO(-1,this.s_c_1st_combo_LO,3,t);
        k.KO(-1,t,"៊");
        k.KO(-1,t,"ា");
        k.KO(-1,t,"ំ");
      }
      else if(k.KFCM(6,t,['ម','្',{t:'a',a:this.s_c_1st_combo_MO},'ុ','ា','ំ'])){
        m=1;   // Line 381
        k.KDC(6,t);
        k.KO(-1,t,"ម");
        k.KO(-1,t,"្");
        k.KIO(-1,this.s_c_1st_combo_MO,3,t);
        k.KO(-1,t,"៊");
        k.KO(-1,t,"ា");
        k.KO(-1,t,"ំ");
      }
      else if(k.KFCM(6,t,['ស','្',{t:'a',a:this.s_c_combo_SA},'ុ','ា','ំ'])){
        m=1;   // Line 386
        k.KDC(6,t);
        k.KO(-1,t,"ស");
        k.KO(-1,t,"្");
        k.KIO(-1,this.s_c_combo_SA,3,t);
        k.KO(-1,t,"៊");
        k.KO(-1,t,"ា");
        k.KO(-1,t,"ំ");
      }
      else if(k.KFCM(6,t,[{t:'a',a:this.s_c_combo_HA},'្','ហ','ុ','ា','ំ'])){
        m=1;   // Line 391
        k.KDC(6,t);
        k.KIO(-1,this.s_c_combo_HA,1,t);
        k.KO(-1,t,"្");
        k.KO(-1,t,"ហ៊");
        k.KO(-1,t,"ា");
        k.KO(-1,t,"ំ");
      }
      else if(k.KFCM(6,t,['អ','្','ង','ុ','ា','ំ'])){
        m=1;   // Line 396
        k.KDC(6,t);
        k.KO(-1,t,"អ");
        k.KO(-1,t,"្");
        k.KO(-1,t,"ង៊");
        k.KO(-1,t,"ា");
        k.KO(-1,t,"ំ");
      }
      else if(k.KFCM(6,t,['អ','្','វ','ុ','ា','ំ'])){
        m=1;   // Line 401
        k.KDC(6,t);
        k.KO(-1,t,"អ");
        k.KO(-1,t,"្");
        k.KO(-1,t,"វ៊");
        k.KO(-1,t,"ា");
        k.KO(-1,t,"ំ");
      }
      else if(k.KFCM(6,t,['ល','្',{t:'a',a:this.s_c_2nd_combo_LO},'ុ','ា','ំ'])){
        m=1;   // Line 408
        k.KDC(6,t);
        k.KO(-1,t,"ល");
        k.KO(-1,t,"្");
        k.KIO(-1,this.s_c_2nd_combo_LO,3,t);
        k.KO(-1,t,"៉");
        k.KO(-1,t,"ា");
        k.KO(-1,t,"ំ");
      }
      else if(k.KFCM(6,t,['ម','្',{t:'a',a:this.s_c_2nd_combo_MO},'ុ','ា','ំ'])){
        m=1;   // Line 413
        k.KDC(6,t);
        k.KO(-1,t,"ម");
        k.KO(-1,t,"្");
        k.KIO(-1,this.s_c_2nd_combo_MO,3,t);
        k.KO(-1,t,"៉");
        k.KO(-1,t,"ា");
        k.KO(-1,t,"ំ");
      }
      else if(k.KFCM(6,t,['ល','្',{t:'a',a:this.s_c_2nd_combo_LO},'៊',{t:'a',a:this.s_v_gen},{t:'a',a:this.s_v_pseudo}])){
        m=1;   // Line 435
        k.KDC(6,t);
        k.KO(-1,t,"ល");
        k.KO(-1,t,"្");
        k.KIO(-1,this.s_c_2nd_combo_LO,3,t);
        k.KO(-1,t,"៉");
        k.KIO(-1,this.s_v_gen,5,t);
        k.KIO(-1,this.s_v_pseudo,6,t);
      }
      else if(k.KFCM(6,t,['ម','្',{t:'a',a:this.s_c_2nd_combo_MO},'៊',{t:'a',a:this.s_v_gen},{t:'a',a:this.s_v_pseudo}])){
        m=1;   // Line 436
        k.KDC(6,t);
        k.KO(-1,t,"ម");
        k.KO(-1,t,"្");
        k.KIO(-1,this.s_c_2nd_combo_MO,3,t);
        k.KO(-1,t,"៉");
        k.KIO(-1,this.s_v_gen,5,t);
        k.KIO(-1,this.s_v_pseudo,6,t);
      }
      else if(k.KFCM(6,t,[{t:'a',a:this.s_c_combo_QA},'្','អ','៉','ា','ំ'])){
        m=1;   // Line 469
        k.KDC(6,t);
        k.KIO(-1,this.s_c_combo_QA,1,t);
        k.KO(-1,t,"្");
        k.KO(-1,t,"អ៊");
        k.KO(-1,t,"ា");
        k.KO(-1,t,"ំ");
      }
      else if(k.KFCM(6,t,['ល','្',{t:'a',a:this.s_c_1st_combo_LO},'៉','ា','ំ'])){
        m=1;   // Line 470
        k.KDC(6,t);
        k.KO(-1,t,"ល");
        k.KO(-1,t,"្");
        k.KIO(-1,this.s_c_1st_combo_LO,3,t);
        k.KO(-1,t,"៊");
        k.KO(-1,t,"ា");
        k.KO(-1,t,"ំ");
      }
      else if(k.KFCM(6,t,['ម','្',{t:'a',a:this.s_c_1st_combo_MO},'៉','ា','ំ'])){
        m=1;   // Line 471
        k.KDC(6,t);
        k.KO(-1,t,"ម");
        k.KO(-1,t,"្");
        k.KIO(-1,this.s_c_1st_combo_MO,3,t);
        k.KO(-1,t,"៊");
        k.KO(-1,t,"ា");
        k.KO(-1,t,"ំ");
      }
      else if(k.KFCM(6,t,['ស','្',{t:'a',a:this.s_c_combo_SA},'៉','ា','ំ'])){
        m=1;   // Line 472
        k.KDC(6,t);
        k.KO(-1,t,"ស");
        k.KO(-1,t,"្");
        k.KIO(-1,this.s_c_combo_SA,3,t);
        k.KO(-1,t,"៊");
        k.KO(-1,t,"ា");
        k.KO(-1,t,"ំ");
      }
      else if(k.KFCM(6,t,[{t:'a',a:this.s_c_combo_HA},'្','ហ','៉','ា','ំ'])){
        m=1;   // Line 473
        k.KDC(6,t);
        k.KIO(-1,this.s_c_combo_HA,1,t);
        k.KO(-1,t,"្");
        k.KO(-1,t,"ហ៊");
        k.KO(-1,t,"ា");
        k.KO(-1,t,"ំ");
      }
      else if(k.KFCM(6,t,['អ','្','ង','៉','ា','ំ'])){
        m=1;   // Line 474
        k.KDC(6,t);
        k.KO(-1,t,"អ");
        k.KO(-1,t,"្");
        k.KO(-1,t,"ង៊");
        k.KO(-1,t,"ា");
        k.KO(-1,t,"ំ");
      }
      else if(k.KFCM(6,t,['អ','្','វ','៉','ា','ំ'])){
        m=1;   // Line 475
        k.KDC(6,t);
        k.KO(-1,t,"អ");
        k.KO(-1,t,"្");
        k.KO(-1,t,"វ៊");
        k.KO(-1,t,"ា");
        k.KO(-1,t,"ំ");
      }
      else if(k.KFCM(6,t,[{t:'a',a:this.s_c_combo_QA},'្','អ','ា','ុ','ំ'])){
        m=1;   // Line 482
        k.KDC(6,t);
        k.KIO(-1,this.s_c_combo_QA,1,t);
        k.KO(-1,t,"្");
        k.KO(-1,t,"អ៊");
        k.KO(-1,t,"ា");
        k.KO(-1,t,"ំ");
      }
      else if(k.KFCM(6,t,[{t:'a',a:this.s_c_combo_QA},'្','អ','ុ','ំ','ា'])){
        m=1;   // Line 483
        k.KDC(6,t);
        k.KIO(-1,this.s_c_combo_QA,1,t);
        k.KO(-1,t,"្");
        k.KO(-1,t,"អ៊");
        k.KO(-1,t,"ា");
        k.KO(-1,t,"ំ");
      }
      else if(k.KFCM(6,t,['ល','្',{t:'a',a:this.s_c_1st_combo_LO},'ា','ុ','ំ'])){
        m=1;   // Line 485
        k.KDC(6,t);
        k.KO(-1,t,"ល");
        k.KO(-1,t,"្");
        k.KIO(-1,this.s_c_1st_combo_LO,3,t);
        k.KO(-1,t,"៊");
        k.KO(-1,t,"ា");
        k.KO(-1,t,"ំ");
      }
      else if(k.KFCM(6,t,['ល','្',{t:'a',a:this.s_c_1st_combo_LO},'ុ','ំ','ា'])){
        m=1;   // Line 486
        k.KDC(6,t);
        k.KO(-1,t,"ល");
        k.KO(-1,t,"្");
        k.KIO(-1,this.s_c_1st_combo_LO,3,t);
        k.KO(-1,t,"៊");
        k.KO(-1,t,"ា");
        k.KO(-1,t,"ំ");
      }
      else if(k.KFCM(6,t,['ម','្',{t:'a',a:this.s_c_1st_combo_MO},'ា','ុ','ំ'])){
        m=1;   // Line 488
        k.KDC(6,t);
        k.KO(-1,t,"ម");
        k.KO(-1,t,"្");
        k.KIO(-1,this.s_c_1st_combo_MO,3,t);
        k.KO(-1,t,"៊");
        k.KO(-1,t,"ា");
        k.KO(-1,t,"ំ");
      }
      else if(k.KFCM(6,t,['ម','្',{t:'a',a:this.s_c_1st_combo_MO},'ុ','ំ','ា'])){
        m=1;   // Line 489
        k.KDC(6,t);
        k.KO(-1,t,"ម");
        k.KO(-1,t,"្");
        k.KIO(-1,this.s_c_1st_combo_MO,3,t);
        k.KO(-1,t,"៊");
        k.KO(-1,t,"ា");
        k.KO(-1,t,"ំ");
      }
      else if(k.KFCM(6,t,['ស','្',{t:'a',a:this.s_c_combo_SA},'ា','ុ','ំ'])){
        m=1;   // Line 491
        k.KDC(6,t);
        k.KO(-1,t,"ស");
        k.KO(-1,t,"្");
        k.KIO(-1,this.s_c_combo_SA,3,t);
        k.KO(-1,t,"៊");
        k.KO(-1,t,"ា");
        k.KO(-1,t,"ំ");
      }
      else if(k.KFCM(6,t,['ស','្',{t:'a',a:this.s_c_combo_SA},'ុ','ំ','ា'])){
        m=1;   // Line 492
        k.KDC(6,t);
        k.KO(-1,t,"ស");
        k.KO(-1,t,"្");
        k.KIO(-1,this.s_c_combo_SA,3,t);
        k.KO(-1,t,"៊");
        k.KO(-1,t,"ា");
        k.KO(-1,t,"ំ");
      }
      else if(k.KFCM(6,t,[{t:'a',a:this.s_c_combo_HA},'្','ហ','ា','ុ','ំ'])){
        m=1;   // Line 494
        k.KDC(6,t);
        k.KIO(-1,this.s_c_combo_HA,1,t);
        k.KO(-1,t,"្");
        k.KO(-1,t,"ហ៊");
        k.KO(-1,t,"ា");
        k.KO(-1,t,"ំ");
      }
      else if(k.KFCM(6,t,[{t:'a',a:this.s_c_combo_HA},'្','ហ','ុ','ំ','ា'])){
        m=1;   // Line 495
        k.KDC(6,t);
        k.KIO(-1,this.s_c_combo_HA,1,t);
        k.KO(-1,t,"្");
        k.KO(-1,t,"ហ៊");
        k.KO(-1,t,"ា");
        k.KO(-1,t,"ំ");
      }
      else if(k.KFCM(6,t,['អ','្','ង','ា','ុ','ំ'])){
        m=1;   // Line 497
        k.KDC(6,t);
        k.KO(-1,t,"អ");
        k.KO(-1,t,"្");
        k.KO(-1,t,"ង៊");
        k.KO(-1,t,"ា");
        k.KO(-1,t,"ំ");
      }
      else if(k.KFCM(6,t,['អ','្','ង','ុ','ំ','ា'])){
        m=1;   // Line 498
        k.KDC(6,t);
        k.KO(-1,t,"អ");
        k.KO(-1,t,"្");
        k.KO(-1,t,"ង៊");
        k.KO(-1,t,"ា");
        k.KO(-1,t,"ំ");
      }
      else if(k.KFCM(6,t,['អ','្','វ','ា','ុ','ំ'])){
        m=1;   // Line 500
        k.KDC(6,t);
        k.KO(-1,t,"អ");
        k.KO(-1,t,"្");
        k.KO(-1,t,"វ៊");
        k.KO(-1,t,"ា");
        k.KO(-1,t,"ំ");
      }
      else if(k.KFCM(6,t,['អ','្','វ','ុ','ំ','ា'])){
        m=1;   // Line 501
        k.KDC(6,t);
        k.KO(-1,t,"អ");
        k.KO(-1,t,"្");
        k.KO(-1,t,"វ៊");
        k.KO(-1,t,"ុ");
        k.KO(-1,t,"ា");
      }
      else if(k.KFCM(6,t,['ល','្',{t:'a',a:this.s_c_2nd_combo_LO},'ា','ុ','ំ'])){
        m=1;   // Line 508
        k.KDC(6,t);
        k.KO(-1,t,"ល");
        k.KO(-1,t,"្");
        k.KIO(-1,this.s_c_2nd_combo_LO,3,t);
        k.KO(-1,t,"៉");
        k.KO(-1,t,"ា");
        k.KO(-1,t,"ំ");
      }
      else if(k.KFCM(6,t,['ល','្',{t:'a',a:this.s_c_2nd_combo_LO},'ុ','ំ','ា'])){
        m=1;   // Line 509
        k.KDC(6,t);
        k.KO(-1,t,"ល");
        k.KO(-1,t,"្");
        k.KIO(-1,this.s_c_2nd_combo_LO,3,t);
        k.KO(-1,t,"៉");
        k.KO(-1,t,"ា");
        k.KO(-1,t,"ំ");
      }
      else if(k.KFCM(6,t,['ម','្',{t:'a',a:this.s_c_2nd_combo_MO},'ា','ុ','ំ'])){
        m=1;   // Line 511
        k.KDC(6,t);
        k.KO(-1,t,"ម");
        k.KO(-1,t,"្");
        k.KIO(-1,this.s_c_2nd_combo_MO,3,t);
        k.KO(-1,t,"៉");
        k.KO(-1,t,"ា");
        k.KO(-1,t,"ំ");
      }
      else if(k.KFCM(6,t,['ម','្',{t:'a',a:this.s_c_2nd_combo_MO},'ុ','ំ','ា'])){
        m=1;   // Line 512
        k.KDC(6,t);
        k.KO(-1,t,"ម");
        k.KO(-1,t,"្");
        k.KIO(-1,this.s_c_2nd_combo_MO,3,t);
        k.KO(-1,t,"៉");
        k.KO(-1,t,"ា");
        k.KO(-1,t,"ំ");
      }
      else if(k.KFCM(6,t,[{t:'a',a:this.s_c_combo_QA},'្','អ','េ','ុ','ី'])){
        m=1;   // Line 520
        k.KDC(6,t);
        k.KIO(-1,this.s_c_combo_QA,1,t);
        k.KO(-1,t,"្");
        k.KO(-1,t,"អ៊ើ");
      }
      else if(k.KFCM(6,t,[{t:'a',a:this.s_c_combo_QA},'្','អ','ុ','េ','ី'])){
        m=1;   // Line 521
        k.KDC(6,t);
        k.KIO(-1,this.s_c_combo_QA,1,t);
        k.KO(-1,t,"្");
        k.KO(-1,t,"អ៊ើ");
      }
      else if(k.KFCM(6,t,[{t:'a',a:this.s_c_combo_QA},'្','អ','៉','េ','ី'])){
        m=1;   // Line 522
        k.KDC(6,t);
        k.KIO(-1,this.s_c_combo_QA,1,t);
        k.KO(-1,t,"្");
        k.KO(-1,t,"អ៊ើ");
      }
      else if(k.KFCM(6,t,['ល','្',{t:'a',a:this.s_c_1st_combo_LO},'េ','ុ','ី'])){
        m=1;   // Line 524
        k.KDC(6,t);
        k.KO(-1,t,"ល");
        k.KO(-1,t,"្");
        k.KIO(-1,this.s_c_1st_combo_LO,3,t);
        k.KO(-1,t,"៊ើ");
      }
      else if(k.KFCM(6,t,['ល','្',{t:'a',a:this.s_c_1st_combo_LO},'ុ','េ','ី'])){
        m=1;   // Line 525
        k.KDC(6,t);
        k.KO(-1,t,"ល");
        k.KO(-1,t,"្");
        k.KIO(-1,this.s_c_1st_combo_LO,3,t);
        k.KO(-1,t,"៊ើ");
      }
      else if(k.KFCM(6,t,['ល','្',{t:'a',a:this.s_c_1st_combo_LO},'៉','េ','ី'])){
        m=1;   // Line 526
        k.KDC(6,t);
        k.KO(-1,t,"ល");
        k.KO(-1,t,"្");
        k.KIO(-1,this.s_c_1st_combo_LO,3,t);
        k.KO(-1,t,"៊ើ");
      }
      else if(k.KFCM(6,t,['ម','្',{t:'a',a:this.s_c_1st_combo_MO},'េ','ុ','ី'])){
        m=1;   // Line 528
        k.KDC(6,t);
        k.KO(-1,t,"ម");
        k.KO(-1,t,"្");
        k.KIO(-1,this.s_c_1st_combo_MO,3,t);
        k.KO(-1,t,"៊ើ");
      }
      else if(k.KFCM(6,t,['ម','្',{t:'a',a:this.s_c_1st_combo_MO},'ុ','េ','ី'])){
        m=1;   // Line 529
        k.KDC(6,t);
        k.KO(-1,t,"ម");
        k.KO(-1,t,"្");
        k.KIO(-1,this.s_c_1st_combo_MO,3,t);
        k.KO(-1,t,"៊ើ");
      }
      else if(k.KFCM(6,t,['ម','្',{t:'a',a:this.s_c_1st_combo_MO},'៉','េ','ី'])){
        m=1;   // Line 530
        k.KDC(6,t);
        k.KO(-1,t,"ម");
        k.KO(-1,t,"្");
        k.KIO(-1,this.s_c_1st_combo_MO,3,t);
        k.KO(-1,t,"៊ើ");
      }
      else if(k.KFCM(6,t,['ស','្',{t:'a',a:this.s_c_combo_SA},'េ','ុ','ី'])){
        m=1;   // Line 532
        k.KDC(6,t);
        k.KO(-1,t,"ស");
        k.KO(-1,t,"្");
        k.KIO(-1,this.s_c_combo_SA,3,t);
        k.KO(-1,t,"៊ើ");
      }
      else if(k.KFCM(6,t,['ស','្',{t:'a',a:this.s_c_combo_SA},'ុ','េ','ី'])){
        m=1;   // Line 533
        k.KDC(6,t);
        k.KO(-1,t,"ស");
        k.KO(-1,t,"្");
        k.KIO(-1,this.s_c_combo_SA,3,t);
        k.KO(-1,t,"៊ើ");
      }
      else if(k.KFCM(6,t,['ស','្',{t:'a',a:this.s_c_combo_SA},'៉','េ','ី'])){
        m=1;   // Line 534
        k.KDC(6,t);
        k.KO(-1,t,"ស");
        k.KO(-1,t,"្");
        k.KIO(-1,this.s_c_combo_SA,3,t);
        k.KO(-1,t,"៊ើ");
      }
      else if(k.KFCM(6,t,[{t:'a',a:this.s_c_combo_HA},'្','ហ','េ','ុ','ី'])){
        m=1;   // Line 536
        k.KDC(6,t);
        k.KIO(-1,this.s_c_combo_HA,1,t);
        k.KO(-1,t,"្");
        k.KO(-1,t,"ហ៊ើ");
      }
      else if(k.KFCM(6,t,[{t:'a',a:this.s_c_combo_HA},'្','ហ','ុ','េ','ី'])){
        m=1;   // Line 537
        k.KDC(6,t);
        k.KIO(-1,this.s_c_combo_HA,1,t);
        k.KO(-1,t,"្");
        k.KO(-1,t,"ហ៊ើ");
      }
      else if(k.KFCM(6,t,[{t:'a',a:this.s_c_combo_HA},'្','ហ','៉','េ','ី'])){
        m=1;   // Line 538
        k.KDC(6,t);
        k.KIO(-1,this.s_c_combo_HA,1,t);
        k.KO(-1,t,"្");
        k.KO(-1,t,"ហ៊ើ");
      }
      else if(k.KFCM(6,t,['អ','្','ង','េ','ុ','ី'])){
        m=1;   // Line 540
        k.KDC(6,t);
        k.KO(-1,t,"អ");
        k.KO(-1,t,"្");
        k.KO(-1,t,"ង៊ើ");
      }
      else if(k.KFCM(6,t,['អ','្','ង','ុ','េ','ី'])){
        m=1;   // Line 541
        k.KDC(6,t);
        k.KO(-1,t,"អ");
        k.KO(-1,t,"្");
        k.KO(-1,t,"ង៊ើ");
      }
      else if(k.KFCM(6,t,['អ','្','ង','៉','េ','ី'])){
        m=1;   // Line 542
        k.KDC(6,t);
        k.KO(-1,t,"អ");
        k.KO(-1,t,"្");
        k.KO(-1,t,"ង៊ើ");
      }
      else if(k.KFCM(6,t,['អ','្','វ','េ','ុ','ី'])){
        m=1;   // Line 544
        k.KDC(6,t);
        k.KO(-1,t,"អ");
        k.KO(-1,t,"្");
        k.KO(-1,t,"វ៊ើ");
      }
      else if(k.KFCM(6,t,['អ','្','វ','ុ','េ','ី'])){
        m=1;   // Line 545
        k.KDC(6,t);
        k.KO(-1,t,"អ");
        k.KO(-1,t,"្");
        k.KO(-1,t,"វ៊ើ");
      }
      else if(k.KFCM(6,t,['អ','្','វ','៉','េ','ី'])){
        m=1;   // Line 546
        k.KDC(6,t);
        k.KO(-1,t,"អ");
        k.KO(-1,t,"្");
        k.KO(-1,t,"វ៊ើ");
      }
      else if(k.KFCM(6,t,['ល','្',{t:'a',a:this.s_c_2nd_combo_LO},'េ','ុ','ី'])){
        m=1;   // Line 554
        k.KDC(6,t);
        k.KO(-1,t,"ល");
        k.KO(-1,t,"្");
        k.KIO(-1,this.s_c_2nd_combo_LO,3,t);
        k.KO(-1,t,"៉ើ");
      }
      else if(k.KFCM(6,t,['ល','្',{t:'a',a:this.s_c_2nd_combo_LO},'ុ','េ','ី'])){
        m=1;   // Line 555
        k.KDC(6,t);
        k.KO(-1,t,"ល");
        k.KO(-1,t,"្");
        k.KIO(-1,this.s_c_2nd_combo_LO,3,t);
        k.KO(-1,t,"៉ើ");
      }
      else if(k.KFCM(6,t,['ល','្',{t:'a',a:this.s_c_2nd_combo_LO},'៊','េ','ី'])){
        m=1;   // Line 556
        k.KDC(6,t);
        k.KO(-1,t,"ល");
        k.KO(-1,t,"្");
        k.KIO(-1,this.s_c_2nd_combo_LO,3,t);
        k.KO(-1,t,"៉ើ");
      }
      else if(k.KFCM(6,t,['ម','្',{t:'a',a:this.s_c_2nd_combo_MO},'េ','ុ','ី'])){
        m=1;   // Line 558
        k.KDC(6,t);
        k.KO(-1,t,"ម");
        k.KO(-1,t,"្");
        k.KIO(-1,this.s_c_2nd_combo_MO,3,t);
        k.KO(-1,t,"៉ើ");
      }
      else if(k.KFCM(6,t,['ម','្',{t:'a',a:this.s_c_2nd_combo_MO},'ុ','េ','ី'])){
        m=1;   // Line 559
        k.KDC(6,t);
        k.KO(-1,t,"ម");
        k.KO(-1,t,"្");
        k.KIO(-1,this.s_c_2nd_combo_MO,3,t);
        k.KO(-1,t,"៉ើ");
      }
      else if(k.KFCM(6,t,['ម','្',{t:'a',a:this.s_c_2nd_combo_MO},'៊','េ','ី'])){
        m=1;   // Line 560
        k.KDC(6,t);
        k.KO(-1,t,"ម");
        k.KO(-1,t,"្");
        k.KIO(-1,this.s_c_2nd_combo_MO,3,t);
        k.KO(-1,t,"៉ើ");
      }
      else if(k.KFCM(5,t,[{t:'a',a:this.s_c_shifter},{t:'a',a:this.s_v_combo_N},'ំ','្',{t:'a',a:this.s_subcons}])){
        m=1;   // Line 335
        k.KDC(5,t);
        k.KO(-1,t,"្");
        k.KIO(-1,this.s_subcons,5,t);
        k.KIO(-1,this.s_c_shifter,1,t);
        k.KIO(-1,this.s_v_combo_N,2,t);
        k.KO(-1,t,"ំ");
      }
      else if(k.KFCM(5,t,[{t:'a',a:this.s_c_shifter},{t:'a',a:this.s_v_combo_R},'ះ','្',{t:'a',a:this.s_subcons}])){
        m=1;   // Line 336
        k.KDC(5,t);
        k.KO(-1,t,"្");
        k.KIO(-1,this.s_subcons,5,t);
        k.KIO(-1,this.s_c_shifter,1,t);
        k.KIO(-1,this.s_v_combo_R,2,t);
        k.KO(-1,t,"ះ");
      }
      else if(k.KFCM(5,t,['្','ដ',{t:'a',a:this.s_v_any},'្','រ'])){
        m=1;   // Line 343
        k.KDC(5,t);
        k.KO(-1,t,"្ត");
        k.KO(-1,t,"្");
        k.KO(-1,t,"រ");
        k.KIO(-1,this.s_v_any,3,t);
      }
      else if(k.KFCM(5,t,['្','រ',{t:'a',a:this.s_v_any},'្','ដ'])){
        m=1;   // Line 347
        k.KDC(5,t);
        k.KO(-1,t,"្ត");
        k.KO(-1,t,"្");
        k.KO(-1,t,"រ");
        k.KIO(-1,this.s_v_any,3,t);
      }
      else if(k.KFCM(5,t,['្','រ',{t:'a',a:this.s_c_shifter},'្',{t:'a',a:this.s_subcons}])){
        m=1;   // Line 351
        k.KDC(5,t);
        k.KO(-1,t,"្");
        k.KIO(-1,this.s_subcons,5,t);
        k.KO(-1,t,"្");
        k.KO(-1,t,"រ");
        k.KIO(-1,this.s_c_shifter,3,t);
      }
      else if(k.KFCM(5,t,['្','រ',{t:'a',a:this.s_v_any},'្',{t:'a',a:this.s_subcons}])){
        m=1;   // Line 353
        k.KDC(5,t);
        k.KO(-1,t,"្");
        k.KIO(-1,this.s_subcons,5,t);
        k.KO(-1,t,"្");
        k.KO(-1,t,"រ");
        k.KIO(-1,this.s_v_any,3,t);
      }
      else if(k.KFCM(5,t,[{t:'a',a:this.s_c_combo_QA},'្','អ','ុ',{t:'a',a:this.s_v_above}])){
        m=1;   // Line 370
        k.KDC(5,t);
        k.KIO(-1,this.s_c_combo_QA,1,t);
        k.KO(-1,t,"្");
        k.KO(-1,t,"អ៊");
        k.KIO(-1,this.s_v_above,5,t);
      }
      else if(k.KFCM(5,t,[{t:'a',a:this.s_c_combo_QA},'្','អ',{t:'a',a:this.s_v_above},'ុ'])){
        m=1;   // Line 372
        k.KDC(5,t);
        k.KIO(-1,this.s_c_combo_QA,1,t);
        k.KO(-1,t,"្");
        k.KO(-1,t,"អ៊");
        k.KIO(-1,this.s_v_above,4,t);
      }
      else if(k.KFCM(5,t,['ល','្',{t:'a',a:this.s_c_1st_combo_LO},'ុ',{t:'a',a:this.s_v_above}])){
        m=1;   // Line 375
        k.KDC(5,t);
        k.KO(-1,t,"ល");
        k.KO(-1,t,"្");
        k.KIO(-1,this.s_c_1st_combo_LO,3,t);
        k.KO(-1,t,"៊");
        k.KIO(-1,this.s_v_above,5,t);
      }
      else if(k.KFCM(5,t,['ល','្',{t:'a',a:this.s_c_1st_combo_LO},{t:'a',a:this.s_v_above},'ុ'])){
        m=1;   // Line 377
        k.KDC(5,t);
        k.KO(-1,t,"ល");
        k.KO(-1,t,"្");
        k.KIO(-1,this.s_c_1st_combo_LO,3,t);
        k.KO(-1,t,"៊");
        k.KIO(-1,this.s_v_above,4,t);
      }
      else if(k.KFCM(5,t,['ម','្',{t:'a',a:this.s_c_1st_combo_MO},'ុ',{t:'a',a:this.s_v_above}])){
        m=1;   // Line 380
        k.KDC(5,t);
        k.KO(-1,t,"ម");
        k.KO(-1,t,"្");
        k.KIO(-1,this.s_c_1st_combo_MO,3,t);
        k.KO(-1,t,"៊");
        k.KIO(-1,this.s_v_above,5,t);
      }
      else if(k.KFCM(5,t,['ម','្',{t:'a',a:this.s_c_1st_combo_MO},{t:'a',a:this.s_v_above},'ុ'])){
        m=1;   // Line 382
        k.KDC(5,t);
        k.KO(-1,t,"ម");
        k.KO(-1,t,"្");
        k.KIO(-1,this.s_c_1st_combo_MO,3,t);
        k.KO(-1,t,"៊");
        k.KIO(-1,this.s_v_above,4,t);
      }
      else if(k.KFCM(5,t,['ស','្',{t:'a',a:this.s_c_combo_SA},'ុ',{t:'a',a:this.s_v_above}])){
        m=1;   // Line 385
        k.KDC(5,t);
        k.KO(-1,t,"ស");
        k.KO(-1,t,"្");
        k.KIO(-1,this.s_c_combo_SA,3,t);
        k.KO(-1,t,"៊");
        k.KIO(-1,this.s_v_above,5,t);
      }
      else if(k.KFCM(5,t,['ស','្',{t:'a',a:this.s_c_combo_SA},{t:'a',a:this.s_v_above},'ុ'])){
        m=1;   // Line 387
        k.KDC(5,t);
        k.KO(-1,t,"ស");
        k.KO(-1,t,"្");
        k.KIO(-1,this.s_c_combo_SA,3,t);
        k.KO(-1,t,"៊");
        k.KIO(-1,this.s_v_above,4,t);
      }
      else if(k.KFCM(5,t,[{t:'a',a:this.s_c_combo_HA},'្','ហ','ុ',{t:'a',a:this.s_v_above}])){
        m=1;   // Line 390
        k.KDC(5,t);
        k.KIO(-1,this.s_c_combo_HA,1,t);
        k.KO(-1,t,"្");
        k.KO(-1,t,"ហ៊");
        k.KIO(-1,this.s_v_above,5,t);
      }
      else if(k.KFCM(5,t,[{t:'a',a:this.s_c_combo_HA},'្','ហ',{t:'a',a:this.s_v_above},'ុ'])){
        m=1;   // Line 392
        k.KDC(5,t);
        k.KIO(-1,this.s_c_combo_HA,1,t);
        k.KO(-1,t,"្");
        k.KO(-1,t,"ហ៊");
        k.KIO(-1,this.s_v_above,4,t);
      }
      else if(k.KFCM(5,t,['អ','្','ង','ុ',{t:'a',a:this.s_v_above}])){
        m=1;   // Line 395
        k.KDC(5,t);
        k.KO(-1,t,"អ");
        k.KO(-1,t,"្");
        k.KO(-1,t,"ង៊");
        k.KIO(-1,this.s_v_above,5,t);
      }
      else if(k.KFCM(5,t,['អ','្','ង',{t:'a',a:this.s_v_above},'ុ'])){
        m=1;   // Line 397
        k.KDC(5,t);
        k.KO(-1,t,"អ");
        k.KO(-1,t,"្");
        k.KO(-1,t,"ង៊");
        k.KIO(-1,this.s_v_above,4,t);
      }
      else if(k.KFCM(5,t,['អ','្','វ','ុ',{t:'a',a:this.s_v_above}])){
        m=1;   // Line 400
        k.KDC(5,t);
        k.KO(-1,t,"អ");
        k.KO(-1,t,"្");
        k.KO(-1,t,"វ៊");
        k.KIO(-1,this.s_v_above,5,t);
      }
      else if(k.KFCM(5,t,['អ','្','វ',{t:'a',a:this.s_v_above},'ុ'])){
        m=1;   // Line 402
        k.KDC(5,t);
        k.KO(-1,t,"អ");
        k.KO(-1,t,"្");
        k.KO(-1,t,"វ៊");
        k.KIO(-1,this.s_v_above,4,t);
      }
      else if(k.KFCM(5,t,['ល','្',{t:'a',a:this.s_c_2nd_combo_LO},'ុ',{t:'a',a:this.s_v_above}])){
        m=1;   // Line 407
        k.KDC(5,t);
        k.KO(-1,t,"ល");
        k.KO(-1,t,"្");
        k.KIO(-1,this.s_c_2nd_combo_LO,3,t);
        k.KO(-1,t,"៉");
        k.KIO(-1,this.s_v_above,5,t);
      }
      else if(k.KFCM(5,t,['ល','្',{t:'a',a:this.s_c_2nd_combo_LO},{t:'a',a:this.s_v_above},'ុ'])){
        m=1;   // Line 409
        k.KDC(5,t);
        k.KO(-1,t,"ល");
        k.KO(-1,t,"្");
        k.KIO(-1,this.s_c_2nd_combo_LO,3,t);
        k.KO(-1,t,"៉");
        k.KIO(-1,this.s_v_above,4,t);
      }
      if(m) {}
      else if(k.KFCM(5,t,['ម','្',{t:'a',a:this.s_c_2nd_combo_MO},'ុ',{t:'a',a:this.s_v_above}])){
        m=1;   // Line 412
        k.KDC(5,t);
        k.KO(-1,t,"ម");
        k.KO(-1,t,"្");
        k.KIO(-1,this.s_c_2nd_combo_MO,3,t);
        k.KO(-1,t,"៉");
        k.KIO(-1,this.s_v_above,5,t);
      }
      else if(k.KFCM(5,t,['ម','្',{t:'a',a:this.s_c_2nd_combo_MO},{t:'a',a:this.s_v_above},'ុ'])){
        m=1;   // Line 414
        k.KDC(5,t);
        k.KO(-1,t,"ម");
        k.KO(-1,t,"្");
        k.KIO(-1,this.s_c_2nd_combo_MO,3,t);
        k.KO(-1,t,"៉");
        k.KIO(-1,this.s_v_above,4,t);
      }
      else if(k.KFCM(5,t,[{t:'a',a:this.s_shiftable_c_1st},'ុ','ំ','ា','ំ'])){
        m=1;   // Line 422
        k.KDC(5,t);
        k.KIO(-1,this.s_shiftable_c_1st,1,t);
        k.KO(-1,t,"៊");
        k.KO(-1,t,"ា");
        k.KO(-1,t,"ំ");
      }
      else if(k.KFCM(5,t,[{t:'a',a:this.s_shiftable_c_2nd},'ុ','ំ','ា','ំ'])){
        m=1;   // Line 429
        k.KDC(5,t);
        k.KIO(-1,this.s_shiftable_c_2nd,1,t);
        k.KO(-1,t,"៉");
        k.KO(-1,t,"ា");
        k.KO(-1,t,"ំ");
      }
      else if(k.KFCM(5,t,['ល','្',{t:'a',a:this.s_c_2nd_combo_LO},'៊',{t:'a',a:this.s_v_above}])){
        m=1;   // Line 433
        k.KDC(5,t);
        k.KO(-1,t,"ល");
        k.KO(-1,t,"្");
        k.KIO(-1,this.s_c_2nd_combo_LO,3,t);
        k.KO(-1,t,"៉");
        k.KIO(-1,this.s_v_above,5,t);
      }
      else if(k.KFCM(5,t,['ម','្',{t:'a',a:this.s_c_2nd_combo_MO},'៊',{t:'a',a:this.s_v_above}])){
        m=1;   // Line 434
        k.KDC(5,t);
        k.KO(-1,t,"ម");
        k.KO(-1,t,"្");
        k.KIO(-1,this.s_c_2nd_combo_MO,3,t);
        k.KO(-1,t,"៉");
        k.KIO(-1,this.s_v_above,5,t);
      }
      else if(k.KFCM(5,t,['្',{t:'a',a:this.s_shiftable_c_2nd},'៊',{t:'a',a:this.s_v_gen},{t:'a',a:this.s_v_pseudo}])){
        m=1;   // Line 444
        k.KDC(5,t);
        k.KO(-1,t,"្");
        k.KIO(-1,this.s_shiftable_c_2nd,2,t);
        k.KO(-1,t,"៊");
        k.KIO(-1,this.s_v_gen,4,t);
        k.KIO(-1,this.s_v_pseudo,5,t);
      }
      else if(k.KFCM(5,t,[{t:'a',a:this.s_c_combo_QA},'្','អ','៉',{t:'a',a:this.s_v_above}])){
        m=1;   // Line 462
        k.KDC(5,t);
        k.KIO(-1,this.s_c_combo_QA,1,t);
        k.KO(-1,t,"្");
        k.KO(-1,t,"អ៊");
        k.KIO(-1,this.s_v_above,5,t);
      }
      else if(k.KFCM(5,t,['ល','្',{t:'a',a:this.s_c_1st_combo_LO},'៉',{t:'a',a:this.s_v_above}])){
        m=1;   // Line 463
        k.KDC(5,t);
        k.KO(-1,t,"ល");
        k.KO(-1,t,"្");
        k.KIO(-1,this.s_c_1st_combo_LO,3,t);
        k.KO(-1,t,"៊");
        k.KIO(-1,this.s_v_above,5,t);
      }
      else if(k.KFCM(5,t,['ម','្',{t:'a',a:this.s_c_1st_combo_MO},'៉',{t:'a',a:this.s_v_above}])){
        m=1;   // Line 464
        k.KDC(5,t);
        k.KO(-1,t,"ម");
        k.KO(-1,t,"្");
        k.KIO(-1,this.s_c_1st_combo_MO,3,t);
        k.KO(-1,t,"៊");
        k.KIO(-1,this.s_v_above,5,t);
      }
      else if(k.KFCM(5,t,['ស','្',{t:'a',a:this.s_c_combo_SA},'៉',{t:'a',a:this.s_v_above}])){
        m=1;   // Line 465
        k.KDC(5,t);
        k.KO(-1,t,"ស");
        k.KO(-1,t,"្");
        k.KIO(-1,this.s_c_combo_SA,3,t);
        k.KO(-1,t,"៊");
        k.KIO(-1,this.s_v_above,5,t);
      }
      else if(k.KFCM(5,t,[{t:'a',a:this.s_c_combo_HA},'្','ហ','៉',{t:'a',a:this.s_v_above}])){
        m=1;   // Line 466
        k.KDC(5,t);
        k.KIO(-1,this.s_c_combo_HA,1,t);
        k.KO(-1,t,"្");
        k.KO(-1,t,"ហ៊");
        k.KIO(-1,this.s_v_above,5,t);
      }
      else if(k.KFCM(5,t,['អ','្','ង','៉',{t:'a',a:this.s_v_above}])){
        m=1;   // Line 467
        k.KDC(5,t);
        k.KO(-1,t,"អ");
        k.KO(-1,t,"្");
        k.KO(-1,t,"ង៊");
        k.KIO(-1,this.s_v_above,5,t);
      }
      else if(k.KFCM(5,t,['អ','្','វ','៉',{t:'a',a:this.s_v_above}])){
        m=1;   // Line 468
        k.KDC(5,t);
        k.KO(-1,t,"អ");
        k.KO(-1,t,"្");
        k.KO(-1,t,"វ៊");
        k.KIO(-1,this.s_v_above,5,t);
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_c_shifter},{t:'a',a:this.s_v_gen},{t:'a',a:this.s_v_pseudo},{t:'a',a:this.s_c_shifter}])){
        m=1;   // Line 304
        k.KDC(4,t);
        k.KIO(-1,this.s_v_gen,2,t);
        k.KIO(-1,this.s_v_pseudo,3,t);
        k.KIO(-1,this.s_c_shifter,4,t);
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_v_gen},{t:'a',a:this.s_v_pseudo},{t:'a',a:this.s_v_gen},{t:'a',a:this.s_v_pseudo}])){
        m=1;   // Line 316
        k.KDC(4,t);
        k.KIO(-1,this.s_v_gen,3,t);
        k.KIO(-1,this.s_v_pseudo,4,t);
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_v_combo_N},'ំ','្',{t:'a',a:this.s_subcons}])){
        m=1;   // Line 329
        k.KDC(4,t);
        k.KO(-1,t,"្");
        k.KIO(-1,this.s_subcons,4,t);
        k.KIO(-1,this.s_v_combo_N,1,t);
        k.KO(-1,t,"ំ");
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_v_combo_R},'ះ','្',{t:'a',a:this.s_subcons}])){
        m=1;   // Line 330
        k.KDC(4,t);
        k.KO(-1,t,"្");
        k.KIO(-1,this.s_subcons,4,t);
        k.KIO(-1,this.s_v_combo_R,1,t);
        k.KO(-1,t,"ះ");
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_c_shifter},{t:'a',a:this.s_v_any},'្',{t:'a',a:this.s_subcons}])){
        m=1;   // Line 334
        k.KDC(4,t);
        k.KO(-1,t,"្");
        k.KIO(-1,this.s_subcons,4,t);
        k.KIO(-1,this.s_c_shifter,1,t);
        k.KIO(-1,this.s_v_any,2,t);
      }
      else if(k.KFCM(4,t,['្','ដ','្','រ'])){
        m=1;   // Line 340
        k.KDC(4,t);
        k.KO(-1,t,"្ត");
        k.KO(-1,t,"្");
        k.KO(-1,t,"រ");
      }
      else if(k.KFCM(4,t,['្','រ','្','ដ'])){
        m=1;   // Line 341
        k.KDC(4,t);
        k.KO(-1,t,"្ត");
        k.KO(-1,t,"្");
        k.KO(-1,t,"រ");
      }
      else if(k.KFCM(4,t,['្','រ','្',{t:'a',a:this.s_subcons}])){
        m=1;   // Line 352
        k.KDC(4,t);
        k.KO(-1,t,"្");
        k.KIO(-1,this.s_subcons,4,t);
        k.KO(-1,t,"្");
        k.KO(-1,t,"រ");
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_shiftable_c_1st},'ុ','ា','ំ'])){
        m=1;   // Line 420
        k.KDC(4,t);
        k.KIO(-1,this.s_shiftable_c_1st,1,t);
        k.KO(-1,t,"៊");
        k.KO(-1,t,"ា");
        k.KO(-1,t,"ំ");
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_shiftable_c_2nd},'ុ','ា','ំ'])){
        m=1;   // Line 427
        k.KDC(4,t);
        k.KIO(-1,this.s_shiftable_c_2nd,1,t);
        k.KO(-1,t,"៉");
        k.KO(-1,t,"ា");
        k.KO(-1,t,"ំ");
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_shiftable_c_2nd},'៊',{t:'a',a:this.s_v_gen},{t:'a',a:this.s_v_pseudo}])){
        m=1;   // Line 441
        k.KDC(4,t);
        k.KIO(-1,this.s_shiftable_c_2nd,1,t);
        k.KO(-1,t,"៉");
        k.KIO(-1,this.s_v_gen,3,t);
        k.KIO(-1,this.s_v_pseudo,4,t);
      }
      else if(k.KFCM(4,t,['្',{t:'a',a:this.s_shiftable_c_2nd},'៊',{t:'a',a:this.s_v_above}])){
        m=1;   // Line 443
        k.KDC(4,t);
        k.KO(-1,t,"្");
        k.KIO(-1,this.s_shiftable_c_2nd,2,t);
        k.KO(-1,t,"៊");
        k.KIO(-1,this.s_v_above,4,t);
      }
      else if(k.KFCM(4,t,['ប','្','យ',{t:'a',a:this.s_c_shifter}])){
        m=1;   // Line 448
        k.KDC(4,t);
        k.KO(-1,t,"ប្យ");
        k.KIO(-1,this.s_c_shifter,4,t);
      }
      else if(k.KFCM(4,t,['ស','្','ប',{t:'a',a:this.s_c_shifter}])){
        m=1;   // Line 449
        k.KDC(4,t);
        k.KO(-1,t,"ស្ប");
        k.KIO(-1,this.s_c_shifter,4,t);
      }
      else if(k.KFCM(4,t,['ឆ','្','ប',{t:'a',a:this.s_c_shifter}])){
        m=1;   // Line 450
        k.KDC(4,t);
        k.KO(-1,t,"ឆ្ប");
        k.KIO(-1,this.s_c_shifter,4,t);
      }
      else if(k.KFCM(4,t,['ប','្','យ',{t:'a',a:this.s_c_shifter}])){
        m=1;   // Line 451
        k.KDC(4,t);
        k.KO(-1,t,"ប្យ");
        k.KIO(-1,this.s_c_shifter,4,t);
      }
      else if(k.KFCM(4,t,['ស','្','ប',{t:'a',a:this.s_c_shifter}])){
        m=1;   // Line 452
        k.KDC(4,t);
        k.KO(-1,t,"ស្ប");
        k.KIO(-1,this.s_c_shifter,4,t);
      }
      else if(k.KFCM(4,t,['ឆ','្','ប',{t:'a',a:this.s_c_shifter}])){
        m=1;   // Line 453
        k.KDC(4,t);
        k.KO(-1,t,"ឆ្ប");
        k.KIO(-1,this.s_c_shifter,4,t);
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_shiftable_c_1st},'៉',{t:'a',a:this.s_v_gen},{t:'a',a:this.s_v_pseudo}])){
        m=1;   // Line 458
        k.KDC(4,t);
        k.KIO(-1,this.s_shiftable_c_1st,1,t);
        k.KO(-1,t,"៊");
        k.KIO(-1,this.s_v_gen,3,t);
        k.KIO(-1,this.s_v_pseudo,4,t);
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_shiftable_c_1st},'ា','ុ','ំ'])){
        m=1;   // Line 479
        k.KDC(4,t);
        k.KIO(-1,this.s_shiftable_c_1st,1,t);
        k.KO(-1,t,"៊");
        k.KO(-1,t,"ា");
        k.KO(-1,t,"ំ");
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_shiftable_c_1st},'ុ','ំ','ា'])){
        m=1;   // Line 480
        k.KDC(4,t);
        k.KIO(-1,this.s_shiftable_c_1st,1,t);
        k.KO(-1,t,"៊");
        k.KO(-1,t,"ា");
        k.KO(-1,t,"ំ");
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_shiftable_c_2nd},'ា','ុ','ំ'])){
        m=1;   // Line 505
        k.KDC(4,t);
        k.KIO(-1,this.s_shiftable_c_2nd,1,t);
        k.KO(-1,t,"៉");
        k.KO(-1,t,"ា");
        k.KO(-1,t,"ំ");
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_shiftable_c_2nd},'ុ','ំ','ា'])){
        m=1;   // Line 506
        k.KDC(4,t);
        k.KIO(-1,this.s_shiftable_c_2nd,1,t);
        k.KO(-1,t,"៉");
        k.KO(-1,t,"ា");
        k.KO(-1,t,"ំ");
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_shiftable_c_1st},'េ','ុ','ី'])){
        m=1;   // Line 516
        k.KDC(4,t);
        k.KIO(-1,this.s_shiftable_c_1st,1,t);
        k.KO(-1,t,"៊ើ");
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_shiftable_c_1st},'ុ','េ','ី'])){
        m=1;   // Line 517
        k.KDC(4,t);
        k.KIO(-1,this.s_shiftable_c_1st,1,t);
        k.KO(-1,t,"៊ើ");
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_shiftable_c_1st},'៉','េ','ី'])){
        m=1;   // Line 518
        k.KDC(4,t);
        k.KIO(-1,this.s_shiftable_c_1st,1,t);
        k.KO(-1,t,"៊ើ");
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_shiftable_c_2nd},'េ','ុ','ី'])){
        m=1;   // Line 550
        k.KDC(4,t);
        k.KIO(-1,this.s_shiftable_c_2nd,1,t);
        k.KO(-1,t,"៉ើ");
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_shiftable_c_2nd},'ុ','េ','ី'])){
        m=1;   // Line 551
        k.KDC(4,t);
        k.KIO(-1,this.s_shiftable_c_2nd,1,t);
        k.KO(-1,t,"៉ើ");
      }
      else if(k.KFCM(4,t,[{t:'a',a:this.s_shiftable_c_2nd},'៊','េ','ី'])){
        m=1;   // Line 552
        k.KDC(4,t);
        k.KIO(-1,this.s_shiftable_c_2nd,1,t);
        k.KO(-1,t,"៉ើ");
      }
      else if(k.KFCM(3,t,[{t:'a',a:this.s_v_gen},{t:'a',a:this.s_v_pseudo},{t:'a',a:this.s_c_shifter}])){
        m=1;   // Line 302
        k.KDC(3,t);
        k.KIO(-1,this.s_c_shifter,3,t);
        k.KIO(-1,this.s_v_gen,1,t);
        k.KIO(-1,this.s_v_pseudo,2,t);
      }
      else if(k.KFCM(3,t,[{t:'a',a:this.s_c_shifter},{t:'a',a:this.s_v_any},{t:'a',a:this.s_c_shifter}])){
        m=1;   // Line 303
        k.KDC(3,t);
        k.KIO(-1,this.s_c_shifter,3,t);
        k.KIO(-1,this.s_v_any,2,t);
      }
      else if(k.KFCM(3,t,[{t:'a',a:this.s_v_gen},{t:'a',a:this.s_v_pseudo},{t:'a',a:this.s_v_gen}])){
        m=1;   // Line 312
        k.KDC(3,t);
        k.KIO(-1,this.s_v_gen,3,t);
      }
      else if(k.KFCM(3,t,[{t:'a',a:this.s_v_gen},{t:'a',a:this.s_v_pseudo},{t:'a',a:this.s_v_pseudo}])){
        m=1;   // Line 313
        k.KDC(3,t);
        k.KIO(-1,this.s_v_pseudo,3,t);
      }
      else if(k.KFCM(3,t,[{t:'a',a:this.s_v_gen},{t:'a',a:this.s_v_gen},{t:'a',a:this.s_v_pseudo}])){
        m=1;   // Line 314
        k.KDC(3,t);
        k.KIO(-1,this.s_v_gen,2,t);
        k.KIO(-1,this.s_v_pseudo,3,t);
      }
      else if(k.KFCM(3,t,[{t:'a',a:this.s_v_pseudo},{t:'a',a:this.s_v_gen},{t:'a',a:this.s_v_pseudo}])){
        m=1;   // Line 315
        k.KDC(3,t);
        k.KIO(-1,this.s_v_gen,2,t);
        k.KIO(-1,this.s_v_pseudo,3,t);
      }
      else if(k.KFCM(3,t,['្',{t:'a',a:this.s_v_gen},{t:'a',a:this.s_v_pseudo}])){
        m=1;   // Line 324
        k.KDC(3,t);
        k.KIO(-1,this.s_v_gen,2,t);
        k.KIO(-1,this.s_v_pseudo,3,t);
      }
      else if(k.KFCM(3,t,[{t:'a',a:this.s_v_any},'្',{t:'a',a:this.s_subcons}])){
        m=1;   // Line 328
        k.KDC(3,t);
        k.KO(-1,t,"្");
        k.KIO(-1,this.s_subcons,3,t);
        k.KIO(-1,this.s_v_any,1,t);
      }
      else if(k.KFCM(3,t,[{t:'a',a:this.s_c_shifter},'្',{t:'a',a:this.s_subcons}])){
        m=1;   // Line 359
        k.KDC(3,t);
        k.KO(-1,t,"្");
        k.KIO(-1,this.s_subcons,3,t);
        k.KIO(-1,this.s_c_shifter,1,t);
      }
      else if(k.KFCM(3,t,[{t:'a',a:this.s_shiftable_c_1st},'ុ',{t:'a',a:this.s_v_above}])){
        m=1;   // Line 419
        k.KDC(3,t);
        k.KIO(-1,this.s_shiftable_c_1st,1,t);
        k.KO(-1,t,"៊");
        k.KIO(-1,this.s_v_above,3,t);
      }
      else if(k.KFCM(3,t,[{t:'a',a:this.s_shiftable_c_1st},{t:'a',a:this.s_v_above},'ុ'])){
        m=1;   // Line 421
        k.KDC(3,t);
        k.KIO(-1,this.s_shiftable_c_1st,1,t);
        k.KO(-1,t,"៊");
        k.KIO(-1,this.s_v_above,2,t);
      }
      else if(k.KFCM(3,t,[{t:'a',a:this.s_shiftable_c_2nd},'ុ',{t:'a',a:this.s_v_above}])){
        m=1;   // Line 426
        k.KDC(3,t);
        k.KIO(-1,this.s_shiftable_c_2nd,1,t);
        k.KO(-1,t,"៉");
        k.KIO(-1,this.s_v_above,3,t);
      }
      else if(k.KFCM(3,t,[{t:'a',a:this.s_shiftable_c_2nd},{t:'a',a:this.s_v_above},'ុ'])){
        m=1;   // Line 428
        k.KDC(3,t);
        k.KIO(-1,this.s_shiftable_c_2nd,1,t);
        k.KO(-1,t,"៉");
        k.KIO(-1,this.s_v_above,2,t);
      }
      else if(k.KFCM(3,t,[{t:'a',a:this.s_shiftable_c_2nd},'៊',{t:'a',a:this.s_v_above}])){
        m=1;   // Line 440
        k.KDC(3,t);
        k.KIO(-1,this.s_shiftable_c_2nd,1,t);
        k.KO(-1,t,"៉");
        k.KIO(-1,this.s_v_above,3,t);
      }
      else if(k.KFCM(3,t,[{t:'a',a:this.s_shiftable_c_1st},'៉',{t:'a',a:this.s_v_above}])){
        m=1;   // Line 457
        k.KDC(3,t);
        k.KIO(-1,this.s_shiftable_c_1st,1,t);
        k.KO(-1,t,"៊");
        k.KIO(-1,this.s_v_above,3,t);
      }
      else if(k.KFCM(3,t,['ណ','្','ត'])){
        m=1;   // Line 564
        k.KDC(3,t);
        k.KO(-1,t,"ណ");
        k.KO(-1,t,"្ដ");
      }
      else if(k.KFCM(3,t,['ន','្','ដ'])){
        m=1;   // Line 565
        k.KDC(3,t);
        k.KO(-1,t,"ន");
        k.KO(-1,t,"្ត");
      }
      else if(k.KFCM(3,t,['ទ','្','ប'])){
        m=1;   // Line 569
        k.KDC(3,t);
        k.KO(-1,t,"ឡ");
      }
      else if(k.KFCM(3,t,['ប','្','ញ'])){
        m=1;   // Line 571
        k.KDC(3,t);
        k.KO(-1,t,"ឫ");
      }
      else if(k.KFCM(3,t,['ព','្','ញ'])){
        m=1;   // Line 577
        k.KDC(3,t);
        k.KO(-1,t,"ឭ");
      }
      else if(k.KFCM(3,t,['ព','្','ឋ'])){
        m=1;   // Line 580
        k.KDC(3,t);
        k.KO(-1,t,"ឰ");
      }
      else if(k.KFCM(3,t,['ដ','្','ធ'])){
        m=1;   // Line 588
        k.KDC(3,t);
        k.KO(-1,t,"ដ្ឋ");
      }
      else if(k.KFCM(3,t,['ទ','្','ឋ'])){
        m=1;   // Line 589
        k.KDC(3,t);
        k.KO(-1,t,"ទ្ធ");
      }
      else if(k.KFCM(2,t,['េ','ា'])){
        m=1;   // Line 289
        k.KDC(2,t);
        k.KO(-1,t,"ោ");
      }
      else if(k.KFCM(2,t,['ា','េ'])){
        m=1;   // Line 290
        k.KDC(2,t);
        k.KO(-1,t,"ោ");
      }
      else if(k.KFCM(2,t,['េ','ី'])){
        m=1;   // Line 291
        k.KDC(2,t);
        k.KO(-1,t,"ើ");
      }
      else if(k.KFCM(2,t,['ី','េ'])){
        m=1;   // Line 292
        k.KDC(2,t);
        k.KO(-1,t,"ើ");
      }
      else if(k.KFCM(2,t,['ំ','ុ'])){
        m=1;   // Line 296
        k.KDC(2,t);
        k.KO(-1,t,"ុំ");
      }
      else if(k.KFCM(2,t,['ំ','ា'])){
        m=1;   // Line 297
        k.KDC(2,t);
        k.KO(-1,t,"ាំ");
      }
      else if(k.KFCM(2,t,[{t:'a',a:this.s_v_any},{t:'a',a:this.s_c_shifter}])){
        m=1;   // Line 301
        k.KDC(2,t);
        k.KIO(-1,this.s_c_shifter,2,t);
        k.KIO(-1,this.s_v_any,1,t);
      }
      else if(k.KFCM(2,t,[{t:'a',a:this.s_v_gen},{t:'a',a:this.s_v_gen}])){
        m=1;   // Line 308
        k.KDC(2,t);
        k.KIO(-1,this.s_v_gen,2,t);
      }
      else if(k.KFCM(2,t,[{t:'a',a:this.s_v_pseudo},{t:'a',a:this.s_v_pseudo}])){
        m=1;   // Line 317
        k.KDC(2,t);
        k.KIO(-1,this.s_v_pseudo,2,t);
      }
      else if(k.KFCM(2,t,['្','្'])){
        m=1;   // Line 322
        k.KDC(2,t);
        k.KO(-1,t,"្");
      }
      else if(k.KFCM(2,t,['្',{t:'a',a:this.s_v_any}])){
        m=1;   // Line 323
        k.KDC(2,t);
        k.KIO(-1,this.s_v_any,2,t);
      }
      else if(k.KFCM(2,t,['ឫ','ុ'])){
        m=1;   // Line 572
        k.KDC(2,t);
        k.KO(-1,t,"ឬ");
      }
      else if(k.KFCM(2,t,['ឭ','ា'])){
        m=1;   // Line 574
        k.KDC(2,t);
        k.KO(-1,t,"ញ");
      }
      else if(k.KFCM(2,t,['ឮ','ា'])){
        m=1;   // Line 575
        k.KDC(2,t);
        k.KO(-1,t,"ញ");
      }
      else if(k.KFCM(2,t,['ឭ','ុ'])){
        m=1;   // Line 578
        k.KDC(2,t);
        k.KO(-1,t,"ឮ");
      }
      else if(k.KFCM(2,t,['ឧ','ិ'])){
        m=1;   // Line 582
        k.KDC(2,t);
        k.KO(-1,t,"ឱ");
      }
      else if(k.KFCM(2,t,['ឧ','៌'])){
        m=1;   // Line 583
        k.KDC(2,t);
        k.KO(-1,t,"ឱ");
      }
      else if(k.KFCM(2,t,['ឧ','៍'])){
        m=1;   // Line 584
        k.KDC(2,t);
        k.KO(-1,t,"ឱ");
      }
    return r;
  };
}
