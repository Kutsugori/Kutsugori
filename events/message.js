module.exports = (client, message) => {

  // let prefix = false;

  
  if (message.content.indexOf(client.PREFIX) !== 0) return;
  const args = message.content.slice(client.PREFIX.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (client.commands.has(command)) client.commands.get(command)(client, message, args);

  // if (command === "prefix=") {
  //   if (!args[0]) return message.channel.send("Dîtes-moi si vous voulez activer ou non le prefix !");
  
  //   if (args[0] === "false") {
  //         prefix = false;
  //         message.channel.send("Le préfix ne doit plus être utiliser !");
  //   } else if (args[0] === "true") {
  //        prefix = true;
  //        message.channel.send("Le préfix doit maintenant être utiliser !");
  //   }
  
  // }
};
