module.exports = (client, message, args) => {
  message.channel.send(args.join(" "));
  message.delete();
};
