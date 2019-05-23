const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "!";
var drinks = ["coffee", "beer", "whiskey", "manhattan", "martini", "mojito", "bloody mary", "mai tai", "tequila", "vodka", "old fashioned", "rum"]
var snacks = ["chips", "breadsticks", "crackers", "peanuts", "popcorn"]
var queue = [];
var help = helpFun();
var menu = menuFun();

client.on('ready', () => {
  console.log('I am ready!');
});

var loop = setInterval(() => {
  if (queue.length > 0) {
    var itemf = queue.pop();
    console.log(itemf);
	var msg = embedMake(itemf);
client.channels.get(itemf.channel).send(msg).catch((x)=>console.log(x));
  }
}, 10000)

client.on('message', (message) => {
  if (message.author.bot) return;
  if (message.content.indexOf(prefix) !== 0) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (command == "help") {
    message.channel.send(help);
  }
  if (command == "menu") {
    message.channel.send(menu);
  }
  if (command == "order") {
    var vorder = args.join(' ');
    if (!(drinks.some((x) => {return x == vorder})))
    if (!(snacks.some((x) => {return x == vorder}))){
        message.channel.send("My apologies. We don't serve **" + vorder + "** here.");
        return;
      }
    message.channel.send("you ordered " + vorder);
    queue.push({
      'name': 'user',
      'channel': message.channel.id,
      'order': vorder
    });
  }
});

function randomNum(min,max){
  var num = Math.floor (Math.random() * (max - min) + min)
  return num
}

function helpFun() {
  var cmdListArr = [
    "help: shows this command",
    "menu: lists snacks or drinks that can be ordered",
    "order: order a snack or drink",
    "mix: don't bother; not ready yet (in development)"
  ]
  var output = "";
  for (var I = 0; I < cmdListArr.length; I++) {
    output = output + prefix + cmdListArr[I] + "\n";
  }
  return output
}

function menuFun() {
  var output = "Drink Menu```"
  for (var I = -1; I < drinks.length; I++) {
    output = output + drinks[I] + "\n";
  }
  output = output + "```Snacks```";
  for (var h = -1; h < snacks.length; h++) {
    output = output + snacks[h] + "\n";
  }
  output = output + "```";
  return output
}

function embedMake(d){
var emb = new Discord.RichEmbed()
.setColor(randColor())
.setTitle('Order Up!')
.addField('Order for '+d.name,'Enjoy your '+d.order + '!')
return emb
}

function randColor(){
var colour = '#';
for (var j = 0; j < 6; j++){
colour = colour + hex();
}
return colour
}

function hex(){
var arrr = ["a","b","c","d","e","f"];
var rando = randomNum(0,15);
if (rando > 9){
return arrr[rando-10]
}
else return rando
}

client.login("NTc5NzcxMjYyMjE4NTM0OTMy.XOHAQA.NUVWXDxbuSakWp70-4PvsKdBNAc");
