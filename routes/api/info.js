const express = require('express');
const router = express.Router();

const pool = require('../../db/index');

router.get('/info', async (request, response) => {
  try {
    const query = `
    SELECT table1.user_id, name, amount, table1.type, cleared, table2.total 
    FROM money_flow AS table1 
    INNER JOIN (SELECT SUM(amount) AS total, user_id, type FROM money_flow  GROUP BY user_id, type) AS table2 ON table1.user_id = table2.user_id AND table1.type = table2.type`;

    const info = await pool.query(query);
    console.log(info.rows);

    for (let i = 0; i < info.length; i++) {
      console.log(info[i].amount);
      for (let prop in info[prop]) {
        console.log('info prop: ', info[prop]);
      }
    }

    // response.json(info.rows);
    response.json(info);

    if (!info) {
      //return res.status(400).json({ msg: 'There is no money infomation' });
    }

    // response.json(info);
  } catch (err) {
    console.log(err.message);
    response.status(500).send('Server Error');
  }
});

router.get('/info2', async (request, response) => {
  try {
    const query1 = `SELECT user_id, name, amount, type, cleared
    FROM money_flow ORDER BY user_id`;

    const query2 = `SELECT SUM(amount) AS total, user_id, type 
    FROM money_flow 
    GROUP BY user_id, type`;

    const info1 = await pool.query(query1);
    const info2 = await pool.query(query2);

    // console.log(info1.rows);
    // console.log(info2.rows);

    const info = info1.rows;
    console.log(info);

    for (let i = 0; i < info.length; i++) {
      for (let objInfo2 of info2.rows) {
        if (
          objInfo2.user_id === info[i].user_id &&
          objInfo2.type === info[i].type
        ) {
          info[i]['total'] = objInfo2.total;
          console.log(info);
        }
      }
    }

    response.json(info);
  } catch (err) {
    console.log(err.message);
    response.status(500).send('Server Error');
  }
});

module.exports = router;
