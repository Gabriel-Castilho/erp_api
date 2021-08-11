const {Router} = require("express")

const agendamentoRouter = require("./agendamento.routes")
const clienteRouter = require("./cliente.routes")
const funcionarioRouter = require("./funcionario.routes")
const servicoRouter = require("./servico.routes")
const despesasRouter = require ("./despesas.routes")
const loginRouter = require ("./login.routes")


const routes = Router();

routes.use("/agendamento", agendamentoRouter)
routes.use("/cliente",clienteRouter)
routes.use("/despesas",despesasRouter)
routes.use("/servicos", servicoRouter)
routes.use("/funcionarios",funcionarioRouter)
routes.use("/login",loginRouter)

module.exports = routes