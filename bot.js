// reference: https://izy521.gitbooks.io/discord-io/content/

// Dependencies for running the bot
var Discord = require('discord.io'); // JS library for Discord

// Initialization, create the bot "object"
//https://izy521.gitbooks.io/discord-io/content/Client.html
var bot = new Discord.Client({
    token: "MjU2ODgwNjA0MzU5MDMyODMy.D0U5fA.rHapPSkfZIixe0C2niMyqtUYbXE", // Used for bot login
    autorun: true // Connect immediately
});

// Events
//https://izy521.gitbooks.io/discord-io/content/Events/Client.html

// When the bot starts
bot.on('ready', function(event) {
    console.log('Logged in as %s - %s\n', bot.username, bot.id);
});

// When chat messages are received
bot.on("message", function (user, userID, channelID, message, rawEvent)
{
    //http://www.w3schools.com/jsref/jsref_substring.asp
    if (message.substring(0, 1) == "!") // if message starts with "!"
    {
        var command = message.substring(1); // store the command for cleaner code/reading

        if(command == "hey")
        {
            //https://izy521.gitbooks.io/discord-io/content/Methods/Channels.html
            bot.sendMessage({
                to: channelID,
                message: "Hello!"
            });
        }
    }
});
