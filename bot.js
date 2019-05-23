const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = ",,";
var drinks = ["coffee","beer","whiskey","Manhattan","martini","mojito","bloody mary","mai tai","tequila","vodka","old fashioned","rum"]
var snacks = ["chips","breadsticks","crackers","peanuts","popcorn"]
var queue = [];
var help = helpFun();
var menu = menuFun();

var loop = setInterval(function(){
if (queue.length !== 0){
var itemf = queue.shift;
client.channel.get(itemf.channel).send("<@"+itemf.id+"> your order is ready! Enjoy your "+itemf.order+"!");
}
},5000);

function helpFun(){
var cmdListArr =[
"help: shows this command",
"menu: lists things that can be ordered",
"order: orders something"
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
