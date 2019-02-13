var Discord = require('discord.io');
 
var bot = new Discord.Client({
    token: process.env.BOT_TOKEN,
    autorun: true
});
 
bot.on('ready', function() {
    console.log('Logged in as %s - %s\n', bot.username, bot.id);
});
 
bot.on('message', function(user, userID, channelID, message, event) {
    if (message === "ping") {
        bot.sendMessage({
            to: channelID,
            message: "pong"
        });
    }
});
