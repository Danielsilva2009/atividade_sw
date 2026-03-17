import { laco_ex1 } from "../laco/ex1.js";
import { laco_ex2 } from "../laco/ex2.js";
import { laco_ex3 } from "../laco/ex3.js";
import { laco_ex4 } from "../laco/ex4.js";
import { laco_ex5 } from "../laco/ex5.js";

const router_laco = express()
import express from "express"





router_laco.get('/laco_ex1', (req, res) => {
    let resp = laco_ex1()
    res.send(`o resultado é:${resp}`)
  })


    
  router_laco.get('/laco_ex2', (req, res) => {
    let resp = laco_ex2()
    res.send(`o resultado é:${resp}`)
  })

    
  router_laco.get('/laco_ex3', (req, res) => {
    let resp = laco_ex3()
    res.send(`o resultado é:${resp}`)
  })

    
  router_laco.get('/laco_ex4', (req, res) => {
    let resp = laco_ex4()
    res.send(`o resultado é:${resp}`)
  })


    
  router_laco.get('/laco_ex5', (req, res) => {
    let resp = laco_ex5()
    res.send(`os nomes são: ${resp}`)
  })





export {router_laco}