/*
    QUICK SORT

    Escolhe um dos elementos do vetor para ser o piv (na nossa implementação,
        o último elemento)e, na primeira passada, divide o vetor, a partir da posição
        final do vetor, em um subvetor á esquerda contendo apenas valores menores que 
        o pivo e outro subvetor á direita, que contém apenas valores maiores que o pivo

        Em seguida, recursivamente, repete o processo em cada um dos subvetores até que
        todo vetor esteja ordenado
*/

let trocas, comps, pass

function quickSort(array, ini = 0, fim = array.length - 1) {
    if(fim > ini) {
        pass++;
        const pivot = fim;
        let div = ini - 1;
        // Loop (for) vai até a PENÚLTIMA posição
        for(let i = ini; i < fim; i++) {
            if(array[i] < array[pivot]) {
                comps++;
                div++;
                if( i !== div) {
                    [array[i], array[div]] = [array[div], array[i]]
                    trocas++;
                }    
            }
        }
        div++;
        // Colocamos o pivo no seu lugar definitivo
        if(array[pivot] < array[div]) {
            [array[pivot], array[div]] = [array[div], array[pivot]]
            trocas++;
        }
        comps++;

        // Ordena o subvetor a esquerda do pivo
        quickSort(array, ini, div - 1)

        // Ordenar o subvetor a direita do pivo
        quickSort(array, div + 1, fim)
    }    
}
/*
trocas = 0, comps = 0, pass = 0
//let num = [7, 4, 9, 3, 5, 8, 1, 10, 0, 2, 6]
let num = [10 , 9, 8, 7, 6, 5, 4, 3, 2, 1]
quickSort(num)
console.log(num)
console.log({trocas, comps, pass})*/

import {nomes} from './includes/100-mil-nomes.mjs'

trocas = 0, comps = 0, pass = 0
console.time('Ordenando Nomes');
quickSort(nomes);
console.timeEnd('Ordenando Nomes');
let memoria = process.memoryUsage().heapUsed / 1024/ 1024
console.log('Depois', nomes);
console.log({trocas, pass, comps});