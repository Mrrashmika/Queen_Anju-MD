const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')

cmd({
    pattern: "menu",
    desc: "To get the menu.",
    react: "😚",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let menu = {
main: '',
download: '',
group: '',
owner: '',
convert: '',
search: '',
ai: '',
fun: '',
other: ''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `│  ${config.PREFIX}${commands[i].pattern}\n`;
 }
}

let menumsg = `
🌟👑 𝗤𝘂𝗲𝗲𝗻_𝗔𝗻𝗷𝘂 𝗠𝗗 -  LIST MENU 👑🌟

   HELLO ${pushname}
╭─「 ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ」
│◈ 𝚁𝙰𝙼 𝚄𝚂𝙰𝙶𝙴 - ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
│◈ 𝚁𝚄𝙽𝚃𝙸𝙼𝙴 - ${runtime(process.uptime())}
╰──────────●●►
╭──────────●●►
│⛵ LIST MENU
│   ───────
│ 1   OWNER
│ 2   CONVERT
│ 3   AI
│ 4   SEARCH
│ 5   DOWNLOAD
│ 6   FUN
│ 7   MAIN
│ 8   GROUP
│ 9   USEFULL
╰───────────●●►

🌟 Reply the Number you want to select

*© 𝗤𝘂𝗲𝗲𝗻_𝗔𝗻𝗷𝘂 𝗕𝗼𝘁 - MD* 
💻 *GitHub:* github.com/Mrrashmika/Queen_Anju-MD 
`
let ownermenu = `
🌟👑 𝗤𝘂𝗲𝗲𝗻_𝗔𝗻𝗷𝘂 𝗠𝗗 - 𝗢𝘄𝗻𝗲𝗿 𝗠𝗲𝗻𝘂 👑🌟

   HELLO ${pushname}
╭─「 ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ」
│◈ 𝚁𝙰𝙼 𝚄𝚂𝙰𝙶𝙴 - ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
│◈ 𝚁𝚄𝙽𝚃𝙸𝙼𝙴 - ${runtime(process.uptime())}
╰──────────●●►
╭──────────●●►
│⛵ OWNER MENU
│   ───────
${menu.owner}
╰───────────●●►


*© 𝗤𝘂𝗲𝗲𝗻_𝗔𝗻𝗷𝘂 𝗕𝗼𝘁 - MD* 
💻 *GitHub:* github.com/Mrrashmika/Queen_Anju-MD 
`
let convertmenu = `
🌟👑 𝗤𝘂𝗲𝗲𝗻_𝗔𝗻𝗷𝘂 𝗠𝗗 - 𝗖𝗼𝗻𝘃𝗲𝗿𝘁 𝗠𝗲𝗻𝘂 👑🌟

   HELLO ${pushname}
╭─「 ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ」
│◈ 𝚁𝙰𝙼 𝚄𝚂𝙰𝙶𝙴 - ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
│◈ 𝚁𝚄𝙽𝚃𝙸𝙼𝙴 - ${runtime(process.uptime())}
╰──────────●●►
╭──────────●●►
│⛵ CONVERT MENU
│   ───────
${menu.convert}
╰───────────●●►


*© 𝗤𝘂𝗲𝗲𝗻_𝗔𝗻𝗷𝘂 𝗕𝗼𝘁 - MD* 
💻 *GitHub:* github.com/Mrrashmika/Queen_Anju-MD
`
let downloadmenu = `
🌟👑 𝗤𝘂𝗲𝗲𝗻_𝗔𝗻𝗷𝘂 𝗠𝗗 - 𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝗠𝗲𝗻𝘂 👑🌟

   HELLO ${pushname}
╭─「 ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ」
│◈ 𝚁𝙰𝙼 𝚄𝚂𝙰𝙶𝙴 - ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
│◈ 𝚁𝚄𝙽𝚃𝙸𝙼𝙴 - ${runtime(process.uptime())}
╰──────────●●►
╭──────────●●►
│⛵ DOWNLOAD MENU
│   ───────
${menu.download}
╰───────────●●►


*© 𝗤𝘂𝗲𝗲𝗻_𝗔𝗻𝗷𝘂 𝗕𝗼𝘁 - MD* 
💻 *GitHub:* github.com/Mrrashmika/Queen_Anju-MD
`
let mainmenu = `
🌟👑 𝗤𝘂𝗲𝗲𝗻_𝗔𝗻𝗷𝘂 𝗠𝗗 - 𝗠𝗮𝗶𝗻 𝗠𝗲𝗻𝘂 👑🌟

   HELLO ${pushname}
╭─「 ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ」
│◈ 𝚁𝙰𝙼 𝚄𝚂𝙰𝙶𝙴 - ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
│◈ 𝚁𝚄𝙽𝚃𝙸𝙼𝙴 - ${runtime(process.uptime())}
╰──────────●●►
╭──────────●●►
│⛵ MAIN MENU
│   ───────
${menu.main}
╰───────────●●►


*© 𝗤𝘂𝗲𝗲𝗻_𝗔𝗻𝗷𝘂 𝗕𝗼𝘁 - MD* 
💻 *GitHub:* github.com/Mrrashmika/Queen_Anju-MD
`
let funmenu = `
🌟👑 𝗤𝘂𝗲𝗲𝗻_𝗔𝗻𝗷𝘂 𝗠𝗗 - 𝗙𝘂𝗻 𝗠𝗲𝗻𝘂 👑🌟

   HELLO ${pushname}
╭─「 ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ」
│◈ 𝚁𝙰𝙼 𝚄𝚂𝙰𝙶𝙴 - ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
│◈ 𝚁𝚄𝙽𝚃𝙸𝙼𝙴 - ${runtime(process.uptime())}
╰──────────●●►
╭──────────●●►
│⛵ FUN MENU
│   ───────
${menu.fun}
╰───────────●●►


*© 𝗤𝘂𝗲𝗲𝗻_𝗔𝗻𝗷𝘂 𝗕𝗼𝘁 - MD* 
💻 *GitHub:* github.com/Mrrashmika/Queen_Anju-MD
`
let groupmenu = `
🌟👑 𝗤𝘂𝗲𝗲𝗻_𝗔𝗻𝗷𝘂 𝗠𝗗 - 𝗚𝗿𝗼𝘂𝗽 𝗠𝗲𝗻𝘂 👑🌟

   HELLO ${pushname}
╭─「 ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ」
│◈ 𝚁𝙰𝙼 𝚄𝚂𝙰𝙶𝙴 - ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
│◈ 𝚁𝚄𝙽𝚃𝙸𝙼𝙴 - ${runtime(process.uptime())}
╰──────────●●►
╭──────────●●►
│⛵ GROUP MENU
│   ───────
${menu.group}
╰───────────●●►


*© 𝗤𝘂𝗲𝗲𝗻_𝗔𝗻𝗷𝘂 𝗕𝗼𝘁 - MD* 
💻 *GitHub:* github.com/Mrrashmika/Queen_Anju-MD
`
let AImenu = `
🌟👑 𝗤𝘂𝗲𝗲𝗻_𝗔𝗻𝗷𝘂 𝗠𝗗 - AI MENU 👑🌟

   HELLO ${pushname}
╭─「 ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ」
│◈ 𝚁𝙰𝙼 𝚄𝚂𝙰𝙶𝙴 - ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
│◈ 𝚁𝚄𝙽𝚃𝙸𝙼𝙴 - ${runtime(process.uptime())}
╰──────────●●►
╭──────────●●►
│⛵ AI MENU
│   ───────
${menu.ai}
╰───────────●●►


*© 𝗤𝘂𝗲𝗲𝗻_𝗔𝗻𝗷𝘂 𝗕𝗼𝘁 - MD* 
💻 *GitHub:* github.com/Mrrashmika/Queen_Anju-MD
`
let searchmenu = `
🌟👑 𝗤𝘂𝗲𝗲𝗻_𝗔𝗻𝗷𝘂 𝗠𝗗 - 𝗦𝗲𝗮𝗿𝗰𝗵 𝗠𝗲𝗻𝘂 👑🌟

   HELLO ${pushname}
╭─「 ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ」
│◈ 𝚁𝙰𝙼 𝚄𝚂𝙰𝙶𝙴 - ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
│◈ 𝚁𝚄𝙽𝚃𝙸𝙼𝙴 - ${runtime(process.uptime())}
╰──────────●●►
╭──────────●●►
│⛵ SEARCH MENU
│   ───────
${menu.search}
╰───────────●●►


*© 𝗤𝘂𝗲𝗲𝗻_𝗔𝗻𝗷𝘂 𝗕𝗼𝘁 - MD* 
💻 *GitHub:* github.com/Mrrashmika/Queen_Anju-MD
`
let usfullmenu = `
🌟👑 𝗤𝘂𝗲𝗲𝗻_𝗔𝗻𝗷𝘂 𝗠𝗗 - USEFULL MENU 👑🌟

   HELLO ${pushname}
╭─「 ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ」
│◈ 𝚁𝙰𝙼 𝚄𝚂𝙰𝙶𝙴 - ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
│◈ 𝚁𝚄𝙽𝚃𝙸𝙼𝙴 - ${runtime(process.uptime())}
╰──────────●●►
╭──────────●●►
│⛵ USEFULL MENU
│   ───────
${menu.other}
╰───────────●●►


*© 𝗤𝘂𝗲𝗲𝗻_𝗔𝗻𝗷𝘂 𝗕𝗼𝘁 - MD* 
💻 *GitHub:* github.com/Mrrashmika/Queen_Anju-MD
`


// Send the initial message and store the message ID
const sentMsg = await conn.sendMessage(from, { image: {url: config.ALIVE_IMG}, caption: menumsg }, { quoted: mek });
const messageID = sentMsg.key.id; // Save the message ID for later reference


// Listen for the user's response
conn.ev.on('messages.upsert', async (messageUpdate) => {
    const mek = messageUpdate.messages[0];
    if (!mek.message) return;
    const messageType = mek.message.conversation || mek.message.extendedTextMessage?.text;
    const from = mek.key.remoteJid;
    const sender = mek.key.participant || mek.key.remoteJid;

    // Check if the message is a reply to the previously sent message
    const isReplyToSentMsg = mek.message.extendedTextMessage && mek.message.extendedTextMessage.contextInfo.stanzaId === messageID;

    if (isReplyToSentMsg) {
        // React to the user's reply (the "1" or "2" message)
        await conn.sendMessage(from, { react: { text: '🎃', key: mek.key } });

        if (messageType === '1') {
            // Handle option 1 (Audio File)
            await conn.sendMessage(from, { image: {url: config.ALIVE_IMG}, caption: ownermenu }, { quoted: mek });
        } else if (messageType === '2') {
            // Handle option 2 (Document File)
            await conn.sendMessage(from, { image: {url: config.ALIVE_IMG}, caption: convertmenu }, { quoted: mek });
        } else if (messageType === '3') {
            await conn.sendMessage(from, { image: {url: config.ALIVE_IMG}, caption: AImenu }, { quoted: mek });
        } else if (messageType === '4') {
            await conn.sendMessage(from, { image: {url: config.ALIVE_IMG}, caption: searchmenu }, { quoted: mek });
        } else if (messageType === '5') {
            await conn.sendMessage(from, { image: {url: config.ALIVE_IMG}, caption: downloadmenu }, { quoted: mek });
        } else if (messageType === '6') {
            await conn.sendMessage(from, { image: {url: config.ALIVE_IMG}, caption: funmenu }, { quoted: mek });
        } else if (messageType === '7') {
            await conn.sendMessage(from, { image: {url: config.ALIVE_IMG}, caption: mainmenu }, { quoted: mek });
        } else if (messageType === '8') {
            await conn.sendMessage(from, { image: {url: config.ALIVE_IMG}, caption: groupmenu }, { quoted: mek });
        } else if (messageType === '9') {
            await conn.sendMessage(from, { image: {url: config.ALIVE_IMG}, caption: usfullmenu }, { quoted: mek });
        }

        // React to the successful completion of the task
        
    }
});

} catch (e) {
console.log(e);
reply(`${e}`);
}
});


