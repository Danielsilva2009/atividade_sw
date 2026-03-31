import { vetor_ex1 } from "../vetor/ex1.js";
import { vetor_ex2 } from "../vetor/ex2.js";

import  express  from "express";

const router_vetor = express()

  router_vetor.post('/vetor_ex1', (req, res) => {
    const {numeros} = req.body
    let resp = vetor_ex1(numeros)
    res.send(`os numeros são: ${resp}`)
  })

  router_vetor.post('/vetor_ex2', (req, res) => {
    const {a,b} = req.body
    let resp = vetor_ex2(a,b)
    res.send(`os numeros são: ${resp}`)
  })


  export {router_vetor}
