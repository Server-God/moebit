const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "b ";
var drinks = ["coffee","beer","whiskey","Manhattan","martini","mojito","bloody mary","mai tai","tequila","vodka","old fashioned"," rum"]
var help = helpFun();
var menu = menuFun();
/*
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "databases.000webhost.com",
  user: "id9643255_purplehex",
  password: "axniryu"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to database!");
});*/

function helpFun(){
var cmdListArr =[
"help: shows this command" 
]

var output="";
for(var I=0; I<cmdListArr.length;I++){
output = output + prefix + cmdListArr[I] + "\n";
}

return output
}

function menuFun(){
var output = "Drink Menu```"
for (var I = 0; I<drinks.length;I++){
output = output + drinks[I]+"\n";
}
output = output + "```" 
return output
}

client.on('ready', () => {
console.log('I am ready!');
});

client.on('message', (message) => {
 if(message.author.bot) return;
  if(message.content.indexOf(prefix) !== 0) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

if (command == "help"){
message.channel.send(help);
}
if (command == "menu"){
message.channel.send(menu);
}
if (command == "order")){
var drinkOrdered = args.join(' ');
if (!drinks.some((x) => {x ==drinkOrdered})) return;
message.channel.send("you ordered "+drinkOrdered);
}
}
client.login("NTc5NzcxMjYyMjE4NTM0OTMy.XOHAQA.NUVWXDxbuSakWp70-4PvsKdBNAc"):
