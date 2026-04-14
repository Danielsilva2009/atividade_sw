import {ari_1} from '../operadores_aritimeticos/ex1.js';
import {ari_2} from '../operadores_aritimeticos/ex2.js';
import {ari_3} from '../operadores_aritimeticos/ex3.js';
import {ari_4} from '../operadores_aritimeticos/ex4.js';
import {ari_5} from '../operadores_aritimeticos/ex5.js';
import {ari_6} from '../operadores_aritimeticos/ex6.js';



test("Testar o exercício 1", () => {
    // expectativa de retorno 15
    let resultado = ari_1(100, 5)
    expect(resultado).toBe(95)
})
test("Testar o exercício 2", () => {
    // expectativa de retorno 15
    let resultado = ari_2(10,10,10)
    expect(resultado).toBe(10)
})


test("Testar o exercício 3", () => {
    // expectativa de retorno 15
    let resultado = ari_3(17)
    expect(resultado).toBe(2)
})


test("Testar o exercício 4", () => {
    // expectativa de retorno 15
    let resultado = ari_4(2)
    expect(resultado).toBe(1024)
})
   
test("Testar o exercício 5", () => {
    // expectativa de retorno 15
    let resultado = ari_5(30)
    expect(resultado).toBe(86)
})

test("Testar o exercício 6", () => {
    // expectativa de retorno 15
    let resultado = ari_6(100,5)
    expect(resultado).toBe(500)
})

test("Testar o exercício 7", () => {
    // expectativa de retorno 15
    let resultado = ari_6(1000,215,50)
    expect(resultado).toBe(215000)
})
