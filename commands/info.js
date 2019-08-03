const Discord = require("discord.js");

module.exports = (client, message) => {

    const info_embed = new Discord.MessageEmbed()
    .setDescription(message.guild.name)
    .setThumbnail(message.guild.iconURL())
    .addField("Membres", message.guild.memberCount)
    .setFooter(message.guild.owner.user.tag, message.guild.owner.user.avatarURL())
    .setTimestamp();
    message.channel.send(info_embed);

};
