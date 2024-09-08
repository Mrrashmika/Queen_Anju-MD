const fs = require('fs');
const path = require('path');
const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')
const { fetchJson } = require('../lib/functions')

cmd({
    pattern: "genimg",
    desc: "Ai image.",
    react: "🧠",
    category: "ai",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

await conn.sendMessage(from,{image :{ url: `https://api.vihangayt.com/ai/stablediff?prompt=${q}&negprompt=not%20hd,%20watermark` },caption: '> *⚖️𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : ©𝐌𝐫 𝐂𝐲𝐛𝐞𝐫 𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥 2024💗*' },{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})

//======Wallpaper=====

cmd({
    pattern: "gemini",
    desc: "Ai chat.",
    react: "🧠",
    category: "ai",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let res = await fetchJson(`https://api.vihangayt.com/ai/gemini?q=${q}`)
//----------------------------------
let data = res.data

await reply(data.response)

}catch(e){
console.log(e)
reply(`${e}`)
}
})

//======gpt4=======

cmd({
    pattern: "ai",
    desc: "Ai chat.",
    react: "🧠",
    category: "ai",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let data = await fetchJson(`https://api.vihangayt.com/ai/gpt?q=${q}`)
return reply(`${data.data}`)
}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "lamda",
    desc: "Ai chat.",
    react: "🧠",
    category: "ai",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let data = await fetchJson(`https://api.vihangayt.com/ai/lamda?q=${q}`)
return reply(`${data.data}`)
}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "lalaland",
    desc: "Ai chat.",
    react: "🧠",
    category: "ai",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let data = await fetchJson(`https://api.vihangayt.com/ai/lalaland?q=${q}`)
return reply(`${data.data}`)
}catch(e){
console.log(e)
reply(`${e}`)
}
})
