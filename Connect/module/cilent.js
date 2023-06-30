/***
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
***/ 

const { default: QueenConnect, 
       useMultiFileAuthState, 
       DisconnectReason, 
       Browsers, 
       fetchLatestBaileysVersion, 
       generateForwardMessageContent, 
       prepareWAMessageMedia, 
       generateWAMessageFromContent, 
       generateMessageID, 
       makeCacheableSignalKeyStore, //Imlossible
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

/*
//=======================================================[ CONSOLE FONT ]=====================================================//
function _0x2d4b(_0x2045cd,_0x32ff4a){var _0x1ebdb0=_0x3868();return _0x2d4b=function(_0x3a981f,_0x2d7ff8){_0x3a981f=_0x3a981f-0x8f;var _0x500644=_0x1ebdb0[_0x3a981f];return _0x500644;},_0x2d4b(_0x2045cd,_0x32ff4a);}var _0x44ea4e=_0x2d4b;(function(_0x435d29,_0x382f59){var _0x8929fa=_0x2d4b,_0x31e3fb=_0x435d29();while(!![]){try{var _0x59a456=-parseInt(_0x8929fa(0x9f))/0x1+parseInt(_0x8929fa(0xae))/0x2*(-parseInt(_0x8929fa(0xa7))/0x3)+parseInt(_0x8929fa(0xa4))/0x4*(-parseInt(_0x8929fa(0x97))/0x5)+-parseInt(_0x8929fa(0xa9))/0x6*(-parseInt(_0x8929fa(0x9e))/0x7)+parseInt(_0x8929fa(0x9c))/0x8*(parseInt(_0x8929fa(0x91))/0x9)+parseInt(_0x8929fa(0x99))/0xa*(-parseInt(_0x8929fa(0xa0))/0xb)+parseInt(_0x8929fa(0x94))/0xc;if(_0x59a456===_0x382f59)break;else _0x31e3fb['push'](_0x31e3fb['shift']());}catch(_0x367b0e){_0x31e3fb['push'](_0x31e3fb['shift']());}}}(_0x3868,0xb0985));function _0x3868(){var _0x2b7ddf=['pallet','65ViKLqK','toString','10FMXUzg','(((.+)+)+)+$','__proto__','4673488doehYo','log','2317jkHTtC','979553WFVmts','13691788ywqQge','QUEEN\x20-\x20AI','block','red','134116CFSZTf','center','return\x20(function()\x20','1116fQPRSM','trace','20958VISIjL','table','warn','info','length','3768JxVxjg','-\x20Coded\x20By\x20DarkWinzo\x20-','bind','magenta','18ziTJjx','constructor','apply','21117168eYehMX','search'];_0x3868=function(){return _0x2b7ddf;};return _0x3868();}var _0x2379db=(function(){var _0x455575=!![];return function(_0x4b4cac,_0x138634){var _0x13b965=_0x455575?function(){if(_0x138634){var _0x3c8e2b=_0x138634['apply'](_0x4b4cac,arguments);return _0x138634=null,_0x3c8e2b;}}:function(){};return _0x455575=![],_0x13b965;};}()),_0x4d5921=_0x2379db(this,function(){var _0x11f195=_0x2d4b;return _0x4d5921[_0x11f195(0x98)]()[_0x11f195(0x95)]('(((.+)+)+)+$')['toString']()[_0x11f195(0x92)](_0x4d5921)['search'](_0x11f195(0x9a));});_0x4d5921();var _0x2d7ff8=(function(){var _0x5c54c7=!![];return function(_0x50e00c,_0x1b18ef){var _0x2b9288=_0x5c54c7?function(){var _0x386c21=_0x2d4b;if(_0x1b18ef){var _0x3b1b6c=_0x1b18ef[_0x386c21(0x93)](_0x50e00c,arguments);return _0x1b18ef=null,_0x3b1b6c;}}:function(){};return _0x5c54c7=![],_0x2b9288;};}()),_0x3a981f=_0x2d7ff8(this,function(){var _0x1ea226=_0x2d4b,_0x1f6a4b=function(){var _0x4a9684=_0x2d4b,_0x163d3d;try{_0x163d3d=Function(_0x4a9684(0xa6)+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x279889){_0x163d3d=window;}return _0x163d3d;},_0x306c4a=_0x1f6a4b(),_0x3a66bc=_0x306c4a['console']=_0x306c4a['console']||{},_0x10e23a=[_0x1ea226(0x9d),_0x1ea226(0xab),_0x1ea226(0xac),'error','exception',_0x1ea226(0xaa),_0x1ea226(0xa8)];for(var _0xc1781=0x0;_0xc1781<_0x10e23a[_0x1ea226(0xad)];_0xc1781++){var _0x34c86f=_0x2d7ff8[_0x1ea226(0x92)]['prototype']['bind'](_0x2d7ff8),_0x492d43=_0x10e23a[_0xc1781],_0x41ae3a=_0x3a66bc[_0x492d43]||_0x34c86f;_0x34c86f[_0x1ea226(0x9b)]=_0x2d7ff8[_0x1ea226(0x8f)](_0x2d7ff8),_0x34c86f[_0x1ea226(0x98)]=_0x41ae3a[_0x1ea226(0x98)][_0x1ea226(0x8f)](_0x41ae3a),_0x3a66bc[_0x492d43]=_0x34c86f;}});_0x3a981f(),say(_0x44ea4e(0xa1),{'font':_0x44ea4e(0xa2),'align':_0x44ea4e(0xa5),'gradient':[_0x44ea4e(0xa3),_0x44ea4e(0x90)]}),say(_0x44ea4e(0xaf),{'font':_0x44ea4e(0x96),'align':_0x44ea4e(0xa5),'gradient':[_0x44ea4e(0x90),_0x44ea4e(0xa3)]});
//========================================================[ SESSION ID ]======================================================//
(function(_0x2a65a9,_0x59baeb){const _0x562c90=_0x2a65a9();function _0x5183f8(_0x194399,_0xdcc344,_0x54c0b2,_0x2b1bc0){return _0x1198(_0x54c0b2- -0x372,_0x194399);}function _0xcd1367(_0x17472a,_0x2836ab,_0x58c549,_0x43c437){return _0x1198(_0x17472a- -0x1c5,_0x58c549);}while(!![]){try{const _0x1b73b3=-parseInt(_0xcd1367(-0x118,-0x12c,-0x115,-0x115))/(0x1004+0x5a3*-0x2+-0x4bd)*(parseInt(_0xcd1367(-0x125,-0x111,-0x131,-0x12a))/(-0x577*0x1+0x19c7+-0x144e))+-parseInt(_0x5183f8(-0x2de,-0x2e5,-0x2d8,-0x2f0))/(0x4b2+-0x1f2b+-0x14*-0x153)+parseInt(_0xcd1367(-0x111,-0x121,-0x10f,-0x11d))/(0x1acf+-0xa0c+-0x595*0x3)+parseInt(_0xcd1367(-0xfc,-0xf1,-0x113,-0xee))/(0xcd8+0x16f+-0xe42)+-parseInt(_0xcd1367(-0x117,-0x12b,-0x12b,-0x120))/(-0x2089+0x3a4+0x1ceb)+parseInt(_0x5183f8(-0x2ca,-0x2ea,-0x2d5,-0x2be))/(0x6b*-0x15+0x185a+-0xf8c)*(-parseInt(_0x5183f8(-0x2a0,-0x2ae,-0x2b6,-0x2a2))/(-0x18b*-0xd+-0x1334*0x1+-0xd3))+parseInt(_0xcd1367(-0x12c,-0x118,-0x11a,-0x127))/(0x11bc*-0x2+0x1*0xd13+0x77a*0x3);if(_0x1b73b3===_0x59baeb)break;else _0x562c90['push'](_0x562c90['shift']());}catch(_0x47659c){_0x562c90['push'](_0x562c90['shift']());}}}(_0x4c01,-0x1*0xbb12b+0xb07d8+0xca*0xb93));function _0x51ac27(_0x19405d,_0x590908,_0x54f404,_0x13b0de){return _0x1198(_0x54f404-0x124,_0x13b0de);}const _0x44f5ea=(function(){let _0x58449a=!![];return function(_0x25920c,_0x18ede6){const _0x9141f0=_0x58449a?function(){function _0x3ba911(_0x402087,_0x530d01,_0x100d72,_0x450837){return _0x1198(_0x450837- -0x2c3,_0x530d01);}if(_0x18ede6){const _0x34b28d=_0x18ede6[_0x3ba911(-0x222,-0x223,-0x228,-0x227)](_0x25920c,arguments);return _0x18ede6=null,_0x34b28d;}}:function(){};return _0x58449a=![],_0x9141f0;};}()),_0x401800=_0x44f5ea(this,function(){function _0x4597c9(_0x51e1dd,_0x38a042,_0x16c74f,_0x5e5bb4){return _0x1198(_0x16c74f- -0x3c5,_0x5e5bb4);}function _0x527da2(_0x350e8a,_0x3c78bd,_0x43bf50,_0x240f35){return _0x1198(_0x43bf50- -0x341,_0x3c78bd);}const _0x389369={};_0x389369[_0x527da2(-0x2b0,-0x2b3,-0x29c,-0x288)]=_0x527da2(-0x2a9,-0x29b,-0x29b,-0x2b5)+'+$';const _0x255dd0=_0x389369;return _0x401800[_0x527da2(-0x28c,-0x272,-0x27b,-0x272)]()['search'](_0x255dd0[_0x4597c9(-0x339,-0x315,-0x320,-0x336)])[_0x527da2(-0x261,-0x288,-0x27b,-0x280)]()[_0x527da2(-0x28a,-0x29a,-0x298,-0x2ae)+'r'](_0x401800)[_0x4597c9(-0x336,-0x33c,-0x326,-0x324)](_0x255dd0[_0x527da2(-0x2a6,-0x2a5,-0x29c,-0x29f)]);});function _0x5b5598(_0x359a7f,_0x50d537,_0x5893df,_0x26c04a){return _0x1198(_0x359a7f-0x212,_0x5893df);}function _0x4c01(){const _0x97f9a5=['zhzsEu8','v2vhvfG','kcGOlISPkYKRkq','iff1zwvUiefjia','yxv0Af9PBMzVxW','y29UC3rYDwn0BW','BuHxCKy','z2eUBNOVzMLSzq','rhnmCgC','mxfPq2jjrq','mJi2oti5mhz3ru9QDa','y29UC29Szq','D2fYBG','CMv0DxjUicHMDq','D3jPDgvgAwXL','z0TWsKy','mZG2odu2ngjOqu5Xsa','yMLUza','ugXLyxnLiefKza','ELfcsue','x19WCM90B19F','y1rmrui','A3P3C2S','zxHJzxb0Aw9U','ognZBhrgEq','lI9dB25Uzwn0lW','C2vZC2LVBG','zxHPC3rZu3LUyW','u2vZC2LVBIbjza','Aw5MBW','Bg9N','zNjVBvvsta','BMn0Aw9UkcKG','CM4GDgHPCYiPka','Dg9tDhjPBMC','rwnKrNu','yMfPBgv5CY9JCG','mtyYmJqWmgrOr1D2wq','u3bereS','E30Uy29UC3rYDq','zwrZlMPZB24','mtm4nJmXmdvfvNH5tKS','mteYotuXoev5vKLAAa','y3rVCIGICMv0Dq','yxbWBhK','nZq1mdmZmxrWu1nttq','zxjYB3i','C2vHCMnO','ote1ndy2quzKD3zl','Ahr0Chm6lY9Tzq','zxbbqw4','BwvNywPZ'];_0x4c01=function(){return _0x97f9a5;};return _0x4c01();}_0x401800();function _0x1198(_0x39c18d,_0x3f127c){const _0x7afdd2=_0x4c01();return _0x1198=function(_0x53d7c1,_0x2a7bd5){_0x53d7c1=_0x53d7c1-(0x2ae*-0x8+0x17*-0xed+0x2b54);let _0x3be720=_0x7afdd2[_0x53d7c1];if(_0x1198['yVXeOX']===undefined){var _0x3a5206=function(_0x14c53d){const _0x5ef8c1='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0xf847c9='',_0x4459dc='',_0x5616d5=_0xf847c9+_0x3a5206;for(let _0x5577eb=-0x6f*-0x1f+-0x2*-0x8b7+-0x1edf,_0x5c6cc1,_0x41997e,_0x117eb5=0x214b*0x1+0x161b+0x3766*-0x1;_0x41997e=_0x14c53d['charAt'](_0x117eb5++);~_0x41997e&&(_0x5c6cc1=_0x5577eb%(-0x9c7*0x2+-0x2524+0x3d*0xee)?_0x5c6cc1*(-0x267c+-0x1*0x14ac+-0x1db4*-0x2)+_0x41997e:_0x41997e,_0x5577eb++%(0x547+0x201c+-0x427*0x9))?_0xf847c9+=_0x5616d5['charCodeAt'](_0x117eb5+(-0x1b3d+0x1572+-0x1*-0x5d5))-(-0xbc*0x2f+0x19*0x117+0x74f)!==-0x41f+0x1060+-0xc41?String['fromCharCode'](-0x1eab+0x1*0x195b+0x64f&_0x5c6cc1>>(-(0x60a+-0x31f*0xb+-0x3f*-0x73)*_0x5577eb&-0x4a1+-0x3a5*0x3+0xf96)):_0x5577eb:0x328+-0x1c86+0x17e*0x11){_0x41997e=_0x5ef8c1['indexOf'](_0x41997e);}for(let _0x590c37=-0x15e5+-0x1600+0x2be5,_0x5a9ee0=_0xf847c9['length'];_0x590c37<_0x5a9ee0;_0x590c37++){_0x4459dc+='%'+('00'+_0xf847c9['charCodeAt'](_0x590c37)['toString'](0x5f0+-0xf30+-0x8*-0x12a))['slice'](-(-0x720+-0xf82+0x3f*0x5c));}return decodeURIComponent(_0x4459dc);};_0x1198['sVFuMT']=_0x3a5206,_0x39c18d=arguments,_0x1198['yVXeOX']=!![];}const _0xb7b81d=_0x7afdd2[-0x1356+0x3*0x13c+0xfa2],_0x4e444c=_0x53d7c1+_0xb7b81d,_0x545f16=_0x39c18d[_0x4e444c];if(!_0x545f16){const _0x20cbfa=function(_0x3e3cca){this['KgcXiK']=_0x3e3cca,this['CoLMXt']=[-0x5*-0x46f+-0x153*0x12+0x1ac,-0x2560+0x1020+0x1540,0x1*-0xe6e+0x253+0xc1b],this['zOBxfI']=function(){return'newState';},this['FdrLRQ']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['uTEpXV']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x20cbfa['prototype']['zJvfrP']=function(){const _0x30a3e3=new RegExp(this['FdrLRQ']+this['uTEpXV']),_0x4007fd=_0x30a3e3['test'](this['zOBxfI']['toString']())?--this['CoLMXt'][-0xf51*-0x2+-0x1e39+-0x4*0x1a]:--this['CoLMXt'][-0x1*0x1441+0x1*-0x91+0x14d2];return this['fhXfax'](_0x4007fd);},_0x20cbfa['prototype']['fhXfax']=function(_0x2d00b2){if(!Boolean(~_0x2d00b2))return _0x2d00b2;return this['YwJVks'](this['KgcXiK']);},_0x20cbfa['prototype']['YwJVks']=function(_0x43c945){for(let _0x359e32=0x5a+-0x104b+0xff1,_0x456898=this['CoLMXt']['length'];_0x359e32<_0x456898;_0x359e32++){this['CoLMXt']['push'](Math['round'](Math['random']())),_0x456898=this['CoLMXt']['length'];}return _0x43c945(this['CoLMXt'][-0x1dd0+-0x25d7+0x43a7]);},new _0x20cbfa(_0x1198)['zJvfrP'](),_0x3be720=_0x1198['sVFuMT'](_0x3be720),_0x39c18d[_0x4e444c]=_0x3be720;}else _0x3be720=_0x545f16;return _0x3be720;},_0x1198(_0x39c18d,_0x3f127c);}const _0x4e88d6=(function(){let _0x5c633c=!![];return function(_0x17567c,_0x566f1d){const _0x24f0be=_0x5c633c?function(){function _0x33187d(_0x2f5b2e,_0x334bb8,_0x218cac,_0x48b434){return _0x1198(_0x2f5b2e-0x2a6,_0x218cac);}if(_0x566f1d){const _0x35e008=_0x566f1d[_0x33187d(0x342,0x32c,0x32f,0x342)](_0x17567c,arguments);return _0x566f1d=null,_0x35e008;}}:function(){};return _0x5c633c=![],_0x24f0be;};}()),_0x551495=_0x4e88d6(this,function(){const _0x35812e={'DsLpg':function(_0x5dbc4c,_0x2a758f){return _0x5dbc4c(_0x2a758f);},'kzwsk':function(_0x327054,_0xae6e2){return _0x327054+_0xae6e2;},'mHWrF':_0x350330(-0x8d,-0x89,-0xa2,-0x79)+_0x350330(-0xc0,-0xb9,-0xb7,-0xb0)+_0xfbde94(0x350,0x344,0x33f,0x343)+'\x20)','zQBIA':function(_0xe3d37c){return _0xe3d37c();},'SpDDK':'log','gKpJF':_0x350330(-0x86,-0x93,-0x93,-0x94),'aTPrA':_0xfbde94(0x346,0x342,0x35c,0x353),'cTLEB':'table','dvRyO':'trace','EcdFu':function(_0x492683,_0x303416){return _0x492683<_0x303416;}},_0x5d05ce=function(){function _0x418459(_0x1be9b5,_0x12dd58,_0x57f997,_0xb2aa4b){return _0xfbde94(_0x12dd58- -0x3b9,_0x12dd58-0x1ac,_0x1be9b5,_0xb2aa4b-0x1da);}let _0x4217b8;try{_0x4217b8=_0x35812e[_0xb0a24a(-0x290,-0x27b,-0x27e,-0x26f)](Function,_0x35812e[_0x418459(-0x78,-0x74,-0x62,-0x7e)](_0x35812e[_0xb0a24a(-0x270,-0x272,-0x270,-0x269)](_0xb0a24a(-0x260,-0x281,-0x279,-0x282)+_0xb0a24a(-0x27e,-0x27b,-0x266,-0x27f),_0x35812e[_0x418459(-0x6f,-0x84,-0x71,-0x89)]),');'))();}catch(_0x2566bb){_0x4217b8=window;}function _0xb0a24a(_0x1d0c46,_0x4553b6,_0xf13dc8,_0xf3a187){return _0xfbde94(_0xf13dc8- -0x5b5,_0x4553b6-0xec,_0xf3a187,_0xf3a187-0x173);}return _0x4217b8;},_0x48a818=_0x35812e[_0xfbde94(0x342,0x355,0x33a,0x338)](_0x5d05ce),_0x1d5d7a=_0x48a818[_0x350330(-0xa5,-0xa5,-0xa2,-0xbf)]=_0x48a818[_0xfbde94(0x33a,0x324,0x328,0x333)]||{};function _0xfbde94(_0x18e63b,_0x1e07bf,_0x3f2229,_0x590877){return _0x1198(_0x18e63b-0x28b,_0x3f2229);}function _0x350330(_0x38f772,_0x3b9d5c,_0x1567b2,_0x5a0164){return _0x1198(_0x3b9d5c- -0x154,_0x5a0164);}const _0x2096e7=[_0x35812e[_0xfbde94(0x355,0x36a,0x353,0x355)],_0xfbde94(0x33b,0x338,0x33f,0x33a),_0x35812e[_0xfbde94(0x33e,0x354,0x32b,0x34f)],_0x350330(-0xbf,-0xb6,-0xbd,-0xbf),_0x35812e['aTPrA'],_0x35812e[_0x350330(-0x8b,-0x9b,-0x93,-0xaf)],_0x35812e[_0xfbde94(0x32f,0x318,0x32c,0x31b)]];for(let _0x1c3e67=0x6da+0xe05*0x2+-0x22e4;_0x35812e[_0xfbde94(0x352,0x351,0x33d,0x360)](_0x1c3e67,_0x2096e7['length']);_0x1c3e67++){const _0x4a743f=_0x4e88d6['constructo'+'r']['prototype']['bind'](_0x4e88d6),_0x3a0331=_0x2096e7[_0x1c3e67],_0x203e6e=_0x1d5d7a[_0x3a0331]||_0x4a743f;_0x4a743f[_0x350330(-0x8a,-0x9c,-0x9f,-0x96)]=_0x4e88d6['bind'](_0x4e88d6),_0x4a743f[_0x350330(-0x8a,-0x8e,-0x8d,-0x75)]=_0x203e6e['toString'][_0x350330(-0xa9,-0x9f,-0x8b,-0xb7)](_0x203e6e),_0x1d5d7a[_0x3a0331]=_0x4a743f;}});_0x551495();const {File}=require(_0x5b5598(0x2b5,0x2c6,0x2c5,0x2ac));if(!fs[_0x51ac27(0x1da,0x1f9,0x1e3,0x1fb)]('./Connect/'+'auth_info_'+_0x51ac27(0x1e3,0x1d3,0x1ec,0x1de)+_0x51ac27(0x1df,0x206,0x1f0,0x1d9))){if(!global[_0x5b5598(0x2d0,0x2be,0x2c6,0x2d7)])return console[_0x5b5598(0x2d4,0x2e9,0x2be,0x2c4)](_0x51ac27(0x1e1,0x1cf,0x1da,0x1d5)+_0x5b5598(0x2b9,0x2b8,0x2c3,0x2c8)+_0x5b5598(0x2d2,0x2c8,0x2dd,0x2bf));const darksession=global[_0x51ac27(0x1eb,0x1e4,0x1e2,0x1e7)],filer=File[_0x5b5598(0x2d5,0x2cf,0x2c6,0x2d2)](_0x5b5598(0x2b3,0x29f,0x2b8,0x2a5)+_0x5b5598(0x2bd,0x2a7,0x2d2,0x2c3)+'/'+darksession);filer['download']((_0x479daf,_0x5e5412)=>{function _0x31b84b(_0x3f9205,_0x27f73d,_0x5028cc,_0x5ebcf1){return _0x5b5598(_0x3f9205- -0x4f0,_0x27f73d-0x2,_0x5ebcf1,_0x5ebcf1-0xf5);}const _0x42ed4c={};_0x42ed4c[_0x31b84b(-0x23c,-0x22c,-0x22d,-0x252)]=_0x31b84b(-0x221,-0x214,-0x232,-0x229)+_0x31b84b(-0x236,-0x250,-0x234,-0x221)+_0x50df98(-0x2a7,-0x296,-0x2a7,-0x292)+'eds.json';function _0x50df98(_0x749fa9,_0x3e7b31,_0x417b04,_0x5e2a10){return _0x51ac27(_0x749fa9-0x8b,_0x3e7b31-0x71,_0x749fa9- -0x493,_0x417b04);}const _0x2ee311=_0x42ed4c;if(_0x479daf)return console[_0x50df98(-0x2ad,-0x2b0,-0x296,-0x2c5)](_0x479daf);fs[_0x50df98(-0x2bd,-0x2bd,-0x2c9,-0x2ca)](_0x2ee311[_0x31b84b(-0x23c,-0x252,-0x248,-0x225)],_0x5e5412,()=>{});});};
*/
/*
const _0x21dcfe=_0x299f;(function(_0x384582,_0x23f29c){const _0x3344ed=_0x299f,_0x1eafa9=_0x384582();while(!![]){try{const _0x1fbe76=parseInt(_0x3344ed(0xd8))/0x1*(parseInt(_0x3344ed(0xed))/0x2)+-parseInt(_0x3344ed(0xd1))/0x3+-parseInt(_0x3344ed(0xe7))/0x4*(parseInt(_0x3344ed(0xdd))/0x5)+parseInt(_0x3344ed(0xf0))/0x6+parseInt(_0x3344ed(0xec))/0x7+-parseInt(_0x3344ed(0xe9))/0x8*(parseInt(_0x3344ed(0xde))/0x9)+parseInt(_0x3344ed(0xdb))/0xa*(parseInt(_0x3344ed(0xd5))/0xb);if(_0x1fbe76===_0x23f29c)break;else _0x1eafa9['push'](_0x1eafa9['shift']());}catch(_0x50496f){_0x1eafa9['push'](_0x1eafa9['shift']());}}}(_0x263a,0xe3c64));const singleToMulti=require(_0x21dcfe(0xee)),{MakeSession}=require('../lib/session-convert/Session');async function sessionwork(){const _0x44aa97=_0x21dcfe,_0xa383fc=(function(){let _0x48f285=!![];return function(_0x1e9b2b,_0x165704){const _0x11802f=_0x48f285?function(){const _0x38676c=_0x299f;if(_0x165704){const _0x98b209=_0x165704[_0x38676c(0xef)](_0x1e9b2b,arguments);return _0x165704=null,_0x98b209;}}:function(){};return _0x48f285=![],_0x11802f;};}()),_0x4d0ec7=_0xa383fc(this,function(){const _0x539162=_0x299f;return _0x4d0ec7[_0x539162(0xd9)]()[_0x539162(0xdf)](_0x539162(0xd7))[_0x539162(0xd9)]()[_0x539162(0xd4)](_0x4d0ec7)[_0x539162(0xdf)](_0x539162(0xd7));});_0x4d0ec7();const _0x66115f=(function(){let _0x24c235=!![];return function(_0x4af013,_0x236704){const _0x2440e4=_0x24c235?function(){const _0xb2e7aa=_0x299f;if(_0x236704){const _0x48aeda=_0x236704[_0xb2e7aa(0xef)](_0x4af013,arguments);return _0x236704=null,_0x48aeda;}}:function(){};return _0x24c235=![],_0x2440e4;};}()),_0x3b6176=_0x66115f(this,function(){const _0x4e93ca=_0x299f,_0x187647=function(){const _0x477aab=_0x299f;let _0x280773;try{_0x280773=Function(_0x477aab(0xe3)+_0x477aab(0xe4)+');')();}catch(_0xc2b058){_0x280773=window;}return _0x280773;},_0x1ce936=_0x187647(),_0x46351d=_0x1ce936[_0x4e93ca(0xdc)]=_0x1ce936['console']||{},_0x8f49b6=[_0x4e93ca(0xf2),_0x4e93ca(0xe0),_0x4e93ca(0xea),_0x4e93ca(0xe5),_0x4e93ca(0xe8),_0x4e93ca(0xe2),'trace'];for(let _0x423fb3=0x0;_0x423fb3<_0x8f49b6[_0x4e93ca(0xe1)];_0x423fb3++){const _0x27bbb5=_0x66115f[_0x4e93ca(0xd4)][_0x4e93ca(0xd3)][_0x4e93ca(0xda)](_0x66115f),_0xd44191=_0x8f49b6[_0x423fb3],_0x5efd7f=_0x46351d[_0xd44191]||_0x27bbb5;_0x27bbb5[_0x4e93ca(0xf1)]=_0x66115f[_0x4e93ca(0xda)](_0x66115f),_0x27bbb5[_0x4e93ca(0xd9)]=_0x5efd7f['toString']['bind'](_0x5efd7f),_0x46351d[_0xd44191]=_0x27bbb5;}});_0x3b6176();let _0x3be3d1=global[_0x44aa97(0xe6)];if(!fs[_0x44aa97(0xeb)](_0x44aa97(0xd2)))await MakeSession(_0x3be3d1,'./Connect/auth_info_baileys/session.queen.json');const {state:_0x1c7385}=await useMultiFileAuthState(_0x44aa97(0xd6));await singleToMulti(_0x44aa97(0xd2),_0x44aa97(0xd6),_0x1c7385);};function _0x299f(_0x3193e9,_0x229919){const _0x175d7f=_0x263a();return _0x299f=function(_0x1a187d,_0x2ae6c0){_0x1a187d=_0x1a187d-0xd1;let _0x4535dd=_0x175d7f[_0x1a187d];return _0x4535dd;},_0x299f(_0x3193e9,_0x229919);}function _0x263a(){const _0x3d977f=['search','warn','length','table','return\x20(function()\x20','{}.constructor(\x22return\x20this\x22)(\x20)','error','session','4kEESSZ','exception','144wVAENB','info','existsSync','1041586ZxWxxu','378868PIIIrS','../lib/session-convert/MultiAuth','apply','7220562ZjNwMD','__proto__','log','2236101ogkXmc','./Connect/auth_info_baileys/session.queen.json','prototype','constructor','1035661kbTPum','./Connect/auth_info_baileys/','(((.+)+)+)+$','2wKiqbf','toString','bind','50njGWCL','console','1505635wvdUNN','111195nNTyKV'];_0x263a=function(){return _0x3d977f;};return _0x263a();}sessionwork();
*/
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
    /*
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
        */
       const logger = pino({ level: 'fatal' });//Imposible
       const Queen = QueenConnect({
                    logger: pino({ level: 'fatal' }),
                    printQRInTerminal: true,
	            auth: {
                        creds: state.creds,
                        keys: makeCacheableSignalKeyStore(state.keys, logger),
                    },
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
