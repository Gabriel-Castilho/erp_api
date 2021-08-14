const {Router} = require("express")
const UsuarioController = require("../controllers/UsuarioController")
const jwt = require("jsonwebtoken")
const jwtSecret = "xz2!fg7@8uiuç"


const usuarioRouter = Router();
const usuarioController = new UsuarioController();

usuarioRouter.get("/",auth, async (req,res)=>{
    const items = await usuarioController.index()
    return res.json(items)
})

usuarioRouter.post("/",async(req,res)=>{
    const{email,senha} = req.body
    const items = await usuarioController.create(email,senha)
    return res.json(items)
})

usuarioRouter.post("/authenticate",async (req,res)=>{
    const{email,senha} = req.body
    const items = await usuarioController.login(email,senha)
    return res.json(items)
})

usuarioRouter.delete("/:id",async(req,res)=>{
    const {id} = req.params
    var idNumber = parseInt(id)
    const items = await usuarioController.delete(idNumber)
    return res.json(items)
})
 
usuarioRouter.get("/:id",async(req,res)=>{
    const {id}= req.params
    var idNumber = parseInt(id)
    const items = await usuarioController.getId(idNumber)
    return res.json(items)
})

usuarioRouter.patch("/:id",async(req,res)=>{
    const {id} = req.params
    const {email,senha} = req.body
    const items = await usuarioController.update(email,senha,id)
    return res.json(items)
})

function auth(req,res,next){
    const authToken = req.headers['authorization']
    
    if(authToken != undefined){
       const bearer = authToken.split(' ')
       var token =  bearer[1]
       jwt.verify(token,jwtSecret,(err,data)=>{
           if(err){
               res.status(401)
               res.json({err:"Token Inválido"})
           }else{
               req.token= token
               req.loggedUder={id:data.id,email:data.email};
               next()
           }
       })
    }else{
      res.status(401);
      res.json({err:"Token Inválido"})
    }
  
  }

module.exports=usuarioRouter

