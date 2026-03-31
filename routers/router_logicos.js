import { logicos_ex1 } from "../operadores_logicos/ex1.js";
import { logicos_ex2 } from "../operadores_logicos/ex2.js";
import { logicos_ex3 } from "../operadores_logicos/ex3.js";

const router_logicos = express()
import express from "express"

router_logicos.post('/logicos_ex1', (req, res) => {
  const {usuario , senha} = req.body
    let resp = logicos_ex1(usuario , senha)
    res.send(`${resp}`)
  })

  router_logicos.post('/logicos_ex2', (req, res) => {
    const {tempo_empresa,vendas,status} = req.body
    let resp = logicos_ex2(tempo_empresa,vendas,status)
    res.send(`${resp}`)
  })

  router_logicos.post('/logicos_ex3', (req, res) => {
    const {l1,l2,l3} = req.body

    let resp = logicos_ex3(l1,l2,l3)
    res.send(`${resp}`)
  })

  export {router_logicos}