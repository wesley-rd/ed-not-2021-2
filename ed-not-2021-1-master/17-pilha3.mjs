/*import {Stack} from './lib/Stack.mjs'

let analisador = new Stack()

let expr = '3 * {5 - 2 / [3 * 4 + (12 / 5)]}'
'let expr = 8 - {5 * (3 + 7])}'

let info

for(let i = 0; i < expr.length; i++) {
    switch(expr.charAt(i)) {
        case '{'
            analisador.push({tipo: 'CH', pos: i })
            console.log(analisador.print())
            break
        case '[':
            analisador.push({tipo: 'CO', pos: i })
            console.log(analisador.print())
            break     
        case '(':
            analisador.push({tipo: 'PA', pos: i })
            console.log(analisador.print())
            break    
        case '}':
            info = analisador.pop()
            if(info && info.tipo == 'CH') { // Se retornou Dados
                console.log(`Chave aberta na posição ${info.pos} e fechada na posição ${i}`)
            }else  {
                console.log(`ERRO: chave de fechamento na posição ${i} não tem abertura correspondente`)
            }  
            break
        case ']':
            info = analisador.pop()     
    }

}
*/