/*
    BUBBLE SORT

    Percorre o conjunto de dados, comparando o elemento atual com o seu
    sucessor e promovendo a troca entre eles caso o primeiro seja maior
    que o segundo

    Faz isso em várias passadas, até que, na última delas, nenhuma troca
    tenha sido registrado
*/
let totTrocas, pass, comps
function bubbleSort(array) {
    totTrocas = 0, pass = 0, comps = 0
    let trocas
    do {
        trocas = 0;
        pass++;
        // Percurso do array, da primeira até a PWNULTIMA posição
        for(let i = 0; i <= array.length -2; i++) {
            if(array[i] > array[i + 1]) {
            // Troca

                // Troca direta em JS via desestruturação de array
                [array[i], array[i + 1]] = [array[i + 1], array[i]]
                
                trocas++
            }
            comps++;
        }
        totTrocas += trocas

    }while (trocas > 0)     
    
}

//let num = [7, 4, 8, 9, 1, 5, 6, 3, 2, 10]
// pior caso
//let num = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

//meljor caso
/*
let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log('Antes', num);
bubbleSort(num);
console.log('Depois', num);
console.log({totTrocas, pass, comps});
*/

import {nomes} from './includes/100-mil-nomes.mjs'

console.log('Antes', nomes);
console.time('Ordenando Nomes...');
bubbleSort(nomes);
console.log('Depois',(nomes));
console.timeEnd('Nomes Ordenados...');
console.log({totTrocas, pass, comps});