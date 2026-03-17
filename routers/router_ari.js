const router_ari = express()
import express from "express"


import {ari_1} from "../operadores_aritimeticos/ex1.js"

import {ari_2} from "../operadores_aritimeticos/ex2.js"
import {ari_3} from "../operadores_aritimeticos/ex3.js"
import {ari_4} from "../operadores_aritimeticos/ex4.js"
import {ari_5} from "../operadores_aritimeticos/ex5.js"
import {ari_6} from "../operadores_aritimeticos/ex6.js"
import {ari_7} from "../operadores_aritimeticos/ex7.js"

router_ari.get('/aritimeticos_ex1', (req, res) => {
    let resp = ari_1()
    res.send(`${resp}`)
  })
  
  router_ari.get('/aritimeticos_ex2', (req, res) => {
    let resp = ari_2()
    res.send(`${resp}`)
  })
  
  router_ari.get('/aritimeticos_ex3', (req, res) => {
    let resp = ari_3()
    res.send(`${resp}`)
  })
  
  router_ari.get('/aritimeticos_ex4', (req, res) => {
    let resp = ari_4()
    res.send(`${resp}`)
  })
  
  router_ari.get('/aritimeticos_ex5', (req, res) => {
    let resp = ari_5()
    res.send(`${resp}`)
  })
  
  router_ari.get('/aritimeticos_ex6', (req, res) => {
    let resp = ari_6()
    res.send(`${resp}`)
  })
  
  router_ari.get('/aritimeticos_ex7', (req, res) => {
    let resp = ari_7()
    res.send(`${resp}`)
  })

  export {router_ari}