const {Router} = require("express")
const ClienteController = require("../controllers/ClienteController")

const clienteRouter = Router();
const clienteController = new ClienteController();

clienteRouter.get("/",async (req,res)=>{
    const items = await clienteController.index()
    return res.json(items)
})

clienteRouter.post("/",async(req,res)=>{
    const{first_name,phone1,last_name,date_nasc,phone2,cpf,street,city,cep,number_house,state} = req.body
    const items = await clienteController.create(first_name,phone1,last_name,date_nasc,phone2,cpf,street,city,cep,number_house,state)
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
    var idNumber=parseInt(id)
    const {firstName,phone1,lastName,dateNasc,phone2,cpf,street,city,cep,number,state} = req.body
    const items = await clienteController.update(firstName,phone1,lastName,dateNasc,phone2,cpf,street,city,cep,number,state,idNumber)
    return res.json(items)
})

module.exports=clienteRouter

