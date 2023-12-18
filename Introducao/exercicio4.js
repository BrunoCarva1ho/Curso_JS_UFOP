var readline = require('prompt-sync')//--global
var input = readline();

function celsius(temperatura_F){
    let celsius = (temperatura_F - 32) / 1.8;
    return celsius;
}

function main(){
    temperatura_F = input('Insira a temperatura em Fahrenheit: ')

    if (!isNaN(temperatura_F)){
        let result = celsius(temperatura_F);
        console.log(temperatura_F,"graus Fahrenheit equivalem à", result,"graus Celsius");
    }
}

main();

