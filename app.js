const express = require ("express");
const routes = require("./routes/index");
//const cors = require("cors")
const app = express();


//app.use(cors());

app.use(express.json());
app.use(routes);


app.get("/",(req,res)=>{
    return res.json("hello")
})

module.exports=app;

