const Discord = require('discord.js');

const client = new Discord.Client();



client.on('ready', () => {

    console.log('I am ready!');
 

});

 

client.on('message', message => {

    if (message.content === 'Someone just dropped their wallet in this channel! Hurry and pick it up with `.grab` before someone else gets it!') {

       message.channel.send('.grab');

       }
 if(message.content === '.harvest cannabis'){
  var hare = true;

  }

});

client.on('message', message => {
    if(message.content === 'harvezt'){
console.log('sending harvest in six hours and two minutes');
        var interval = setInterval (function () {
        message.channel.send('.harvest cannabis')
            .catch(console.error);
      }, 21720000); 
}
    });

function wait(ms){
var startTime = getTime();
var currentTime = getTime();
while(currentTime - startTime < ms){
currentTime = getTime();
}
}
 


// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
