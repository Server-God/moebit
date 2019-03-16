const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
function random(low, high){
  return Math.floor(Math.random() * (high - low) + low)
}
function gameBoi(){
  var n = random(0,config.games.length);
  client.user.setActivity("Your mom");
}
client.login(process.env.BOT_TOKEN);
var myID = 256880604359032832;
var spam;
var prefix = process.env.prefix;
var text = "";
client.on('ready', () => {
  gameBoi()
  console.log('I am ready!');
});

client.on("message", (message) =>{
  if(message.content.includes('`.grab`')){
    message.channel.send('.grab');
  }
var games = setInterval(function(){
  gameBoi();
},600000)
/*if(message.author.id == process.env.SUS_ROLE){ 
	message.react(process.env.SUS_EMOJI);
}*/
	//all these depend on me sending
if (message.author.id = myID){
	if (message.content == prefix+"stop"){
	message.delete();
	clearInterval(spam);	
	}
	if (message.content == prefix+"testcmd"){
	var nTest = 1;
	//nTest = 0;
	if(nTest=1){
		//message.channel.send();
		let memberTag = message.author;
		console.log(memberTag);
	 }
   }}
});

client.on("message", (message) =>{
	if (message.author.id = myID){
	if (message.content.includes(prefix+"start")){
		message.delete();
		message.channel.send(spamMsg);
	    //trigger interval in seconds command
		let array = message.content.split(" ");
		var spamInterv = (Number(array[1]) * 1000) + 100;
		var spamMsg = message.content.split(" ").slice(2).join(" ");
		console.log(spamMsg + "\n" + spamInterv);
		
		spam = setInterval(function(){
	message.channel.send(spamMsg);
	    }, spamInterv);
	};
	}
});
