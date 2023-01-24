import chalk from 'chalk';
import getFile from "./index.js";


const caminho = process.argv;

async function processaTexto(caminho){
    const resultado = await getFile(caminho[2]);
    console.log(chalk.yellow('lista de links'),resultado);
}

processaTexto(caminho);
