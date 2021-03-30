const { Router } = require("express");
const { runQuery } = require("../Database/index");

const agendamentoRouter = Router();


agendamentoRouter.get("/", async (req, res) => {
 const result = await runQuery("SELECT * FROM public.agendamento", null);
 res.json(result);
});


agendamentoRouter.get("/:id", async (req, res) => {
 const { id } = req.params;
 const result = await runQuery("SELECT * FROM public.agendamento WHERE id_agendamento = $1", [id]);
 res.json(result);
});



agendamentoRouter.post("/", async (req, res) => {
  const { idCliente} = req.body;
  const { horario } = req.body;
   const { data_atendimento } = req.body;
  const { id_servico } = req.body;
  const { adicional } = req.body;

  const result = await runQuery(
    "INSERT INTO public.agendamneto (id_clientes, horario, data_atendimento, id_servico, adicional) VALUES($1,$2,$3,$4,$5);",
    [idCliente, horario, data_atendimento, id_servico,adicional]
  );
  res.json(result);
});

agendamentoRouter.delete("/:id", async (req, res) => {
 const { id } = req.params;
 const result = await runQuery("DELETE FROM public.agendamento WHERE id_agendamento=$1", [id]);
 res.json(result);
});

agendamentoRouter.patch("/:id", async (req, res) => {
 const{id_agendamento} = req.params;
  const { id_cliente } = req.body;
 const { horario } = req.body;
 const { data_atendimento } = req.body;
 const { id_servico } = req.body;
 const{adicional}=req.body;


 const result = await runQuery(
    "UPDATE public. SET id_cliente=$1, horario=$2, data_atendimento=$3, id_servico=$4, adicional=$5 WHERE id_agendamento=$6;",
    [id_cliente, horario, data_atendimento, id_servico,adicional,id_agendamento]);
   res.json(result);
});

module.exports = agendamentoRouter;