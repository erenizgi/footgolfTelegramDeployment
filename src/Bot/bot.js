const { Telegraf } = require('telegraf')
const { message } = require('telegraf/filters')

const TOKEN = "7306995461:AAFft7eAzLG-2v3IahOYkTlI2ukAlTEroAQ";
const link = "https://localhost:3000";

const bot = new Telegraf(TOKEN);
bot.start((ctx) => ctx.reply('Welcome Footgolfer!'));
bot.launch();