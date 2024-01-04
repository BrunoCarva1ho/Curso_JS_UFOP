var temperaturas = [];
tam=7;

//Insere as temperaturas no temperaturas
for(i=0; i<tam; i++){
    temperaturas[i] = Math.floor(Math.random() * 40);
}

function media(temperaturas){
    var soma=0;

    for(i=0;i<tam;i++){
        console.log(temperaturas[i])
        soma = soma + temperaturas[i];
    }

    return soma/tam;
}

med = media(temperaturas);
console.log("Media: ",med);
var dias_acima_media=0;

for(i=0;i<tam;i++){
    if(temperaturas[i]>med){
        dias_acima_media++;
    }
}

console.log("A temperatura dos últimos 7 dias esteve ", dias_acima_media," dias acima da média.");
