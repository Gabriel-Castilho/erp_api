const express = require ("express");
const routes = require("./routes/index")
const cors = require("cors")
const app = express();


app.use(cors({origin: "https://applicationdatecontrol.herokuapp.com",}));

app.use(express.json());
app.use(routes);


app.get("/",(req,res)=>{
  res.send("hello")
})

module.exports = app;

