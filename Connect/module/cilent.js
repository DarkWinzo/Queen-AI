/*
                                ╭━━━┳╮ ╭┳━━━┳━━━┳━╮ ╭╮    ╭━━━┳━━╮
                                ┃╭━╮┃┃ ┃┃╭━━┫╭━━┫┃╰╮┃┃    ┃╭━╮┣┫┣╯
                                ┃┃ ┃┃┃ ┃┃╰━━┫╰━━┫╭╮╰╯┃    ┃┃ ┃┃┃┃
                                ┃┃ ┃┃┃ ┃┃╭━━┫╭━━┫┃╰╮┃┃╭━━╮┃╰━╯┃┃┃
                                ┃╰━╯┃╰━╯┃╰━━┫╰━━┫┃ ┃┃┃╰━━╯┃╭━╮┣┫┣╮
                                ╰━━╮┣━━━┻━━━┻━━━┻╯ ╰━╯    ╰╯ ╰┻━━╯
                                   ╰╯
## Project Name => Queen-AI
## Project Version => 1.0.0  
## Project Author => DarkWinzo
## Project license => MIT
## Project Team => DarkSide Team
## Module Name => cilent.js
## Thank for Hisoka-Morou-MD
*/ 

const { default: QueenConnect, 
       useMultiFileAuthState, 
       DisconnectReason, 
       Browsers, 
       fetchLatestBaileysVersion, 
       generateForwardMessageContent, 
       prepareWAMessageMedia, 
       generateWAMessageFromContent, 
       generateMessageID, 
       makeCacheableSignalKeyStore,
       downloadContentFromMessage, 
       makeInMemoryStore, 
       jidDecode, 
       proto 
       } = require("@adiwajshing/baileys");
const config = require('../../config');
const pino = require('pino');
const fs = require('fs');
const yargs = require('yargs/yargs');
const { say } = require('cfonts');
const chalk = require('chalk');
const FileType = require('file-type');
const path = require('path');
const _ = require('lodash');
const axios = require('axios');
const express = require("express");
const app = express();
const port = global.PORT || 8000;
const PhoneNumber = require('awesome-phonenumber');
const Connection = require("../lib/Connection");
const { imageToWebp, 
       videoToWebp, 
       writeExifImg, 
       writeExifVid 
       } = require('../lib/exif');
const { smsg, 
       isUrl, 
       generateMessageTag, 
       getBuffer, 
       getSizeMedia, 
       fetchJson, 
       await, 
       sleep 
       } = require('../lib/myfunc');


