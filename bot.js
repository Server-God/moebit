const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
function random(low, high){
  return Math.floor(Math.random() * (high - low) + low)
}
function cipher(status,string) {
	//shift all letters by 13
	//assign letters numbers according to alphabet ex (a is 1 j is 10)
	//flip numbers (1 becomes 10, 21 becomes 12, 11 is 11)
	//order numbers least to greatest
	//match letters to numbers in the unorganized fashion
	
	//e is encrypt
	//d is decrypt
	var a = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
	var c = ["w","g","n","x","h","o","y","i","p","z","j","q","a","k","r","b","c","s","l","m","t","d","u","e","v","k"]

	var n = -1;
	var output = "";
	var temp = string.toLowerCase().split("");
	for(var i = 0; i < string.length; i++){
		if(a.includes(temp[i]) == false) output = output + temp[i];
		else {
			if (status == "e"){
			n = a.indexOf(temp[i]);
			output = output + c[n];
			} else if(status == "d"){
			n = c.indexOf(temp[i]);
			output = output + a[n];
			}
		}
	}
	return output.toUpperCase()
}

console.log(cipher("e","mouse bois uniTe"))
function gameBoi(){
  var n = random(0,config.games.length-1);
  client.user.setActivity(config.games[n]);
}
var spam;
client.on('ready', () => {
  //gameBoi()
  console.log('I am ready!');
});
//var games = setInterval(gameBoi,600000);

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
	/*if (command == "whoosh"){
	const newGame = args.join(" ");
	if (!newGame) return message.reply("yo, idiot you forgot what to set your game to");
    	message.delete().catch(O_o=>{}); 
	clearInterval(games);
	client.user.setActivity(newGame);
	games = setInterval(gameBoi,600000);
	}
	if (command == "set"){
	const newGame = args.join(" ");
	if (!newGame) return message.reply("yo, idiot you forgot what to set your game to");
    	message.delete().catch(O_o=>{}); 
        clearInterval(games);
	client.user.setActivity(newGame);
	}*/
if (command = "decrypt") {
var text = args.join(" ");
message.channel.send(cipher("d", text));
}
if (command = "encrypt") {
var text = args.join(" ");
message.channel.send(cipher("e", text));
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

client.on('messageDelete', async (message) => {
  const logs = client.channels.get("596454885248204800");  
  const entry = await message.guild.fetchAuditLogs({type: 'MESSAGE_DELETE'}).then(audit => audit.entries.first())
  let user = ""
    if (entry.extra.channel.id === message.channel.id
      && (entry.target.id === message.author.id)
      && (entry.createdTimestamp > (Date.now() - 5000))
      && (entry.extra.count >= 1)) {
    user = entry.executor.username
  } else { 
    user = message.author.username
  }
  logs.send(`A message was deleted in ${message.channel.name} by ${user}`);
})

client.login(process.env.BOT_TOKEN);
