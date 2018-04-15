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

let user = message.mentions.users.first();
let amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])
var prefix = '!'


if (message.content.startsWith(prefix + 'clear') && !amount) 
    return message.reply('Must specify an amount to clear!');
if (message.content.startsWith(prefix + 'clear') && !amount && !user) return message.reply('Must specify a user and amount, or just an amount, of messages to clear!');
    message.channel.fetchMessages({
        limit: amount,
    }).then((messages) => {
    if (user) {
        const filterBy = user ? user.id : bot.user.id;
        messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
    }
    message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
});
        // THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
