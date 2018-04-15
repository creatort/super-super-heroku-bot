const Discord = require('discord.js');
const client = new Discord.Client();
client.user.setActivity('you all!', { type: 'WATCHING' });
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
    if (message.content === '£help 8ball') {
    	message.reply('**8ball help** To get 8BALL to work you must use it as this; Ask the question in one message then use the 8ball command in the next.');
  	}
});
client.on('message', message => {
    if (message.content === 'whats tomasbots prefix?') {
    	message.reply('Currently it is "£"');
  	}
});

client.on('message', message => {
    if (message.content === '£8ball') {
        message.reply('#' + yesOrNo);
    }
});

        // THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
