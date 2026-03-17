import { logicos_ex1 } from "../operadores_logicos/ex1.js";
import { logicos_ex2 } from "../operadores_logicos/ex2.js";
import { logicos_ex3 } from "../operadores_logicos/ex3.js";

const router_logicos = express()
import express from "express"

router_logicos.get('/logicos_ex1', (req, res) => {
    let resp = logicos_ex1()
    res.send(`${resp}`)
  })

  router_logicos.get('/logicos_ex1', (req, res) => {
    let resp = logicos_ex2()
    res.send(`${resp}`)
  })

  router_logicos.get('/logicos_ex3', (req, res) => {
    let resp = logicos_ex3()
    res.send(`${resp}`)
  })

  export {router_logicos}