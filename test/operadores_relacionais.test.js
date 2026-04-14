import {rel_1} from '../operadores_relacionais/ex1.js';
import {rel_2} from '../operadores_relacionais/ex2.js';
import {rel_3} from '../operadores_relacionais/ex3.js';
import {rel_4} from '../operadores_relacionais/ex4.js';
import {rel_5} from '../operadores_relacionais/ex5.js';
import {rel_6} from '../operadores_relacionais/ex6.js';
test("Testar o exercício 1", () => {
    // expectativa de retorno 15
    let resultado = rel_1(19)
    expect(resultado).toBe("pode tirar")
})


test("Testar o exercício 2", () => {
    // expectativa de retorno 15
    let resultado = rel_2('admin','1234')
    expect(resultado).toBe("senha válida")
})



test("Testar o exercício 3", () => {
    // expectativa de retorno 15
    let resultado = rel_3(10)
    expect(resultado).toBe('aprovado')
})


test("Testar o exercício 4", () => {
    // expectativa de retorno 15
    let resultado = rel_4(51)
    expect(resultado).toBe("acesso válido")
})


test("Testar o exercício 5", () => {
    // expectativa de retorno 15
    let resultado = rel_5(5)
    expect(resultado).toBe("seu numero é positivo")
})


test("Testar o exercício 6", () => {
    // expectativa de retorno 15
    let resultado = rel_6(500)
    expect(resultado).toBe(`seu desconto é 50`)
})
