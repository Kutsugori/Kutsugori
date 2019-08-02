const Discord = require('discord.js');
const { TOKEN, PREFIX } = require("./config.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Prête à travailler!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NTE2NjU3NTMwNTQ2NDIxNzYy.XURynw.SSROtWwwuXdIDM_ht-e-6Yt-D4w');