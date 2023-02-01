const fs = require('fs').promises
const core = require('@actions/core')
const github = require('@actions/github')

/* const NOMBRE = core.getInput('who-to-greet'); */



/* bot.onText(/^\/start/, (msg) => {
    bot.sendMessage(chatID, "Workflow ejecutado correctamente tras el último commit. Saludos " + NOMBRE);

}); */

const frase_positiva = core.getInput('frase_positiva');
const frase_negativa = core.getInput('frase_negativa');
const resultado_tests = core.getInput('resultado_tests');

let texto_meme;
if (resultado_tests) {
    texto_meme = frase_positiva;
    fs.writeFile('./readme.md', texto_meme)

} else {
    texto_meme = frase_negativa;
    fs.writeFile('./readme.md', texto_meme)
}
console.log(texto_meme);

console.log("Meme añadido al readme");




