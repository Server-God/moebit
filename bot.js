var timerBoi = require('./my.json');
const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.BOT_TOKEN);
var n;

client.on('ready', () => {
  console.log('I am ready!');
  console.log(timerBoi.data);
  console.log(new Date().getTime());
});

client.on("message", (message) =>{
  if(message.content.includes('`.grab`')){
    message.channel.send('.grab');
  }
  if(message.content.includes('Mrharvezt')){
    var array = message.content.split(" ");
    var sotre = new Date().getTime() + Number(array[1]);
    storeABoi(sotre);
    var timerBoi = require('./my.json');
    message.channel.send(timerBoi.data);
    message.channel.send(sotre);
  }
});

var farm = setInterval(function(){
var timerBoi = require('./my.json');
var goalTime=timerBoi.data;
var currentTime=new Date().getTime();
if(currentTime >= goalTime){
  client.channels.get(process.env.FARM_CHANNELID).send('.harvest cannabis');
  storeTheBoi();
  goalTime=(new Date().getTime()+21720000);
  currentTime=new Date().getTime();
}
},6000);

function storeABoi(datA){
  fs.writeFile('./my.json',
    "{\"data\": "+datA+"}",
    function (err) {
        if (err) {
            console.error('Crap happens');
        }
    }
)
}

function storeTheBoi(){
var n = (new Date().getTime()+21720000);
client.channels.get(process.env.FARM_CHANNELID).send(new Date().getTime());
client.channels.get(process.env.FARM_CHANNELID).send(n);
storeABoi(n);
}
