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
      return res.json(err)
    }
  }
  
  async create(firstname, phone1, lastname, datenasc, phone2, cpf, street, city, cep, numberhouse, state){
    try{
      const client = new Client({
        connectionString:process.env.DATABASE_URL,
        ssl:{
          rejectUnauthorized:false
        },
      });
      client.connect();
      const result = await client.query("INSERT INTO public.clientes (firstname, phone1, lastname, datenasc, phone2, cpf, street, city, cep, numberhouse, state) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11);",
      [firstname, phone1, lastname, datenasc, phone2, cpf, street, city, cep, numberhouse, state]);
      client.end();
      const results = result.rows;
      const response = {
        message:"cadastrado"
      }
      return response;
    }catch(err){
      console.error(err)
      const response={
        message:"Erro ao cadastar cliente"
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
      console.error(err)
      const response={
        message:"erro ao deletar"
      }
      return response
    }
  }

  async getId(id_clientes){
    try{
      const client = new Client({
        connectionString:process.env.DATABASE_URL,
        ssl:{
          rejectUnauthorized:false
        }, 
      });
      client.connect();
      const result = await client.query("SELECT * FROM public.clientes WHERE id_clientes=$1", [id_clientes]);
      client.end();
      const results = result.rows;
      return results;
    }catch(err){
      console.error(err)
      return res.json(err)
    }
  }

  async update(firstname, phone1, lastname, datenasc, phone2, cpf, street, city, cep, numberhouse, state,idclientes){
    try{
      const client = new Client({
        connectionString:process.env.DATABASE_URL,
        ssl:{
          rejectUnauthorized:false
        },
      });
      client.connect();
      const result = await client.query("UPDATE public.clientes SET firstname=$1, phone1=$2, lastname=$3, datenasc=$4, phone2=$5, cpf=$6, street=$7, city=$8, cep=$9, numberhouse=$10, state=$11 WHERE idclientes=$12;",[firstname, phone1, lastname, datenasc, phone2, cpf, street, city, cep, numberhouse, state,idclientes]);
      client.end();
      const results = result.rows;
      const response = {
        message:"editado"
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

module.exports = ClienteController;

