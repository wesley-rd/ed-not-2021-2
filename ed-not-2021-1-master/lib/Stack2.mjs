export class Stack {
    
#data
#tail // cauda, fim da pilha(topo)

    constructor() {
        this.#data = {} // Objeto vazio
        this.#tail = -1 // Pilha vazia
        console.log(this.#data, this.#tail)
    }

    push(val){
    this.#tail++ 
    this.#data[this.#tail] = val
    console.log(this.#data, this.#tail)
    } 

}

let pilha = new Stack()
pilha.push('banana')
pilha.push('maçã')
pilha.push('uva')
