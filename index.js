

const app = express()
import express from 'express'

import { router_case} from "./routers/router_case.js";
import { router_if } from "./routers/router_if.js";
import { router_ari } from "./routers/router_ari.js";
import { router_json } from "./routers/router.json.js";
import { router_variaveis } from "./routers/router_variaveis.js";
import { router_relacionais } from "./routers/router_relacionais.js";
import { router_laco } from "./routers/router_laco.js";
import { router_vetor } from './routers/router_vetor.js';
import { router_logicos } from './routers/router_logicos.js';



app.use(express.Router())

app.use('/', router_case)

app.use('/', router_if)

app.use('/', router_ari)

app.use('/', router_json)

app.use('/', router_variaveis)

app.use('/', router_relacionais)

app.use('/', router_laco)

app.use('/', router_vetor)

app.use('/', router_logicos)



app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})