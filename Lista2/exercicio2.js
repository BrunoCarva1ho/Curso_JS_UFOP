var readline = require('prompt-sync')//--global
var input = readline();

function main(){
    const idade = input("Digite sua idade:");

    if(idade < 16){
        console.log("Não eleitor");
    }
    else if(idade >=18 && idade <=65){
        console.log("Eleitor Obrigatório");
    }
    else if( (idade >=16 && idade <18) || idade > 65 ){
        console.log("Eleitor Facultativo")
    }
    
}

main()