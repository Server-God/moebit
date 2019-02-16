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
var goalTime=timerBoi.data+21600000;
var currentTime=new Date().getTime();
if(currentTime>=goalTime){
  client.channels.get(process.env.FARM_CHANNELID).send('.harvest cannabis');
  storeTheBoi();
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
var n = new Date().getTime();
storeABoi(n);
}
