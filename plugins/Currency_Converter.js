const axios = require('axios');
const config = require('../config'); // Make sure to add your API key here
const { cmd, commands } = require('../command');

cmd({
    pattern: "convert",
    desc: "Convert an amount from one currency to another.",
    category: "convert",
    react: "💱",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (args.length < 3) {
            return reply("Usage: .convert <amount> <from_currency> <to_currency>");
        }

        const amount = args[0];
        const fromCurrency = args[1].toUpperCase();
        const toCurrency = args[2].toUpperCase();

        if (isNaN(amount)) {
            return reply("Please provide a valid amount.");
        }

        const apiUrl = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        if (!data.rates[toCurrency]) {
            return reply(`Conversion rate for ${toCurrency} not found.`);
        }

        const convertedAmount = (amount * data.rates[toCurrency]).toFixed(2);
        let conversionInfo = `💸_*Currency Conversion*_💸\n\n`;
        conversionInfo += `💵 *Amount*: ${amount} ${fromCurrency}\n`;
        conversionInfo += `🔄 *Converted Amount*: ${convertedAmount} ${toCurrency}\n`;
        conversionInfo += `📈 *Exchange Rate*: 1 ${fromCurrency} = ${data.rates[toCurrency]} ${toCurrency}\n
        
> QUEEN ANJU MD
        `;

        await conn.sendMessage(from, { text: conversionInfo }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`Error fetching data: ${e.message}`);
    }
});
