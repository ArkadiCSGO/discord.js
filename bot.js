const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NDk2MDc5Mjc2MDM1MTQ1NzI4.W7FH1A.HIbXYLaN2heaQiHv5wXO5l14zHk);//BOT_TOKEN is the Client Secret
