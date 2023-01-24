import fs from 'fs';
import chalk from 'chalk';

// \[([^[\]]*?)\]\((https?:\/\/[^\s?#.][^\s]*)\)
function extraiLinks(texto){
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.][^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)];
    const resultados = capturas.map(captura => ({[captura[1]]: captura[2]}))
    return resultados.length !== 0 ? resultados : 'não há links no arquivo';
}


function trataErro(erro){
    throw new Error(chalk.red(erro.code, "arquivo não encontrado."));
}

// async/await
async function getFile(path){
    try{
        const enconding = 'utf-8';
        const texto = await fs.promises.readFile(path, enconding);
        return extraiLinks(texto);
    }catch(erro){
        trataErro(erro);
    }
    
}

//Promises com then()
// function getFile(path) {
//     const enconding = 'utf-8';
//     fs.promises.readFile(path, enconding)
//     .then((texto) => { return extraiLinks(texto)})
//     .catch (trataErro)
// }

export default getFile;
