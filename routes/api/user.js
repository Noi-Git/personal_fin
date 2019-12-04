const express = require('express');
const router = express.Router();

const { pool } = require('../../config.js');
// console.log(pool.query);

const { check, validationResult } = require('express-validator');

// Init Middleware is in server.js

/* ===== POST USER ===== */
// @route   POST routes/api/user
// @desc    Add user infomation to the database
// @access  Private
router.post(
  '/user',
  [
    check('username')
      .not()
      .isEmpty(),
    check('email')
      .exists()
      .isEmail(),
    check('sub')
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    // get query and sub from http request
    const { username, email, sub } = req.body;

    // check if user has existed in the db
    let userFound = await pool.query(
      'SELECT * FROM users WHERE email=$1 AND sub=$2',
      [email, sub]
    );

    // if user was not found in the db
    if (!userFound || userFound.rows.length === 0) {
      // create a new user
      userFound = await pool.query(
        'INSERT INTO users(username, email, sub) VALUES ($1, $2, $3) RETURNING *',
        [username, email, sub]
      );

      return res.json({ message: 'save a new user', user: userFound.rows[0] });
    }

    // if user exists in the db
    const total_q = `
    SELECT distinct inco.user_id,inco2.total_income,  expe.total_expense, res.total_reserve
    FROM incomes AS inco
	
    LEFT JOIN
    (SELECT user_id, SUM(i_amount) AS total_income 
    FROM incomes 
    GROUP BY user_id) AS inco2 
    ON inco.user_id = inco2.user_id
	
    LEFT JOIN
    (SELECT user_id, SUM(e_amount) AS total_expense
    FROM expenses 
    GROUP BY user_id) AS expe 
    ON expe.user_id = inco2.user_id
	
    LEFT JOIN
    (SELECT user_id, SUM(r_amount) AS total_reserve
    FROM reserve_fund 
    GROUP BY user_id) AS res 
    ON res.user_id = inco2.user_id

    WHERE inco.user_id = $1
    
    ORDER BY inco.user_id ASC`;

    const budgetQueryResult = await pool.query(total_q, [userFound.rows[0].id]); // return from query

    return res.json({
      message: 'existing user',
      user: userFound.rows[0],
      budget: budgetQueryResult.rows[0]
    });
  }
);

module.exports = router;
