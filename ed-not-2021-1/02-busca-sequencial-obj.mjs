function buscaSequencial(array, fnComp){
    for (let i = 0; i < array.length; i++) {

        // Em vez de fazer a comparação dentro dad função de busca,
        // "terceirizamos" essa comparação chamando uma função externa
        if (fnComp(array[i])) return i // retorna a posição onde foi encontrado
    }
    return -1 
}

//const comparaNome = (objNome, valorBusca) => objNome.first_name === valorBusca
//const comparaGrupo = (objNome, valorBusca) => objNome.grup_name === valorBusca

import { objNomes } from './includes/vetor-obj-nomes.mjs'



console.log(buscaSequencial(objNomes, obj => obj.first_name === 'WESLEY'))

let pos = buscaSequencial(objNomes, obj => obj.frequency_total > 1000)

console.log(objNomes[pos])

// primeiro nome masculino da lista com mais de 10000 registrados

pos = buscaSequencial(objNomes, obj => obj.frequency_total > 10000 && obj.classification === 'F')
console.log(objNomes[pos])