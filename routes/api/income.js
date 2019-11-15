const express = require('express');
const router = express.Router();

const pool = require('../../db/index');

const selectIncomeFromDatabase = async () => {
  const income_q = `
  SELECT DISTINCT inco.*, total_income
  FROM incomes AS inco
  INNER JOIN (SELECT user_id, SUM(i_amount) AS total_income
     FROM incomes
     GROUP BY user_id) AS inco_total
     ON inco.user_id = inco_total.user_id
  ORDER BY inco.user_id`;

  return await pool.query(income_q); // return from query
};

/* ===== GET INCOME ===== */
// @route   GET routes/api/income
// @desc    Get user income infomation
// @access  Private
router.get('/income', async (req, res) => {
  try {
    // const income_q = `
    // SELECT DISTINCT inco.*, total_income
    // FROM incomes AS inco
    // INNER JOIN (SELECT user_id, SUM(i_amount) AS total_income
    //    FROM incomes
    //    GROUP BY user_id) AS inco_total
    //    ON inco.user_id = inco_total.user_id
    // ORDER BY inco.user_id`;

    // const income_result = await pool.query(income_q); // return from query
    // console.log(total_result.rows);

    const income_result = await selectIncomeFromDatabase();
    res.json(income_result.rows);

    if (!income_result) {
      return res.status(400).json({ msg: 'There is no income infomation' });
    }

    // response.json(info);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

/* ===== POST INCOME ===== */
// @route   POST routes/api/income
// @desc    Post user income infomation
// @access  Private
router.post('/income', async (req, res) => {
  const { user_id, i_name, i_amount, cleared } = req.body;
  try {
    const income_q = `
    INSERT INTO incomes(user_id, i_name, i_amount, cleared, created_at)
VALUES(${user_id}, '${i_name}', ${i_amount}, '${cleared}', current_timestamp) RETURNING *`;

    const income_result = await pool.query(income_q); // return from query
    // console.log(total_result.rows);

    res.json(income_result.rows);

    if (!income_result) {
      return res.status(400).json({ msg: 'Fail to insert income' });
    }

    // response.json(info);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

/* ===== UPDATE INCOME ===== */
// @route   PUT routes/api/income
// @desc    Update user income infomation
// @access  Private
router.put('/income', async (req, res) => {
  const { user_id, id, i_name, i_amount } = req.body;
  try {
    //     const update_income_q = `
    //     UPDATE incomes SET i_name='${i_name}', i_amount='${i_amount}', updated_at=${NOW()}
    // WHERE id=${id} AND user_id=${user_id}`;

    // const updated_income_result = await pool.query(update_income_q); // return from query
    // console.log(total_result.rows);

    // res.json(updated_income_result.rows);

    const update_income_q =
      'UPDATE incomes SET i_name=$1, i_amount=$2, updated_at=current_timestamp WHERE id=$3 AND user_id=$4';
    const updated_income_result = await pool.query(update_income_q, [
      i_name,
      i_amount,
      id,
      user_id
    ]);

    const update_income_result = await selectIncomeFromDatabase(); // from function select * from incomes

    res.json(updated_income_result.rows);

    if (!updated_income_result) {
      return res.status(400).json({ msg: 'Fail to insert income' });
    }

    // response.json(info);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

/* ===== DELETE INCOME ===== */
// @route   DELETE routes/api/income
// @desc    Delete user income infomation
// @access  Private
router.delete('/income/:user_id', async (req, res) => {
  const { user_id, id } = req.body;
  try {
    const delete_income_q = `
    DELETE FROM incomes
WHERE id=${id} AND user_id=${user_id}`;

    const delete_income_result = await pool.query(delete_income_q); // return from query
    // console.log(total_result.rows);

    res.json(delete_income_result.rows);

    if (!delete_income_result) {
      return res.status(400).json({ msg: 'Fail to insert income' });
    }

    // response.json(info);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
