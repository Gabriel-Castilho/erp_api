const {Router} = require("express")

const agendamentoRouter = require("./AgendamentoController")
const clienteRouter = require("./cliente.routes")
const funcionarioRouter = require("./FuncionarioController")
const servicoRouter = require("./ServicoController")
const despesasRouter = require ("./DespesasController")


const routes = Router();

routes.use("/agendamento", agendamentoRouter)
routes.use("/cliente",clienteRouter)
routes.use("/despesas",despesasRouter)
routes.use("/servicos", servicoRouter)
routes.use("/funcionarios",funcionarioRouter)

module.exports = routes