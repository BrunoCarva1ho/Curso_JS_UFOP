//for(const x of array)

const nome = 'Bruno'
const vogais = ['a', 'e', 'i', 'o', 'u']

for(const letra of nome){
    const retorno = vogais.includes(letra)
    console.log(retorno)
}