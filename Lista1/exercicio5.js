const readline = require('prompt-sync');


function salario(lado){
    let area = lado*lado;
    return area;
}

function main(){
    
    const input = readline();

    const valor_hora = input("Digite o valor recebido por hora:");

    const horas = input("Digite a quantidade de horas:");

    console.log(horas);

    
}

main();
