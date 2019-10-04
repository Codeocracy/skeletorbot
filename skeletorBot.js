var Discord = require("discord.io");
var config = require(".config.json");
var fs = require('fs');

var bot = new Discord.Client({
    token: config.token,
    autorun: true
})

bot.on('message', function (user, userID, channelID, message, evt) {
	if (userID == bot.id) {
		return;
    }
});

client.login(config.token);