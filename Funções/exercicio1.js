var readline = require('prompt-sync')//--global
var input = readline();

function convert(moeda, valor) {
    var r;
    if (moeda == 'USD') {
        r = valor / 5.35;
    }
    else if (moeda == 'EUR') {
        r = valor / 6.38;
    }
    else {
        r = valor / 0.056;
    }
    return r;
}

var moeda = input("Qual moeda será inserida?(USD,EUR,ARS)?");
var valor = input("Agora digite o valor:");

console.log("Valor convertido: " + convert(moeda, valor))