const texto = 'Socorram-me, subi no onibus em Marrocos';

const pilha = [];

// Empilhamento

for(let i = 0; i < texto.length; i++) {
    pilha.push(texto.charAt(i))
}

//Inserindo uma string no meio da pilha(PROIBIDO)
pilha.splice(16, 0, 'b', 'a', 't', 'a', 't', 'a')
console.log(pilha)

// Desempilhamento
let textoRev = ''

while(pilha.length) {
    textoRev += pilha.pop()
}
console.log(textoRev)