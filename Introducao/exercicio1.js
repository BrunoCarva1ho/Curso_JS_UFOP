var readline = require('prompt-sync')//--global
var input = readline();


function conversor() {
  const metros = input('Insira um valor em metros:');

  if (!isNaN(metros)) {
    let decimetros = metros * 10;
    let centimetros = metros * 100;
    let milimetros = metros * 1000;

    console.log(metros + ' metros é igual a:');
    console.log(decimetros + ' decímetros');
    console.log(centimetros + ' centímetros');
    console.log(milimetros + ' milímetros');
  } else {
    console.log('Valor inválido, tente novamente.');
  }
}

conversor();
