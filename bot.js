const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.BOT_TOKEN);
var myID = 256880604359032832;
var spam;
var prefix = process.env.prefix;
var text = "";
client.on('ready', () => {
  console.log('I am ready!');
});

client.on("message", (message) =>{
  if(message.content.includes('`.grab`')){
    message.channel.send('.grab');
  }
if(message.author.id == process.env.SUS_ROLE){ 
	message.react(process.env.SUS_EMOJI);
}
	//all these depend on me sending
if (message.author.id = myID){
	if (message.content == prefix+"stop"){
	message.delete();
	clearInterval(spam);	
	message.channel.send("I\'ll stop lmao");
	}
	
	if (message.content == prefix+"testcmd"){
	var nTest = 1;
	//nTest = 0;
	if(nTest=1){
		//message.channel.send();
		let memberTag = message.author;
		console.log(memberTag);
	 }
	}
   }
});

client.on("message", (message) =>{
	if (message.author.id = myID){
	if (message.content.includes(prefix+"start")){
		message.delete();
	    //trigger | interval in seconds | command
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
