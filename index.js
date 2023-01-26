const core = require('@actions/core')
const github = require('@actions/github')

// Importamos la librería node-telegram-bot-api 
const TelegramBot = require('node-telegram-bot-api');

// Creamos una constante que guarda el Token de nuestro Bot de Telegram que previamente hemos creado desde el bot @BotFather
const token = '5837883617:AAHlbS_cmsyndxJnE9ERLFI4EZLcrQaf26U';

//Constante que guarda el ChatID
const chatID = 1625900727;


// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// ⚠️ Después de este comentario es donde ponemos la lógica de nuestro bot donde podemos crear los comandos y eventos para darle funcionalidades a nuestro bot


/* bot.onText(/^\/chatid/, (msg) => {
    bot.sendMessage(chatID, "Este es el ID: " + chatID);
}); */


const NOMBRE = core.getInput('who-to-greet');

bot.onText(/^\/start/, (msg) => {
    bot.sendMessage(chatID, "Workflow ejecutado correctamente tras el último commit. Saludos " + NOMBRE);

});

console.log("Mensaje Enviado");




