const fs = require('fs')
const chalk = require('chalk')



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

global.session = process.env.SESSION_ID || "";

global.openaikey = process.env.OPEN_AI_KEY || "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"; //Put Your Open AI Api key

global.ownername = process.env.OWNER_NAME || "DarkWinzo";

global.ownernumber = process.env.OWNER_NUMBER || "94775200935";

global.language = "SI"; //Enter bot working language EN = English / SI = Sinhala /ML = Malay

global.prefix = ['.'] //Don't Change

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright("Update - 'config.js'"))
	delete require.cache[file]
	require(file)
})
