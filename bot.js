const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.BOT_TOKEN);

client.on('ready', () => {
  console.log('I am ready!');
});

client.on("message", (message) =>{
  if(message.content.includes('`.grab`')){
    message.channel.send('.grab');
  }
  if (message.content.includes('lamo no')){
    message.react('🤔');
    message.channel.send(message.author.get).catch(console.log(error));
  }
});
