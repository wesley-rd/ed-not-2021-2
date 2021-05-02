// eleva um número ao 'quadrado'
// mas exeste o Math.pow() ou **

function quadrado(n) {
    return n * n;
}
console.log(quadrado(5));

// caracteristicas da função acima:
// 1 - apenas 1 parametro
// 2 - apenas uma linha de código, con return
// 3 - CANDIDATA PERFEITA PARA SE TORNAR EM ARROW FUNCTION

// tornando em arrow
// a - não precisa de parenteses envolvendo o parametro
// b - a palavra function é substituida pelo sinal =>, DEPOIS do parametro
// c - não é necessário as chaves nem a palavra return
const quadrado2 = n => n * n;
console.log(quadrado2(9));

// função com mais de um parametro
function potencia (b, e) {// b = base e, e = expoente 
    return b ** e;
}
console.log(potencia(2, 8));

//função equivalente no formatro arrow function
//quando temos mais de 1 parametro, os parenteses em volta
//dos argumentos vota ser obrigatório

let potencia2 = (b, e) => b ** e;
console.log(potencia2(2, 8));

// função sem parametro
function megasena () {
    //esta função retorna um número aleatório entre 1 e 60
    //Math.random() -> retorna um número aleatório entre 0 (inclusive) e o 1 é excluido
    // * 60 -> ajusta a faixa de valores para entre 0 e 59
    // o +1 -> ajusta a faixa de valores para entre 1 e 60
    return Math.floor(Math.random() * 60 + 1);
}
console.log(megasena());

const megasena2 = () => Math.floor(Math.random() * 60 + 1)
console.log(megasena2());

function somaVet(vet) {
    let soma = 0;
    for (let n of vet) soma += n
    return soma
}
console.log(somaVet[12, 15, 3, 6])

// quando a função tem mais de uma linha de código, na arrow function equivalente
// retorna as chaves e também a palavra return, caso ela retorne um valor

const somaVet2 = vet => {
    let soma = 0
    for (let n of vet) soma += n
    return soma
}
console.log(somaVet2[12, 15, 24, 6])

// CONCLUSÃO: arrow function foram concebidas para facilitar a escrita de
// funções de apenas uma linha, embora também possam ser usadas para funções
// de multiplas linhas