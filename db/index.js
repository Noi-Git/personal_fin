// === setup code for node and postgres ===
// { Pool } means grab class Pool from pg module
const { Pool } = require('pg');
const {
  user,
  host,
  database,
  password,
  port
} = require('../secrets/db_configuration');

const pool = new Pool({ user, host, database, password, port });

module.exports = pool;
// to run this code in terminal $ node db
