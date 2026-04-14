import {laco_ex1} from '../laco/ex1.js';
import {laco_ex2} from '../laco/ex2.js';
import {laco_ex3} from '../laco/ex3.js';
import {laco_ex4} from '../laco/ex4.js';
import {laco_ex5} from '../laco/ex5.js';

test("Testar o exercício 1", () => {
    // expectativa de retorno 15
    let res = {resultado:laco_ex1(0)}
    expect(res.resultado).toEqual([0,1,2,3,4,5,6,7,8,9,10])
})

test("Testar o exercício 2", () => {
    // expectativa de retorno 15
    let res = {resultado:laco_ex2(0)}
    expect(res.resultado).toEqual([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30])
})

test("Testar o exercício 3", () => {
    // expectativa de retorno 15
    let res = {resultado:laco_ex3(0)}
    expect(res.resultado).toEqual(1)
})

test("Testar o exercício 4", () => {
    // expectativa de retorno 15
    let res = {resultado:laco_ex4(["daniel", "andré", "nicolas", "leonardo"])}
    expect(res.resultado).toEqual(["daniel", "andré", "nicolas", "leonardo"])
})


test("Testar o exercício 5", () => {
    // expectativa de retorno 15
    let res = {resultado:laco_ex5(["daniel","yago","ana"])}
    expect(res.resultado).toEqual(["daniel","yago","ana"])
})