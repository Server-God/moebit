const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "!";
var drinks = ["coffee", "beer", "whiskey", "manhattan", "martini", "mojito", "bloody mary", "mai tai", "tequila", "vodka", "old fashioned", "rum"]
var snacks = ["chips", "breadsticks", "crackers", "peanuts", "popcorn"]
var queue = [];
var help = helpFun();
var menu = menuFun();

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "sql12.freemysqlhosting.net",
  user: "sql12293072",
  password: "kKTjq8R9Hh"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


client.on('ready', () => {
  console.log('I am ready!');
});

var loop = setInterval(() => {
  if (queue.length > 0) {
    var d = queue.pop();
    console.log(d);
var msg = {
  "embed": {
    "color": randomNum(0,16777215),
    "title": "Order Up! 🍔",
    //"description": "\"Woah that was fast!\"\n\"I know.\"",
    "fields":[
      {
        "name": "Order for " + d.name,
        "value": "Enjoy your "+d.order+"!" 
      }
    ]
 }
}
client.channels.get(d.channel).send(msg).catch((x)=>console.log(x));
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
      'name': message.author.username,
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

client.login("NTc5NzcxMjYyMjE4NTM0OTMy.XOHAQA.NUVWXDxbuSakWp70-4PvsKdBNAc");
