let comps

function buscaBinaria( array, fnComp){
    comps = 0;
    let ini = 0;
    let fim = array.length -1;
    let meio;
    while(fim >= ini) {
        meio = Math.floor((fim + ini) / 2); // Math.floor() arredonda para baixo
        switch(fnComp(array[meio])) {
            case 0: //ACHOU
                comps++
                return meio
            case 1: // VALOR DE BUSCA É MAIOR
                comps += 2;
                ini = meio + 1;
                break
            default: // VALOR DE BUSCA É MENOR
                comps += 2
                fim = meio - 1;        
        }
    }    
    return -1; // não existe
}

// A função de comparação para busca binária precisa
// retornar 1 de 3 valores:

// retorno 0: o valor de busca e o valor no objeto são iguais
// retorno -1: o valor de busca é MENOR que o valor do objeto
// retorno 1: o valor de busca é MAIOR que o valor do objeto

const comparaNome = (obj, busca = 'WESLEY')  => {
    if(busca === obj.first_name) return 0;
    else if(busca< obj.first_name) return -1;
    else return 1;
}

import { objNomes } from './includes/vetor-obj-nomes.mjs'

console.time('Buscando LAMARA')
console.log(buscaBinaria(objNomes, (obj, busca = 'LAMARA') => {
    if (busca === obj.first_name) return 0
    else if (busca < obj.first_name) return -1
    else return 1
}), {comps})

console.time('Buscando ZOZIMO')
console.log(buscaBinaria(objNomes, (obj, busca = 'ZOZIMO') => {
    if (busca === obj.first_name) return 0
    else if (busca < obj.first_name) return -1
    else return 1
}), {comps})

console.time('Buscando ORKUTILSON')
console.log(buscaBinaria(objNomes, (obj, busca = 'ORKUTILSON') => {
    if (busca === obj.first_name) return 0
    else if (busca < obj.first_name) return -1
    else return 1
}), {comps})

console.time('Buscando TURIBIO')
console.log(buscaBinaria(objNomes, (obj, busca = 'TURIBIO') => {
    if (busca === obj.first_name) return 0
    else if (busca < obj.first_name) return -1
    else return 1
}), {comps})

console.time('Buscando ALDIVIO')
console.log(buscaBinaria(objNomes, (obj, busca = 'ALDIVIO') => {
    if (busca === obj.first_name) return 0
    else if (busca < obj.first_name) return -1
    else return 1
}), {comps})