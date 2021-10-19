const { red, blue, green, magenta, greenBright, magentaBright, yellowBright } = require('chalk');

// HOSTING!
const express = require("express")
const app = express()
const port = 3000

app.get("/", (req, res) => {
  res.send("bot is online")
})

app.listen(3000, () => {
  console.log(green(`Webserver is listening at port ${port}`))
})


/* eslint-disable no-console */

const Discord = require('discord.js');
const chalk = require('chalk');
const client = new Discord.Client();
const config = require("./config.json");

// login
client.login(process.env.TOKEN).catch(console.error);
client.on('ready', () => {
  console.log(yellowBright(`Sucessfully Logged in the bot, it is ${client.user.tag}!`));
     client.user.setStatus('idle')
     console.log(magenta(`The Bot's Status is working fine & it's ready to go!`))
});


// Chat Filter Function:
client.on('message', message => {
  if(config.FILTER_LIST.some(word => message.content.toLowerCase().includes(word))){
    message.delete()
    message.reply("**No __Profanity__ is Allowed Here!**").then(msg => msg.delete(3000));
    console.log(blue(`deleted Profanity in ${message.guild.name} & warned ${message.author.tag} for doing so.`))
  }});
