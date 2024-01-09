var vetor = [];
var tam=50;
var repetiu = 0;

//Insere números no vetor
for(i=0; i<tam; i++){
    var valor = Math.floor(Math.random() * 100);
    var contem = 0;

    for(j=0; j<=vetor.length; j++){
        if(valor == vetor[j]){
            contem++;
        }
    }

    if(contem == 0){
        vetor.push(valor);
    } else {
        i--;
        repetiu++;
    }
}

for(i=0;i<tam;i++){
    console.log(vetor[i])
}

console.log("Tentativas de repetições detectadas: ", repetiu)

console.log("\nNúmeros impáres do vetor ")
var vetor_impar= [];
var index = 0;
var soma_impar = 0;

for(i=0;i<tam;i++){

    if(vetor[i] % 2 != 0 ){
        vetor_impar[index] = vetor[i];
        console.log(vetor_impar[index]);
        soma_impar = vetor_impar[index] + soma_impar;
        index++;
    }

}

console.log("Somatório do vetor de impares: ", soma_impar);