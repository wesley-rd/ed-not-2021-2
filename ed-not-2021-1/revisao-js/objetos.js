// objetos são estruturas que permitem armazenar diversos valores
// em uma mesma variável, permitindo acessá - lo por meio de um nome

// criando objeto vazio

let vazio = {}; // forma 'moderna'
let vazio1 = new Object() // forma 'tradicional'

// criando objeto com dados

let pessoa = {
    // os dados são armazenados no formato
    // propriedade: valor
    // ou
    // atributo: valor
    nome: 'Wesley',
    sexo: 'M',
    dataNasc: '1988,09,27',
    ocupacao: 'estagiário', 
    // nome da propriedade pode ter espaçoes ou acentos
    // nesse caso, o nome da propriedade precisa estar entre aspas
    'cidade de origem': 'Franca-SP',
    gostos: ['animes', 'músicas']
}
//console.table(pessoa);

// exibindo apenas o valor de uma propriedade
console.table(pessoa.nome);
// quando o nome da propriedade tem espaços ou acentos, não é possivel
// utilizar a sintaxe de ponto. É necessário utilizar a sintaxe de colchetes
//console.table(pessoa.cidade de origem); assim está errado
console.table(pessoa['cidade de origem']);
console.table(pessoa.gostos[1]);

// a consequencia sa sintaxe dos colchetes é a possibilidade de
// usar nomes de propriedades que estão dentro de variáveis

let x = 'sexo'
console.log(pessoa[x]);
x = 'dataNasc'
console.log(pessoa[x]);

// criando uma nova propriedade para o objeto ja existente
// Basta atribuir um valor a um nome de propriedade ainda não existe

pessoa.email = 'teste@gmail.com'
pessoa.celular = '(16)99999-9999'
console.log(pessoa);

// criando um objeto vazio e só depois adicionando propriedades

let carro = {}
carro.marca = 'chevrolet'
carro.modelo = 'corsa'
carro.ano = '1999'
carro['conbustível'] = 'gasolina'
carro.cor = 'prata'

console.table(carro);

// excluindo uma propriedade de um objeto

delete carro.ano;
console.table(carro);

// Exibindo todas as propriedades de um objeto
// for in determina quais propriedades de um objeto
// coloca cada uma delas em uma variável informada pelo
// usuário (p, no caso) a cada iteração do laço

for (let p in pessoa) {
    console.log(p);
}
console.log('----------------------------------');

for (let p in carro) {
    console.log(p)
}

// for in para listar propriedades e valores de um objeto

for (let atrib in pessoa) {
    console.log(atrib + ' -> ' + pessoa[atrib]);
}