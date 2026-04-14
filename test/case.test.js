import {exe_case} from '../case/ex1.js';



test("Testar o exercício 1", () => {
    // expectativa de retorno 15
    let resultado = exe_case(1)
    expect(resultado).toEqual("domingo")
})

