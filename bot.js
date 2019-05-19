const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = ",,";
var drinks = ["coffee","beer","whiskey","Manhattan","martini","mojito","bloody mary","mai tai","tequila","vodka","old fashioned","rum"]
var snacks = ["chips","bread sticks","crackers","peanuts","popcorn"]
var queue = {};
var help = helpFun();
var menu = menuFun();

var loop = setTimeout(() => {
//if (Math.random() == 0) return;
if (queue.length == 0 || queue == undefined) return;
var itemf = queue[0];
client.channel.get(itemf.channel).send("<@"+itemf.id+"> your order is ready! Enjoy your "+itemf.order+"!");
},5000);
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
output = output + "```Snacks```";
for (var h = 0; h<snacks.length;h++){
output = output + snacks[h]+"\n";
}
output = output + "```";
return output
}

client.on('ready', () => {
console.log('I am ready!');
});

client.on('message', (message) => {
 if(message.author.bot) return;
  if(message.content.indexOf(prefix) !== 0) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

if (command == "help"){
message.channel.send(help);
}
if (command == "menu"){
message.channel.send(menu);
}
if (command == "order"){
var vorder = args.join(' ');
if (!drinks.some((x) => {return x == vorder})){
if (!snacks.some((x) => {return x == vorder})){
message.channel.send("My apologies. We don't serve **"+vorder+"** here.");
return;
}}
message.channel.send("you ordered "+vorder);
queue.push({
'id': message.author.id,
'channel': message.channel.id,
'order': vorder
});
}
});
client.login("NTc5NzcxMjYyMjE4NTM0OTMy.XOHAQA.NUVWXDxbuSakWp70-4PvsKdBNAc");
