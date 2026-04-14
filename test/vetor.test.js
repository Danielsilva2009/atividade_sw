import {vetor_ex1} from '../vetor/ex1.js';
import {vetor_ex2} from '../vetor/ex2.js';

test("Testar o exercício 1", () => {
    // expectativa de retorno 15
    let res = { resultado:vetor_ex1 ([100, 5, 1012,12,12,109,10,10])}
    expect(res.resultado).toEqual(126)
})

test("Testar o exercício 2", () => {
    // expectativa de retorno 15
    let res = {resultado:vetor_ex2([10,20,20,20,19,20,21],[20,29,10,20,12,12])}
    expect(res.resultado).toEqual([30,49,30,40,31])
})