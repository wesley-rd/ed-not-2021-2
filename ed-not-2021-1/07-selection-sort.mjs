/*
    Selection Sort
    Trata-se de uma otimização do buble sort, diminuindo drasticamente
    o número de trocas necessárias para fazer a ordenação

    Isola um dos valores do vetor e procura pelo menor valor entre os
    restantes, promovendo a troca caso o primeiro valor seja maior que o segundo

*/

let trocas, pass, comps

function selectionSort(array){
    trocas = 0, pass = 0, comps = 0

    function encontraMenor(inicio) {
        let menor = inicio
        for(let j = inicio + 1; j < array.length; j++){
            if(array[j] < array[menor]) menor = j;
            comps++
        }
        return menor;
    }
    // Percurso de array até a PENÚLTIMA posição
    for(let i = 0; i <= array.length - 2; i++){
        pass++
        let menor = encontraMenor(i + 1)
        if(array[menor] < array[i]) {
            [ array[menor], array[i]] = [array[i], array[menor]]
            trocas++
        }     
        comps++
    }
}
/*
//let num = [7, 4, 9, 3, 5, 8, 1, 10, 0, 2, 6]
//let num = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
selectionSort(num);
console.log(num);
console.log({trocas, pass, comps});
*/

import {nomes} from './includes/100-mil-nomes.mjs'

console.time('Ordenando Nomes');
selectionSort(nomes);
console.timeEnd('Ordenando Nomes');
let memoria = process.memoryUsage().heapUsed / 1024/ 1024
console.log('Depois', nomes);
console.log({trocas, pass, comps});
