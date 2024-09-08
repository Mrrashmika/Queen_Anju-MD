const {cmd ,command} = require('../command');
const config = require('../config');
const os = require("os")
const {runtime} = require('../lib/functions')
//alive
cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    react: "🛠️",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const voice = {
    alive: 'https://github.com/KING-RASHMIKA/AutoFunction/raw/main/autovoice/media_alive.mp3'
}

let aliveMessage = ` 
⫷⦁[ * '-'_꩜ 𝙌𝙐𝙀𝙀𝙉 𝘼𝙉𝙅𝙐 𝘽𝙊𝙏 ꩜_'-' * ]⦁⫸ 

*Hey there!* 

 > 🟢 *Queen Anju WhatsApp Bot* is up and running!
           Runtime : ${runtime(process.uptime())}
 > 🛠️ *Created by:* Janith Rashmika 
 
*Here's what I can do:* 
💿 *Download Songs & Videos* 
📰 *Fetch Latest News* 
🎭 *Entertain with Fun Commands* 
🔧 *Manage Groups* 

 *Stay connected and enjoy the services!* 


> *© 𝙌𝙐𝙀𝙀𝙉 𝘼𝙉𝙅𝙐 𝘽𝙊𝙏 - MD* 
> *💻 GitHub:* github.com/Mrrashmika/Queen_Anju-MD `

await conn.sendMessage(from, { audio: { url: voice.alive }, mimetype: 'audio/mp4', ptt: true }, { quoted: mek })

await conn.sendMessage(from, { text: aliveMessage ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: false,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363232588171807@newsletter',
      newsletterName: "𝙌𝙐𝙀𝙀𝙉 𝘼𝙉𝙅𝙐 𝘽𝙊𝙏",
      serverMessageId: 999
    },
externalAdReply: { 
title: '𝙌𝙐𝙀𝙀𝙉 𝘼𝙉𝙅𝙐 𝘽𝙊𝙏',
body: '𝙌𝙐𝙀𝙀𝙉 𝘼𝙉𝙅𝙐 𝘽𝙊𝙏',
mediaType: 1,
sourceUrl: "https://github.com/Mrrashmika" ,
thumbnailUrl: config.ALIVE_IMG ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
});

