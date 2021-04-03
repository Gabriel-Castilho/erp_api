const {Router} = require("express")
const ServicoController = require("../controllers/ServicoController")

const servicoRouter = Router();
const servicoController = new ServicoController();

servicoRouter.get("/",async (req,res)=>{
    const items = await servicoController.index()
    return res.json(items)
})

servicoRouter.post("/",async(req,res)=>{
    const{descricao,preco,id_funcionario} = req.body
    const items = await servicoController.create(descricao,preco,id_funcionario)
    return res.json(items)
})

servicoRouter.delete("/:id",async(req,res)=>{
    const {id} = req.params
    let idNumber = parseInt(id)
    const items = await servicoController.delete(idNumber)
    return res.json(items)
})
servicoRouter.get("/:id"),async(req,res)=>{
    const {id}= req.params
    let idNumber = parseInt(id)
    const items = await servicoController.getId(idNumber)
    return res.json(items)
}

servicoRouter.patch("/:id",async(req,res)=>{
    const {id} = req.params
    let idNumber = parseInt(id)
    const {descricao,preco,id_funcionario} = req.body
    const items = await servicoController.update(descricao,preco,id_funcionario,idNumber)
    return res.json(items)
})

module.exports=servicoRouter