const { Router } = require("express");
const { runQuery } = require("../Database/index");

const despesasRouter = Router();

despesasRouter.get("/", async (req, res) => {
  const result = await runQuery("SELECT * FROM public.despesas", null);
  res.json(result);
});

despesasRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  const result = await runQuery("SELECT * FROM public.despesas WHERE id_despesas = $1", [id]);
  res.json(result);
});

despesasRouter.post("/", async (req, res) => {
  const { descricao,valor,quantidade } = req.body;
  const result = await runQuery( "INSERT INTO public.despesas (quantidade, descricao ,valor) VALUES($1,$2,$3);", [quantidade,descricao,valor]);
  res.json(result);
});

despesasRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const result = await runQuery("DELETE FROM public.despesas WHERE id_despesas=$1", [id]);
  res.json(result);
});

despesasRouter.patch("/:id", async (req, res) => {
    const {id_despesas}= req.params;
    const { descricao,valor,quantidade} = req.body;
    const result = await runQuery( "UPDATE public.despesas SET quantidade=$1, descricao=$2,valor=$3 WHERE idcontato=$4;", [quantidade, descricao, valor,id_despesas]);
   res.json(result);
});

module.exports = despesasRouter;
