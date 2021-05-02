


let trocas, comps, pass

function quickSort(array, fnComp, ini = 0, fim = array.length - 1) {
    if(fim > ini) { // condição de saída das chamadas recursivas
        pass++;
        const pivot = fim;
        let div = ini - 1;
        // Loop (for) vai até a PENÚLTIMA posição
        for(let i = ini; i < fim; i++) {
            //if(array[i] < array[pivot]) {
                if(fnComp(array[pivot], array[i])) { // parametros invertidos
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
        if(fnComp(array[div], array[pivot])) { //parametros invertido, somente quando é objeto
            [array[pivot], array[div]] = [array[div], array[pivot]]
            trocas++;
        }
        comps++;

        // Ordena o subvetor a esquerda do pivo
        quickSort(array, fnComp,  ini, div - 1)

        // Ordenar o subvetor a direita do pivo
        quickSort(array, fnComp, div + 1, fim)
    }    
}

import {candidatos} from './includes/candidatos-2018.mjs'

trocas = 0, pass = 0, comps = 0
//console.log('Antes', candidatos);
console.time('Ordenando Candidatos');
//Ordenando pelo nome da urna (NM_URNA_CANDIDATO)
//quickSort(candidatos, (obj1, obj2) => obj1.NM_URNA_CANDIDATO > obj2.NM_URNA_CANDIDATO)

// ordenação por SG_EU, depois por DS_CARGO e, finalmente, por NR_CANDIDATO
quickSort(candidatos, (a, b) => {
    if(a.SG_UE === b.SG_UE) { // se tiver 'empate'
        // 'empate' no cargo, desempate no número do candidato
        if(a.DS_CARGO === b.DS_CARGO) return a.NR_CANDIDATO < b.NR_CANDIDATO
        else return a.DS_CARGO < b.DS_CARGO
    }
    //UEs diferentes, diferença por UE
    else return a.SG_UE < b.SG_UE
});

let memoria = process.memoryUsage().heapUsed / 1024 / 1024
console.timeEnd('Ordenando Candidatos...');
console.log('DEPOIS', candidatos)
console.log({trocas, pass, comps, memoria});