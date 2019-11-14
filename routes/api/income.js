const express = require('express');
const router = express.Router();

const pool = require('../../db/index');

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

module.exports = router;
