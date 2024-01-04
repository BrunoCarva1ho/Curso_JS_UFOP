var vetor = [];
tam=10;

//Insere números no vetor
for(i=0; i<tam; i++){
    vetor[i] = Math.floor(Math.random() * 100);
}

var maior = vetor[0];
var menor = vetor[0];

for(i=0;i<tam;i++){
    console.log(vetor[i]);
    if(vetor[i] > maior){
        maior=vetor[i];
    }
    if(vetor[i] < menor){
        menor=vetor[i];
    }
}

console.log("Maior: ", maior);
console.log("Menor: ", menor);