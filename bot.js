const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.BOT_TOKEN);
var spamShoot = 0;
var spamInterv = 6000;
var spamMsg = "";
var spamChannel = 402919650985246743;
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
	if (message.content.includes("~~activate")){
	    //trigger | interval in seconds | command
	let array = message.content.split(" ");
	spamChannel = "" + message.channel.id;
	spamMsg = message.content.split(" ").slice(2).join(" ");
	spamInterv = Number(array[1]) * 1000;
	console.log(spamChannel + "\n" + spamMsg + "\n" + spamInterv);
		spamShoot = 1;
	    }

});

var farm = setInterval(function(){
if(spamShoot = 1){
client.channels.get("402919650985246743").send("Hi!");
}
},spamInterv);
