var readline = require('prompt-sync')//--global
var input = readline();

function main(){
    const dia = input("Digite um número da semana, (1 a 7):");

    switch(dia){
        case '1':
            console.log(dia,"-Domingo");
            break;
        case '2':
            console.log(dia,"-Segunda");
            break;
        case '3':
            console.log(dia,"-Terça");
            break;
        case '4':
                console.log(dia,"-Quarta");
                break;
        case '5':
                console.log(dia,"-Quinta");
                break;
        case '6':
                console.log(dia,"-Sexta");
                break;
        case '7':
                console.log(dia,"-Sábado");
                break;
    }
}

main()