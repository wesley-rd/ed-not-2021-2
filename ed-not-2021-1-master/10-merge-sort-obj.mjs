let comps, divisoes, juncoes

function mergeSort(array, fnComp) {
    
    function mesclar(arrayEsq, arrayDir) {
        let pEsq = 0, pDir = 0, vetRes = []
        while(pEsq < arrayEsq.length && pDir < arrayDir.length) {
            //if(arrayEsq[pEsq] < arrayDir[pDir])
            if(fnComp(arrayDir[pDir], arrayEsq[pEsq])) { // parametros invertidos
                vetRes.push(arrayEsq[pEsq])
                pEsq++
            }else{
                vetRes.push(arrayDir[pDir])
                pDir++
            }
            comps++
        }
        // Descobrir qual lado sobrou
        let sobra

        // Sobra a esquerda
        if(pEsq < pDir) sobra = arrayEsq.slice(pEsq)
        // Sobra a direita
        else sobra = arrayDir.slice(pDir)

        // retornar o array com o resultado  + sobra

        return [...vetRes, ...sobra]
    }


    if(array.length > 1){
        const meio = Math.floor(array.length / 2)
        //slice() separa um vetor , copiando o elemento desde a posição inicial informada
        //(inclusive) até a posição final (exclusive -> a posição final não entra)
        let arrayEsq = array.slice(0, meio)
        // caso o 2º parametro do slice() seja omitido, serão copiados os elementos 
        // desde a posição informada até a posição final
        let arrayDir = array.slice(meio)
        divisoes++
        
        //console.log({arrayEsq, arrayDir})

        arrayEsq = mergeSort(arrayEsq, fnComp)
        arrayDir =  mergeSort(arrayDir, fnComp)

        const arrayFinal = mesclar(arrayEsq, arrayDir)
        juncoes++
        //console.log({arrayFinal})

        return arrayFinal
    }
    return array // array de 1 elemento, não modificado, CONDIÇÃO DE SAIDA, CASO O ARRAY SEJA DE APENAS 1 ELEMENTO
}


import {candidatos} from './includes/candidatos-2018.mjs'

comps = 0, divisoes = 0, juncoes = 0

//console.log('Antes', candidatos);
console.time('Ordenando Candidatos');
//Ordenando pelo nome da urna (NM_URNA_CANDIDATO)
//const candidatosOrd = mergeSort(candidatos, (obj1, obj2) => obj1.NM_URNA_CANDIDATO > obj2.NM_URNA_CANDIDATO)

// ordenando por dois níveis: primeiro por UE(SG_UE) e, dentro de UF, pelo número do candidato(NR_CANDIDATO)
const candidatosOrd = mergeSort(candidatos, (obj1, obj2) => {
    if(obj1.SG_UE === obj2.SG_UE) { // igualdade de UE
        //Desempate pelo NR_CANDIDATO
        return obj1.NR_CANDIDATO > obj2.NR_CANDIDATO
    }
    else return obj1.SG_UE > obj2.SG_UE  // A diferença se da por UE
});


console.timeEnd('Ordenando Candidatos...');
//console.log('DEPOIS', candidatosOrd)
candidatosOrd.map(obj => console.log(obj))
console.log({comps,divisoes,juncoes});