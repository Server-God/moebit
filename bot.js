const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
function random(low, high){
  return Math.floor(Math.random() * (high - low) + low)
}
function gameBoi(){
  var n = random(0,config.games.length-1);
  client.user.setActivity(config.games[n]);
}
var spam;
client.on('ready', () => {
  gameBoi()
  console.log('I am ready!');
});
var games = setInterval(function(){
  gameBoi();
},600000)

client.on("message", (message) =>{
  if(message.content.includes('`.grab`')){
    message.channel.send('.grab');
  }
  if(message.content.indexOf(process.env.prefix) !== 0) return;
  const args = message.content.slice(process.env.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
/*if(message.author.id == process.env.SUS_ROLE){ 
	message.react(process.env.SUS_EMOJI);
}*/
	//all these depend on me sending
if (message.author.id !== process.env.myID) return;
	if (command == "stop"){
	message.delete();
	clearInterval(spam);	
	}
	if (command == "whoosh"){
	const newGame = args.join(" ");
	if (!newGame) return message.reply("yo, idiot you forgot what to set your game to");
    	message.delete().catch(O_o=>{}); 
	clearInterval(games);
	client.user.setActivity(newGame);
	}
});

client.on("message", (message) =>{
	if(message.content.indexOf(process.env.prefix) !== 0) return;
  const args = message.content.slice(process.env.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
	if (command == "start"){
		message.delete();
		message.channel.send(spamMsg);
	    //trigger interval in seconds command
		var spamInter = args.shift();
    spamInterv = (Number(spamInterv) * 1000) + 100;
		spam = setInterval(function(){
	message.channel.send(args);
	    }, spamInterv);
	};
});
client.login(process.env.BOT_TOKEN);
