// case
import { exe_case } from "../atividade_sw/case/ex1.js";
// variaveis
import { variaveis_ex1 } from "../atividade_sw/variaveis/ex1.js";
import { variaveis_ex2 } from "../atividade_sw/variaveis/ex2.js";
import { variaveis_ex3 } from "../atividade_sw/variaveis/ex3.js";
// laco
import { laco_ex1 } from "../atividade_sw/laco/ex1.js";
import { laco_ex2 } from "../atividade_sw/laco/ex2.js";
import { laco_ex3 } from "../atividade_sw/laco/ex3.js";
import { laco_ex4 } from "../atividade_sw/laco/ex4.js";
import { laco_ex5 } from "../atividade_sw/laco/ex5.js";

// vetor
import { vetor_ex1 } from "../atividade_sw/vetor/ex1.js";
import { vetor_ex2 } from "../atividade_sw/vetor/ex2.js";
import express from 'express'
//json
import { json_ex1 } from "../atividade_sw/json/ex1.js";
 //operadores logicos
 import { logicos_ex1 } from "../atividade_sw/operadores_logicos/ex1.js";
 import { logicos_ex2 } from "../atividade_sw/operadores_logicos/ex2.js";
 import { logicos_ex3 } from "../atividade_sw/operadores_logicos/ex3.js";
 //
const app = express()




// case
app.get('case_ex1', (req, res) => {
  let resp = exe_case()
  res.send(`o dia da semana é : ${resp}`)
})

// variaveis


app.get('/variaveis_ex1', (req, res) => {
    let resp = variaveis_ex1()
    res.send(`o total é :${resp}`)
  })


  app.get('/variaveis_ex2', (req, res) => {
    let resp = variaveis_ex2()
    res.send(`a temperatura em farenhait é :${resp}`)
  })


  app.get('/variaveis_ex3', (req, res) => {
    let resp = variaveis_ex3()
    res.send(`a área é :${resp}`)
  })
  

  //laco

  
  app.get('/laco_ex1', (req, res) => {
    let resp = laco_ex1()
    res.send(`o resultado é:${resp}`)
  })


    
  app.get('/laco_ex2', (req, res) => {
    let resp = laco_ex2()
    res.send(`o resultado é:${resp}`)
  })

    
  app.get('/laco_ex3', (req, res) => {
    let resp = laco_ex3()
    res.send(`o resultado é:${resp}`)
  })

    
  app.get('/laco_ex4', (req, res) => {
    let resp = laco_ex4()
    res.send(`o resultado é:${resp}`)
  })


    
  app.get('/laco_ex5', (req, res) => {
    let resp = laco_ex5()
    res.send(`os nomes são: ${resp}`)
  })

  //vetor


  app.get('/vetor_ex1', (req, res) => {
    let resp = vetor_ex1()
    res.send(`os numeros são: ${resp}`)
  })

  app.get('/vetor_ex2', (req, res) => {
    let resp = vetor_ex2()
    res.send(`os numeros são: ${resp}`)
  })

//json

app.get('/json_ex1', (req, res) => {
    let resp = json_ex1()
    res.send(`sla: ${resp}`)
  })

 //operadores logicos

 app.get('/logicos_ex1', (req, res) => {
    let resp = logicos_ex1()
    res.send(`${resp}`)
  })

  app.get('/logicos_ex1', (req, res) => {
    let resp = logicos_ex2()
    res.send(`${resp}`)
  })

  app.get('/logicos_ex3', (req, res) => {
    let resp = logicos_ex3()
    res.send(`${resp}`)
  })



app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})