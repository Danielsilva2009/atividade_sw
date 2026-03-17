import { json_ex1 } from "../json/ex1.js";

const router_json = express()
import express from "express"




router_json.get('/json_ex1', (req, res) => {
    let resp = json_ex1()
    res.send(`: ${resp}`)
  })

  export {router_json}