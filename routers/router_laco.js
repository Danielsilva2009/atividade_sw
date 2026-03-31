import { laco_ex1 } from "../laco/ex1.js";
import { laco_ex2 } from "../laco/ex2.js";
import { laco_ex3 } from "../laco/ex3.js";
import { laco_ex4 } from "../laco/ex4.js";
import { laco_ex5 } from "../laco/ex5.js";

const router_laco = express()
import express from "express"





router_laco.post('/laco_ex1', (req, res) => {
  const {a} = req.body
    let resp = laco_ex1(a)
    res.json(`o resultado é:${resp}`)
  })


    
  router_laco.post('/laco_ex2', (req, res) => {
    const {a} = req.body
    let resp = laco_ex2(a)
    res.send(`o resultado é:${resp}`)
  })

    
  router_laco.post('/laco_ex3', (req, res) => {
    const {a} = req.body
    let resp = laco_ex3(a)
    res.json(`o resultado é:${resp}`)
  })

    
  router_laco.post('/laco_ex4', (req, res) => {
    const {i} = req.body
    let resp = laco_ex4(i)
    res.send(`o resultado é:${resp}`)
  })


    
  router_laco.post('/laco_ex5', (req, res) => {
    let resp = laco_ex5()
    res.send(`os nomes são: ${resp}`)
  })





export {router_laco}