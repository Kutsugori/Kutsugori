module.exports = (client, message, args) => {
    const logs = client.channels.find(r => r.name === "logs");

    if (args[0] !== "anime") return message.channel.send("Ce rôle n'est pas disponible...");
      const role = message.guild.roles.find(r => r.name === args[0]);

      if (!role){
          message.guild.roles.create({
              data: {
                  name: "anime",
                  color: "RED"
              }
          }).then(message.member.roles.add(role));

      } else if (message.member.roles.find(r => r.name === args[0])){
          message.member.roles.remove(role);
          message.channel.send("Tes secrets sont bien garder... Ne t'en fait pas. Hi Hi...");
          logs.send(`J'ai enlever le rôle ${args[0]} à ${message.author.tag}`);
      } else {
          message.member.roles.add(role);
          message.channel.send("Bienvenue dans un nouveau monde !");
          logs.send(`J'ai ajouter le rôle ${args[0]} à ${message.author.tag}`);
      }
};
