const { Router } = require("express");
const { runQuery } = require("../db");

const servicoRouter = Router();

servicoRouter.get("/", async (req, res) => {
  const result = await runQuery("SELECT * FROM public.servicos", null);
  res.json(result);
});

servicoRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  const result = await runQuery("SELECT * FROM public.servicos WHERE id_servicos = $1", [id]);
  res.json(result);
});

servicoRouter.post("/", async (req, res) => {
  const { descricao, preco, id_funcionarios } = req.body;
  const result = await runQuery( "INSERT INTO public.servicos (descricao, preco, id_funcionarios) VALUES($1,$2,$3);", [descricao, preco,id_funcionarios]);
  res.json(result);
});

servicoRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const result = await runQuery("DELETE FROM public.servicos WHERE id_servicos=$1", [id]);
  res.json(result);
});

servicoRouter.patch("/:id", async (req, res) => {
    const {id_servicos}= req.params;
    const {descricao,preco,id_funcionarios} = req.body;
    const result = await runQuery( "UPDATE public.servicos SET descricao=$1, preco=$2, id_funcionarios=$3 WHERE id_servicos=$4;", [descricao, preco, id_funcionarios, id_servicos]);
   res.json(result);
});

module.exports = servicosRouter;
