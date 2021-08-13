function usuarioAuth(req,res,next){
    if(req.session.user){
        if(JSON.session != undefined){
            next();
        }else{
            const response={
                message: "Usuário não logado"
            }

            return response;
        }
        }
    }

    module.exports = usuarioAuth

