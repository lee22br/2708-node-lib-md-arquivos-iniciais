import chalk from "chalk";

function extraLinks(arrLinks){
    return arrLinks.map((objetoLink) => Object.values(objetoLink).join())
}

async function checaStatus (listaURLs) {
    const arrStatus = await Promise
    .all(
      listaURLs.map(async (url) => {
        try {
          const response = await fetch(url)
          return `${response.status} - ${response.statusText}`;
        } catch (erro) {
          return manejaErros(erro);
        }
      })
    )
    return arrStatus;
   }

function manejaErros (erro){
    if (erro.cause.code === 'ENOTFOUND'){
        return 'link não encontrado'
    }else{
        return 'ocorreu algum erro'
    }
}

export default async function listaValidada (listaDeLinks){
    const links =  extraLinks(listaDeLinks);
    const status = await checaStatus(links);
    return listaDeLinks.map((link, indice) => ({
        ...link,
        status: status[indice]
    }))
}

// /