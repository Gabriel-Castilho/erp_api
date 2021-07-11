const {Router} = require("express")
const FuncionarioController = require("../controllers/FuncionarioController")

const funcionarioRouter = Router();
const funcionarioController = new FuncionarioController();

funcionarioRouter.get("/",async (req,res)=>{
    const items = await funcionarioController.index()
    return res.json(items)
})

funcionarioRouter.post("/",async(req,res)=>{
    const{nome_funcionario,telefone} = req.body
    const items = await funcionarioController.create(nome_funcionario,telefone)
    return res.json(items)
}) 

funcionarioRouter.delete("/:id",async(req,res)=>{
    const {id} = req.params
    let idNumber = parseInt(id)
    const items = await funcionarioController.delete(idNumber)
    return res.json(items)
})

funcionarioRouter.get("/:id",async(req,res)=>{
    const {id}= req.params
    let idNumber = parseInt(id)
    const items = await funcionarioController.getId(idNumber)
    return res.json(items)
})

funcionarioRouter.patch("/:id",async(req,res)=>{
    const {id} = req.params
    let idNumber = parseInt(id)
    const {nome_funcionario,telefone} = req.body
    const items = await funcionarioController.update(nome_funcionario,telefone,idNumber)
    return res.json(items)
})

module.exports=funcionarioRouter