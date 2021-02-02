const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NjI3NjY4MDEzMjcyNzkzMDg4.XY__Yw.y2xf9fy1K4rz_7br34n4tQ6CwV0');
