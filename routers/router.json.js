import { json_ex1 } from "../json/ex1.js";

const router_json = express()
import express from "express"




router_json.post('/json_ex1', (req, res) => {
  const {nome,idade,curso,turno,modulo} = req.body
    let resp = json_ex1(nome,idade,curso,turno,modulo)
    res.json(`nome: ${resp}`)
  })

  export {router_json}