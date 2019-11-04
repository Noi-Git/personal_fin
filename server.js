const express = require('express');
const pool = require('./db');

const app = express();

app.get('/daily', (request, response, next) => {
  pool.query(
    `SELECT user_id, type, name, amount FROM money_flow WHERE type= 'income' `,
    (err, res) => {
      response.json(res.rows);
    }
  );
});

app.get('/dailycopy', (request, response, next) => {
  pool.query(
    `SELECT type, name, amount, ended - started AS totaldays, round(amount/(ended - started),2) AS perday FROM money_flow WHERE user_id=2 AND type= 'income' `,
    (err, res) => {
      response.json(res.rows);
    }
  );
});

const port = 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
