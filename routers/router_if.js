import {if_1} from "../if_else/ex1.js"
import {if_2} from "../if_else/ex2.js"
import {if_3} from "../if_else/ex3.js"
import {if_4} from "../if_else/ex4.js"


const router_if = express()
import express from "express"

router_if.get('/if_1', (req, res) => {
    let resp = if_1()
    res.send(`${resp}`)
  })
  
  router_if.get('/if_2', (req, res) => {
    let resp = if_2()
    res.send(`${resp}`)
  })
  
  router_if.get('/if_3', (req, res) => {
    let resp = if_3()
    res.send(`${resp}`)
  })
  
  router_if.get('/if_4', (req, res) => {
    let resp = if_4()
    res.send(`${resp}`)
  })

  export {router_if}