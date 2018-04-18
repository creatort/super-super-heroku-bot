const Discord = require('discord.js');
const client = new Discord.Client();
let prefix = "!";

var rand = ['Yes', 'No', 'Why are you even trying?', 'What do you think? NO', 'Maybe', 'Never', 'Yep'];

var yesOrNo = rand[Math.floor(Math.random()*rand.length)];


client.on('ready', () => {
    console.log('Bot is ready to begin');
});

client.on('message', message => {
    if (message.content === prefix + 'ping') {
    	message.reply('Pong!');
  	}
    if (message.content === prefix + 'pong') {
    	message.reply('Ping! Hey waiiit!!');
  	}
    if (message.content === prefix + 'help') {
    	const embed = new Discord.RichEmbed()
        .setAuthor('TomasBot Help')
        .addField('- General Commands', 'ping\npong\nhelp\n8ball\nupdates')
        message.channel.send({embed})
  	}
    if (message.content === prefix + 'help 8ball') {
    	message.reply('**8ball help** To get 8BALL to work you must use it as this; Ask the question in one message then use the 8ball command in the next.');
  	}
    if (message.content === 'whats tomasbots prefix?') {
    	message.reply('Currently it is "!"');
  	}
    if (message.content === prefix + '8ball') {
        message.reply('I say,' + yesOrNo);
    }
    if (message.content === prefix + 'updates') {
        message.reply('Currently 2 things have been added and updated: 8ball and help commands **To find more go tot he githhb repo**');
    }
});
        // THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
