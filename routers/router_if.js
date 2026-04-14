import {if_1} from "../if_else/ex1.js"
import {if_2} from "../if_else/ex2.js"
import {if_3} from "../if_else/ex3.js"



const router_if = express()
import express from "express"

router_if.post('/if_1', (req, res) => {
  const {numero} = req.body
    let resp = if_1(numero)
    res.send(`${resp}`)
  })
  
  router_if.post('/if_2', (req, res) => {
  



    let {idade_nadador} = req.body

    let resp = if_2(idade_nadador)
     
    res.json(`${resp}`)
  })
  
  router_if.post('/if_3', (req, res) => {
    let {turno} = req.body
    let resp = if_3(turno)
    res.send(`${resp}`)
  })
  


  export {router_if}