const {Router} = require("express")
const DespesasController = require("../controllers/DespesasController")

const despesasRouter = Router();
const despesasController = new DespesasController();

despesasRouter.get("/",async (req,res)=>{
    const items = await servicoController.index()
    return res.json(items)
})

despesasRouter.post("/",async(req,res)=>{
    const{quantidade,descricao,valor} = req.body
    const items = await despesasController.create(quantidade,descricao,valor)
    return res.json(items)
})

despesasRouter.delete("/:id",async(req,res)=>{
    const {id} = req.params
    let idNumber = parseInt(id)
    const items = await despesasController.delete(idNumber)
    return res.json(items)
})
despesasRouter.get("/:id",async(req,res)=>{
    const {id}= req.params
    let idNumber = parseInt(id)
    const items = await despesasController.getId(idNumber)
    return res.json(items)
})

despesasRouter.patch("/:id",async(req,res)=>{
    const {id} = req.params
    let idNumber = parseInt(id)
    const {quantidade,descricao,valor} = req.body
    const items = await servicoController.update(quantidade,descricao,valor,idNumber)
    return res.json(items)
})

module.exports=despesasRouter