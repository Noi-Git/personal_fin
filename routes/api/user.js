const express = require('express');
const router = express.Router();

const pool = require('../../db/index');

const { check, validationResult } = require('express-validator');

// Init Middleware is in server.js

/* ===== GET USER ===== */
// @route   GET routes/api/user
// @desc    Get userinfomation
// @access  Private
// router.get('/user', async (req, res) => {
//   try {
//     const user_q = `SELECT * FROM users WHERE email=$1 AND sub=$2`,
//     [email, sub];
//     console.log(user_q)

//     const user_result = await pool.query(user_q); // return from query
//     // console.log(user_result.rows);

//     if (!user_result) {
//       return res
//         .status(400)
//         .json({ msg: `We don't have information about the user` });
//     } else {
//       res.json(user_result.rows);
//     }
//     // response.json(info);
//   } catch (err) {
//     console.log(err.message);
//     res.status(500).send('Server Error');
//   }
// });

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
    // console.log(req.body); // need to initualize the middleware for req.body to work

    // data sent from frontend not complete
    // const error = validationResult(req);
    // console.log(error);
    // if (error.isEmpty()) {
    //   return res.json({ message: 'Some data are missing' });
    // }

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
