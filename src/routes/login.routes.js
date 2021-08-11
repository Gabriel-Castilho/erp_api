const {Router} = require("express")
const LoginController = require("../controllers/LoginController")

const loginRouter = Router();
const loginController = new LoginController();

loginRouter.get("/",async (req,res)=>{
    const items = await loginController.index()
    return res.json(items)
})

loginRouter.post("/",async(req,res)=>{
    const{email,password} = req.body
    const items = await loginController.create(email,password)
    return res.json(items)
})

loginRouter.delete("/:id",async(req,res)=>{
    const {id} = req.params
    var idNumber = parseInt(id)
    const items = await loginController.delete(idNumber)
    return res.json(items)
})
 
loginRouter.get("/:id",async(req,res)=>{
    const {id}= req.params
    var idNumber = parseInt(id)
    const items = await loginController.getId(idNumber)
    return res.json(items)
})

loginRouter.patch("/:id",async(req,res)=>{
    const {id} = req.params
    const {email,password} = req.body
    const items = await loginController.update(email,password,id)
    return res.json(items)
})

module.exports=loginRouter

