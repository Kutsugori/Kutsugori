const Discord = require("discord.js");
const { TOKEN, PREFIX } = require("./config.js");
const client = new Discord.Client();

client.PREFIX = PREFIX;

client.commands = new Discord.Collection();
client.commands.set("repeat", require("./commands/repeat.js"));
client.commands.set("role", require("./commands/role.js"));
client.commands.set("info", require("./commands/info.js"));

client.on("ready", () => require("./events/ready.js")(client));
client.on("message", msg => require("./events/message.js")(client, msg));
client.on("guildMemberAdd", member => require("./events/guildMemberAdd.js")(client, member));

client.on("error", console.error);
client.on("warn", console.warn);
client.on("debug", console.log);

client.login(TOKEN);
