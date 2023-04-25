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

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '805a6c3fa9',
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

global.session = process.env.SESSION_ID || "";

global.openaikey = process.env.OPEN_AI_KEY || "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"; //Put Your Open AI Api key

global.ownername = process.env.OWNER_NAME || "DarkWinzo";

let fake = process.env.OWNER_NUMBER || "94775200935";

global.language = process.env.OWNER_LANGUAGE || "EN";


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
global.owner = [`${fake}`] //Don't Change
global.ownernumber = [`${fake}`] //Don't Change
global.premium = [`${fake}`] //Don't Change
global.prefix = ['.'] //Don't Change

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright("✅️ ᴜᴘᴅᴀᴛᴇ config.js"))
	delete require.cache[file]
	require(file)
})