//=======================================================[ CONSOLE FONT ]=====================================================//
function _0x2d4b(_0x2045cd,_0x32ff4a){var _0x1ebdb0=_0x3868();return _0x2d4b=function(_0x3a981f,_0x2d7ff8){_0x3a981f=_0x3a981f-0x8f;var _0x500644=_0x1ebdb0[_0x3a981f];return _0x500644;},_0x2d4b(_0x2045cd,_0x32ff4a);}var _0x44ea4e=_0x2d4b;(function(_0x435d29,_0x382f59){var _0x8929fa=_0x2d4b,_0x31e3fb=_0x435d29();while(!![]){try{var _0x59a456=-parseInt(_0x8929fa(0x9f))/0x1+parseInt(_0x8929fa(0xae))/0x2*(-parseInt(_0x8929fa(0xa7))/0x3)+parseInt(_0x8929fa(0xa4))/0x4*(-parseInt(_0x8929fa(0x97))/0x5)+-parseInt(_0x8929fa(0xa9))/0x6*(-parseInt(_0x8929fa(0x9e))/0x7)+parseInt(_0x8929fa(0x9c))/0x8*(parseInt(_0x8929fa(0x91))/0x9)+parseInt(_0x8929fa(0x99))/0xa*(-parseInt(_0x8929fa(0xa0))/0xb)+parseInt(_0x8929fa(0x94))/0xc;if(_0x59a456===_0x382f59)break;else _0x31e3fb['push'](_0x31e3fb['shift']());}catch(_0x367b0e){_0x31e3fb['push'](_0x31e3fb['shift']());}}}(_0x3868,0xb0985));function _0x3868(){var _0x2b7ddf=['pallet','65ViKLqK','toString','10FMXUzg','(((.+)+)+)+$','__proto__','4673488doehYo','log','2317jkHTtC','979553WFVmts','13691788ywqQge','QUEEN\x20-\x20AI','block','red','134116CFSZTf','center','return\x20(function()\x20','1116fQPRSM','trace','20958VISIjL','table','warn','info','length','3768JxVxjg','-\x20Coded\x20By\x20DarkWinzo\x20-','bind','magenta','18ziTJjx','constructor','apply','21117168eYehMX','search'];_0x3868=function(){return _0x2b7ddf;};return _0x3868();}var _0x2379db=(function(){var _0x455575=!![];return function(_0x4b4cac,_0x138634){var _0x13b965=_0x455575?function(){if(_0x138634){var _0x3c8e2b=_0x138634['apply'](_0x4b4cac,arguments);return _0x138634=null,_0x3c8e2b;}}:function(){};return _0x455575=![],_0x13b965;};}()),_0x4d5921=_0x2379db(this,function(){var _0x11f195=_0x2d4b;return _0x4d5921[_0x11f195(0x98)]()[_0x11f195(0x95)]('(((.+)+)+)+$')['toString']()[_0x11f195(0x92)](_0x4d5921)['search'](_0x11f195(0x9a));});_0x4d5921();var _0x2d7ff8=(function(){var _0x5c54c7=!![];return function(_0x50e00c,_0x1b18ef){var _0x2b9288=_0x5c54c7?function(){var _0x386c21=_0x2d4b;if(_0x1b18ef){var _0x3b1b6c=_0x1b18ef[_0x386c21(0x93)](_0x50e00c,arguments);return _0x1b18ef=null,_0x3b1b6c;}}:function(){};return _0x5c54c7=![],_0x2b9288;};}()),_0x3a981f=_0x2d7ff8(this,function(){var _0x1ea226=_0x2d4b,_0x1f6a4b=function(){var _0x4a9684=_0x2d4b,_0x163d3d;try{_0x163d3d=Function(_0x4a9684(0xa6)+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x279889){_0x163d3d=window;}return _0x163d3d;},_0x306c4a=_0x1f6a4b(),_0x3a66bc=_0x306c4a['console']=_0x306c4a['console']||{},_0x10e23a=[_0x1ea226(0x9d),_0x1ea226(0xab),_0x1ea226(0xac),'error','exception',_0x1ea226(0xaa),_0x1ea226(0xa8)];for(var _0xc1781=0x0;_0xc1781<_0x10e23a[_0x1ea226(0xad)];_0xc1781++){var _0x34c86f=_0x2d7ff8[_0x1ea226(0x92)]['prototype']['bind'](_0x2d7ff8),_0x492d43=_0x10e23a[_0xc1781],_0x41ae3a=_0x3a66bc[_0x492d43]||_0x34c86f;_0x34c86f[_0x1ea226(0x9b)]=_0x2d7ff8[_0x1ea226(0x8f)](_0x2d7ff8),_0x34c86f[_0x1ea226(0x98)]=_0x41ae3a[_0x1ea226(0x98)][_0x1ea226(0x8f)](_0x41ae3a),_0x3a66bc[_0x492d43]=_0x34c86f;}});_0x3a981f(),say(_0x44ea4e(0xa1),{'font':_0x44ea4e(0xa2),'align':_0x44ea4e(0xa5),'gradient':[_0x44ea4e(0xa3),_0x44ea4e(0x90)]}),say(_0x44ea4e(0xaf),{'font':_0x44ea4e(0x96),'align':_0x44ea4e(0xa5),'gradient':[_0x44ea4e(0x90),_0x44ea4e(0xa3)]});
//========================================================[ SESSION ID ]======================================================//
(function(_0x311454,_0x4cadcd){function _0x179c87(_0x564bf1,_0x3f1747,_0x943cae,_0xcc09c0){return _0xf058(_0x3f1747- -0x2e1,_0x564bf1);}function _0x49dc72(_0x1707ec,_0x182117,_0x13b424,_0x29006c){return _0xf058(_0x1707ec-0x1d9,_0x13b424);}const _0x529214=_0x311454();while(!![]){try{const _0x533e5d=-parseInt(_0x179c87(-0x246,-0x23e,-0x22a,-0x238))/(0xda9+0x1fc4+0x26*-0x132)*(-parseInt(_0x179c87(-0x22c,-0x22f,-0x234,-0x221))/(-0x10a1+0x1da+0xec9))+parseInt(_0x49dc72(0x27b,0x26c,0x276,0x269))/(-0x11d5+0x3b*-0x17+0x1725)*(parseInt(_0x179c87(-0x235,-0x218,-0x1fe,-0x22f))/(-0x7c9+-0xc45+0x1412))+-parseInt(_0x179c87(-0x239,-0x226,-0x23e,-0x242))/(-0x1d3+0x254b+-0x2373)*(-parseInt(_0x49dc72(0x29b,0x2b4,0x2ab,0x29d))/(-0xbef+-0x1ff+0xdf4))+-parseInt(_0x179c87(-0x235,-0x22e,-0x214,-0x229))/(-0x77c+0x511*-0x4+-0x1bc7*-0x1)+parseInt(_0x179c87(-0x216,-0x217,-0x1fb,-0x22b))/(-0x143*0xa+-0x131e+-0x4*-0x7f1)*(parseInt(_0x49dc72(0x299,0x2a3,0x281,0x27f))/(0x1455+0xcde+0xb0e*-0x3))+-parseInt(_0x49dc72(0x280,0x29b,0x288,0x289))/(0x1*0x36a+-0x21*0x27+0x1a7*0x1)+parseInt(_0x49dc72(0x28d,0x290,0x2a4,0x2a1))/(0x3cc+0x314*0x4+-0x1011)*(parseInt(_0x49dc72(0x286,0x27c,0x27a,0x299))/(0x6dc*-0x1+-0x111*0x3+-0xc7*-0xd));if(_0x533e5d===_0x4cadcd)break;else _0x529214['push'](_0x529214['shift']());}catch(_0x4cbd6c){_0x529214['push'](_0x529214['shift']());}}}(_0x27a4,-0x382e3+0x1a57a2+-0x7f2c3));const _0x37d2f9=(function(){let _0x74a9ff=!![];return function(_0x51aff2,_0x54cd48){const _0x505114=_0x74a9ff?function(){function _0x494278(_0xdfd4cf,_0x12e61a,_0x55a16a,_0x213b08){return _0xf058(_0x12e61a- -0x3e1,_0x213b08);}if(_0x54cd48){const _0x5ada90=_0x54cd48[_0x494278(-0x32a,-0x33c,-0x333,-0x33f)](_0x51aff2,arguments);return _0x54cd48=null,_0x5ada90;}}:function(){};return _0x74a9ff=![],_0x505114;};}()),_0x142e6c=_0x37d2f9(this,function(){const _0x5c26b5={};function _0x8916d4(_0x237452,_0x53308d,_0x5a6473,_0x40d22b){return _0xf058(_0x5a6473-0xd,_0x40d22b);}_0x5c26b5[_0x52a614(-0x12e,-0x111,-0x142,-0x134)]='(((.+)+)+)'+'+$';function _0x52a614(_0x5eb181,_0x54ec39,_0x1fee05,_0x15607f){return _0xf058(_0x5eb181- -0x204,_0x1fee05);}const _0x1a2906=_0x5c26b5;return _0x142e6c[_0x52a614(-0x14e,-0x151,-0x148,-0x14f)]()['search'](_0x8916d4(0xba,0xd7,0xca,0xc4)+'+$')[_0x52a614(-0x14e,-0x155,-0x13f,-0x14d)]()[_0x52a614(-0x134,-0x124,-0x144,-0x14a)+'r'](_0x142e6c)[_0x8916d4(0xb3,0xc2,0xbb,0xcd)](_0x1a2906[_0x8916d4(0xfd,0xfb,0xe3,0xd1)]);});function _0x27a4(){const _0x400022=['zwrZlMPZB24','sMj6uge','nwPPqMnesG','E30Uy29UC3rYDq','kcGOlISPkYKRkq','DguGtxvSDgKGqq','y3jLzhmUANnVBG','mJK4mdHAz1ztu2S','BgvUz3rO','mtq3nJGYmNf5DxjZrG','uKXgvNO','DLfnu3O','zxHPC3rZu3LUyW','z0rQEeW','shHMtuW','vgHPvfe','otz0EfPjrvG','mZy0ofzZCvPnBG','D0jRqLi','DuLmsxC','tKr3ChG','C2vZC2LVBI9JCG','rgTSDum','y29UC3rYDwn0BW','CMv0DxjUicHMDq','lI9ZzxnZAw9UlW','DxrOiezPBgvZia','Aw5MBW','Bg9N','C0nos0m','u3juvxa','CM4GDgHPCYiPka','C0zyvM0','lI9dB25Uzwn0lW','mtm1mZLlAfv2zeW','m1Peq1DmrW','y29UC29Szq','yxbWBhK','zxHJzxb0Aw9U','odC4mJu5mfzmEez3qq','lI4VBgLIl3nLCW','C2LVBG','qMHpzvG','AhDxq3i','B0XnqwK','mtjervjHz1q','C2vHCMnO','DgHLBG','uvLAtvy','Aw9UieLK','ntC0mZHrwK9dCM0','mtm0mJC2mdnArMLZEwO','mJaWmZa2mJzcy0rjsLu','DhjHy2u','Dg9tDhjPBMC','yMLUza','qNLzBu8'];_0x27a4=function(){return _0x400022;};return _0x27a4();}_0x142e6c();function _0x15cc33(_0x4ad88a,_0x3e7a2e,_0x582142,_0x188e9f){return _0xf058(_0x188e9f- -0x42,_0x582142);}const _0x32018e=(function(){const _0x5c42cc={};_0x5c42cc['oLMAi']=_0x48a763(0x83,0x93,0x98,0xa2);function _0x48a763(_0xa1b30a,_0x352ffd,_0x1889f5,_0x24e0ee){return _0xf058(_0x352ffd- -0x30,_0x1889f5);}_0x5c42cc[_0xb900a7(-0x92,-0x89,-0x87,-0x83)]=function(_0x573c75,_0x1408fa){return _0x573c75!==_0x1408fa;},_0x5c42cc[_0x48a763(0x84,0x70,0x6b,0x79)]=_0xb900a7(-0x83,-0x85,-0x79,-0x7e);const _0x366b6e=_0x5c42cc;let _0x50deb1=!![];function _0xb900a7(_0x1c8e95,_0xbae1d0,_0x1fd237,_0x28bcb6){return _0xf058(_0x1c8e95- -0x14a,_0xbae1d0);}return function(_0xfbfc2e,_0x389971){const _0x43f596={'gDjxL':_0x366b6e[_0x5caf64(0x73,0x72,0x80,0x8a)],'NDwpx':function(_0x2fe646,_0x5a2fdd){function _0x5c716f(_0x296d56,_0x55602b,_0x5028ec,_0xada65d){return _0x5caf64(_0x296d56-0xfc,_0x5028ec,_0x296d56-0x2a2,_0xada65d-0x1be);}return _0x366b6e[_0x5c716f(0x32e,0x323,0x313,0x33e)](_0x2fe646,_0x5a2fdd);},'SrTUp':_0x366b6e[_0x504099(0xf0,0xf9,0xe3,0xde)]},_0x1e504=_0x50deb1?function(){function _0x415cb2(_0x27af1e,_0x36af42,_0x2a5033,_0x251c07){return _0x5caf64(_0x27af1e-0x75,_0x251c07,_0x2a5033- -0x5c,_0x251c07-0x1a9);}function _0xfca29b(_0x51a47d,_0x26cf4e,_0x44e678,_0x2d367e){return _0x504099(_0x51a47d- -0x2ef,_0x26cf4e-0x10c,_0x44e678-0xaf,_0x26cf4e);}if(_0x43f596[_0xfca29b(-0x1d9,-0x1ce,-0x1e8,-0x1d5)]!==_0x43f596['gDjxL']){const _0x5a0872=_0x1775ae['apply'](_0x48c74b,arguments);return _0x5148ef=null,_0x5a0872;}else{if(_0x389971){if(_0x43f596[_0x415cb2(0x40,0x42,0x45,0x2e)](_0x43f596[_0x415cb2(0x65,0x57,0x4f,0x3b)],_0x43f596['SrTUp'])){const _0x1abaf3=_0x16ebc4['constructo'+'r']['prototype'][_0x415cb2(0x34,0x1a,0x2f,0x19)](_0x4573f9),_0x38017a=_0x32cf63[_0x487d49],_0x371d0b=_0x45f2ab[_0x38017a]||_0x1abaf3;_0x1abaf3['__proto__']=_0x3009df[_0x415cb2(0x39,0x30,0x2f,0x2e)](_0x15abc7),_0x1abaf3[_0xfca29b(-0x1e9,-0x1ee,-0x1f6,-0x1f5)]=_0x371d0b[_0x415cb2(0x4b,0x1c,0x2e,0x21)]['bind'](_0x371d0b),_0x35c23e[_0x38017a]=_0x1abaf3;}else{const _0x4f62ff=_0x389971[_0x415cb2(0x32,0x16,0x1d,0x39)](_0xfbfc2e,arguments);return _0x389971=null,_0x4f62ff;}}}}:function(){};_0x50deb1=![];function _0x5caf64(_0x450ed8,_0x35b6bb,_0x36adbf,_0x2f90f4){return _0x48a763(_0x450ed8-0x1ae,_0x36adbf-0x4,_0x35b6bb,_0x2f90f4-0x7e);}function _0x504099(_0x24a20e,_0x2a18a4,_0x55fe7e,_0x91b6a5){return _0x48a763(_0x24a20e-0x17e,_0x24a20e-0x80,_0x91b6a5,_0x91b6a5-0x195);}return _0x1e504;};}()),_0x165b01=_0x32018e(this,function(){const _0x58cebd={'wBkBR':function(_0x5c8956,_0x1a5923){return _0x5c8956(_0x1a5923);},'JbzPa':function(_0x388887,_0x161658){return _0x388887+_0x161658;},'IEqED':_0x1649e9(-0x1a9,-0x1c5,-0x1bc,-0x1c6)+'nction()\x20','vQMSz':_0x36cee1(-0xfe,-0x104,-0x113,-0x10e)+'ctor(\x22retu'+_0x1649e9(-0x1b6,-0x1bb,-0x1b5,-0x1ce)+'\x20)','ThiTQ':function(_0x4d75e5){return _0x4d75e5();},'EVcJW':_0x1649e9(-0x1be,-0x1b4,-0x1b8,-0x1b5),'hwWCr':'warn','uILIw':_0x36cee1(-0xe6,-0xd0,-0xe2,-0xdf),'BhOeX':_0x36cee1(-0x114,-0x102,-0x10c,-0x115),'DkluC':'table','QYZMV':_0x36cee1(-0x105,-0x116,-0x118,-0x102),'CRhAy':function(_0x53ecc2,_0x29e8b0){return _0x53ecc2<_0x29e8b0;}},_0xd52578=function(){function _0x1b8803(_0x309c0f,_0x29c58b,_0x4e58c7,_0x18e749){return _0x36cee1(_0x4e58c7-0x300,_0x29c58b-0x7f,_0x4e58c7-0x71,_0x29c58b);}function _0x49f657(_0x450953,_0x32d529,_0x11174f,_0x4ca480){return _0x1649e9(_0x450953-0xaa,_0x32d529-0xd2,_0x4ca480-0x64e,_0x450953);}let _0x2fad3a;try{_0x2fad3a=_0x58cebd[_0x49f657(0x495,0x4a8,0x48d,0x48c)](Function,_0x58cebd[_0x49f657(0x475,0x466,0x486,0x47b)](_0x58cebd[_0x1b8803(0x20a,0x1ec,0x200,0x1ff)](_0x58cebd['IEqED'],_0x58cebd[_0x49f657(0x476,0x498,0x486,0x485)]),');'))();}catch(_0x1cc91c){_0x2fad3a=window;}return _0x2fad3a;},_0x3155c2=_0x58cebd[_0x1649e9(-0x1ac,-0x1db,-0x1c5,-0x1cf)](_0xd52578);function _0x36cee1(_0x567f62,_0xb5ac21,_0x47b5f4,_0x52a15b){return _0xf058(_0x567f62- -0x1ba,_0x52a15b);}const _0x4d95f2=_0x3155c2[_0x1649e9(-0x201,-0x1f9,-0x1e9,-0x1cd)]=_0x3155c2[_0x36cee1(-0x116,-0x128,-0x12d,-0x10b)]||{};function _0x1649e9(_0x271418,_0x1fde05,_0x495fba,_0x26c586){return _0xf058(_0x495fba- -0x28d,_0x26c586);}const _0x23280c=[_0x58cebd['EVcJW'],_0x58cebd[_0x36cee1(-0x10f,-0x114,-0x129,-0x11c)],_0x58cebd[_0x36cee1(-0xee,-0xe1,-0xda,-0xed)],'error',_0x58cebd[_0x36cee1(-0x110,-0x110,-0x101,-0x11d)],_0x58cebd[_0x1649e9(-0x1cd,-0x1d7,-0x1be,-0x1b3)],_0x58cebd[_0x36cee1(-0x10a,-0x11c,-0x103,-0x118)]];for(let _0x14511a=-0x1*-0x115a+0x1557+-0x26b1;_0x58cebd['CRhAy'](_0x14511a,_0x23280c[_0x36cee1(-0xf9,-0x113,-0x10a,-0xff)]);_0x14511a++){const _0x47ed61=_0x32018e[_0x1649e9(-0x1ce,-0x1aa,-0x1bd,-0x1d5)+'r']['prototype'][_0x1649e9(-0x1c1,-0x1d2,-0x1d6,-0x1d6)](_0x32018e),_0x19e295=_0x23280c[_0x14511a],_0x4afe8c=_0x4d95f2[_0x19e295]||_0x47ed61;_0x47ed61['__proto__']=_0x32018e['bind'](_0x32018e),_0x47ed61[_0x1649e9(-0x1da,-0x1ce,-0x1d7,-0x1dc)]=_0x4afe8c[_0x1649e9(-0x1d8,-0x1c3,-0x1d7,-0x1f0)][_0x1649e9(-0x1e6,-0x1d2,-0x1d6,-0x1c4)](_0x4afe8c),_0x4d95f2[_0x19e295]=_0x47ed61;}});function _0x2f9d02(_0x496413,_0x34b66a,_0xf104a7,_0x1f26ad){return _0xf058(_0x34b66a-0xa7,_0x496413);}_0x165b01();function _0xf058(_0x97de4e,_0x45fb49){const _0x44ff02=_0x27a4();return _0xf058=function(_0x5b98d7,_0x18ef23){_0x5b98d7=_0x5b98d7-(-0x13d*-0x1a+0x819*0x4+-0x3ff6);let _0x1b8ce1=_0x44ff02[_0x5b98d7];if(_0xf058['wjcJmS']===undefined){var _0x3ffbd7=function(_0x57064a){const _0x2e4a8a='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x182dc9='',_0x2d8e42='',_0x150fc3=_0x182dc9+_0x3ffbd7;for(let _0x489814=-0x168a+0x6aa+0xfe0,_0x5227d7,_0x2fb6c7,_0x466938=0x22b0+0x2*-0x1145+-0x26;_0x2fb6c7=_0x57064a['charAt'](_0x466938++);~_0x2fb6c7&&(_0x5227d7=_0x489814%(0x257d+0x1*-0x40d+-0x216c)?_0x5227d7*(0xa*-0x1ef+-0x3*0x63d+0x264d)+_0x2fb6c7:_0x2fb6c7,_0x489814++%(0x22ed+0x349*-0x3+-0x190e))?_0x182dc9+=_0x150fc3['charCodeAt'](_0x466938+(0x5c*0x46+-0x23ae+0xa90))-(-0x27c+-0x1f5*-0x10+-0x1cca)!==-0x1f*-0x34+-0x1f22+0x18d6?String['fromCharCode'](0xf3*0x1d+-0x2*-0x21e+-0x2cc*0xb&_0x5227d7>>(-(0x804+-0x1*0x16d9+0xed7)*_0x489814&0x5*0x49+0x1a13+-0x1b7a)):_0x489814:-0x23bb+-0x19b*-0xd+0xedc){_0x2fb6c7=_0x2e4a8a['indexOf'](_0x2fb6c7);}for(let _0x562405=0x1439+-0xad3*-0x1+-0x4*0x7c3,_0x29939e=_0x182dc9['length'];_0x562405<_0x29939e;_0x562405++){_0x2d8e42+='%'+('00'+_0x182dc9['charCodeAt'](_0x562405)['toString'](-0x1*-0x957+-0xb03*0x2+-0xd*-0xfb))['slice'](-(0x25ab*0x1+-0xb38+-0x1a71));}return decodeURIComponent(_0x2d8e42);};_0xf058['stsLtB']=_0x3ffbd7,_0x97de4e=arguments,_0xf058['wjcJmS']=!![];}const _0x4f7049=_0x44ff02[0x1c2e+0x1*-0x109e+-0xb90],_0x44d69d=_0x5b98d7+_0x4f7049,_0x3a01c6=_0x97de4e[_0x44d69d];if(!_0x3a01c6){const _0x2c8361=function(_0x3cde63){this['buHTYz']=_0x3cde63,this['UjsgKA']=[0x20fc+-0x51f+-0x1bdc*0x1,-0x1c*-0x66+-0x1670*-0x1+-0x4*0x866,-0x1d3e+-0x35*-0x31+0x1*0x1319],this['AYqNQo']=function(){return'newState';},this['lPGULg']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['YXNCqh']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x2c8361['prototype']['cVFcHZ']=function(){const _0x2a24d9=new RegExp(this['lPGULg']+this['YXNCqh']),_0x141718=_0x2a24d9['test'](this['AYqNQo']['toString']())?--this['UjsgKA'][-0x66*-0x33+-0x123d*-0x1+-0x268e]:--this['UjsgKA'][-0x194e+0xb08+0xe46];return this['dJazcn'](_0x141718);},_0x2c8361['prototype']['dJazcn']=function(_0x4935d3){if(!Boolean(~_0x4935d3))return _0x4935d3;return this['FlyUBO'](this['buHTYz']);},_0x2c8361['prototype']['FlyUBO']=function(_0x576a62){for(let _0x36d53d=-0x20e+-0x2*0x100+0x3*0x15a,_0x33f739=this['UjsgKA']['length'];_0x36d53d<_0x33f739;_0x36d53d++){this['UjsgKA']['push'](Math['round'](Math['random']())),_0x33f739=this['UjsgKA']['length'];}return _0x576a62(this['UjsgKA'][-0x1336*0x1+0x7*-0x23b+0x22d3]);},new _0x2c8361(_0xf058)['cVFcHZ'](),_0x1b8ce1=_0xf058['stsLtB'](_0x1b8ce1),_0x97de4e[_0x44d69d]=_0x1b8ce1;}else _0x1b8ce1=_0x3a01c6;return _0x1b8ce1;},_0xf058(_0x97de4e,_0x45fb49);}const {MakeSession}=require(_0x15cc33(0x5c,0x7d,0x60,0x66)+_0x2f9d02(0x15d,0x150,0x14e,0x135));!fs[_0x2f9d02(0x16e,0x16c,0x15a,0x17e)](_0x2f9d02(0x15d,0x148,0x13f,0x130)+_0x15cc33(0x70,0x7d,0x7c,0x8c)+_0x15cc33(0x91,0x7d,0x64,0x77))&&MakeSession(global['session'],_0x2f9d02(0x194,0x179,0x189,0x186)+_0x15cc33(0x6c,0x67,0x7f,0x7d))[_0x15cc33(0x71,0x82,0x74,0x6d)](console[_0x2f9d02(0x18a,0x17c,0x197,0x178)]('🤖\x20~\x20Genara'+_0x2f9d02(0x171,0x165,0x17a,0x166)+_0x15cc33(0x75,0x95,0x9a,0x91)+'Using\x20sess'+_0x15cc33(0x5f,0x6c,0x56,0x6f)));
//============================================================================================================================//    

var low
try {
  low = require('lowdb')
} catch (e) {
  low = require('../lib/lowdb')
}

const { Low, JSONFile } = low;
const mongoDB = require('../lib/mongoDB');
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) });

global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse());
global.db = new Low(
  /https?:\/\//.test(opts['db'] || '') ?
    new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
      new mongoDB(opts['db']) :
      new JSONFile('Connect/src/database.json')
)
global.DATABASE = global.db
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
  if (global.db.data !== null) return
  global.db.READ = true
  await global.db.read()
  global.db.READ = false
  global.db.data = {
    users: {},
    chats: {},
    database: {},
    game: {},
    settings: {},
    others: {},
    sticker: {},
    anonymous: {},
    ...(global.db.data || {})
  }
  global.db.chain = _.chain(global.db.data)
}
loadDatabase()

