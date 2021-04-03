const {Client} =  require("pg")

class DespesasController{
  async index(){
    try{
      const client = new Client({
        connectionString:process.env.DATABASE_URL,
        ssl:{
          rejectUnauthorized: false
        }, 
      });
      client.connect();
      const result = await client.query("SELECT * FROM public.despesas");
      client.end();
      const results = result.rows;
      return results;
    }catch(err){
      console.error(err)
      return res.json(err)
    }
  }

  async create(quantidade,descricao,valor){
    try{
      const client = new Client({
        connectionString:process.env.DATABASE_URL,
        ssl:{
          rejectUnauthorized:false
        },
      });
      client.connect();
      const result = await client.query("INSERT INTO public.despesas (quantidade, descricao ,valor) VALUES($1,$2,$3);", [quantidade,descricao,valor]);
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
      const result = await client.query("DELETE FROM public.despesas WHERE id_despesas=$1", [id]);
      client.end();
      const results = result.rows;
      return results;
    }catch(err){
      return res.json(err)
    }
  }
  async update(quantidade,descricao,valor,id_despesas){
    try{
      const client = new Client({
        connectionString:process.env.DATABASE_URL,
        ssl:{
          rejectUnauthorized:false
        },
      });
      client.connect();
      const result = await client.query("UPDATE public.despesas SET quantidade=$1, descricao=$2,valor=$3 WHERE idcontato=$4;", [quantidade, descricao, valor,id_despesas]);
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

  async getId(id){
    try{
      const client = new Client({
        connectionString:process.env.DATABASE_URL,
        ssl:{
          rejectUnauthorized:false
        },
      });
      client.connect();
      const result = await client.query("SELECT * FROM public.despesas WHERE id_despesas=$1", [id]);
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

}

module.exports = DespesasController;
