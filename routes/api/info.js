const express = require('express');
const router = express.Router();

const pool = require('../../db/index');

router.get('/info', async (request, response) => {
  try {
    const info = await pool.query(
      `SELECT SUM(amount) AS total, user_id FROM money_flow WHERE user_id=2 AND type='income' GROUP BY user_id`,
      (err, res) => {
        response.json(res.rows);
      }
    );

    if (!info) {
      return res.status(400).json({ msg: 'There is no money infomation' });
    }

    response.json(info);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
