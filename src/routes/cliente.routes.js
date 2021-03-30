const {Router} = require("express")
const ClienteController = require("../src/controllers/ClienteController")

const clienteRouter = Router();
const clienteController = new ClienteController();

clienteRouter.get("/",async (req,res)=>{
    const items = await clienteController.index()
    return res.json(items)
})


module.exports=clienteRouter