const { Router } = require("express");
const { runQuery } = require("../db");

const agendamentoRouter = Router();


agendamentoRouter.get("/", async (req, res) => {
 // const result = await runQuery("SELECT * FROM public.", null);
 // res.json(result);
});

agendamentoRouter.get("/:id", async (req, res) => {
 // const { id } = req.params;
 /// const result = await runQuery("SELECT * FROM public. WHERE id = $1", [id]);
//  res.json(result);
});

agendamentoRouter.post("/", async (req, res) => {
  //const { idCliente } = req.body;
 // const { time } = req.body;
 // const { date } = req.body;
 // const { idServico } = req.body;

  //const result = await runQuery(
  //  "INSERT INTO public. (idCliente, time, date, idServico, idtipocontato) VALUES($1,$2,$3,$4);",
 //   [idCliente, time, date, idServico]
 // );
 // res.json(result);
});

agendamentoRouter.delete("/:id", async (req, res) => {
//  const { id } = req.params;
//  const result = await runQuery("DELETE FROM public. WHERE idcontato=$1", [id]);
 // res.json(result);
});

contatoRouter.patch("/:id", async (req, res) => {
 // const { idCliente } = req.params;
 // const { time } = req.body;
 // const { date } = req.body;
 // const { idServico } = req.body;


 // const result = await runQuery(
   // "UPDATE public. SET id Cliente=$1, time=$2, date=$3, idServico=$4 WHERE idcontato=$6;",
   // [idCliente, time, date, idServico]);
  // res.json(result);
});

module.exports = agendamentoRouter;