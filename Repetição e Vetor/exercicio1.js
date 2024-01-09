//vetor.push() : Adiciona ao final do vetor
//vetor.unshift() : Adiciona no inicio do vetor
//vetor.includes() : Verifica se existe o valor
//vetor.indexOf() : Retorna o index do valor se existente
//vetor.pop() : Remove o último item do vetor
//vetor.filter(valor => valor > 20) : Filtra valores para o novo vetor

var vetor = [];
tam=10;

//Insere números no vetor
for(i=0; i<tam; i++){
    vetor.push(Math.floor(Math.random() * 100));
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