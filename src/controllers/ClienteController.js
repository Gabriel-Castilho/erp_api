const {Client}=require("pg");


class ClienteController{
  async index(){
    try{
      const client = new Client({
        connectionString:process.env.DATABASE_URL,
        ssl:{
          rejectUnauthorized: false
        }, 
      });
      client.connect();
      const result = await client.query("SELECT * FROM public.clientes;");
      client.end();
      const results = result.rows;
      return results;
    }catch(err){
      console.error(err)
      return response.json(err)
    }
  }


  async create(nome_clientes,telefone){
    try{
      const client = new Client({
        connectionString:process.env.DATABASE_URL,
        ssl:{
          rejectUnauthorized:false
        },
      });
      client.connect();
      const result = await client.query("INSERT INTO public.clientes (nome_clientes, telefone) VALUES($1,$2);", [nome, telefone]);
      client.end();
      const results = result.rows;
      const response = {
        message:"cadastrado"
      }
      return response;
    }catch(err){
      console.error(err)
      const response={
        message:"erro"
      }
      return response;
    }
  }

  async delete(id){
    try{
      const client = new Client({
        connectionString:process.env.DATABASE_URL,
        ssl:{
          rejectUnauthorized:false
        },
      });
      client.connect();
      const result = await client.query("DELETE FROM public.clientes WHERE id_clientes=$1", [id]);
      client.end();
      const results = result.rows;
      return results;
    }catch(err){
      return response.json(err)
    }
  }

  async getId(id){
    try{
      const client = new Client({
        connectionString:process.env.DATABASE_URL,
        ssl:{
          rejectUnauthorized:false
        },
      });
      client.connect();
      const result = await client.query("SELECT * FROM public.clientes WHERE id_clientes = $1", [id]);
      client.end();
      const results = result.rows;
      const response = {
        message:"achou"
      }
      return response;
    }catch(err){
      console.error(err)
      const response={
        message:"erro"
      }
      return response;
    }
  }

  async update(nome,telefone,id){
    try{
      const client = new Client({
        connectionString:process.env.DATABASE_URL,
        ssl:{
          rejectUnauthorized:false
        },
      });
      client.connect();
      const result = await client.query("UPDATE public.clientes SET nome_clientes=$1, telefone=$2 WHERE id_clientes=$3;", [nome, telefone, id]);
      client.end();
      const results = result.rows;
      return results;
    }catch(err){
      return response.json(err)
    }
  }
}

module.exports = ClienteController;

/*





clienteRouter.patch("/:id", async (req, res) => {
  const { nome, telefone } = req.body;
  const { id } = req.params;
  const result = await runQuery("UPDATE public.clientes SET nome_clientes=$1, telefone=$2 WHERE id_clientes=$3;", [nome, telefone, id]);
  res.json(result);
});

module.exports = clienteRouter;*/