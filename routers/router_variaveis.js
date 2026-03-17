

// variaveis
import { variaveis_ex1 } from "../variaveis/ex1.js";
import { variaveis_ex2 } from "../variaveis/ex2.js";
import { variaveis_ex3 } from "../variaveis/ex3.js";

const router_variaveis = express()
import express from "express"

router_variaveis.get('/variaveis_ex1', (req, res) => {
    let resp = variaveis_ex1()
    res.send(`o total é :${resp}`)
  })


  router_variaveis.get('/variaveis_ex2', (req, res) => {
    let resp = variaveis_ex2()
    res.send(`a temperatura em farenhait é :${resp}`)
  })


  router_variaveis.get('/variaveis_ex3', (req, res) => {
    let resp = variaveis_ex3()
    res.send(`a área é :${resp}`)
  })
  
  export {router_variaveis}