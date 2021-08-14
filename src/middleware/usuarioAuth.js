const jwttoken = require("../controllers/UsuarioController")

function usuarioAuth(req,res,next){
    const authToken = req.headers['authorization']
    
    if(authToken != undefined){
       const bearer = authToken.split('')
       let tok =  bearer[1]
       jwttoken.verify(token,jwtSecret,(err,data)=>{
           if(err){
               res.status(401)
               res.json({err:"Token Inválido"})
           }else{
               console.log(data)
           }
        
       })
    }

    module.exports = usuarioAuth

