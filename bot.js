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
  if (process.env.SUS_STATUS == true) {
if(message.member.roles.has(process.env.SUS_ROLE)){ 
	message.react(process.env.SUS_EMOJI);
}
  }
});
