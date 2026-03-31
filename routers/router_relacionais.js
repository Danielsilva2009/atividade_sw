 import {rel_1} from "../operadores_relacionais/ex1.js"
 import {rel_2} from "../operadores_relacionais/ex2.js"
 import {rel_3} from "../operadores_relacionais/ex3.js"
 import {rel_4} from "../operadores_relacionais/ex4.js"
 import {rel_5} from "../operadores_relacionais/ex5.js"
 import {rel_6} from "../operadores_relacionais/ex6.js"


const router_relacionais = express()
import express from "express"

router_relacionais.post('/relacionais_ex1', (req, res) => {
  const {idade} = req.body
    let resp = rel_1(idade)
    res.send(`${resp}`)
  })


  router_relacionais.post('/relacionais_ex2', (req, res) => {
    const {usuario,senha} = req.body
    let resp = rel_2(usuario,senha)
    res.send(`${resp}`)
  })


  router_relacionais.post('/relacionais_ex3', (req, res) => {
    const {nota} = req.body
    let resp = rel_3(nota)
    res.send(`${resp}`)
  })



  router_relacionais.post('/relacionais_ex4', (req, res) => {
    const {idade} = req.body
    let resp = rel_4(idade)
    res.send(`${resp}`)
  })


  router_relacionais.post('/relacionais_ex5', (req, res) => {
    const {numero} = req.body
    let resp = rel_5(numero)
    res.send(`${resp}`)
  })


  router_relacionais.post('/relacionais_ex6', (req, res) => {
    const {valorCompra} = req.body
    let resp = rel_6(valorCompra)
    res.send(`${resp}`)
  })


  export {router_relacionais}