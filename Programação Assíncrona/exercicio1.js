var readline = require('prompt-sync')//--global
var input = readline();

import axios from "axios"


async function api(){
    const resposta = await axios.get(`https://api.adviceslip.com/advice`)
    console.log(resposta.data.slip.advice)
}


do{
    console.log("Digite 2 para receber um conselho, e 1 para sair:")
    r = input()
    
    if(r == 2){
        api()
    }
    
}while(r != 1)
