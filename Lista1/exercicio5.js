var readline = require('prompt-sync')//--global
var input = readline();


function salario(valor_hora, horas){

    const s_bruto = valor_hora * horas;
    const inss = s_bruto * 0.10;
    const sindicato = s_bruto * 0.02;
    const imposto_renda = s_bruto * 0.10; 

    const s_liquido = s_bruto - (inss+sindicato+imposto_renda);

    console.log("Salário bruto:", s_bruto,
    "- Quantia INSS:", inss,
    "- Quantia Sindicato:", sindicato,
    "- Quantia Imposto de Renda:", imposto_renda,
    "- Salário Liquido:", s_liquido);

    return s_liquido;
}

function main(){
    
    const valor_hora = input("Digite o valor recebido por hora:")
    const horas = input("Digite a quantidade de horas:");

    salario(valor_hora,horas)
}

main()