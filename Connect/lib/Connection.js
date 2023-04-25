const fs = require("fs");
const prefix = global.prefix;
const Language = require('./language');
const Lang = Language.getString('queen_md');
const moment = require('moment-timezone');
const { sleep } = require('./myfunc');
const date = moment.tz('Asia/Colombo').format('dddd, DD MMMM YYYY');
const time = moment.tz('Asia/Colombo').format('HH:mm:ss');
const ripo = ('𝚀𝚄𝙴𝙴𝙽 𝙼𝚄𝙻𝚃𝙸-𝙳𝙴𝚅𝙸𝙲𝙴 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 𝙱𝙾𝚃\nɢɪᴛʜᴜʙ : https://github.com/Queen-MD/Queen-MD');

module.exports = async (Queen, update, startQueen) => {
   const { connection, lastDisconnect } = update;
   let WinzoButtons = [
                {buttonId: `${prefix}setting-menu`, buttonText: {displayText: `  ${prefix}setting-menu  `}, type: 1} ,
                {buttonId: `${prefix}donate`, buttonText: {displayText: `  ${prefix}script  `}, type: 1}
                ];
                
   if (connection === "connecting") {
      console.log("⏺️ 𝖰𝖴𝖤𝖤𝖭 - 𝖠𝖨 𝖢𝖮𝖭𝖭𝖤𝖢𝖳 𝖳𝖮 𝖶𝖧𝖠𝖳𝖲𝖠𝖯𝖯...𝖯𝖫𝖤𝖠𝖲𝖤 𝖶𝖠𝖨𝖳...");
    };
    
    if (connection === "open") {
        console.log("📶️ 𝖰𝖴𝖤𝖤𝖭-𝖠𝖨 𝖢𝖮𝖭𝖭𝖤𝖢𝖳 𝖲𝖴𝖢𝖢𝖤𝖲𝖲𝖥𝖴𝖫𝖫𝖸");
        console.log("⏺️ 𝖩𝖮𝖨𝖭𝖨𝖭𝖦 𝖰𝖴𝖤𝖤𝖭-𝖠𝖨 𝖲𝖴𝖯𝖯𝖮𝖱𝖳 𝖦𝖱𝖮𝖴𝖯...");
      await Queen.sendMessage(Queen.user.id, { text: Lang.index_function.CONNECT });
      sleep(1500);
       let buttonMessage = {
          image: { url: 'https://i.ibb.co/PN0gMPc/WHATSAPP-AI.png' },ImagePlayback:true,
          caption: `${Lang.index_function.GUIDE}`,
          footer: ripo,
          buttons: WinzoButtons,
          headerType: 4,
          contextInfo:{externalAdReply:{
          title:`𝑊𝐻𝐴𝑇𝑆𝐴𝑃𝑃-𝐴𝐼 𝐶𝐻𝐴𝑇 𝐵𝑂𝑇`,
          body: `ᴄᴏɴɴᴇᴄᴛ ᴍᴇꜱꜱᴀɢᴇ`, 
          thumbnail: fs.readFileSync("Connect/Media/Image/Queen.png"),
          mediaType:1,
          mediaUrl: 'https://github.com/DarkWinzo/Queen-AI',
          sourceUrl: "https://github.com/DarkWinzo/Queen-AI"
          }}
          };
      Queen.sendMessage(Queen.user.id, buttonMessage)    
      await Queen.sendMessage( Queen.user.id, { text: `${Lang.index_function.NOTE}` });
      sleep(1000);
      await Queen.groupAcceptInvite(`CZQwGCvcyNKIVW3gPF7GqX`);
            Queen.sendMessage( Queen.user.id, { text: Lang.index_function.SUPPORT });
       console.log("✅️ 𝖩𝖮𝖨𝖭𝖨𝖭𝖦 𝖲𝖴𝖢𝖢𝖤𝖲𝖲𝖥𝖴𝖫𝖫𝖸...");
     };
      
    if (
      connection === "close" &&
      lastDisconnect &&
      lastDisconnect.error &&
      lastDisconnect.error.output.statusCode != 401
    ) {
      console.log(lastDisconnect.error.output.payload);
      startQueen();
    }
    };
