const https = require('https');
const Discord = require('discord.js');
const client = new Discord.Client();

var myID = 256880604359032832;
var prefix = ',';
var token = "NjQzMjQyNjgxMzU0NTUxMzI4.XciqfA.7sQvGVh9kEdQ8fLTidqdZYziti4";
//just add "process.env" + var name
//when switching to heroku


client.on('ready', () => {
  console.log('I am ready!');
  console.log(cipher("e","mouse bois uniTe"));
});

client.on("message", (message) =>{
  if(message.content.indexOf(prefix) !== 0) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  var command = args.shift().toLowerCase();
	var color = random(1,16777215);
	var emb = {
  "author": {
    "name": "Leslie the Helpful Doggo",
    "url": "https://cdn.discordapp.com/attachments/535599595271749632/643328648304394241/image0.jpg"
  }
	}
	
	//cool as h*ck encryption thingje
	if (command == "decrypt" || command == "encrypt") {
		message.delete().catch(O_o=>{}); 
		var simp=capCase(command);
		var st=simp.f, title=simp.c;
		var text = args.join(' '), result = cipher(st, text);
		const embed = {
  "title": title,
  "description": "Your og text: \"**"+text+"\"**",
  "color": color,
  "author": emb.author,
  "fields": [{"name": "🤔","value": "***"+result+"***"}]
};

message.channel.send({ embed });
		} else
	
	//yomama joke
		if (command === 'yomama') {
			message.delete().catch(O_o=>{}); 
var thecon="";
let url = "https://api.yomomma.info"

https.get(url,(res) => {
    let body = "";

    res.on("data", (chunk) => {
        body += chunk;
    });

    res.on("end", () => {
        try {
            let json = JSON.parse(body);
            // do something with JSON
		const embed = {
  "title": 'Yo Mama Jokes',
  "description": "Generate Yo Mama jokes to your heart's content",
  "color": color,
  "author": emb.author,
  "fields": [{"name": "😂","value": json.joke}]
};
message.channel.send({ embed });
        } catch (error) {
            console.error(error.message);
        };
    });

}).on("error", (error) => {
    console.error(error.message);
});

	} else 
	
	//cats?
	if(command == "cat"){
		message.delete().catch(O_o=>{}); 
		let url = "https://aws.random.cat/meow";
		https.get(url,(res) => {
    let body = "";
    res.on("data", (chunk) => {
        body += chunk;
    });
    res.on("end", () => {
        try {
            let json = JSON.parse(body);
            // do something with J
const embed = {
  "title": 'Meow',
  "description": "🐱",
  "color": color,
  "author": emb.author,
  "image": {"url":json.file}
};
message.channel.send({ embed });
        } catch (error) {
            console.error(error.message);
        };
    });

}).on("error", (error) => {
    console.error(error.message);
})
			}else
			
			//random doggo
			if(command == "dog"){
		message.delete().catch(O_o=>{}); 
		let url = "https://dog.ceo/api/breeds/image/random";
		https.get(url,(res) => {
    let body = "";
    res.on("data", (chunk) => {
        body += chunk;
    });
    res.on("end", () => {
        try {
            let json = JSON.parse(body);
            // do something with J
const embed = {
  "title": 'Bork',
  "description": "🐶",
  "color": color,
  "author": emb.author,
  "image": {"url":json.message}
};
message.channel.send({ embed });
        } catch (error) {
            console.error(error.message);
        };
    });

}).on("error", (error) => {
    console.error(error.message);
})
			}
			
			if (!(message.author.id == myID)) return;
			if (command == "say") {
				message.delete().catch(O_o=>{}); 
				var txt= args.join(' ');
				message.channel.send(txt);
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
