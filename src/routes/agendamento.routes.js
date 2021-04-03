const {Router} = require("express")
const AgendamentoController = require("../controllers/AgendamentoController")

const agendamentoRouter = Router();
const agendamentoController = new AgendamentoController();

agendamentoRouter.get("/",async (req,res)=>{
    const items = await agendamentoController.index()
    return res.json(items)
})

agendamentoRouter.post("/",async(req,res)=>{
    const{id_clientes,horario,data_atendimento,id_servico,adicional} = req.body
    const items = await agendamentoController.create(id_clientes,horario,data_atendimento,id_servico,adicional)
    return res.json(items)
})

agendamentoRouter.delete("/:id",async(req,res)=>{
    const {id} = req.params
    let idNumber = parseInt(id)
    const items = await agendamentoController.delete(idNumber)
    return res.json(items)
})

agendamentoRouter.get("/:id"),async(req,res)=>{
    const {id}= req.params
    let idNumber = parseInt(id)
    const items = await agendamentoController.getId(idNumber)
    return res.json(items)
}

agendamentoRouter.patch("/:id",async(req,res)=>{
    const {id} = req.params
    let idNumber = parseInt(id)
    const {id_cliente,horario,data_atendimento,id_servico,adicional} = req.body
    const items = await agendamentoController.update(id_cliente,horario,data_atendimento,id_servico,adicional,idNumber)
    return res.json(items)
})

module.exports=agendamentoRouter