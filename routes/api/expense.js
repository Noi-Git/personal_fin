const express = require('express');
const router = express.Router();

const pool = require('../../db/index');

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
