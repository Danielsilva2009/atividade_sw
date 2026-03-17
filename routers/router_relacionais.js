 import {rel_1} from "../operadores_relacionais/ex1.js"
 import {rel_2} from "../operadores_relacionais/ex2.js"
 import {rel_3} from "../operadores_relacionais/ex3.js"
 import {rel_4} from "../operadores_relacionais/ex4.js"
 import {rel_5} from "../operadores_relacionais/ex5.js"
 import {rel_6} from "../operadores_relacionais/ex6.js"


const router_relacionais = express()
import express from "express"

router_relacionais.get('/relacionais_ex1', (req, res) => {
    let resp = rel_1()
    res.send(`${resp}`)
  })


  router_relacionais.get('/relacionais_ex2', (req, res) => {
    let resp = rel_2()
    res.send(`${resp}`)
  })


  router_relacionais.get('/relacionais_ex3', (req, res) => {
    let resp = rel_3()
    res.send(`${resp}`)
  })



  router_relacionais.get('/relacionais_ex4', (req, res) => {
    let resp = rel_5()
    res.send(`${resp}`)
  })


  router_relacionais.get('/relacionais_ex5', (req, res) => {
    let resp = rel_5()
    res.send(`${resp}`)
  })


  router_relacionais.get('/relacionais_ex6', (req, res) => {
    let resp = rel_6()
    res.send(`${resp}`)
  })


  export {router_relacionais}