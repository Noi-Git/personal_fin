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

/* ===== POST RESERVE_FUND ===== */
// @route   POST routes/api/reserve
// @desc    Post user reserve infomation
// @access  Private
router.post('/reserve', async (req, res) => {
  const { user_id, r_name, r_amount } = req.body;
  try {
    const reserve_q = `
    INSERT INTO reserve_fund(user_id, r_name, r_amount, created_at)
VALUES(${user_id}, '${r_name}', ${r_amount}, current_timestamp) RETURNING *`;

    const reserve_result = await pool.query(reserve_q); // return from query
    // console.log(total_result.rows);

    if (!reserve_result) {
      return res.status(400).json({ msg: 'Fail to insert reserve' });
    } else {
      res.json(reserve_result.rows);
    }

    // response.json(info);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

/* ===== UPDATE RESERVE_FUND ===== */
// @route   PUT routes/api/reserve
// @desc    Update user reserve infomation
// @access  Private
router.put('/reserve', async (req, res) => {
  const { user_id, id, r_name, r_amount } = req.body;
  try {
    // update reserve and name of user_id: 'x' and id: 'y'
    const update_reserve_q =
      'UPDATE reserve_fund SET r_name=$1, r_amount=$2, updated_at=current_timestamp WHERE id=$3 AND user_id=$4';
    await pool.query(update_reserve_q, [r_name, r_amount, id, user_id]);
    // update finish

    // get reserve of user_id: 'x' and id: 'y'
    const get_reserve_q = `
    SELECT DISTINCT rese.*, total_reserve
    FROM reserve_fund AS rese
    INNER JOIN (SELECT user_id, SUM(r_amount) AS total_reserve
       FROM reserve_fund
       GROUP BY user_id) AS rese_total
       ON rese.user_id = rese_total.user_id
    WHERE rese.user_id = $1
    AND rese.id = $2
    ORDER BY rese.user_id`;
    const get_reserve_result = await pool.query(get_reserve_q, [user_id, id]);
    // done getting reserve

    // if i dont get the reserve of user_id: x and id: y
    // then something went wrong
    if (!get_reserve_result) {
      return res.status(400).json({
        msg: `Fail to get reserve of user_id: ${user_id}  and id: ${id}`
      });
    } else {
      // send the reserve data to front end
      res.json(get_reserve_result.rows);
    }

    // response.json(info);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

/* ===== DELETE RESERVE_FUND ===== */
// @route   DELETE routes/api/reserve
// @desc    Delete user reserve infomation
// @access  Private
router.delete('/reserve', async (req, res) => {
  const { id } = req.body;
  try {
    const delete_reserve_q = `DELETE FROM reserve_fund WHERE id=$1`;

    await pool.query(delete_reserve_q, [id]); // return from query
    // console.log(delete_reserve_result.rows);

    res.json({ msg: id + ' has been deleted' });
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
