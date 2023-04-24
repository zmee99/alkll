//السورس الاساسي لـ دسكورد نسخة 12 | the main source of discord.js 12v
const Discord = require('discord.js');
const { Client, Intents,MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_BANS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS, Intents.FLAGS.GUILD_INTEGRATIONS, Intents.FLAGS.GUILD_WEBHOOKS, Intents.FLAGS.GUILD_INVITES, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_MESSAGE_TYPING, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.DIRECT_MESSAGE_REACTIONS, Intents.FLAGS.DIRECT_MESSAGE_TYPING] });

client.on("ready", () => {
  console.log(`✅ | Logged as ${client.user.tag}`);
})
//////////////////////////////////////
///
client.login(process.env.token)

//https://ra3dstudio.com CopyRight Codes

//كيف تسوي بوت وبردكاست في سطرين فقط بدون برمجة اكواد! | how to make boardcast without coding js
const sphinx = require("sphinx-bc"); // npm i sphinx-bc@latest - I Do updates everyday make sure you check .

new sphinx.BotAccount({
    ownerID: ["991652820203876412", "856842798212710401"],
    prefix: "+",
    embedReply: "Optional Option.",
    mention: boolean
    type: types
}).botbc()
//https://ra3dstudio.com CopyRight Codes
