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






const prefix = ""



///------------------------





//code clear | كود مسح
//كود مسح الشات دسكورد
//code clear message discord
client.on("messageCreate" , saleh => {
let args = saleh.content.split(" ").slice(1).join(" ");
if(saleh.content.startsWith( prefix + 'clear')){
if(saleh.member.permissions.has("ADMINISTRATOR")) {
saleh.channel.bulkDelete(args)
saleh.channel.send(`**${args} message/s was cleared !**`)
}
}
});
//https://ra3dstudio.com CopyRight Codes




//----------------------



//Code feedback | كود فيدباك
client.on('messageCreate', async message => {
  if(message.content.startsWith(prefix + "feed")) {
    
if(!message.member.roles.cache.has('1078731649682001941')) return message.reply("You dont have permission")
    
  const user = message.mentions.users.first()
  if(!user) return message.channel.send({content : "Mention a user"})
    
  user.send({embeds:[new Discord.MessageEmbed().setColor('#303136').setDescription(`**ادا كنت حابب تدعم السيرفر برايك تقدر تسوي فيدباك❤**`).setTitle('FEEDBACK').setURL(message.url)]}).then(async () => {
    message.reply({content : '**Done ✅**'})
    
  }).catch((err) => { message.reply({content: `**خاصه مقفل**`})})
  }})
//https://ra3dstudio.com CopyRight Codes
