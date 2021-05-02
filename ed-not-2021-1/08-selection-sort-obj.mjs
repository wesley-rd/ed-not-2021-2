let trocas, pass, comps

function selectionSort(array, fnComp){
    trocas = 0, pass = 0, comps = 0

    function encontraMenor(inicio) {
        let menor = inicio
        for(let j = inicio + 1; j < array.length; j++){
            //if(array[j] < array[menor]) menor = j;
            // na passagem para a função de comparação , a ordem dos
            //objetos precisa ser invertida
            if(fnComp(array[menor], array[j])) menor = j
            comps++
        }
        return menor;
    }
    // Percurso de array até a PENÚLTIMA posição
    for(let i = 0; i <= array.length - 2; i++){
        pass++
        let menor = encontraMenor(i + 1)
       // if(array[menor] < array[i]) {
           //Parametros na ordem invertida
        if(fnComp(array[i], array[menor])){
            [ array[menor], array[i]] = [array[i], array[menor]]
            trocas++
        }       
        comps++
    }
}

// função de comparação retorna true no caso o PRIMEIRO objeto seja
// maior que o segundo

import {candidatos} from './includes/candidatos-2018.mjs'

//console.log('Antes', candidatos);
console.time('Ordenando Candidatos');
//Ordenando pelo nome da urna (NM_URNA_CANDIDATO)
selectionSort(candidatos, (obj1, obj2) => obj1.NM_URNA_CANDIDATO > obj2.NM_URNA_CANDIDATO)
console.timeEnd('Ordenando Candidatos...');
console.log('DEPOIS', candidatos)
console.log({trocas, pass, comps});