//system
cmd({
    pattern: "system",
    alias: ["status","botinfo"],
    react: "🏷️",
    desc: "To Check uptime , ram and more.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let status = `
🏷️ SYSTEM STATUS

🔄 UPTIME: ${runtime(process.uptime())}
🔋 RAM USAGE: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
💻 HOST NAME: ${os.hostname()}
👑 BOT OWNER: Janith Rashmika

> *© 𝙌𝙐𝙀𝙀𝙉 𝘼𝙉𝙅𝙐 𝘽𝙊𝙏 - MD* 
> *💻 GitHub:* github.com/Mrrashmika/Queen_Anju-MD 
`
await conn.sendMessage(from, { text: status ,
    contextInfo: {
      mentionedJid: [ '' ],
      groupMentions: [],
      forwardingScore: 999,
      isForwarded: false,
      forwardedNewsletterMessageInfo: {
        newsletterJid: '120363232588171807@newsletter',
        newsletterName: "𝙌𝙐𝙀𝙀𝙉 𝘼𝙉𝙅𝙐 𝘽𝙊𝙏",
        serverMessageId: 999
      },
  externalAdReply: { 
  title: '𝙌𝙐𝙀𝙀𝙉 𝘼𝙉𝙅𝙐 𝘽𝙊𝙏',
  body: '𝙌𝙐𝙀𝙀𝙉 𝘼𝙉𝙅𝙐 𝘽𝙊𝙏',
  mediaType: 1,
  sourceUrl: "https://github.com/Mrrashmika" ,
  thumbnailUrl: config.ALIVE_IMG ,
  renderLargerThumbnail: true,
  showAdAttribution: true
  }
  }}, { quoted: mek}) 
}catch(e){
console.log(e)
reply(`${e}`)

}
})

//runtime
cmd({
    pattern: "runtime",
    alias: ["uptime"],
    react: "😇",
    desc: "To Check uptime",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let status = `
😇𝚁𝚄𝙽𝚃𝙸𝙼𝙴😇:  ${runtime(process.uptime())}

> *© 𝙌𝙐𝙀𝙀𝙉 𝘼𝙉𝙅𝙐 𝘽𝙊𝙏 - MD* 
> *💻 GitHub:* github.com/Mrrashmika/Queen_Anju-MD 
`


await conn.sendMessage(from, { text: status ,
    contextInfo: {
      mentionedJid: [ '' ],
      groupMentions: [],
      forwardingScore: 999,
      isForwarded: false,
      forwardedNewsletterMessageInfo: {
        newsletterJid: '120363232588171807@newsletter',
        newsletterName: "𝙌𝙐𝙀𝙀𝙉 𝘼𝙉𝙅𝙐 𝘽𝙊𝙏",
        serverMessageId: 999
      },
  externalAdReply: { 
  title: '𝙌𝙐𝙀𝙀𝙉 𝘼𝙉𝙅𝙐 𝘽𝙊𝙏',
  body: '𝙌𝙐𝙀𝙀𝙉 𝘼𝙉𝙅𝙐 𝘽𝙊𝙏',
  mediaType: 1,
  sourceUrl: "https://github.com/Mrrashmika" ,
  thumbnailUrl: config.ALIVE_IMG ,
  renderLargerThumbnail: true,
  showAdAttribution: true
  }
  }}, { quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)

}
})

//ping
cmd({
    pattern: "ping",
    desc: "Check bot's response time.",
    category: "main",
    react: "❤️‍🩹",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const startTime = Date.now()
        const message = await conn.sendMessage(from, { text: '𝗣𝗶𝗻𝗴𝗶𝗻𝗴...' })
        const endTime = Date.now()
        const ping = endTime - startTime
        return await conn.sendMessage(message, `⏰ 𝗥𝗲𝘀𝗽𝗼𝗻𝘀𝗲 𝗧𝗶𝗺𝗲 : ${ping}ms` )
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})

//owner
cmd({
    pattern: "owner",
    react: "👨‍💻",
    alias: ["dev","createor","developer"],
    desc: "Get bot\'s command list.",
    category: "main",
    use: '.menu',
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{


let tex = `
*🪄Hello* ${pushname},

*🧚‍♀️𝐈'𝐦 𝙌𝙐𝙀𝙀𝙉 𝘼𝙉𝙅𝙐 𝘽𝙊𝙏 -𝐌𝐃 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐁𝐨𝐭💗*

> 👨‍💻 *MY 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢* ⚖️

*⚡ηαмє -: KING RASHMIKA*
*⚡αgє -: 18*
*⚡ηυмвєя* -: +94717775628
*⚡уσυтυвє* -: https://www.youtube.com/@gamingrash2006

> ᴘᴏᴡᴇʀᴇᴅ ʙʏ -: *⚡©GAMING RASH 2024💗*

`

await conn.sendMessage(from, { text: tex ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: false,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363232588171807@newsletter',
      newsletterName: "𝙌𝙐𝙀𝙀𝙉 𝘼𝙉𝙅𝙐 𝘽𝙊𝙏",
      serverMessageId: 999
    },
externalAdReply: { 
title: '𝙌𝙐𝙀𝙀𝙉 𝘼𝙉𝙅𝙐 𝘽𝙊𝙏',
body: '𝙌𝙐𝙀𝙀𝙉 𝘼𝙉𝙅𝙐 𝘽𝙊𝙏',
mediaType: 1,
sourceUrl: "https://github.com/Mrrashmika" ,
thumbnailUrl: config.ALIVE_IMG ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})

//