const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Prête à travailler!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NTE2NjU3NTMwNTQ2NDIxNzYy.D0N1Qg.0qDTcsInrfgV5ARjC03Wc5ATXqI');