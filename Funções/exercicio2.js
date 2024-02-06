
function positivos(numeros){

    var positivos=[]
    for(var i=0; i<numeros.length; i++){
        if(numeros[i]>0){
            positivos.push(numeros[i]);
        }
    }

    return positivos;
}

var numeros = [1,2,-3,4,-5,6,-7]
r = positivos(numeros)

console.log(r)