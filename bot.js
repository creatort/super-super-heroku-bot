const Discord = require('discord.js');
const client = new Discord.Client();

var rand = ['Yes', 'No', 'Why are you even trying?', 'What do you think? NO', 'Maybe', 'Never', 'Yep'];

var yesOrNo = rand[Math.floor(Math.random()*rand.length)];


client.on('ready', () => {
    console.log('Bot is ready to begin');
});

client.on('message', message => {
    if (message.content === '£ping') {
    	message.reply('Pong!');
  	}
});
client.on('message', message => {
    if (message.content === '£pong') {
    	message.reply('Ping! Hey waiiit!!');
  	}
});
client.on('message', message => {
    if (message.content === '£help') {
    	message.reply('**Commands:** ping, pong, help');
  	}
});
client.on('message', message => {
    if (message.content === 'whats tomasbots prefix?') {
    	message.reply('Currently it is "£"');
  	}
});

client.on('message', message => {
    if (message.content === '£8ball') {
        message.reply('Well, Here we go, I roll a ' + yesOrNo);
    }
});
        // THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
