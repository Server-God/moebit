const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.BOT_TOKEN);
var timeLeft = 0;
var n = true;

client.on('ready', () => {
  console.log('I am ready!');
  client.channels.get(process.env.FARM_CHANNELID).send('.harvest cannabis');
});

client.on("message", (message) =>{
  
  if(message.content.includes('`.grab`')){
    message.channel.send('.grab');
  }
  if(message.content.includes('before you can harvest your cannabis crops again')){
    var array = message.content.split(" ");
    var hour = array[4];
    var minutes = array [7];
    timeLeft = new Date().getTime() + (hour * 3600000) + (minutes * 60000);
    message.channel.send(timerBoi.data);
    message.channel.send(sotre);
  }
});

var farm = setInterval(function(){
var goalTime = timeLeft;
var currentTime=new Date().getTime();
if(currentTime >= goalTime){
  client.channels.get(process.env.FARM_CHANNELID).send('.harvest cannabis');
  goalTime=(new Date().getTime()+21720000);
  currentTime=new Date().getTime();
}
},6000);
