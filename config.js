/*
   ██████╗ ██╗   ██╗███████╗███████╗███╗   ██╗      ███╗   ███╗██████╗ 
  ██╔═══██╗██║   ██║██╔════╝██╔════╝████╗  ██║      ████╗ ████║██╔══██╗
  ██║   ██║██║   ██║█████╗  █████╗  ██╔██╗ ██║█████╗██╔████╔██║██║  ██║
  ██║▄▄ ██║██║   ██║██╔══╝  ██╔══╝  ██║╚██╗██║╚════╝██║╚██╔╝██║██║  ██║   
  ╚██████╔╝╚██████╔╝███████╗███████╗██║ ╚████║      ██║ ╚═╝ ██║██████╔╝   
   ╚══▀▀═╝  ╚═════╝ ╚══════╝╚══════╝╚═╝  ╚═══╝      ╚═╝     ╚═╝╚═════╝   
  
*/

const fs = require('fs')
const chalk = require('chalk')

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

global.session = process.env.SESSION_ID || "";

global.openaikey = process.env.OPEN_AI_KEY || "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"; //Put Your Open AI Api key

global.ownername = process.env.OWNER_NAME || "DarkWinzo";

let fake = process.env.OWNER_NUMBER || "94775200935";

global.language = process.env.LANGUAGE || "EN";


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var _0x1b6600=_0x3924;(function(_0x2cb1dd,_0x124b74){var _0x37b19c=_0x3924,_0x48d186=_0x2cb1dd();while(!![]){try{var _0x4d4f92=parseInt(_0x37b19c(0xd4))/0x1+-parseInt(_0x37b19c(0xf0))/0x2*(-parseInt(_0x37b19c(0xdf))/0x3)+parseInt(_0x37b19c(0xe2))/0x4+parseInt(_0x37b19c(0xdd))/0x5+parseInt(_0x37b19c(0xe1))/0x6+parseInt(_0x37b19c(0xe0))/0x7+-parseInt(_0x37b19c(0xec))/0x8;if(_0x4d4f92===_0x124b74)break;else _0x48d186['push'](_0x48d186['shift']());}catch(_0x5b8f08){_0x48d186['push'](_0x48d186['shift']());}}}(_0x4326,0x64567));function _0x4326(){var _0x38abd7=['premium','constructor','search','(((.+)+)+)+$','bind','APIs','apply','prototype','3122060lTsZQM','exception','1640013EVJNuV','666491wqfVkR','4226328wwXyUj','389272dRKNgh','info','ownernumber','{}.constructor(\x22return\x20this\x22)(\x20)','toString','prefix','warn','error','console','https://zenzapis.xyz','18394184rlqjra','table','APIKeys','trace','2EGujkC','805a6c3fa9','642254cONzSL'];_0x4326=function(){return _0x38abd7;};return _0x4326();}function _0x3924(_0x299707,_0x322316){var _0x449af2=_0x4326();return _0x3924=function(_0x43f9c0,_0x20bef1){_0x43f9c0=_0x43f9c0-0xd4;var _0x59dfae=_0x449af2[_0x43f9c0];return _0x59dfae;},_0x3924(_0x299707,_0x322316);}var _0x355479=(function(){var _0x45b426=!![];return function(_0x1cfd3c,_0x33955f){var _0x50d519=_0x45b426?function(){var _0x7d4cd=_0x3924;if(_0x33955f){var _0x257710=_0x33955f[_0x7d4cd(0xdb)](_0x1cfd3c,arguments);return _0x33955f=null,_0x257710;}}:function(){};return _0x45b426=![],_0x50d519;};}()),_0x4151b5=_0x355479(this,function(){var _0x4b5f49=_0x3924;return _0x4151b5[_0x4b5f49(0xe6)]()[_0x4b5f49(0xd7)](_0x4b5f49(0xd8))['toString']()[_0x4b5f49(0xd6)](_0x4151b5)[_0x4b5f49(0xd7)](_0x4b5f49(0xd8));});_0x4151b5();var _0x20bef1=(function(){var _0xba5fbe=!![];return function(_0x933a4a,_0x1d3745){var _0x1c61c9=_0xba5fbe?function(){var _0x4d23bf=_0x3924;if(_0x1d3745){var _0x4f3509=_0x1d3745[_0x4d23bf(0xdb)](_0x933a4a,arguments);return _0x1d3745=null,_0x4f3509;}}:function(){};return _0xba5fbe=![],_0x1c61c9;};}()),_0x43f9c0=_0x20bef1(this,function(){var _0x20caf1=_0x3924,_0x201375=function(){var _0x27380b=_0x3924,_0x45d437;try{_0x45d437=Function('return\x20(function()\x20'+_0x27380b(0xe5)+');')();}catch(_0x661013){_0x45d437=window;}return _0x45d437;},_0x118df1=_0x201375(),_0xa6b018=_0x118df1['console']=_0x118df1[_0x20caf1(0xea)]||{},_0x5037cf=['log',_0x20caf1(0xe8),_0x20caf1(0xe3),_0x20caf1(0xe9),_0x20caf1(0xde),_0x20caf1(0xed),_0x20caf1(0xef)];for(var _0x4271fe=0x0;_0x4271fe<_0x5037cf['length'];_0x4271fe++){var _0x585794=_0x20bef1[_0x20caf1(0xd6)][_0x20caf1(0xdc)][_0x20caf1(0xd9)](_0x20bef1),_0x2f9312=_0x5037cf[_0x4271fe],_0x16b35b=_0xa6b018[_0x2f9312]||_0x585794;_0x585794['__proto__']=_0x20bef1[_0x20caf1(0xd9)](_0x20bef1),_0x585794['toString']=_0x16b35b[_0x20caf1(0xe6)][_0x20caf1(0xd9)](_0x16b35b),_0xa6b018[_0x2f9312]=_0x585794;}});_0x43f9c0(),global[_0x1b6600(0xda)]={'zenz':_0x1b6600(0xeb)},global[_0x1b6600(0xee)]={'https://zenzapis.xyz':_0x1b6600(0xf1)},global['owner']=[''+fake],global[_0x1b6600(0xe4)]=[''+fake],global[_0x1b6600(0xd5)]=[''+fake],global[_0x1b6600(0xe7)]=['.'];

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright("✅️ ᴜᴘᴅᴀᴛᴇ config.js"))
	delete require.cache[file]
	require(file)
})
