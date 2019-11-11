const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require('node-fetch');

var myID = process.env.myID;
var prefix = process.env.prefix;
var token = process.env.BOT_TOKEN;

client.on('ready', () => {
  console.log('I am ready!');
  console.log(cipher("e","mouse bois uniTe"));
});

client.on("message", (message) =>{
  if(message.content.indexOf(prefix) !== 0) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  var command = args.shift().toLowerCase();
	
	if (command == "decrypt" || command == "encrypt") {
		var simp=capCase(command);
		var st=simp.f, title=simp.c;
		var color = random(1,16777215);
		var text = args.join(' '), result = cipher(st, text);
		console.log(st+"\n"+text+"\n"+result);
		
		const embed = {
  "title": title,
  "description": "Your og text: \"**"+text+"\"**",
  "color": color,
  "author": {
    "name": "Leslie the Useful Bot",
    "url": "https://discordapp.com",
    "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png"
  },
  "fields": [
    {
      "name": "🤔",
      "value": "***"+result+"***"
    }
  ]
};
message.channel.send({ embed });
		} else 
		
		//cat api thingie
		/*if (command === 'cat') {
		const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());

		message.channel.send(file);
	} else */
	
	//urban dictionary thing
	if (command === 'urban') {
		if (!args.length) {
			return message.channel.send('You need to supply a search term!');
		}

		const query = querystring.stringify({ term: args.join(' ') });

		const { list } = await fetch(`https://api.urbandictionary.com/v0/define?${query}`).then(response => response.json());

		if (!list.length) {
			return message.channel.send(`No results found for **${args.join(' ')}**.`);
		}

		const [answer] = list;

		const embed = new Discord.RichEmbed()
			.setColor('#EFFF00')
			.setTitle(answer.word)
			.setURL(answer.permalink)
			.addField('Definition', trim(answer.definition, 1024))
			.addField('Example', trim(answer.example, 1024))
			.addField('Rating', `${answer.thumbs_up} thumbs up. ${answer.thumbs_down} thumbs down.`);

		message.channel.send(embed);
	}
		
});


function cipher(status,string) {
	//shift all letters by 13
	//assign letters numbers according to alphabet ex (a is 1 j is 10)
	//flip numbers (1 becomes 10, 21 becomes 12, 11 is 11)
	//order numbers least to greatest
	//match letters to numbers in the unorganized fashion
	
	//e is encrypt
	//d is decrypt
	var a = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
	var c = ["w","g","n","x","h","o","y","i","p","z","j","q","a","k","r","b","l","s","c","m","t","d","u","e","v","f"]

	var n = -1;
	var output = "";
	var temp = string.toLowerCase().split("");
	for(var i = 0; i < string.length; i++){
		if(a.includes(temp[i]) == false) output = output + temp[i];
		else {
			if (status == "e"){
			n = a.indexOf(temp[i]);
			output = output + c[n];
			} else if(status == "d"){
			n = c.indexOf(temp[i]);
			output = output + a[n];
			}
		}
	}
	return output.toUpperCase()
}

function random(low, high){
  return Math.floor(Math.random() * (high - low) + low)
}

function capCase(txt){
	var temp = txt, h= temp.charAt(0), c= temp.slice(1);
	return {'f': h, 'n': c, 'c': h.toUpperCase()+c}
	}

client.login(token);
