let totTrocas, pass, comps
function bubbleSort(array, fnComp) {
    totTrocas = 0, pass = 0, comps = 0
    let trocas
    do {
        trocas = 0;
        pass++;
        // Percurso do array, da primeira até a PWNULTIMA posição
        for(let i = 0; i <= array.length -2; i++) {
           // if(array[i] > array[i + 1]) {
               if(fnComp(array[i], array[i + 1])){
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

import {candidatos} from './includes/candidatos-2018.mjs'

console.log('Antes', candidatos);
console.time('Ordenando Candidatos');
//Ordenando pelo nome da urna (NM_URNA_CANDIDATO)
bubbleSort(candidatos, (obj1, obj2) => obj1.NM_URNA_CANDIDATO > obj2.NM_URNA_CANDIDATO)
console.timeEnd('Ordenando Candidato');
console.log('Depois', candidatos)
console.log({totTrocas, pass, comps});