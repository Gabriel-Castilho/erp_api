const express = require ("express");
const app = express();

app.get("/",(req,res)=>{
    return res.json("hello")
})


app.listen(process.env.PORT || 8000,()=>{
    console.log("Server Iniciado")
})