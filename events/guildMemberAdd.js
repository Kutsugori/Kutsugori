// client.on("guildMemberAdd", member => {
//   const general = client.channels.find(r => r.name === "general");
//   general.send(`Hajimemashite ${member} !! Prenez place, vous êtes le bienvenue ici !!`);
// });

module.exports = (client, member) => {
  const general = client.channels.find(r => r.name === "general");
  general.send(`Hajimemashite ${member} !! Prenez place, vous êtes le bienvenue ici !!`);
};
