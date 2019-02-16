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
  if(message.channel.includes('Mrharvezt')){
    let array = message.content.split(" ");
    let sotre = "{\"data\": "+array[1]+"}";
    storeABoi(sotre);
  }
});

var farm = setInterval(function(){
var goalTime=timerBoi.data+21600000;
var currentTime=new Date().getTime();
if(currentTime>=goalTime){
  client.channels.get("402919650985246743").send('.harvest cannabis');
  storeTheBoi();
} 
},6000);

function storeABoi(datA){
  fs.writeFile('./my.json',
    datA,
    function (err) {
        if (err) {
            console.error('Crap happens');
        }
    }
)
}

function storeTheBoi(){
var n = new Date().getTime();
n= "{\"data\": "+n+"}";
storeABoi(n);
}
