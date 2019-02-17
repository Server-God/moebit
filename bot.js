//alt boi
const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.BOT_TOKEN);
var timeLeft = 0;
var n = true;

client.on('ready', () => {
  console.log('I am ready!');
  client.channels.get(process.env.FARM_CHANNELID).send('.harvest opium');
});

client.on("message", (message) =>{
  if(message.content.includes('harvest your opium crops again!')){
    if (message.channel.id === process.env.FARM_CHANNELID){
    var array = message.content.split(" ");
    var hour = Number(array[4]);
    var minutes = Number(array [7]);
    timeLeft = new Date().getTime() + (hour * 3600000) + (minutes * 60000) + 120000;
    message.channel.send(timeLeft);
    message.channel.send(new Date().getTime());
  } 
  }
});

var farm = setInterval(function(){
var goalTime = timeLeft;
var currentTime=new Date().getTime();
if(currentTime >= goalTime){
  client.channels.get(process.env.FARM_CHANNELID).send('.harvest opium');
  timeLeft=(new Date().getTime()+72120000);
  goalTime=timeLeft;
  currentTime=new Date().getTime();
}
},6000);
