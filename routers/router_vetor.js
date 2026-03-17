import { vetor_ex1 } from "../vetor/ex1.js";
import { vetor_ex2 } from "../vetor/ex2.js";

import  express  from "express";

const router_vetor = express()

  router_vetor.get('/vetor_ex1', (req, res) => {
    let resp = vetor_ex1()
    res.send(`os numeros são: ${resp}`)
  })

  router_vetor.get('/vetor_ex2', (req, res) => {
    let resp = vetor_ex2()
    res.send(`os numeros são: ${resp}`)
  })


  export {router_vetor}
