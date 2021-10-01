const Pool = require("pg").Pool;
const {
    DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;



const pool = new Pool({
  user: DB_USER,
  password: DB_PASSWORD,
  host: DB_HOST,
  port: 5432,
  database: "imagenes"
});

module.exports = pool;