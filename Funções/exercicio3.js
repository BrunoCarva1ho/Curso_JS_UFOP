var readline = require('prompt-sync')//--global
var input = readline();

function verifica_cpf(cpf) {

    if (cpf.length != 11) {
        return console.log("CPF inválido!");
    }

    var cont = 0;
    for (var i = 0; i < cpf.length; i++) {

        for (var j =0; j<cpf.length; j++) {

            if (cpf[i] == cpf[j]) { cont++; }
            
            if (cont > 9) { return console.log("CPF inválido!"); }
        }
        cont = 0;
    }

    return console.log("CPF válido!");
}

var cpf = input("Digite o cpf:");
verifica_cpf(cpf)