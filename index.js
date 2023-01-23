import fs from 'fs';
import chalk from 'chalk';

function trataErro(erro){
    throw new Error(chalk.red(erro.code, "arquivo não encontrado."));
}

//Promises com then()
function getFile(path) {
    const enconding = 'utf-8';
    fs.promises.readFile(path, enconding)
    .then((texto) => console.log(chalk.green(texto)))
    .catch (trataErro)
}

// async/await
// async function getFile(path){
//     try{
//         const enconding = 'utf-8';
//         const texto = await fs.promises.readFile(path, enconding);
//         console.log(chalk.green(texto));
//     }catch(erro){
//         trataErro(erro);
//     }
    
// }

getFile("./arquivos/texto.md");