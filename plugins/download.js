const { fetchJson } = require('../lib/functions')
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg')
const config = require('../config')
const { igdl } = require('ruhend-scraper')
const fg = require('api-dylux')
const yts = require('yt-search')
const { cmd, commands } = require('../command')
var {subsearch , subdl }  = require('@sl-code-lords/si-subdl')
ffmpeg.setFfmpegPath(ffmpegPath);
async function videoToWebp (media) {

  const tmpFileOut = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
  const tmpFileIn = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.mp4`)

  fs.writeFileSync(tmpFileIn, media)

  await new Promise((resolve, reject) => {
      ffmpeg(tmpFileIn)
          .on("error", reject)
          .on("end", () => resolve(true))
          .addOutputOptions([
              "-vcodec",
              "libwebp",
              "-vf",
              "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse",
              "-loop",
              "0",
              "-ss",
              "00:00:00",
              "-t",
              "00:00:05",
              "-preset",
              "default",
              "-an",
              "-vsync",
              "0"
          ])
          .toFormat("webp")
          .save(tmpFileOut)
  })

  const buff = fs.readFileSync(tmpFileOut)
  fs.unlinkSync(tmpFileOut)
  fs.unlinkSync(tmpFileIn)
  return buff
}

// Fetch API URL
let baseUrl;
(async () => {
    try {
        let baseUrlGet = await fetchJson('https://raw.githubusercontent.com/prabathLK/PUBLIC-URL-HOST-DB/main/public/url.json');
        baseUrl = baseUrlGet.api;
    } catch (error) {
        console.error('Error fetching base URL:', error);
    }
})();

cmd({
    pattern: "tiktok",
    alias: ["tt"],
    react: "🎥",
    desc: "download tt videos",
    category: "download",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q && !q.startsWith("https://")) return reply("*give me tiktok url ❌*")
        m.react('⬇️')
        //fetch data from api  
        let data = await fetchJson(`${baseUrl}/api/tiktokdl?url=${q}`)
     let desc = `
     🎟️ *QUEEN ANJU-MD TIKTOK DOWNLOADER* 🎟️

🔢 *Please reply with the number you want to select:*

Title * ${data.title}

*!.* Tiktok Video

   1 | 📼 No-Watermark
   2 | 🎟️ With-Watermark

*!.* Tiktok Audio

   3 | 🎶 Audio file
   
*URL:* ${q}
     
     `

const sentMsg = await conn.sendMessage(from, { text: desc }, { quoted: mek });
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
        await conn.sendMessage(from, { react: { text: '⬇️', key: mek.key } });
        let data = await fetchJson(`${baseUrl}/api/tiktokdl?url=${q}`)

        // React to the upload (sending the file)
        await conn.sendMessage(from, { react: { text: '⬆️', key: mek.key } });

        if (messageType === '1') {
            // Handle option 1 (no wm File)
          await conn.sendMessage(from, { video: { url: data.data.no_wm }, mimetype: "video/mp4", caption: `> NO-WATERMARK\n\nQUEEN ANJU MD❤️‍🩹` }, { quoted: mek })
       
            }
         else if (messageType === '2') {
            // Handle option 2 (wm File)
            await conn.sendMessage(from, { video: { url: data.data.wm }, mimetype: "video/mp4", caption: `> WITH-WATERMARK \n\nQUEEN ANJU MD❤️‍🩹` }, { quoted: mek })  
          }
           
          else if (messageType === '3') {
            //Handle option 3 (audio File)  
          await conn.sendMessage(from, { audio: { url: data.data.audio }, mimetype: "audio/mpeg" }, { quoted: mek })  
    
          }

        // React to the successful completion of the task
        await conn.sendMessage(from, { react: { text: '✅', key: mek.key } });

        console.log("Response sent successfully");
    }
});

} catch (e) {
console.log(e);
reply(`${e}`);
}
});


// Facebook Downloader
cmd({
  pattern: "fb",
  alias: ["facebook"],
  desc: "Download Facebook videos",
  category: "download",
  filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
  try {

  if (!q || !q.startsWith("https://")) {
    return conn.sendMessage(from, { text: "❌ Please provide a valid URL." }, { quoted: mek });
}

await conn.sendMessage(from, { react: { text: "⏳", key: mek.key } });


    const captionHeader = `
💢 QUEEN ANJU-MD FB DOWNLOADER 💢


🔢 Please reply the number you want to select

[1] facebook Video
1.1 | 🪫 SD QUALITY
1.2 | 🔋 HD QUALITY

[2] facebook Audio
2.1 | 🎶 Audio file
2.2 | 📂 Document file
2.3 | 🎤 Voice cut [ptt]


Fb-Url: -=-${q} 
`;

const sentMsg = await conn.sendMessage(from, { text: captionHeader }, { quoted: mek });
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
        await conn.sendMessage(from, { react: { text: '⬇️', key: mek.key } });
        let data = await fetchJson(`${baseUrl}/api/fdown?url=${q}`)

        // React to the upload (sending the file)
        await conn.sendMessage(from, { react: { text: '⬆️', key: mek.key } });

        if (messageType === '1.1') {
            // Handle option 1 (sd File)
          await conn.sendMessage(from, { video: { url: data.data.sd }, mimetype: "video/mp4", caption: `> 🪫 SD QUALITY\n\nQUEEN ANJU MD❤️‍🩹` }, { quoted: mek })
       
          }

          else if (messageType === '1.2') {
            // Handle option 2 (hd File)
            await conn.sendMessage(from, { video: { url: data.data.hd }, mimetype: "video/mp4", caption: `> 🔋 HD QUALITY\n\nQUEEN ANJU MD❤️‍🩹` }, { quoted: mek })  
          }
           
          else if (messageType === '2.1') {
            //Handle option 3 (audio File)  
          await conn.sendMessage(from, { audio: { url: data.data.sd }, mimetype: "audio/mpeg" }, { quoted: mek })
          }
          
          else if (messageType === '2.2') {
            await conn.sendMessage(from, {
              document: { url: data.data.sd },
              mimetype: "audio/mpeg",
              fileName: `${data.data.title}.mp3`,
              caption: "*© 𝘘𝘜𝘌𝘌𝘕 𝘈𝘕𝘑𝘜 ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ - ᴍᴅ*"
          }, { quoted: mek });
          }
          
          else if (messageType === '2.3') {
            //Handle option 3 (audio File)  
          await conn.sendMessage(from, { audio: { url: data.data.sd }, mimetype: 'audio/mp4', ptt: true }, { quoted: mek })
    
          }

        // React to the successful completion of the task
        await conn.sendMessage(from, { react: { text: '✅', key: mek.key } });

        console.log("Response sent successfully");
    }
  });
} catch (e) {
console.log(e);
reply(`${e}`);
}
})

// Helper function to format file size
function formatFileSize(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Helper function for downloading and sending media
async function downloadAndSendMedia(conn, mek, from, url, apiEndpoint, mediaType, pushname) {
  if (!url || !url.startsWith("https://")) {
      return conn.sendMessage(from, { text: "❌ Please provide a valid URL." }, { quoted: mek });
  }

  const downloadingMsg = await conn.sendMessage(from, { text: "⏳ *Downloading...*" }, { quoted: mek });
  await conn.sendMessage(from, { react: { text: "⏳", key: mek.key } });

  try {
      const data = await fetchJson(`${baseUrl}/api/${apiEndpoint}?url=${encodeURIComponent(url)}`);

      const fileInfo = data.data.data || data.data;
      const captionHeader = `
╭─『 ${apiEndpoint.toUpperCase().replace('DL', ' DL')} 』───⊷
│
│ ✨ *Requester*: ${pushname}
│ 🤖 *Bot*: *© 𝘘𝘜𝘌𝘌𝘕 𝘈𝘕𝘑𝘜 ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ - ᴍᴅ*
│ 📄 *File Name:* ${fileInfo.fileName || fileInfo.name || 'Not available'}
│ 📦 *Size:* ${formatFileSize(fileInfo.fileSize || fileInfo.size || 0)}
│ 📎 *Type:* ${fileInfo.mimeType || fileInfo.file_type || 'Not available'}
│
│ 🤷‍♀️ *We Will Send Your ${apiEndpoint.replace('dl', '').toUpperCase()} Content*
╰────────────────────⊷`.trim();

      if (mediaType === 'video') {
          const videoInfo = fileInfo;
          const caption = `${captionHeader}\n\n> *© 𝘘𝘜𝘌𝘌𝘕 𝘈𝘕𝘑𝘜 ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ - ᴍᴅ*`.trim();

          if (videoInfo.hd || videoInfo.HD) {
              await conn.sendMessage(from, { video: { url: videoInfo.hd || videoInfo.HD }, caption: `\n\n${caption}` }, { quoted: mek });
          }
          if (videoInfo.sd || videoInfo.SD) {
              await conn.sendMessage(from, { video: { url: videoInfo.sd || videoInfo.SD }, caption: `\n\n${caption}` }, { quoted: mek });
          }

          if (videoInfo.audio) {
              await conn.sendMessage(from, { 
                  audio: { url: videoInfo.audio }, 
                  mimetype: "audio/mpeg",
                  caption: `🎵 Audio extracted from ${apiEndpoint.replace('dl', '').toUpperCase()} video`
              }, { quoted: mek });
          }
      } else if (mediaType === 'document') {
          const caption = `${captionHeader}\n\n> *© 𝘘𝘜𝘌𝘌𝘕 𝘈𝘕𝘑𝘜 ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ - ᴍᴅ*`.trim();

          await conn.sendMessage(from, { 
              document: { url: fileInfo.download || fileInfo.link_1 }, 
              fileName: fileInfo.fileName || fileInfo.name, 
              mimetype: fileInfo.mimeType || fileInfo.file_type,
              caption: caption
          }, { quoted: mek });
      }

      await conn.sendMessage(from, { react: { text: "✅", key: mek.key } });
  } catch (error) {
      console.error(`Error in ${apiEndpoint}:`, error);
      await conn.sendMessage(from, { text: `❌ An error occurred: ${error.message}` }, { quoted: mek });
      await conn.sendMessage(from, { react: { text: "❌", key: mek.key } });
  } finally {
      await conn.sendMessage(from, { delete: downloadingMsg.key });
  }
}

// Twitter Downloader
cmd({
  pattern: "twitter",
  alias: ["twdl"],
  desc: "Download Twitter videos",
  category: "download",
  filename: __filename
}, async (conn, mek, m, { from, q, pushname }) => {
  await downloadAndSendMedia(conn, mek, from, q, 'twitterdl', 'video', pushname);
});

// Google Drive Downloader
cmd({
  pattern: "gdrive",
  alias: ["googledrive"],
  desc: "Download Google Drive files",
  category: "download",
  filename: __filename
}, async (conn, mek, m, { from, q, pushname }) => {
  await downloadAndSendMedia(conn, mek, from, q, 'gdrivedl', 'document', pushname);
});

// Mediafire Downloader
cmd({
  pattern: "mediafire",
  alias: ["mfire"],
  desc: "Download Mediafire files",
  category: "download",
  filename: __filename
}, async (conn, mek, m, { from, q, pushname }) => {
  await downloadAndSendMedia(conn, mek, from, q, 'mediafiredl', 'document', pushname);
});

cmd({

  pattern: "ig",
  desc: "To download instagram videos.",
  react: "🎥",
  category: "download",
  filename: __filename

},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{
  
if (!q) return m.reply(`Please Give Me a vaild Link...`);
m.react('⬇️')

       let res = await igdl(q);
      
       let data = await res.data;
       for (let i = 0; i < 20; i++) {
          let media = data[i];
          let downloadurl = media.url
           m.react('⬆️')
          await conn.sendMessage(from,{video: {url:downloadurl},mimetype:"video/mp4",caption: `> *© 𝘘𝘜𝘌𝘌𝘕 𝘈𝘕𝘑𝘜 ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ - ᴍᴅ*`},{quoted:mek})
           m.react('✅')
       }

}catch(e){
console.log(e)
reply(`${e}`)
}
})



async function xdl(URL) {
  return new Promise((resolve, reject) => {
    fetch(`${URL}`, {method: 'get'}).then((res) => res.text()).then((res) => {
      const $ = cheerio.load(res, {xmlMode: false});
      const title = $('meta[property="og:title"]').attr('content');
      const duration = $('meta[property="og:duration"]').attr('content');
      const image = $('meta[property="og:image"]').attr('content');
      const videoType = $('meta[property="og:video:type"]').attr('content');
      const videoWidth = $('meta[property="og:video:width"]').attr('content');
      const videoHeight = $('meta[property="og:video:height"]').attr('content');
      const info = $('span.metadata').text();
      const videoScript = $('#video-player-bg > script:nth-child(6)').html();
      const files = {
        low: (videoScript.match('html5player.setVideoUrlLow\\(\'(.*?)\'\\);') || [])[1],
        high: videoScript.match('html5player.setVideoUrlHigh\\(\'(.*?)\'\\);' || [])[1],
        HLS: videoScript.match('html5player.setVideoHLS\\(\'(.*?)\'\\);' || [])[1],
        thumb: videoScript.match('html5player.setThumbUrl\\(\'(.*?)\'\\);' || [])[1],
        thumb69: videoScript.match('html5player.setThumbUrl169\\(\'(.*?)\'\\);' || [])[1],
        thumbSlide: videoScript.match('html5player.setThumbSlide\\(\'(.*?)\'\\);' || [])[1],
        thumbSlideBig: videoScript.match('html5player.setThumbSlideBig\\(\'(.*?)\'\\);' || [])[1]};
      resolve({status: true, result: {title, URL, duration, image, videoType, videoWidth, videoHeight, info, files}});
    }).catch((err) => reject({status: false, result: err}));
  });
}

cmd({
    pattern: "xnxxdown",
    alias: ["dlxnxx","xnxxdl"],
    react: '🫣',
    desc: "Download xnxx videos",
    category: "download",
    use: '.xnxx <xnxx link>',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
 //if (!isMe) return await reply('🚩 You are not a premium user\nbuy via message to owner!!')
 if (!q) return reply('*Please give me instagram url !!*')
  let res = await xdl(q)
  let title = res.result.title
  await conn.sendMessage(from, { video: { url: res.result.files.high }, caption: title}, { quoted: mek })
} catch (e) {
reply('*Error !!*')
console.log(e)
}
})
