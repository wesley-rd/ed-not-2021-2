let a = 10, b = 8, c = 10;

console.log(a > b);
console.log(a < b);
console.log(a == c);
console.log(a != c);

console.log('--------------------------------');

// Strings

a = 'Catifunda';
//b = 'Ágata';// todas as letras acentuadas vão para o fim em termos de compração
b = 'Felisbino';
c = 'Catifunda';

console.log(a > b);
console.log(a < b);
console.log(a == c);
console.log(a != c);

console.log('--------------------------------');

// Booleans

a = true;
b = false;
c = true;

console.log(a > b);
console.log(a < b);
console.log(a == c);
console.log(a != c);

console.log('--------------------------------');

// Arrays

a = [10, 20, 30, 40, 50];
b = [-3, -2, -1];
c = [10, 20, 30, 40, 50];

console.log(a > b);
console.log(a < b);
console.log(a == c);
console.log(a != c);

// comparações diretas de arrays dão resultados inconsistentes
// Não é possível comparar diretamente dois arrays

console.log('--------------------------------');

// Objetos

a = {marca: 'Fiat', modelo: '147', ano: 1979}
b = {marca: 'Chevrolet', modelo: 'Chevette', ano: 1982}
c = {marca: 'Fiat', modelo: '147', ano: 1979}

console.log(a > b);
console.log(a < b);
console.log(a == c);
console.log(a != c);

// Objetos também não podem ser comparados diretamente entre si

// CONCLUSÃO: apenas os seguintes tipos de dados são diretamente comparaveis
// -> number
// -> string
// -> boolean