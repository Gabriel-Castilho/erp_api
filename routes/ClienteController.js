const { Router } = require("express");
const { runQuery } = require("../Database/index");

const clienteRouter = Router();

clienteRouter.get("/", async (req, res) => {
 const result = await runQuery("SELECT id_clientes, nome_clientes, telefone FROM public.clientes;", null);
  res.json(result);
});

clienteRouter.get("/:id", async (req, res) => {
 // const { id } = req.params;
 // const result = await runQuery("SELECT * FROM public. WHERE id = $1", [id]);
 // res.json(result);
});

clienteRouter.post("/", async (req, res) => {
  //const { nome } = req.body;
 // const { telefone } = req.body;

  //const result = await runQuery( "INSERT INTO public. (nome, telefone) VALUES($1,$2);", [nome, telefone]);
  //res.json(result);
});

clienteRouter.delete("/:id", async (req, res) => {
 // const { id } = req.params;
  //const result = await runQuery("DELETE FROM public. WHERE id=$1", [id]);
 // res.json(result);
});

clienteRouter.patch("/:id", async (req, res) => {
 //   const {id}=req.params;
   // const { nome , telefone} = req.body;
 //   const result = await runQuery( "UPDATE public. SET nome=$1, telefone=$2 WHERE idcontato=$3;", [nome, telefone, id]);
 //  res.json(result);
});

module.exports = clienteRouter;
