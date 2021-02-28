const {Router} = require("express")

const agendamentoRouter = require("./AgendamentoController")
const clienteRouter = require("./ClienteController")

const routes = Router();

routes.use("/agendamento", agendamentoRouter)
routes.use("/cliente",clienteRouter)


module.exports = routes