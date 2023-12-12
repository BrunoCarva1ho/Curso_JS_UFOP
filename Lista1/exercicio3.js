var readline = require('prompt-sync')//--global
var input = readline();


function area_quadrado(lado){
    let area = lado*lado;
    return area;
}

function main(){
    lado = input('Insira o valor do lado do quadrado: ') 

    if (!isNaN(lado)){
        let result = area_quadrado(lado);
        console.log("Área do quadrado: ", result);
    }
}

main();

