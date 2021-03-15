const { Router } = require("express");
const { runQuery } = require("../Database/index");

const funcionarioRouter = Router();

funcionarioRouter.get("/", async (req, res) => {
  const result = await runQuery("SELECT * FROM public.funcionario", null);
  res.json(result);
});

funcionarioRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  const result = await runQuery("SELECT * FROM public.funcionario WHERE id_funcionarios = $1", [id]);
  res.json(result);
});

funcionarioRouter.post("/", async (req, res) => {
  const { nome_funcionario } = req.body;
  const { telefone } = req.body;

  const result = await runQuery( "INSERT INTO public.funcionarios (nome_funcionario, telefone) VALUES($1,$2);", [nome_funcionario, telefone]);
  res.json(result);
});

funcionarioRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const result = await runQuery("DELETE FROM public.funcionarios WHERE id_funcionarios=$1", [id]);
  res.json(result);
});

funcionarioRouter.patch("/:id", async (req, res) => {
    const {id_funcionarios}= req.params;
    const { nome_funcionario , telefone} = req.body;
    const result = await runQuery( "UPDATE public.funcionario SET nome_funcionario=$1, telefone=$2 WHERE idcontato=$3;", [nome_funcionario, telefone, id_funcionarios]);
   res.json(result);
});

module.exports = funcionarioRouter;
