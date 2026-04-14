import {variaveis_ex1} from '../variaveis/ex1.js'
import {variaveis_ex2} from '../variaveis/ex2.js'
import {variaveis_ex3} from '../variaveis/ex3.js'
test("Testar o exercício 1", ()=>{
    // expectativa de retorno 15
    let resultado = variaveis_ex1(100, 5)
    expect(resultado).toBe(500)
} )

test("Testar o exercício 2", ()=>{
    // expectativa de retorno 15
    let resultado = variaveis_ex2(30)
    expect(resultado).toBe(86)
} )

test("Testar o exercício 3", ()=>{
    // expectativa de retorno 15
    let resultado = variaveis_ex3(30,2)
    expect(resultado).toBe(60)
} )