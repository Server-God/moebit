const cmd = '.harvest cannabis';
const botIntervTime = 21720000;
const triggerMessage = 'before you can harvest your cannabis crops again';

const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.BOT_TOKEN);
var timeLeft = Time() + botIntervTime;

function Time(){ 
  var n = new Date();
  return n.getTime();
}

function mstohour(ms){
  var text = "";
  var hours = Math.floor(ms / 360000);
  var minutes = Math.floor((ms % 360000) / 1000);
  return text + hours + " hours and " + minutes + " minutes"
}

client.on('ready', () => {
  console.log('I am ready!');
  client.channels.get(process.env.FARM_CHANNELID).send(cmd);
});

client.on("message", (message) =>{
  if(message.content.includes('`.grab`')){
    message.channel.send('.grab');
  }
  if(message.content.includes(triggerMessage)){
    if (message.channel.id === process.env.FARM_CHANNELID){
    var array = message.content.split(" ");
    var hour = Number(array[4]);
    var minutes = Number(array [7]);
    var remainingTime = (hour * 3600000) + (minutes * 60000) + 120000;
    timeLeft = Time() + remainingTime;
    console.log(mstohour(remainingTime));
    message.channel.send(mstohour(remainingTime));
    message.channel.send(timeLeft);
    message.channel.send(Time());
  } 
  }
});

var farm = setInterval(function(){
var goalTime = timeLeft;
var currentTime=Time();
if(currentTime >= goalTime){
  client.channels.get(process.env.FARM_CHANNELID).send(cmd);
  timeLeft=(Time()+botIntervTime);
  goalTime=timeLeft;
  currentTime=Time();
}
},6000);
