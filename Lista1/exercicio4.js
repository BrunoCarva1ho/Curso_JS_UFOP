const readline = require('readline');

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function celsius(temperatura_F){
    let celsius = (temperatura_F - 32) / 1.8;
    return celsius;
}

function main(){
    input.question('Insira a temperatura em Fahrenheit: ', (input) => 
    { let temperatura_F = parseFloat(input); 

        if (!isNaN(temperatura_F)){
            let result = celsius(temperatura_F);
            console.log(temperatura_F,"graus Fahrenheit equivalem à", result,"graus Celsius");
        }
       
    });
    
}

main();

