const router_ari = express()
import express from "express"


import {ari_1} from "../operadores_aritimeticos/ex1.js"

import {ari_2} from "../operadores_aritimeticos/ex2.js"
import {ari_3} from "../operadores_aritimeticos/ex3.js"
import {ari_4} from "../operadores_aritimeticos/ex4.js"
import {ari_5} from "../operadores_aritimeticos/ex5.js"
import {ari_6} from "../operadores_aritimeticos/ex6.js"
import {ari_7} from "../operadores_aritimeticos/ex7.js"

router_ari.get('/ari_ex1', (req, res) => {
  const {a,b} = req.query
    let resp = ari_1(a,b)
    res.send(`${resp}`)
  })
  
  router_ari.get('/aritimeticos_ex2/:nota_1/:nota_2/:nota_3', (req, res) => {
    const {nota_1,nota_2,nota_3} = req.params
    let resp = ari_2(nota_1 , nota_2 , nota_3)
    res.send(`${resp}`)
  })
  
  router_ari.get('/aritimeticos_ex3/:ab', (req, res) => {
    const {ab} = req.params
    let resp = ari_3(ab)
    res.send(`${resp}`)
  })
  
  router_ari.get('/aritimeticos_ex4/:numero', (req, res) => {
    const {numero} = req.params
    let resp = ari_4(numero)
    res.send(`${resp}`)
  })
  
  router_ari.get('/aritimeticos_ex5/:graus', (req, res) => {
    const {graus} = req.params
    let resp = ari_5(graus)
    res.send(`${resp}`)
  })
  
  router_ari.get('/aritimeticos_ex6/:base/:altura', (req, res) => {
    const {base , altura} = req.params
    let resp = ari_6(base , altura)
    res.send(`${resp}`)
  })
  
  router_ari.get('/aritimeticos_ex7/:hora_trabalhada', (req, res) => {
    const {hora_trabalhada} = req.params
    let resp = ari_7(hora_trabalhada)
    res.send(`${resp}`)
  })

  export {router_ari}