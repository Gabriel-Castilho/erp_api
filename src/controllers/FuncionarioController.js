const { Client } = require("pg")


class FuncionarioController {

  async index() {
    try {
      const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: {
          rejectUnauthorized: false
        },
      });
      client.connect();
      const result = await client.query("SELECT * FROM public.funcionarios");
      client.end();
      const results = result.rows;
      return results;
    } catch (err) {
      console.error(err)
      return res.json(err)
    } 
  }
  async create(nome_funcionario, telefone) {
    try {
      const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: {
          rejectUnauthorized: false
        },
      });
      client.connect();
      const result = await client.query("INSERT INTO public.funcionarios (nome_funcionario, telefone) VALUES($1,$2);", [nome_funcionario, telefone]);
      client.end();
      const results = result.rows;
      const response = {
        message: "cadastrado"
      }
      return response;
    } catch (err) {
      console.error(err)
      const response = {
        message: "erro"
      }
      return response;
    }
  }

  async delete(id) {
    try {
      const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: {
          rejectUnauthorized: false
        },
      });
      client.connect();
      const result = await client.query("DELETE FROM public.funcionarios WHERE id_funcionarios=$1", [id]);
      client.end();
      const results = result.rows;
      return results;
    } catch (err) {
      return res.json(err)
    }
  }
  async update(nome_funcionario, telefone, id) {
    try {
      const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: {
          rejectUnauthorized: false
        },
      });
      client.connect();
      const result = await client.query("UPDATE public.funcionario SET nome_funcionario=$1, telefone=$2 WHERE id_funcionarios=$3;", [nome_funcionario, telefone, id]);
      client.end();
      const results = result.rows;
      const response = {
        message: "cadastrado"
      }
      return response;
    } catch (err) {
      console.error(err)
      const response = {
        message: "erro"
      }
      return response;
    }
  }
  async getId(id) {
    try {
      const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: {
          rejectUnauthorized: false
        },
      });
      client.connect();
      const result = await client.query("SELECT * FROM public.funcionarios WHERE id_funcionarios = $1", [id]);
      client.end();
      const results = result.rows;
      return results;
    } catch (err) {
      console.error(err)
      const response = {
        message: "erro"
      }
      return response;
    }
  }

}

module.exports = FuncionarioController;
