const readline = require("prompt-sync")
const input = readline()


function reajuste(salario){
    salario = parseFloat(salario)
    var salario_reajustado=0;

    if(salario<280){
        salario_reajustado = salario + (salario*0.2);
    }
    else if(salario>=280 && salario<=700){
        salario_reajustado = salario + (salario*0.15);
    }
    else if(salario>=700 && salario<=1500){
        salario_reajustado = salario + (salario*0.1);
    }
    else if(salario>=1500){
        salario_reajustado = salario + (salario*0.05);
    }

    console.log("Valor do aumento:", salario_reajustado-salario);
    return salario_reajustado;
}

function main(){
    salario = input("Digite o salário: ");
    
    console.log("Salário antes do reajuste: ",salario);
    resultado = reajuste(salario);
    console.log("Sálario após o aumento: ", resultado);
}

main()