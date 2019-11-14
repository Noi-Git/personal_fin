const express = require('express');
const router = express.Router();

const pool = require('../../db/index');

/* ===== GET TOTAL ===== */
// @route   GET routes/api/total
// @desc    Get user total_income, total_expense, total_reserve
// @access  Private
router.get('/total', async (req, res) => {
  try {
    const total_q = `
    SELECT distinct inco.user_id,inco2.total_income,  expe.total_expense, res.total_reserve
    FROM incomes AS inco
	
    INNER JOIN
    (SELECT user_id, SUM(i_amount) AS total_income 
    FROM incomes 
    GROUP BY user_id) AS inco2 
    ON inco.user_id = inco2.user_id
	
    INNER JOIN
    (SELECT user_id, SUM(e_amount) AS total_expense
    FROM expenses 
    GROUP BY user_id) AS expe 
    ON expe.user_id = inco2.user_id
	
    INNER JOIN
    (SELECT user_id, SUM(r_amount) AS total_reserve
    FROM reserve_fund 
    GROUP BY user_id) AS res 
    ON res.user_id = inco2.user_id
    
    ORDER BY inco.user_id ASC`;

    const total_result = await pool.query(total_q); // return from query
    // console.log(total_result.rows);

    res.json(total_result.rows[0]);

    if (!total_result) {
      //return res.status(400).json({ msg: 'There is no money infomation' });
    }

    // response.json(info);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

/* ===== GET INCOME ===== */
// @route   GET routes/api/income
// @desc    Get user income infomation
// @access  Private
router.get('/income', async (req, res) => {
  try {
    const income_q = `
    SELECT DISTINCT inco.*, total_income
    FROM incomes AS inco
    INNER JOIN (SELECT user_id, SUM(i_amount) AS total_income
		   FROM incomes
		   GROUP BY user_id) AS inco_total
		   ON inco.user_id = inco_total.user_id
		
    ORDER BY inco.user_id`;

    const income_result = await pool.query(income_q); // return from query
    // console.log(total_result.rows);

    res.json(income_result.rows);

    if (!income_result) {
      //return res.status(400).json({ msg: 'There is no money infomation' });
    }

    // response.json(info);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

/* ===== GET EXPENSES ===== */
// @route   GET routes/api/expense
// @desc    Get user expense infomation
// @access  Private
router.get('/expense', async (req, res) => {
  try {
    const expense_q = `
    SELECT expe.*, total_expense
    FROM expenses AS expe
    INNER JOIN (SELECT user_id, SUM(e_amount) AS total_expense
		   FROM expenses
		   GROUP BY user_id) AS expe_total
       ON expe.user_id = expe_total.user_id

    ORDER BY expe.user_id`;

    const expense_result = await pool.query(expense_q); // return from query
    // console.log(total_result.rows);

    res.json(expense_result.rows);

    if (!expense_result) {
      //return res.status(400).json({ msg: 'There is no money infomation' });
    }

    // response.json(info);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
