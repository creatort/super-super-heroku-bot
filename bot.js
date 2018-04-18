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
        .setColor(0x00AE86)
        .setFooter('TomasBOT Framework - © 2018')
        .setThumbnail('ttp://36.media.tumblr.com/bb14bd0b5c8f456ae325084b28da10e1/tumblr_inline_nrlkp2KKDD1t3voij_540.jpg')
        .setAuthor('TomasBot Help')
        .addField('- General Commands', 'ping\nhelp\nupdates')
        .addField('- Fun Commands', '8ball\npong')
        .addField('- Help Commands', 'help 8ball\nhelp')
        .addField('Prefix', 'This bot uses "!" as a Prefix.')
        message.channel.send({embed})
  	
    if (message.content === 'whats tomasbots prefix?') {
    	message.reply('Currently it is "!"');
  	}
    if (message.content === prefix + '8ball') {
        message.reply('I say,' + yesOrNo);
    
    }
    	
    if (message.content === prefix + 'updates') {
    	const embed = new Discord.RichEmbed()
        .setAuthor('TomasBot Update Info')
        .addField('- General Updates', 'Added Updates command\nRemoved old help and updates command\n')
    .addField('- Version:', '1.0.3')
        message.channel.send({embed})
  	}
}
    if (message.content === prefix + '8ball help') {
    	const embed = new Discord.RichEmbed()
        .setAuthor('TomasBot Help')
        .addField('8ball Help', '1. Ask your question\n After asking your question enter the command !8ball and send it.\n You will receive a reply.')
        message.channel.send({embed})
  	}
  
        
        });
        // THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
