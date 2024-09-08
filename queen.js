const {
    default: makeWASocket,
    useMultiFileAuthState,
    DisconnectReason,
    jidNormalizedUser,
    getContentType,
    fetchLatestBaileysVersion,
    Browsers
    } = require('@whiskeysockets/baileys')
    
    const l = console.log
    const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson } = require('./lib/functions')
    const fs = require('fs')
    const P = require('pino')
    const config = require('./config')
    const qrcode = require('qrcode-terminal')
    const util = require('util')
    const { sms,downloadMediaMessage } = require('./lib/msg')
    const axios = require('axios')
    const { File } = require('megajs')
    const prefix = config.PREFIX;
    
    const ownerNumber = ['94717775628']
    
    //===================SESSION-AUTH============================
    if (!fs.existsSync(__dirname + '/sessions/creds.json')) {
    if(!config.SESSION_ID) return console.log('Please add your session to SESSION_ID env !!')
    const sessdata = config.SESSION_ID
    const filer = File.fromURL(`https://mega.nz/file/${sessdata}`)
    filer.download((err, data) => {
    if(err) throw err
    fs.writeFile(__dirname + '/sessions/creds.json', data, () => {
    console.log("Queen_Anju Session downloaded ✅")
    })})}
    
    const express = require("express");
    const app = express();
    const port = process.env.PORT || 8000;
    
    //=============================================
    
    async function connectToWA() {
    console.log("Connecting Queen_Anju 🧬...");
    const { state, saveCreds } = await useMultiFileAuthState(__dirname + '/sessions/')
    var { version } = await fetchLatestBaileysVersion()
    
    const conn = makeWASocket({
            logger: P({ level: 'silent' }),
            printQRInTerminal: false,
            browser: Browsers.macOS("Firefox"),
            syncFullHistory: true,
            auth: state,
            version
            })
        
    conn.ev.on('connection.update', (update) => {
    const { connection, lastDisconnect } = update
    if (connection === 'close') {
    if (lastDisconnect.error.output.statusCode !== DisconnectReason.loggedOut) {
    connectToWA()
    }
    } else if (connection === 'open') {
    console.log('Queen_Anju Is Installing... ')
    const path = require('path');
    fs.readdirSync("./plugins/").forEach((plugin) => {
    if (path.extname(plugin).toLowerCase() == ".js") {
    require("./plugins/" + plugin);
    }
    });
    console.log('Plugins installed successful ✅')
    console.log('Queen_Anju connected to whatsapp ✅')
    
    let up = `
    🚀 **Queen_Anju MD Connected Successfully!** ✅ 
    
    --- **🎉 Welcome to Queen_Anju MD!** 🎉 
    
    **🔹 PREFIX:** ${prefix}
    
    **🔹 OWNER:**  ${ownerNumber}
    
    --- Thank you for using **Queen_Anju MD**. 
    We're here to make your experience enjoyable and seamless. 
    If you need any help or have questions, don't hesitate to ask. 
    
    **Enjoy your time with us!** 😊 `;
    
    conn.sendMessage(config.BOT_NUMBER + "@s.whatsapp.net", { image: { url: `https://telegra.ph/file/adc46970456c26cad0c15.jpg` }, caption: up })
    
    }
    })

    
    //============================================================================
    if (config.WC_GB === "true") {
    conn.ev.on('group-participants.update', async (update) => {
        const { id, participants, action } = update;
        const groupMetadata = await conn.groupMetadata(id);
        const groupName = groupMetadata.subject;
    
        // Fetch the group icon
        let groupIconUrl;
        try {
            groupIconUrl = await conn.getProfilePicture(id);
        } catch (error) {
            groupIconUrl = 'https://telegra.ph/file/adc46970456c26cad0c15.jpg'; // Use a default icon URL if fetching fails
        }
    
        participants.forEach(async (participant) => {
            let message = '';
            if (action === 'add') {
                message = `
    ⫷⦁[ * '-'_꩜ 𝙌𝙐𝙀𝙀𝙉 𝘼𝙉𝙅𝙐 𝘽𝙊𝙏 ꩜_'-' * ]⦁⫸
    
    *Hey @${participant.split('@')[0]}!* 👋
    
    > 🟢 *Queen Anju WhatsApp Bot* is up and running!
               Runtime : ${runtime(process.uptime())}
    > 🛠️ *Created by:* Janith Rashmika 
    
    *Here's what I can do:* 
    💿 *Download Songs & Videos* 
    📰 *Fetch Latest News* 
    🎭 *Entertain with Fun Commands* 
    🔧 *Manage Groups* 
    
    > *Stay connected and enjoy the services!* 🌟
    
    *© 𝙌𝙐𝙀𝙀𝙉 𝘼𝙉𝙅𝙐 𝘽𝙊𝙏 - MD* 
    *💻 GitHub:* github.com/Mrrashmika/Queen_Anju-MD
                `;
            } else if (action === 'remove') {
                message = `
    ⫷⦁[ * '-'_꩜ 𝙌𝙐𝙀𝙀𝙉 𝘼𝙉𝙅𝙐 𝘽𝙊𝙏 ꩜_'-' * ]⦁⫸
    
    😔 *Goodbye @${participant.split('@')[0]}!*
    
    > We're sad to see you leave *${groupName}*. 😢
    > We hope you had a great time with us.
    
    *If you ever decide to come back, you'll always be welcome!* 🌟
    
    *© 𝙌𝙐𝙀𝙀𝙉 𝘼𝙉𝙈𝘼𝙈𝙄𝘽𝙏 - MD* 
    *💻 GitHub:* github.com/Mrrashmika/Queen_Anju-MD
                `;
            }
    
            if (message) {
                await conn.sendMessage(id, {
                    text: message,
                    contextInfo: { mentionedJid: [participant] },
                    caption: `Group Icon`,
                    image: { url: groupIconUrl }
                });
            }
        });
    });
}
    
//==========================================================================

    
    conn.ev.on('messages.upsert', async(mek) => {
        if (config.ALLWAYS_OFFLINE === "true" && mek.key && mek.key.remoteJid !== 'status@broadcast') {
            await conn.readMessages([mek.key]); // Mark the message as read but don't send delivery receipts
        }
    mek = mek.messages[0]
    if (!mek.message) return	
    mek.message = (getContentType(mek.message) === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
    if (mek.key && mek.key.remoteJid === 'status@broadcast' && config.AUTO_READ_STATUS === "true"){
    await conn.readMessages([mek.key])
    }
    const m = sms(conn, mek)
    const type = getContentType(mek.message)
    const content = JSON.stringify(mek.message)
    const from = mek.key.remoteJid
    const quoted = type == 'extendedTextMessage' && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.quotedMessage || [] : []
    const body = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : ''
    const isCmd = body.startsWith(prefix)
    const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
    const args = body.trim().split(/ +/).slice(1)
    const q = args.join(' ')
    const isGroup = from.endsWith('@g.us')
    const sender = mek.key.fromMe ? (conn.user.id.split(':')[0]+'@s.whatsapp.net' || conn.user.id) : (mek.key.participant || mek.key.remoteJid)
    const senderNumber = sender.split('@')[0]
    const botNumber = conn.user.id.split(':')[0]
    const pushname = mek.pushName || 'Sin Nombre'
    const isMe = botNumber.includes(senderNumber)
    const isOwner = ownerNumber.includes(senderNumber) || isMe
    const botNumber2 = await jidNormalizedUser(conn.user.id);
    const groupMetadata = isGroup ? await conn.groupMetadata(from).catch(e => {}) : ''
    const groupName = isGroup ? groupMetadata.subject : ''
    const participants = isGroup ? await groupMetadata.participants : ''
    const groupAdmins = isGroup ? await getGroupAdmins(participants) : ''
    const isBotAdmins = isGroup ? groupAdmins.includes(botNumber2) : false
    const isAdmins = isGroup ? groupAdmins.includes(sender) : false
    const reply = (teks) => {
    conn.sendMessage(from, { text: teks }, { quoted: mek })
    }
    
    conn.sendFileUrl = async (jid, url, caption, quoted, options = {}) => {
                  let mime = '';
                  let res = await axios.head(url)
                  mime = res.headers['content-type']
                  if (mime.split("/")[1] === "gif") {
                    return conn.sendMessage(jid, { video: await getBuffer(url), caption: caption, gifPlayback: true, ...options }, { quoted: quoted, ...options })
                  }
                  let type = mime.split("/")[0] + "Message"
                  if (mime === "application/pdf") {
                    return conn.sendMessage(jid, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, ...options }, { quoted: quoted, ...options })
                  }
                  if (mime.split("/")[0] === "image") {
                    return conn.sendMessage(jid, { image: await getBuffer(url), caption: caption, ...options }, { quoted: quoted, ...options })
                  }
                  if (mime.split("/")[0] === "video") {
                    return conn.sendMessage(jid, { video: await getBuffer(url), caption: caption, mimetype: 'video/mp4', ...options }, { quoted: quoted, ...options })
                  }
                  if (mime.split("/")[0] === "audio") {
                    return conn.sendMessage(jid, { audio: await getBuffer(url), caption: caption, mimetype: 'audio/mpeg', ...options }, { quoted: quoted, ...options })
                  }
                }

    //============================================================================
    if (isCmd && config.READ_CMD === "true" && config.ALLWAYS_OFFLINE === "false") {
                  await conn.readMessages([mek.key])  // Mark command as read
              }
    if(!isOwner && config.MODE === "private") return
    if(!isOwner && isGroup && config.MODE === "inbox") return
    if(!isOwner && !isGroup && config.MODE === "groups") return

    //=============================================================================
    
    const events = require('./command')
    const cmdName = isCmd ? body.slice(1).trim().split(" ")[0].toLowerCase() : false;
    if (isCmd) {
    const cmd = events.commands.find((cmd) => cmd.pattern === (cmdName)) || events.commands.find((cmd) => cmd.alias && cmd.alias.includes(cmdName))
    if (cmd) {
    if (cmd.react) conn.sendMessage(from, { react: { text: cmd.react, key: mek.key }})
    
    try {
    cmd.function(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply});
    } catch (e) {
    console.error("[PLUGIN ERROR] " + e);
    }
    }
    }
    events.commands.map(async(command) => {
    if (body && command.on === "body") {
    command.function(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply})
    } else if (mek.q && command.on === "text") {
    command.function(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply})
    } else if (
    (command.on === "image" || command.on === "photo") &&
    mek.type === "imageMessage"
    ) {
    command.function(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply})
    } else if (
    command.on === "sticker" &&
    mek.type === "stickerMessage"
    ) {
    command.function(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply})
    }});
    //============================================================================ 
    if(body === "send" || body === "Send" || body === "Ewpm" || body === "ewpn" || body === "Dapan" || body === "dapan" || body === "oni" || body === "Oni" || body === "save" || body === "Save" || body === "ewanna" || body === "Ewanna" || body === "ewam" || body === "Ewam" || body === "sv" || body === "Sv"|| body === "දාන්න"|| body === "එවම්න"){
        // if(!m.quoted) return reply("*Please Mention status*")
        const data = JSON.stringify(mek.message, null, 2);
        const jsonData = JSON.parse(data);
        const isStatus = jsonData.extendedTextMessage.contextInfo.remoteJid;
        if(!isStatus) return
    
        const getExtension = (buffer) => {
            const magicNumbers = {
                jpg: 'ffd8ffe0',
                png: '89504e47',
                mp4: '00000018',
            };
            const magic = buffer.toString('hex', 0, 4);
            return Object.keys(magicNumbers).find(key => magicNumbers[key] === magic);
        };
    
        if(m.quoted.type === 'imageMessage') {
            var nameJpg = getRandom('');
            let buff = await m.quoted.download(nameJpg);
            let ext = getExtension(buff);
            await fs.promises.writeFile("./" + ext, buff);
            const caption = m.quoted.imageMessage.caption;
            await conn.sendMessage(from, { image: fs.readFileSync("./" + ext), caption: caption });
        } else if(m.quoted.type === 'videoMessage') {
            var nameJpg = getRandom('');
            let buff = await m.quoted.download(nameJpg);
            let ext = getExtension(buff);
            await fs.promises.writeFile("./" + ext, buff);
            const caption = m.quoted.videoMessage.caption;
            let buttonMessage = {
                video: fs.readFileSync("./" + ext),
                mimetype: "video/mp4",
                fileName: `${m.id}.mp4`,
                caption: caption ,
                headerType: 4
            };
            await conn.sendMessage(from, buttonMessage,{
                quoted: mek
            });
        }
       }

       //======================================================================
       if (config.ALLWAYS_OFFLINE === "true") {
        conn.sendPresenceUpdate('unavailable'); // Sets the bot's last seen status
        console.log('Queen_Anju is now offline (last seen updated).');
    }
    
    })
    }
    app.get("/", (req, res) => {
    res.send("hey I am alive, Queen_Anju Is started✅");
    });
    app.listen(port, () => console.log(`Server listening on port http://localhost:${port}`));
    setTimeout(() => {
    connectToWA()
    }, 4000);  
