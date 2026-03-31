

// variaveis
import { variaveis_ex1 } from "../variaveis/ex1.js";
import { variaveis_ex2 } from "../variaveis/ex2.js";
import { variaveis_ex3 } from "../variaveis/ex3.js";

const router_variaveis = express()
import express from "express"

router_variaveis.get('/variaveis_ex1', (req, res) => {
  const {quantidade,produto} = req.query
    let resp = variaveis_ex1(quantidade,produto)
    res.send(`o total é :${resp}`)
  })


  router_variaveis.get('/variaveis_ex2', (req, res) => {
    const {temperatura_celsius} = req.query
    let resp = variaveis_ex2(temperatura_celsius)
    res.send(`a temperatura em farenhait é :${resp}`)
  })


  router_variaveis.get('/variaveis_ex3', (req, res) => {
    const {largura,altura} = req.query
    let resp = variaveis_ex3(largura,altura)
    res.send(`a área é :${resp}`)
  })
  
  export {router_variaveis}