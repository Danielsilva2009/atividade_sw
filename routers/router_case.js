
import { exe_case } from "../case/ex1.js";
const router_case = express()
import express from "express"

router_case.post('/case_ex1', (req, res) => {
  const {dia} = req.body
  let resp = exe_case(dia)
  res.send(`o dia da semana é : ${resp}`)
})


export {router_case}