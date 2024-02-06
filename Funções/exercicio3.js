var readline = require('prompt-sync')//--global
var input = readline();

function verifica_cpf(cpf){

    if(cpf.length != 11){
        return console.log("CPF inválido!");
    }

    var cont=0;
    var char = cpf[0];
    for (var i=0; i<cpf.length;i++){
        if(char == cpf[i]){
            cont= cont + 1;
        }
    }

    if(cont > 9){
        return console.log("CPF inválido!");        
    }

    return console.log("CPF válido!");  
}

var cpf = input("Digite o cpf:");
verifica_cpf(cpf)