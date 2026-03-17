
import { exe_case } from "../case/ex1.js";
const router_case = express()
import express from "express"

router_case.get('/case_ex1', (req, res) => {
  let resp = exe_case()
  res.send(`o dia da semana é : ${resp}`)
})


export {router_case}