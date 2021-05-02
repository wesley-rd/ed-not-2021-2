/*
    ESTRUTURAS DE DADOS
    
    - Pilha é uma lista linear de acesso restrito, que permite apenas operações
      de inserção (push) e retirada (pop), ambas ocorrendo no final da estrutura.
    - Como consequencia, a pilha funciona com o princípio LIFO(Last In, First Out -
      Último a Entrar, Primeiro a Sair)
    - A principal aplicação das pilhas são tarefas que envolvem a inversão de uma
    sequencia de dados  
*/

export class Stack{

    #data
    constructor() {
        this.#data = [] // inicializando o array vazio (e o array é privado)
    }
    // Inserção
    push(val){
        this.#data.push(val)
    }
    // Retirada
    pop(){
        return this.#data.pop()
    }   
    // "ESPIA" o valor que está no topo da pilha, mas não retira esse elemento
    peek(){
        return this.#data[this.#data.length - 1]
    }
    // A pilha está vazia(true/false) - PROPRIEDADE CALCULADA (só getter)
    get empty(){
        return this.#data.length === 0
    }     
    print(){
        return JSON.stringify(this.#data)
    }
}
/*
let pilha = new Stack();
pilha.push(5)
pilha.push(6)
pilha.push(0)
pilha.push(2)
console.log('PEEK: ', pilha.peek())
console.log(pilha.empty)
console.log(pilha.print)*/