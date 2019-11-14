const express = require('express');
const router = express.Router();

const pool = require('../../db/index');

/* ===== GET RESERVE_FUND ===== */
// @route   GET routes/api/reserve
// @desc    Get user reserve_fund infomation
// @access  Private
router.get('/reserve', async (req, res) => {
  try {
    const reserve_q = `
    SELECT rese.*, total_reserve
    FROM reserve_fund AS rese
    INNER JOIN (SELECT user_id, SUM(r_amount) AS total_reserve
		   FROM reserve_fund
		   GROUP BY user_id) AS rese_total
    ON rese.user_id = rese_total.user_id
    ORDER BY user_id;`;

    const reserve_result = await pool.query(reserve_q); // return from query
    // console.log(total_result.rows);

    res.json(reserve_result.rows);

    if (!reserve_result) {
      return res
        .status(400)
        .json({ msg: 'There is no reserve fund infomation' });
    }

    // response.json(info);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
