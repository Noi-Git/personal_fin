const express = require('express');
const router = express.Router();

const pool = require('../../db/index');

/* ===== GET EXPENSES ===== */
// @route   GET routes/api/expense
// @desc    Get user expense infomation
// @access  Private
router.get('/get/expense', async (req, res) => {
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
      return res.status(400).json({ msg: 'There is no expense infomation' });
    }

    // response.json(info);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

/* ===== POST EXPENSE ===== */
// @route   POST routes/api/expense
// @desc    Post user expense infomation
// @access  Private
router.post('/post/expense', async (req, res) => {
  const { user_id, e_name, e_amount } = req.body;
  try {
    const expense_q = `
    INSERT INTO expenses(user_id, e_name, e_amount, created_at)
VALUES(${user_id}, '${e_name}', ${e_amount}, current_timestamp) RETURNING *`;

    const expense_result = await pool.query(expense_q); // return from query
    // console.log(total_result.rows);

    if (!expense_result) {
      return res.status(400).json({ msg: 'Fail to insert expense' });
    } else {
      res.json(expense_result.rows);
    }

    // response.json(info);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

/* ===== UPDATE EXPENSE ===== */
// @route   PUT routes/api/expense
// @desc    Update user expense infomation
// @access  Private
router.put('/put/expense', async (req, res) => {
  const { user_id, id, e_name, e_amount } = req.body;
  try {
    // update expense and name of user_id: 'x' and id: 'y'
    const update_expense_q =
      'UPDATE expenses SET e_name=$1, e_amount=$2, updated_at=current_timestamp WHERE id=$3 AND user_id=$4';
    await pool.query(update_expense_q, [e_name, e_amount, id, user_id]);
    // update finish

    // get expense of user_id: 'x' and id: 'y'
    const get_expense_q = `
    SELECT DISTINCT expe.*, total_expense
    FROM expenses AS expe
    INNER JOIN (SELECT user_id, SUM(e_amount) AS total_expense
       FROM expenses
       GROUP BY user_id) AS expe_total
       ON expe.user_id = expe_total.user_id
    WHERE expe.user_id = $1
    AND expe.id = $2
    ORDER BY expe.user_id`;
    const get_expense_result = await pool.query(get_expense_q, [user_id, id]);
    // done getting expense

    // if i dont get the expense of user_id: x and id: y
    // then something went wrong
    if (!get_expense_result) {
      return res.status(400).json({
        msg: `Fail to get expense of user_id: ${user_id}  and id: ${id}`
      });
    } else {
      // send the expense data to front end
      res.json(get_expense_result.rows);
    }

    // response.json(info);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

/* ===== DELETE EXPENSE ===== */
// @route   DELETE routes/api/expense
// @desc    Delete user expense infomation
// @access  Private
router.delete('/delete/expense', async (req, res) => {
  const { id } = req.body;
  try {
    const delete_expense_q = `DELETE FROM expenses WHERE id=$1`;

    await pool.query(delete_expense_q, [id]); // return from query
    // console.log(delete_expense_result.rows);

    res.json({ msg: id + ' has been deleted' });
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
