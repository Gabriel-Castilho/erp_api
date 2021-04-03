const { Client } = require("pg")

class ServicoController {
  async index() {
    try {
      const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: {
          rejectUnauthorized: false
        },
      });
      client.connect();
      const result = await client.query("SELECT * FROM public.servicos");
      client.end();
      const results = result.rows;
      return results;
    } catch (err) {
      console.error(err)
      return res.json(err)
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
      const result = await client.query("SELECT * FROM public.servicos WHERE id_servicos = $1", [id]);
      client.end();
      const results = result.rows;
      const response = {
        message: "achou"
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

  async create(descricao, preco, id_funcionarios) {
    try {
      const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: {
          rejectUnauthorized: false
        },
      });
      client.connect();
      const result = await client.query("INSERT INTO public.servicos (descricao, preco, id_funcionarios) VALUES($1,$2,$3);", [descricao, preco, id_funcionarios])
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
      const result = await client.query("DELETE FROM public.servicos WHERE id_servicos=$1", [id]);
      client.end();
      const results = result.rows;
      return results;
    } catch (err) {
      return res.json(err)
    }
  }
  async update(descricao, preco, id_funcionarios, id_servicos) {
    try {
      const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: {
          rejectUnauthorized: false
        },
      });
      client.connect();
      const result = await client.query("UPDATE public.servicos SET descricao=$1, preco=$2, id_funcionarios=$3 WHERE id_servicos=$4;", [descricao, preco, id_funcionarios, id_servicos]);
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
}

module.exports = ServicoController;
