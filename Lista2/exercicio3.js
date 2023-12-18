var readline = require("prompt-sync");
var input = readline();

function imc(peso, altura){
    return peso/(altura*altura);
}

function main(){

    const altura = input("Digite sua altura: ");
    const peso = input("Digite seu peso: ");

    var resultado = imc(peso, altura);

    if(resultado <18.5){
        console.log("Abaixo do peso");
    }
    else if(resultado >=18.5 && resultado<=24.9){
        console.log("Peso ideal");
    }
    else if(resultado >=25 && resultado<=29.9){
        console.log("Sobrepeso");
    }
    else if(resultado >=30 && resultado<=34.9){
        console.log("Obesidade grau 1");
    }
    else if(resultado >=35 && resultado<=39.9){
        console.log("Obesidade grau 2");
    }
    else if(resultado >=40){
        console.log("Obesidade grau 3")
    }
}

main()