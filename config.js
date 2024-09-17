/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                                                                                                                                         //
//________/\\\________/\\\________/\\\__/\\\\\\\\\\\\\\\__/\\\\\\\\\\\\\\\__/\\\\\_____/\\\_______________/\\\\\\\\\_____/\\\\\_____/\\\______/\\\\\\\\\\\__/\\\________/\\\____________/\\\\____________/\\\\__/\\\\\\\\\\\\____          //
// _____/\\\\/\\\\____\/\\\_______\/\\\_\/\\\///////////__\/\\\///////////__\/\\\\\\___\/\\\_____________/\\\\\\\\\\\\\__\/\\\\\\___\/\\\_____\/////\\\///__\/\\\_______\/\\\___________\/\\\\\\________/\\\\\\_\/\\\////////\\\__         //
//  ___/\\\//\////\\\__\/\\\_______\/\\\_\/\\\_____________\/\\\_____________\/\\\/\\\__\/\\\____________/\\\/////////\\\_\/\\\/\\\__\/\\\_________\/\\\_____\/\\\_______\/\\\___________\/\\\//\\\____/\\\//\\\_\/\\\______\//\\\_        //
//   __/\\\______\//\\\_\/\\\_______\/\\\_\/\\\\\\\\\\\_____\/\\\\\\\\\\\_____\/\\\//\\\_\/\\\___________\/\\\_______\/\\\_\/\\\//\\\_\/\\\_________\/\\\_____\/\\\_______\/\\\___________\/\\\\///\\\/\\\/_\/\\\_\/\\\_______\/\\\_       //
//    _\//\\\______/\\\__\/\\\_______\/\\\_\/\\\///////______\/\\\///////______\/\\\\//\\\\/\\\___________\/\\\\\\\\\\\\\\\_\/\\\\//\\\\/\\\_________\/\\\_____\/\\\_______\/\\\___________\/\\\__\///\\\/___\/\\\_\/\\\_______\/\\\_      //
//     __\///\\\\/\\\\/___\/\\\_______\/\\\_\/\\\_____________\/\\\_____________\/\\\_\//\\\/\\\___________\/\\\/////////\\\_\/\\\_\//\\\/\\\_________\/\\\_____\/\\\_______\/\\\___________\/\\\____\///_____\/\\\_\/\\\_______\/\\\_     //
//      ____\////\\\//_____\//\\\______/\\\__\/\\\_____________\/\\\_____________\/\\\__\//\\\\\\___________\/\\\_______\/\\\_\/\\\__\//\\\\\\__/\\\___\/\\\_____\//\\\______/\\\____________\/\\\_____________\/\\\_\/\\\_______/\\\__    //
//       _______\///\\\\\\___\///\\\\\\\\\/___\/\\\\\\\\\\\\\\\_\/\\\\\\\\\\\\\\\_\/\\\___\//\\\\\___________\/\\\_______\/\\\_\/\\\___\//\\\\\_\//\\\\\\\\\_______\///\\\\\\\\\/_____________\/\\\_____________\/\\\_\/\\\\\\\\\\\\/___   //
//        _________\//////______\/////////_____\///////////////__\///////////////__\///_____\/////____________\///________\///__\///_____\/////___\/////////__________\/////////_______________\///______________\///__\////////////_____  //
//                                                                                                                                                                                                                                         //
//                                           ===========================================================*CREATED BY GAMING RASH*=====================================================                                                      //
//                                                                                                                                                                                                                                         //       
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEs3S29GcXdJZmI2RzExdkpKS1VhdEhSM2NzSnlCanhmSUFqZk8vcWxsVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidEZPOVg2Y3NKQkErQWRsRWNSdDJJMVNURU1wZEVMbGt6QlJFYkhxZ0NrST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBRUZlUTBrN3VHdjhsbHhTZEVMcXhSUFZUaU90Qk5XOVp6MWkrdGpPc2tBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQLzgwVUtzTEI3dlJ4UHd0b3piQldTbTZDRDcrNHI2TGM2VmFUNTNjT2swPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFPNHE2bEc3WUVlejY3RUdMWUxyREsrTHJUSStnZFUxQ3VMN3FEblNzR0E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlkwOXpjRjJ1RGJ2eVNaV0xNOCswK2tnREFNRmtXWjNDT0tIZWljN3B5a1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOFA4aU5aVkZJYzlUYW14bTc2TFpvNzRZS2gxSmZ2ekpCaVVVNEIvZGVuYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWndYY25tVmRVR2xRd1lPM0JMbGlscHY4d3RFRFBNcVNOSVdNL2psaXpVOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImM5cXdkKzk4NTlRM055eFdUVk8wTmg0bUlrWC9TMENTaVJQcmZzMjhNRW9wT0gzeUhoWEs2YmRFUU5JaHlweDBuRkEzbmY1akdkbkpqOFQrNnp3NkFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMzLCJhZHZTZWNyZXRLZXkiOiJ5ZXM2NXRoY1VkSXlTRjE4ckthQXVWWE5yOGdmaVJpYXF0RHlCNHFEVG5vPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI1WHM1RURvMFJ4S1N5WDVSWl85T2lnIiwicGhvbmVJZCI6IjYzNTk1ZjZjLTYwMTktNDMxNS05ZGQzLTMyYzUwYTdmODgyNSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiajhNYloxQ2c0cERpQVRJaXE2UkFzUElpdTQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEdESzhpcEZ5SUNUMkRGN0NVaHhZbDF0eWhZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlJKQ0NBOE43IiwibWUiOnsiaWQiOiIyMzQ5MDY4MDc2MjAxOjIyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkV4Y2VsbGVuY3kgRGlnaXRhbCBIdWIifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tISjJMVUJFS20reXJZR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Im1OOXpEVzBCeUZJdWdqR1k5d3lPYWNDSTRkdldLSkdNNnJzckJSWGYxVFE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjBOYjRHVGN1MGJBOEpyclZaMnRCTTZDbTE1L2EvNHBCME15TkU1MWk4Q0t6Z2hya2tXcDd0YWtqbWpXQkJ1U29CNU1hVU5SeDBmT2pMbVFqWnJwWEJnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJnek0vbHhrU1pXQkFlOVNTeWNKcWxLV0ZXblIrWTNOWm9rSTRESkNWSkJnQm8rcWpJS2pvWEhueFNjd3RMQTYvUmFkdzZCRWVyN0ZuV0NqQXpLTmdDZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkwNjgwNzYyMDE6MjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWmpmY3cxdEFjaFNMb0l4bVBjTWptbkFpT0hiMWlpUmpPcTdLd1VWMzlVMCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNTA3OTM1MH0=",
ALIVE_IMG: process.env.ALIVE_IMG || "https://imgtr.ee/images/2024/09/08/8e383f8918878bfc0512b2f05a81fdaa.jpeg",
PREFIX: process.env.PREFIX || ".",
ALIVE_MSG: process.env.ALIVE_MSG || "HELLOW THEIR, QUEEN ANJU IS ALIVE...\n\nOWNER: JANITH RASHMIKA\n\nTHANKS FOR USING QUEEN ANJU MD\n\n> *© Qᴜᴇᴇɴ ᴀɴᴊᴜ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ - ᴍᴅ*/n/n*> ɢɪᴛʜᴜʙ :* github.com/Mrrashmika/Queen_Anju-MD",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
BOT_NUMBER: process.env.BOT_NUMBER || "9068076201",
OWNER_REACT: process.env.OWNER_REACT || "🔆",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39",
READ_CMD: process.env.READ_CMD || "true",
AUTO_VOICE: process.env.AUTO_VOICE || "true",
AUTO_STICKER: process.env.AUTO_STICKER || "true",
AUTO_REPLY: process.env.AUTO_REPLY || "true",
WC_GB: process.env.WC_GB || "true",  //To turn on or off welcome msg and goodbye msg
ANTI_BAD_WORD: process.env.ANTI_BAD_WORD || "true",
BAD_WORDS: process.env.BAD_WORDS || ("wtf", "mia", "xxx","fuck","sex"),
ANTI_LINK: process.env.ANTI_LINK || "true",
ALLWAYS_OFFLINE: process.env.ALLWAYS_OFFLINE || "true",
ANTI_DELETE: process.env.ANTI_DELETE || "true",
};
