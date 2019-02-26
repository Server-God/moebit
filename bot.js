const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.BOT_TOKEN);
var text = "";
client.on('ready', () => {
  console.log('I am ready!');
});

client.on("message", (message) =>{
  if(message.content.includes('`.grab`')){
    message.channel.send('.grab');
  }
if(message.member.roles.has(process.env.SUS_ROLE)){ 
	message.react(process.env.SUS_EMOJI);
}
	

});

client.on("message", (message) =>{
	if (message.content.includes("~~activate")){
	    //trigger | interval in seconds | command
		let array = message.content.split(" ");
		var spamInterv = Number(array[1]) * 1000;
		var spamMsg = message.content.split(" ").slice(2).join(" ");
		console.log(spamChannel + "\n" + spamMsg + "\n" + spamInterv);
		
		var spam = setInterval(function(){
	message.channel.send(spamMsg);
	    }, spamInterv);
	};
});
