const { Router } = require("express");
const { runQuery } = require("../db");

const funcionarioRouter = Router();

funcionarioRouter.get("/", async (req, res) => {
  const result = await runQuery("SELECT * FROM public.", null);
  res.json(result);
});

funcionarioRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  const result = await runQuery("SELECT * FROM public. WHERE id = $1", [id]);
  res.json(result);
});

funcionarioRouter.post("/", async (req, res) => {
  const { nome } = req.body;
  const { telefone } = req.body;

  const result = await runQuery( "INSERT INTO public. (nome, telefone) VALUES($1,$2);", [nome, telefone]);
  res.json(result);
});

funcionarioRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const result = await runQuery("DELETE FROM public. WHERE id=$1", [id]);
  res.json(result);
});

funcionarioRouter.patch("/:id", async (req, res) => {
    const {id}=req.params;
    const { nome , telefone} = req.body;
    const result = await runQuery( "UPDATE public. SET nome=$1, telefone=$2 WHERE idcontato=$3;", [nome, telefone, id]);
   res.json(result);
});

module.exports = funcionarioRouter;
