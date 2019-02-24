const opi_cmd = '.harvest opium';
const opi_botInterval = 72120000;
const opi_triggerMessage = 'before you can harvest your opium crops again!';

const can_cmd = '.harvest cannabis';
const can_botInterval = 72120000;
const can_triggerMessage = 'before you can harvest your cannabis crops again!';

const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.BOT_TOKEN);
var can_timeLeft = Time() + can_botInterval;
var opi_timeLeft = Time() + opi_botInterval;

function sleep(milliseconds) {
  var start = Time();
  for (var i = 0; i < 1e7; i++) {
    if ((Time() - start) > milliseconds){
      break;
    }
  }
}

function Time(){ 
  var n = new Date();
  return n.getTime();
}

function mstohour(ms){
  var text = "";
  var hours = Math.floor(ms / 3600000);
  var minutes = Math.floor((ms - (hours * 3600000))/60000);
  return text + hours + " hours and " + minutes + " minutes"
}

client.on('ready', () => {
  console.log('I am ready!');
  client.channels.get(process.env.FARM_CHANNELID).send(can_cmd);
  sleep(10000);
  client.channels.get(process.env.FARM_CHANNELID).send(opi_cmd);
});

client.on("message", (message) =>{
  if (message.channel.id === process.env.FARM_CHANNELID){
  if(message.content.includes(can_triggerMessage)){
    var array = message.content.split(" ");
    var hour = Number(array[4]);
    var minutes = Number(array [7]);
    var remainingTime = (hour * 3600000) + (minutes * 60000) + 120000;
    can_timeLeft = Time() + remainingTime;
    console.log(mstohour(remainingTime));
    message.channel.send(mstohour(remainingTime));
  } 
    if(message.content.includes(opi_triggerMessage)){
    var array = message.content.split(" ");
    var hour = Number(array[4]);
    var minutes = Number(array [7]);
    var remainingTime = (hour * 3600000) + (minutes * 60000) + 120000;
    opi_timeLeft = Time() + remainingTime;
    console.log(mstohour(remainingTime));
    message.channel.send(mstohour(remainingTime));
  }
  }
});

var opi_farm = setInterval(function(){
var goalTime = opi_timeLeft;
var currentTime=Time();
if(currentTime >= goalTime){
  client.channels.get(process.env.FARM_CHANNELID).send(opi_cmd);
  opi_timeLeft=(Time()+opi_botInterval);
  goalTime=opi_timeLeft;
  currentTime=Time();
}
},6000);


var can_farm = setInterval(function(){
var goalTime = can_timeLeft;
var currentTime=Time();
if(currentTime >= goalTime){
  client.channels.get(process.env.FARM_CHANNELID).send(can_cmd);
  can_timeLeft=(Time()+can_botInterval);
  goalTime=can_timeLeft;
  currentTime=Time();
}
},6000);
