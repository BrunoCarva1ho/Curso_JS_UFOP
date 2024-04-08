import axios from "axios"

async function api(){
    const resposta = await axios.get(`https://api.adviceslip.com/advice`)
    console.log(resposta.data.slip.advice)
}

api()