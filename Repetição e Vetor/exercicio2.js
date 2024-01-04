var vetor = [];
tam=10;

//Insere números no vetor
for(i=0; i<tam; i++){
    vetor[i] = Math.floor(Math.random() * 100);
}

function media(vetor){
    var soma=0;

    for(i=0;i<tam;i++){
        console.log(vetor[i])
        soma = soma + vetor[i];
    }

    return soma/tam;
}

r = media(vetor)

console.log("Media do vetor: ",r);