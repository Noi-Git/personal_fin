const express = require('express');
const router = express.Router();

const pool = require('../../db/index');

router.get('/total', async (request, response) => {
  try {
    const total_q = `
    SELECT inco.user_id,inco2.total_income,  expe.total_expense, res.total_reserve
    FROM incomes AS inco
    LEFT JOIN
    (SELECT user_id, SUM(i_amount) AS total_income 
    FROM incomes 
    WHERE user_id = 1
    GROUP BY user_id) AS inco2 
    ON inco.user_id = inco2.user_id
    LEFT JOIN
    (SELECT user_id, SUM(e_amount) AS total_expense
    FROM expenses 
    WHERE user_id = 1
    GROUP BY user_id) AS expe 
    ON expe.user_id = inco2.user_id
    LEFT JOIN
    (SELECT user_id, SUM(r_amount) AS total_reserve
    FROM reserve_fund 
    WHERE user_id = 1
    GROUP BY user_id) AS res 
    ON res.user_id = inco2.user_id`;

    const total_result = await pool.query(total_q); // return from query
    // console.log(total_result.rows);

    response.json(total_result);

    if (!total_result) {
      //return res.status(400).json({ msg: 'There is no money infomation' });
    }

    // response.json(info);
  } catch (err) {
    console.log(err.message);
    response.status(500).send('Server Error');
  }
});

module.exports = router;
