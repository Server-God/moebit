const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
  //for (var i = 0; i < 5; i++) client.channels.get("546234766442233856").send(rando(0,9));
});

function rando(min, max){ 
  var m = Math.random() * (max - min) + min
  return Math.floor(m).toString();
}

var log = [];

var guilds = [
  '200661830648070145'
]

function show(recent){ 
    var temp = [], last = log.length-1;
    for (var m = 0; m < log.length; m++){
      if (log[m].channel.id == log[last].channel.id) temp.push(log[m]);
    }
    if (temp.length >= recent){
    for(var i = 0; i < recent; i++){
      var n = temp.length - 1 - i
      console.log(temp[n].guild.name);
      //console.log(log[n].guild.id)
      console.log("#"+temp[n].channel.name);
      console.log("@"+temp[n].member.user.username);
      console.log(temp[n].content);
      console.log("");
    }
    console.log("~~~~~~~~~~~~~~");
    }
}

client.on("message", (message) =>{
  if (guilds.some(function(x){return x == message.guild.id;})) return;
  log.push(message);
  if (log.length >= 5) show(3);
});

client.login("MjU2ODgwNjA0MzU5MDMyODMy.D26rPg.NHtWMQM22jsjYdsgw194TB0qx8g");
