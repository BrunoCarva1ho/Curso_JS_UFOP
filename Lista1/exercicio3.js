const readline = require('readline');

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function area_quadrado(lado){
    let area = lado*lado;
    return area;
}

function main(){
    input.question('Insira o valor do lado do quadrado: ', (input) => 
    { let lado = parseFloat(input); 

        if (!isNaN(lado)){
            let result = area_quadrado(lado);
            console.log("Área do quadrado: ", result);
        }
    });
    
}

main();

