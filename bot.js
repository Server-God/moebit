const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "!";
var drinks = ["coffee", "beer", "whiskey", "manhattan", "martini", "mojito", "bloody mary", "mai tai", "tequila", "vodka", "old fashioned", "rum"]
var snacks = ["chips", "breadsticks", "crackers", "peanuts", "popcorn"]
var queue = [];

var loop = setInterval(() => {
  if (queue.length > 0) {
    var d = queue.shift();
    console.log(d);
var msg = chooseReplyQ(d);
client.channels.get(d.channel).send(msg).catch(console.error);
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
    var vorder = args.join(' ').toLowerCase();
    if (!(drinks.some((x) => {return x == vorder})))
    if (!(snacks.some((x) => {return x == vorder}))){
        message.channel.send("My apologies. We don't serve **" + vorder + "** here.");
        return;
      }
    message.channel.send("you ordered " + vorder);
    queue.push({
					'type': 0,
      'name': message.author.username,
      'channel': message.channel.id,
      'order': vorder
    });
  }
if (command == "mix"){
var dName=args.shift();
var nArgs = args.join(' ').split(',');
var deliver = {
'type': 1,
'name': message.author.username,
'channel': message.channel.id,
'drinkName': dName,
'ingredients': ''
}
var lilIng = "";
for (var h = 0; h < nArgs.length; h++){
var nA = nArgs[h];
var tempLil = nA.trimLeft();
lilIng = lilIng + tempLil + "\n";
}
deliver.ingredients = lilIng;
message.channel.send("A "+dName+", hmm?") 
queue.push(deliver);
}
});

function randomNum(min,max){
  var num = Math.floor (Math.random() * (max - min) + min)
  return num
}
var help = helpFun()
var menu = menuFun();
function helpFun() {
  var cmdListArr = [
    "help: shows this command",
    "menu: lists snacks or drinks that can be ordered",
    "order: order a snack or drink",
    "mix: [name] {ingredients, separated, by, commas}"
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
function chooseReplyQ(d){
var comp = d.type;
if (comp == 0){ var output = {
  "embed": {
    "color": randomNum(0,16777215),
    "title": "Order Up! 💁🍔",
    "fields": [{
"name": "Order for *"+d.name+"*",
"value": "Enjoy your "+d.order
}]
}
}
} else ouput = output = {
  "embed": {
    "color": randomNum(0,16777215),
    "title": "🍹 Mixologist Status 🍵🍾",
    "fields": [{
"name": "Cocktail for *"+d.name+"*",
"value": "\""+d.drinkName+"\""
},
{
"name": "ingredients",
"value": d.ingredients+"\n\nDrink Responsibly."
}]
}
}
return output
}

client.on('ready', () => {
client.user.setActivity(prefix+"help for help", { type: "PLAYING"})
  console.log('I am ready!');
});
client.login("NTgxMzMzMjM1OTM4NjIzNTA4.XOdvkQ.Msa-vYNPEJCFQ-R1DOMqaQRBPA0");
