const {Router} = require("express")
const ClienteController = require("../controllers/ClienteController")

const clienteRouter = Router();
const clienteController = new ClienteController();

clienteRouter.get("/",async (req,res)=>{
    const items = await clienteController.index()
    return res.json(items)
})

clienteRouter.post("/",async(req,res)=>{
    const{firstname, phone1, lastname, datenasc, phone2, cpf, street, city, cep, numberhouse, state} = req.body
    const items = await clienteController.create(firstname, phone1, lastname, datenasc, phone2, cpf, street, city, cep, numberhouse, state)
    return res.json(items)
})

clienteRouter.delete("/:id",async(req,res)=>{
    const {id} = req.params
    var idNumber = parseInt(id)
    const items = await clienteController.delete(idNumber)
    return res.json(items)
})
 
clienteRouter.get("/:id",async(req,res)=>{
    const {id}= req.params
    var idNumber = parseInt(id)
    const items = await clienteController.getId(idNumber)
    return res.json(items)
})

clienteRouter.patch("/:id",async(req,res)=>{
    const {id} = req.params
    const {firstname, phone1, lastname, datenasc, phone2, cpf, street, city, cep, numberhouse, state} = req.body
    const items = await clienteController.update(firstname, phone1, lastname, datenasc, phone2, cpf, street, city, cep, numberhouse, state,id)
    return res.json(items)
})

module.exports=clienteRouter

