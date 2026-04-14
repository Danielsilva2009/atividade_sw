import {if_1} from '../if_else/ex1.js';
import {if_2} from '../if_else/ex2.js';
import {if_3} from '../if_else/ex3.js';

test("Testar o exercício 1", () => {
    // expectativa de retorno 15
    let resultado = if_1(3)
    expect(resultado).toBe('seu numero é positivo')
})

test("Testar o exercício 2", () => {
    // expectativa de retorno 15
    let resultado = if_2(8)
    expect(resultado).toBe(`sua idade é : 8 entao voce é mirim`)
})


test("Testar o exercício 3", () => {
    // expectativa de retorno 15
    let resultado = if_3("m")
    expect(resultado).toBe("bom dia")
})

