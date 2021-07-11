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
 

  async create(first_name,phone1,last_name,date_nasc,phone2,cpf,street,city,cep,number_house,state){
    try{
      const client = new Client({
        connectionString:process.env.DATABASE_URL,
        ssl:{
          rejectUnauthorized:false
        },
      });
      client.connect();
      const result = await client.query("INSERT INTO public.clientes (first_name, phone1, last_name, date_nasc, phone2, cpf, street, city, cep, number_house, state);",
      [first_name,phone1,last_name,date_nasc,phone2,cpf,street,city,cep,number_house,state]);
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
}

module.exports = ClienteController;

