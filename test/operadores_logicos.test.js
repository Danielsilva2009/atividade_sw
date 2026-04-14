import {logicos_ex1} from '../operadores_logicos/ex1.js';
import {logicos_ex2} from '../operadores_logicos/ex2.js';
import {logicos_ex3} from '../operadores_logicos/ex3.js';

test("Testar o exercício 1", () => {
    // expectativa de retorno 15
    let resultado = logicos_ex1("admin" , "senha")
    expect(resultado).toBe('erro')
})

test("Testar o exercício 2", () => {
    // expectativa de retorno 15
    let resultado = logicos_ex2(2, 50000 , "funcionario do mes" )
    expect(resultado).toBe("voce ganhou o bonus")
})

test("Testar o exercício 3", () => {
    // expectativa de retorno 15
    let resultado = logicos_ex3(2,2,2)
    expect(resultado).toBe("triângulo equilátero")
})