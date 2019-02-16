var timerBoi = require('./my.json');
const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.BOT_TOKEN);

client.on('ready', () => {
  console.log('I am ready!');
});

client.on("message", (message) =>{
  if(message.content.includes('`.grab`')){
    message.channel.send('.grab');
  }
  if(message.content.includes('Mrharvezt')){
    let array = message.content.split(" ");
    let sotre = new Date().getTime() + Number(array[1]);
    storeABoi(sotre);
    message.channel.send(timerBoi.data);
    message.channel.send(sotre);
  }
});

var farm = setInterval(function(){
var goalTime=timerBoi.data;
var currentTime=new Date().getTime();
if(currentTime>=goalTime){
  client.channels.get(process.env.FARM_CHANNELID).send('.harvest cannabis');
  storeTheBoi();
  goalTime=timerBoi.data;
} else {currentTime=new Date().getTime();}
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
var n = (new Date().getTime())+21720000;
client.channels.get(process.env.FARM_CHANNELID).send(new Date().getTime());
client.channels.get(process.env.FARM_CHANNELID).send(n);
storeABoi(n);
}
