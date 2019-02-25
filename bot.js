const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.BOT_TOKEN);
var spamShoot = false;
var spamInter = 6000;
var spamMsg = "";
var spamChannel = 0;
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
	if (message.content.includes("`activate"){
	    //trigger | interval in seconds | command
	let array = message.content.split(" | ");
	spamChannel = message.channel.id;
	spamMsg = array[2];
	spamInter = Number(array[1]) * 1000;
	message.channel.send(message.member);
	    }

});

var spam = setInterval(function(){
	if (spamShoot = true){
		client.channels.get(spamChannel).send(spamMsg);
	}
}, spamInterv);
