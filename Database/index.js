const { Pool } = require("pg"); 

exports.runQuery = async (text, params) => {
  let pool;
  if (process.env.DATABASE_URL) {
    pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false,
      },
    });
  } else {
    console.log("offline")
  }

  try {
    const client = await pool.connect();
    if (params == null) {
      params = [];
    }
    let result = await client.query(text, params);
    const results = result.rows;
    client.end();
    return results;
  } catch (err) {
    console.error(err);
    const error = {
      message: "Erro",
      error: err
    }
    return error;
  }
};