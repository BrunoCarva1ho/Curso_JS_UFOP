function nome_letra(nomes, letra) {

    novos_nomes = []

    for (var i = 0; i < nomes.length; i++) {
        if (nomes[i].includes(letra)) {
            novos_nomes.push(nomes[i]);
        }
    }
    return novos_nomes;
}

nomes = ['Bruno', 'Carvalho', 'Montana'];
const letra = 'n';

result = nome_letra(nomes, letra);

console.log(result);