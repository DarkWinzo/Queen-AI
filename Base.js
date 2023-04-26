const config = require('./config');
const { 
     default: QueenConnect,
     Browsers, 
     useMultiFileAuthState, 
     DisconnectReason, 
     fetchLatestBaileysVersion, 
     generateForwardMessageContent, 
     prepareWAMessageMedia, 
     generateWAMessageFromContent, 
     generateMessageID, 
     downloadContentFromMessage, 
     makeInMemoryStore, 
     jidDecode, 
     proto 
     } = require("@adiwajshing/baileys");
   
const pino = require('pino');
const singleToMulti = require("./Connect/lib/session-convert/MultiAuth");
const { Boom } = require('@hapi/boom');
const fs = require('fs');
const { writeFile } = require("fs/promises");
const { MakeSession } = require("./Connect/lib/session-convert/Session");
const yargs = require('yargs/yargs');
const chalk = require('chalk');
const moment = require('moment-timezone');
const date = moment.tz('Asia/Colombo').format('dddd, DD MMMM YYYY');
const time = moment.tz('Asia/Colombo').format('HH:mm:ss');
const ripo = ('𝚀𝚄𝙴𝙴𝙽 𝙼𝚄𝙻𝚃𝙸-𝙳𝙴𝚅𝙸𝙲𝙴 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 𝙱𝙾𝚃\nɢɪᴛʜᴜʙ : https://github.com/DarkWinzo/Queen-MD');
const FileType = require('file-type');
const path = require('path');
const _ = require('lodash');
const axios = require('axios');
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const PhoneNumber = require('awesome-phonenumber');
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./Connect/lib/exif');
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('./Connect/lib/myfunc');
const prefix = global.prefix;
const Connection = require("./Connect/lib/Connection");

async function sessionwork() {
 if (!fs.existsSync("./session.queen.json")) 
  await MakeSession(global.session, "./session.queen.json")
  const { state } = await useMultiFileAuthState("./session");
  await singleToMulti("session.queen.json","./session", state);
};

var low
try {
  low = require('lowdb')
} catch (e) {
  low = require('./Connect/lib/lowdb')
}

const { Low, JSONFile } = low
const mongoDB = require('./Connect/lib/mongoDB');

global.api = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')

const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })

global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
  /https?:\/\//.test(opts['db'] || '') ?
    new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
      new mongoDB(opts['db']) :
      new JSONFile('Connect/src/database.json')
);
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

// Auto guardado de base de datos cada 30 Segundos
if (global.db) setInterval(async () => {
    if (global.db.data) await global.db.write()
  }, 30 * 1000)

async function startQueen() {
      let { version, isLatest } = await fetchLatestBaileysVersion();
      const { state, saveCreds } = await useMultiFileAuthState("./session");
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
   
            store.bind(Queen.ev)
        
            setInterval(async () => {
        var utch = new Date().toLocaleDateString("EN", { weekday: "long", year: "numeric", month: "long", day: "numeric", });
        var ov_time = new Date().toLocaleString("LK", { timeZone: "Asia/Colombo" }).split(" ")[1];
        const biography = "📅𝗗𝙰𝚃𝙴: " + utch + "\n⌚𝗧𝙸𝙼𝙴: " + ov_time + "\n\n💗 𝗣𝙾𝚆𝙴𝚁𝙴𝙳 𝗕𝚈 𝗤𝚄𝙴𝙴𝙽-𝗔𝙸...💬\n\n👨🏼‍💻 𝗖𝚁𝙴𝙰𝚃𝙴𝙳 𝗕𝚈 : "+global.ownername;
        await Queen.updateProfileStatus(biography);
    }, 1000 * 10);
     Queen.ev.on('messages.upsert', async chatUpdate => {
        try {
        mek = chatUpdate.messages[0]
        if (!mek.message) return
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        if (mek.key && mek.key.remoteJid === 'status@broadcast') return
        if (!Queen.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
        if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
        m = smsg(Queen, mek, store)
        require("./Connect/Module/function")(Queen, m, chatUpdate, store);
        } catch (err) {
        console.log(err);
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
        
    Queen.sendContact = async (jid, kon, quoted = '', opts = {}) => {
	let list = []
	for (let i of kon) {
	    list.push({
	    	displayName: await Queen.getName(i + '@s.whatsapp.net'),
		vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await Queen.getName(i + '@s.whatsapp.net')}\nFN:${global.ownername}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:darkwinzo4440@gmail.com\nitem2.X-ABLabel:GitHub\nitem3.URL:https://github.com/DarkWinzo/\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;Sri Lanka;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
    }
    Queen.sendMessage(jid, { contacts: { displayName: `${list.length} CONTACT`, contacts: list }, ...opts }, { quoted })
    }
    
    Queen.setStatus = (status) => {
        Queen.query({
            tag: 'iq',
            attrs: {
                to: '@s.whatsapp.net',
                type: 'set',
                xmlns: 'status',
            },
            content: [{
                tag: 'status',
                attrs: {},
                content: Buffer.from(status, 'utf-8')
            }]
        })
        return status
    }
    
   Queen.public = true
   Queen.ev.on('creds.update', saveCreds);
   Queen.serializeM = (m) => smsg(Queen, m, store);
    
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
        let { writeExif } = require('./Connect/lib/exif')
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
}, 3000)


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright("✅️ Update Base.js'"))
	delete require.cache[file]
	require(file)
})
