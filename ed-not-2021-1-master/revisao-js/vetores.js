let frutas = ['maçã', 'laranja', 'uva', 'banana', 'jaca']
/*
// array original
console.log(frutas);

// retirando o último elemento
let ultimaFruta = frutas.pop();

console.log(frutas);

console.log(ultimaFruta);

//retirar o primeiro elemento

let primeiraFruta = frutas.shift();

console.log(frutas);
console.log(primeiraFruta);

// retirar um elemento do meio do array

let frutaDoMeio = frutas.splice(1, 1);// splice sempre retornará um array

console.log(frutaDoMeio);
*/
// inserir elementos no array, pode ser mais de um elemento

frutas.push('morango');

// também pode inserir mais de um elemento por vez
frutas.unshift('goiaba');

// inserir elementos no "meio" do array
//           1º posição da inserção
//               2º número a ser excluido
//                   aqui vai os elementos   
frutas.splice(2, 0, 'pêssego');

// substituir os elementos
//            1º vai o índice
//               quantidade a ser substituida
//                  aqui o elemento que substituirá
frutas.splice(4, 1, 'maracujá');

// percorrer um array
// 1 - for tradicional
// a - contagem começa em zero(0 -> é o primeiro elemento)
// b - ocorre enquanto o contador for MENOR que o número de elemento do vetor
/*
for (let i = 0; i < frutas.length; i++) {
    console.log(i, frutas[i]);
}

// 2 - for tradicional mas decrescente (decremento)
// a - o contador inicia - se em length -1
// b - a condição do contador é MAIOR OU IGUAL a zero (0 - 1º elemento)
for (let i = frutas.length -1; i >= 0; i--) {
    console.log(i, frutas[i]);
}*/

// 3 - recurso for of
// a - sempre percorre o array inteiro, na ordem natural semnecessidade de variável contadora
// b - f (ou otra variável) receberá o elemento do vetor
// frutas é o vetor percorrido

for (let f of frutas) {
    console.log(frutas);
}

// 4 - forEach()
// a - forEach() recebe como parametro uma função que recebe um elemento
// b - cada elemento do array é o 'elemento'
// c - o nome do parametro da função pode ser qualquer nome válido de identificador

frutas.forEach(function(elemento) {
    console.log(elemento);
})

// forEach() utilizando arrow function
frutas.forEach(elemento => console.log(elemento))

