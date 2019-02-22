const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.BOT_TOKEN);
var timeLeft = Time() + 21720000;

function Time(){ 
  var n = new Date();
  return n.getTime();
}

client.on('ready', () => {
  console.log('I am ready!');
  client.channels.get(process.env.FARM_CHANNELID).send('.harvest cannabis');
});

client.on("message", (message) =>{
  if(message.content.includes('`.grab`')){
    message.channel.send('.grab');
  }
  if(message.content.includes('before you can harvest your cannabis crops again')){
    if (message.channel.id === process.env.FARM_CHANNELID){
    var array = message.content.split(" ");
    var hour = Number(array[4]);
    var minutes = Number(array [7]);
    timeLeft = Time() + (hour * 3600000) + (minutes * 60000) + 120000;
    message.channel.send(timeLeft);
    message.channel.send(Time());
  } 
  }
});

var farm = setInterval(function(){
var goalTime = timeLeft;
var currentTime=Time();
if(currentTime >= goalTime){
  client.channels.get(process.env.FARM_CHANNELID).send('.harvest cannabis');
  timeLeft=(Time()+21720000);
  goalTime=timeLeft;
  currentTime=Time();
}
},6000);
