/*_______________________________________________________________________________________________________________________________________________________________________________________________________________________
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────── 
─██████████████──██████████──██████──────────██████████████──██████──────────██████──██████████████──██████──────────██████████████──██████──██████──██████████████──████████████████─── 
─██░░░░░░░░░░██──██░░░░░░██──██░░██──────────██░░░░░░░░░░██──██░░██████████──██░░██──██░░░░░░░░░░██──██░░██──────────██░░░░░░░░░░██──██░░██──██░░██──██░░░░░░░░░░██──██░░░░░░░░░░░░██─── 
─██░░██████████──████░░████──██░░██──────────██░░██████████──██░░░░░░░░░░██──██░░██──██████░░██████──██░░██──────────██░░██████░░██──██░░██──██░░██──██░░██████████──██░░████████░░██─── 
─██░░██────────────██░░██────██░░██──────────██░░██──────────██░░██████░░██──██░░██──────██░░██──────██░░██──────────██░░██──██░░██──██░░██──██░░██──██░░██──────────██░░██────██░░██─── 
─██░░██████████────██░░██────██░░██──────────██░░██████████──██░░██──██░░██──██░░██──────██░░██──────██░░██──────────██░░██──██░░██──██░░██──██░░██──██░░██████████──██░░████████░░██─── 
─██░░░░░░░░░░██────██░░██────██░░██──────────██░░░░░░░░░░██──██░░██──██░░██──██░░██──────██░░██──────██░░██──────────██░░██──██░░██──██░░██──██░░██──██░░░░░░░░░░██──██░░░░░░░░░░░░██─── 
─██████████░░██────██░░██────██░░██──────────██░░██████████──██░░██──██░░██──██░░██──────██░░██──────██░░██──────────██░░██──██░░██──██░░██──██░░██──██░░██████████──██░░██████░░████─── 
─────────██░░██────██░░██────██░░██──────────██░░██──────────██░░██──██░░██████░░██──────██░░██──────██░░██──────────██░░██──██░░██──██░░░░██░░░░██──██░░██──────────██░░██──██░░██───── 
─██████████░░██──████░░████──██░░██████████──██░░██████████──██░░██──██░░░░░░░░░░██──────██░░██──────██░░██████████──██░░██████░░██──████░░░░░░████──██░░██████████──██░░██──██░░██████─ 
─██░░░░░░░░░░██──██░░░░░░██──██░░░░░░░░░░██──██░░░░░░░░░░██──██░░██──██████████░░██──────██░░██──────██░░░░░░░░░░██──██░░░░░░░░░░██────████░░████────██░░░░░░░░░░██──██░░██──██░░░░░░██─ 
─██████████████──██████████──██████████████──██████████████──██████──────────██████──────██████──────██████████████──██████████████──────██████──────██████████████──██████──██████████─ 
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────── 
created by Awan_Zada 🕵
contact me 923275028087 ♻️
© Copy coder alert ⚠
*/



const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')
const {sleep} = require('../lib/functions')

cmd({
    pattern: "restart",
    alias: ["rebot","reboot"], 
    react: "🐬",
    desc: "restart the bot",
    category: "owner",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!isOwner) return;
const {exec} = require("child_process")
reply("restarting...")
await sleep(1500)
exec("pm2 restart all")
}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({

    pattern: "settings",

    react: "☣️",

    alias: ["setting","env"],

    desc: "Get bot\'s settings list.",

    category: "main",

    use: '.menu',

    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, umarmd, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{
let madeSetting =`
*[ •  AWAN-MD - SETTINGS‎ • ]*
*╭┈───────────────•*
*┊* *♾️ AUTO_READ_STATUS:* ➠ ${config.AUTO_READ_STATUS}
*┊* *♾️ MODE:* ➠ ${config.MODE} 
*┊* *♾️ AUTO_VOICE:* ➠ ${config.AUTO_VOICE} 
*┊* *♾️ AUTO_STICKER:* ➠ ${config.AUTO_STICKER} 
*┊* *♾️ AUTO_REPLY:* ➠ ${config.AUTO_REPLY} 
*┊* *♾️ ALIVE_IMG:* ➠ ${config.ALIVE_IMG} 
*┊* *♾️ ALIVE_MSG:* ➠ ${config.ALIVE_MSG} 
*┊* *♾️ ANTI_LINK:* ➠ ${config.ANTI_LINK} 
*┊* *♾️ ANTI_BAD:* ➠ ${config.ANTI_BAD} 
*┊* *♾️ PREFIX:* ➠ [${config.PREFIX}]
*┊* *♾️ FAKE_RECORDING:* ➠ ${config.FAKE_RECORDING} 
*┊* *♾️ AUTO_REACT:* ➠ ${config.AUTO_REACT} 
*┊* *♾️ HEART_REACT:* ➠ ${config.HEART_REACT} 
*┊* *♾️ OWNER_REACT:* ➠ ${config.OWNER_REACT} 
*┊* *♾️ BOT_NAME:* ➠ ${config.BOT_NAME}
*┊* *♾️ READ_MESSAGE:* ➠ ${config.READ_MESSAGE}
*╰┈───────────────•*
*•────────────•⟢*
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝑨𝑾𝑨𝑵𝒁𝑨𝑫𝑨
*•────────────•⟢*
`


await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeSetting},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "system",
    react: "♠️",
    alias: ["uptime","status","runtime"],
    desc: "cheack uptime",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let status = `
*[ •  AWAN-MD - UPTIME ‎ • ]*
*╭┈───────────────•*
*│  ◦* *_UPTIME:➠_*
*│  ◦* ${runtime(process.uptime())}
*│  ◦*
*│  ◦* *_RAM USAGE:➠_*
*│  ◦* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*│  ◦*
*│  ◦* *_HOSTNAME:➠_*
*│  ◦* ${os.hostname()}
*│  ◦*
*│  ◦* *_PLATFORM:➠_*
*│  ◦* ${process.env.DYNO ? "Heroku" : "Localhost"}
*│  ◦*
*╰┈───────────────•*

*•────────────•⟢*
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝑨𝑾𝑨𝑵𝒁𝑨𝑫𝑨
*•────────────•⟢*
`
await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:`${status}`},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "script",
    alias: ["sc","repo","info"],
    desc: "bot repo",
    react: "🤖",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let repo =`
*[ •  B O T - O W N E R ‎ • ]*
*╭┈───────────────•*
*│  ◦* *𝑨𝑾𝑨𝑵𝒁𝑨𝑫𝑨*
*╰┈───────────────•*

*[ •  AWAN-MD - REPO ‎ • ]*
*╭┈───────────────•*
*│  ◦* *https://github.com/itzawanzada/AWAN_MD*
*╰┈───────────────•*

*[ •  SUPPORT - GROUP‎ • ]*
*╭┈───────────────•*
*│  ◦* *https://whatsapp.com/channel/0029VaxurQT1t90ad7JBJN00*
*╰┈───────────────•*

*•────────────•⟢*
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝑨𝑾𝑨𝑵𝒁𝑨𝑫𝑨
*•────────────•⟢*
`
await conn.sendMessage(from, { text: repo ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: false,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363232588171807@newsletter',
      newsletterName: "AWANZADA",
      serverMessageId: 999
    },
externalAdReply: { 
title: 'AWAN-MD',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://github.com/AWAN-MD" ,
thumbnailUrl: "https://telegra.ph/file/2a06381b260c3f096a612.jpg" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})}catch(e){
console.log(e)
reply(`${e}`)
}
});
