import {json_ex1} from '../json/ex1.js'

test("Testar o exercício 1", ()=>{
    // expectativa de retorno 15
    let resultado = json_ex1("daniel","17","info","tarde","3")
    expect(resultado).toEqual("3")
} )