const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Bot is ready!');
});

client.on('message', message => {
    if (message.content === '{ping') {
    	message.reply('Pong!');
  	}
});
client.on('message', message => {
    if (message.content === '{pong') {
    	message.reply('Ping! Hey waiiit!!');
  	}
});
client.on('message', message => {
    if (message.content === '{help') {
    	message.reply('**Commands:** ping, pong, help');
  	}
});
client.on('message', message => {
    if (message.content === 'whats tomasbots prefix?') {
    	message.reply('Currently it is {');
  	}
});
message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "This is an embed",
    url: "http://google.com",
    description: "This is a test embed to showcase what they look like and what they can do.",
    fields: [{
        name: "Fields",
        value: "They can have different fields with small headlines."
      },
      {
        name: "Masked links",
        value: "You can put [masked links](http://google.com) inside of rich embeds."
      },
      {
        name: "Markdown",
        value: "You can put all the *usual* **__Markdown__** inside of them."
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© Example"
    }
  }
});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