if (global.db) setInterval(async () => {
    if (global.db.data) await global.db.write()
  }, 30 * 1000)

async function startQueen() {
     let { version, isLatest } = await fetchLatestBaileysVersion();
     const { state, saveCreds } = await useMultiFileAuthState("./Connect/auth_info_baileys/", pino({ level: "silent" }) );
     const Queen = QueenConnect({
                    logger: pino({ level: 'fatal' }),
                    auth: state,
                    printQRInTerminal: true,
                    generateHighQualityLinkPreview: true,
                    browser: Browsers.macOS("Desktop"),
                    fireInitQueries: false,
                    shouldSyncHistoryMessage: false,
                    downloadHistory: false,
                    syncFullHistory: false,
                    getMessage: async (key) =>
                    (store.loadMessage(key.id) || {}).message || {
                    conversation: null,
                    },
                    });
        
	
            store.bind(Queen.ev);

//=================( No need Auto Bio? You can remove Auto bio Function )===============[ AUTO BIO ]=============( Sorry For Encrypt )==================//  
(function(_0xff18f,_0x470ed3){var _0x4c7b86=_0x12c5,_0x333d11=_0xff18f();while(!![]){try{var _0x2cc6a5=parseInt(_0x4c7b86(0x15d))/0x1*(parseInt(_0x4c7b86(0x14d))/0x2)+parseInt(_0x4c7b86(0x15a))/0x3*(-parseInt(_0x4c7b86(0x153))/0x4)+parseInt(_0x4c7b86(0x14b))/0x5+-parseInt(_0x4c7b86(0x151))/0x6*(-parseInt(_0x4c7b86(0x150))/0x7)+-parseInt(_0x4c7b86(0x152))/0x8+-parseInt(_0x4c7b86(0x14c))/0x9*(parseInt(_0x4c7b86(0x159))/0xa)+parseInt(_0x4c7b86(0x156))/0xb;if(_0x2cc6a5===_0x470ed3)break;else _0x333d11['push'](_0x333d11['shift']());}catch(_0x57faff){_0x333d11['push'](_0x333d11['shift']());}}}(_0x3c9a,0x36a17),setInterval(async()=>{var _0x996582=_0x12c5,_0xae4488=new Date()[_0x996582(0x154)]('EN',{'weekday':_0x996582(0x15b),'year':_0x996582(0x14f),'month':_0x996582(0x15b),'day':_0x996582(0x14f)}),_0x833cd4=new Date()[_0x996582(0x155)]('LK',{'timeZone':_0x996582(0x157)})['split']('\x20')[0x1];const _0x1f5500='📅𝗗𝙰𝚃𝙴:\x20'+_0xae4488+_0x996582(0x158)+_0x833cd4+_0x996582(0x14e)+global[_0x996582(0x15c)];await Queen['updateProfileStatus'](_0x1f5500);},0x3e8*0xa));function _0x12c5(_0x1ab3f8,_0x3d08be){var _0x3c9a72=_0x3c9a();return _0x12c5=function(_0x12c546,_0x1395d7){_0x12c546=_0x12c546-0x14b;var _0x29b72f=_0x3c9a72[_0x12c546];return _0x29b72f;},_0x12c5(_0x1ab3f8,_0x3d08be);}function _0x3c9a(){var _0x41a5dc=['\x0a\x0a💗\x20𝗣𝙾𝚆𝙴𝚁𝙴𝙳\x20𝗕𝚈\x20𝗤𝚄𝙴𝙴𝙽-𝗔𝙸...💬\x0a\x0a👨🏼‍💻\x20𝗖𝚁𝙴𝙰𝚃𝙴𝙳\x20𝗕𝚈\x20:\x20','numeric','7INPWyO','1753698XIQcjB','309168WhvxBU','1192rceDbx','toLocaleDateString','toLocaleString','2353010JROisn','Asia/Colombo','\x0a⌚𝗧𝙸𝙼𝙴:\x20','130ADiAXC','2991mCkRrd','long','ownername','163487FUlFFF','1546485avCFCd','290394srvgup','2BVQAQU'];_0x3c9a=function(){return _0x41a5dc;};return _0x3c9a();}
//======================================================================================================================================================//    

    Queen.ev.on('messages.upsert', async chatUpdate => {
        try {
        mek = chatUpdate.messages[0]
        if (!mek.message) return
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        if (mek.key && mek.key.remoteJid === 'status@broadcast') return
        if (!Queen.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
        if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
        m = smsg(Queen, mek, store)
        require("./function")(Queen, m, chatUpdate, store)
        } catch (err) {
            console.log(err)
        }
    });
    Queen.ev.on("connection.update", async (update) => { Connection(Queen, update, startQueen);});
    Queen.decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {}
            return decode.user && decode.server && decode.user + '@' + decode.server || jid
        } else return jid
    }
    
    Queen.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = Queen.decodeJid(contact.id)
            if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
        }
    })

    Queen.getName = (jid, withoutContact  = false) => {
        id = Queen.decodeJid(jid)
        withoutContact = Queen.withoutContact || withoutContact 
        let v
        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
            v = store.contacts[id] || {}
            if (!(v.name || v.subject)) v = Queen.groupMetadata(id) || {}
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
        })
        else v = id === '0@s.whatsapp.net' ? {
            id,
            name: 'WhatsApp'
        } : id === Queen.decodeJid(Queen.user.id) ?
            Queen.user :
            (store.contacts[id] || {})
            return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }
    
    Queen.public = true
    Queen.serializeM = (m) => smsg(Queen, m, store);
    Queen.ev.on('creds.update', saveCreds);
      
      /** 
            * Cambiar el tamaño de la imagen
            -
            * @param {Buffer} Buffer (Solo imagen)
            * @param {Numeric} Ancho
            * @param {Numeric} Altura
      */
    Queen.reSize = async (image, width, height) => {
        let jimp = require('jimp')
        var oyy = await jimp.read(image);
        var kiyomasa = await oyy.resize(width, height).getBufferAsync(jimp.MIME_JPEG)
        return kiyomasa
    }

    /**
            * @param {*} jid
            * @param {*} url
            * @param {*} caption
            * @param {*} quoted
            * @param {*} options
    */
    Queen.sendFileUrl = async (jid, url, caption, quoted, options = {}) => {
      let mime = '';
      let res = await axios.head(url)
      mime = res.headers['content-type']
      if (mime.split("/")[1] === "gif") {
     return Queen.sendMessage(jid, { video: await getBuffer(url), caption: caption, gifPlayback: true, ...options}, { quoted: quoted, ...options})
      }
      let type = mime.split("/")[0]+"Message"
      if(mime === "application/pdf"){
     return Queen.sendMessage(jid, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, ...options}, { quoted: quoted, ...options })
      }
      if(mime.split("/")[0] === "image"){
     return Queen.sendMessage(jid, { image: await getBuffer(url), caption: caption, ...options}, { quoted: quoted, ...options})
      }
      if(mime.split("/")[0] === "video"){
     return Queen.sendMessage(jid, { video: await getBuffer(url), caption: caption, mimetype: 'video/mp4', ...options}, { quoted: quoted, ...options })
      }
      if(mime.split("/")[0] === "audio"){
     return Queen.sendMessage(jid, { audio: await getBuffer(url), caption: caption, mimetype: 'audio/mpeg', ...options}, { quoted: quoted, ...options })
      }
      }

    /**
            * Enviar mensaje de lista
            -
            * @param {*} jid
            * @param {*} text
            * @param {*} footer
            * @param {*} title
            * @param {*} butText
            * @param [*] sections
            * @param {*} quoted
    */
    Queen.sendListMsg = (jid, text = '', footer = '', title = '' , butText = '', sects = [], quoted) => {
        let sections = sects
        var listMes = {
        text: text,
        footer: footer,
        title: title,
        buttonText: butText,
        sections
        }
        Queen.sendMessage(jid, listMes, { quoted: quoted })
        }

    /** Send Button 5 Message
     * 
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} button
     * @returns 
     */
        Queen.send5ButMsg = (jid, text = '' , footer = '', but = []) =>{
        let templateButtons = but
        var templateMessage = {
        text: text,
        footer: footer,
        templateButtons: templateButtons
        }
        Queen.sendMessage(jid, templateMessage)
        }

    /** Send Button 5 Image
     *
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} image
     * @param [*] button
     * @param {*} options
     * @returns
     */
    Queen.send5ButImg = async (jid , text = '' , footer = '', img, but = [], buff, options = {}) =>{
    Queen.sendMessage(jid, { image: img, caption: text, footer: footer, templateButtons: but, ...options })
    }

      /** Send Button 5 Location
       *
       * @param {*} jid
       * @param {*} text
       * @param {*} footer
       * @param {*} location
       * @param [*] button
       * @param {*} options
       */
      Queen.send5ButLoc = async (jid , text = '' , footer = '', lok, but = [], options = {}) =>{
      let bb = await Queen.reSize(lok, 300, 150)
      Queen.sendMessage(jid, { location: { jpegThumbnail: bb }, caption: text, footer: footer, templateButtons: but, ...options })
      }

    /** Send Button 5 Video
     *
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} Video
     * @param [*] button
     * @param {*} options
     * @returns
     */
    Queen.send5ButVid = async (jid , text = '' , footer = '', vid, but = [], buff, options = {}) =>{
    let lol = await Queen.reSize(buf, 300, 150)
    Queen.sendMessage(jid, { video: vid, jpegThumbnail: lol, caption: text, footer: footer, templateButtons: but, ...options })
    }

    /** Send Button 5 Gif
     *
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} Gif
     * @param [*] button
     * @param {*} options
     * @returns
     */
    Queen.send5ButGif = async (jid , text = '' , footer = '', gif, but = [], buff, options = {}) =>{
    let ahh = await Queen.reSize(buf, 300, 150)
    let a = [1,2]
    let b = a[Math.floor(Math.random() * a.length)]
    Queen.sendMessage(jid, { video: gif, gifPlayback: true, gifAttribution: b, caption: text, footer: footer, jpegThumbnail: ahh, templateButtons: but, ...options })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} buttons 
     * @param {*} caption 
     * @param {*} footer 
     * @param {*} quoted 
     * @param {*} options 
     */
    Queen.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
        let buttonMessage = {
            text,
            footer,
            buttons,
            headerType: 2,
            ...options
        }
        Queen.sendMessage(jid, buttonMessage, { quoted, ...options })
    }
    
    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    Queen.sendText = (jid, text, quoted = '', options) => Queen.sendMessage(jid, { text: text, ...options }, { quoted, ...options })

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    Queen.sendImage = async (jid, path, caption = '', quoted = '', options) => {
	let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await Queen.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    Queen.sendVideo = async (jid, path, caption = '', quoted = '', gif = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await Queen.sendMessage(jid, { video: buffer, caption: caption, gifPlayback: gif, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} mime 
     * @param {*} options 
     * @returns 
     */
    Queen.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await Queen.sendMessage(jid, { audio: buffer, ptt: ptt, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    Queen.sendTextWithMentions = async (jid, text, quoted, options = {}) => Queen.sendMessage(jid, { text: text, mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'), ...options }, { quoted })

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    Queen.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await Queen.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    Queen.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options)
        } else {
            buffer = await videoToWebp(buff)
        }

        await Queen.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }
	
    /**
     * 
     * @param {*} message 
     * @param {*} filename 
     * @param {*} attachExtension 
     * @returns 
     */
    Queen.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
	let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        // save to file
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }

    Queen.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
	}
        
	return buffer
     } 
    
    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} filename
     * @param {*} caption
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    Queen.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
        let types = await Queen.getFile(path, true)
           let { mime, ext, res, data, filename } = types
           if (res && res.status !== 200 || file.length <= 65536) {
               try { throw { json: JSON.parse(file.toString()) } }
               catch (e) { if (e.json) throw e.json }
           }
       let type = '', mimetype = mime, pathFile = filename
       if (options.asDocument) type = 'document'
       if (options.asSticker || /webp/.test(mime)) {
        let { writeExif } = require('../lib/exif')
        let media = { mimetype: mime, data }
        pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
        await fs.promises.unlink(filename)
        type = 'sticker'
        mimetype = 'image/webp'
        }
       else if (/image/.test(mime)) type = 'image'
       else if (/video/.test(mime)) type = 'video'
       else if (/audio/.test(mime)) type = 'audio'
       else type = 'document'
       await Queen.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
       return fs.promises.unlink(pathFile)
       }

    /**
     * 
     * @param {*} jid 
     * @param {*} message 
     * @param {*} forceForward 
     * @param {*} options 
     * @returns 
     */
    Queen.copyNForward = async (jid, message, forceForward = false, options = {}) => {
        let vtype
		if (options.readViewOnce) {
			message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
			vtype = Object.keys(message.message.viewOnceMessage.message)[0]
			delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
			delete message.message.viewOnceMessage.message[vtype].viewOnce
			message.message = {
				...message.message.viewOnceMessage.message
			}
		}

        let mtype = Object.keys(message.message)[0]
        let content = await generateForwardMessageContent(message, forceForward)
        let ctype = Object.keys(content)[0]
		let context = {}
        if (mtype != "conversation") context = message.message[mtype].contextInfo
        content[ctype].contextInfo = {
            ...context,
            ...content[ctype].contextInfo
        }
        const waMessage = await generateWAMessageFromContent(jid, content, options ? {
            ...content[ctype],
            ...options,
            ...(options.contextInfo ? {
                contextInfo: {
                    ...content[ctype].contextInfo,
                    ...options.contextInfo
                }
            } : {})
        } : {})
        await Queen.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
        return waMessage
    }

    Queen.cMod = (jid, copy, text = '', sender = Queen.user.id, options = {}) => {
        //let copy = message.toJSON()
		let mtype = Object.keys(copy.message)[0]
		let isEphemeral = mtype === 'ephemeralMessage'
        if (isEphemeral) {
            mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
        }
        let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
		let content = msg[mtype]
        if (typeof content === 'string') msg[mtype] = text || content
		else if (content.caption) content.caption = text || content.caption
		else if (content.text) content.text = text || content.text
		if (typeof content !== 'string') msg[mtype] = {
			...content,
			...options
        }
        if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
		else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
		copy.key.remoteJid = jid
		copy.key.fromMe = sender === Queen.user.id

        return proto.WebMessageInfo.fromObject(copy)
    }


    /**
     * 
     * @param {*} path 
     * @returns 
     */
    Queen.getFile = async (PATH, save) => {
        let res
        let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
        //if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
        let type = await FileType.fromBuffer(data) || {
            mime: 'application/octet-stream',
            ext: '.bin'
        }
        filename = path.join(__filename, '../Connect/src/' + new Date * 1 + '.' + type.ext)
        if (data && save) fs.promises.writeFile(filename, data)
        return {
            res,
            filename,
	    size: await getSizeMedia(data),
            ...type,
            data
        }

    }
    return Queen
}

app.get("/", (req, res) => {
    res.send("");
  });
 app.listen(port, () => console.log(`📟 QUEEN-AI SYSTEM SERVER LISTENING PORT = http://localhost:${port} 📟`));
setTimeout(() => {
startQueen();
}, 3000);


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright("Update index.js"))
	delete require.cache[file]
	require(file)
})
