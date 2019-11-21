const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');

// Init Middleware is in server.js

/* ===== GET USER ===== */
// @route   GET routes/api/user
// @desc    Get userinfomation
// @access  Private
router.get('/user', async (req, res) => {
  try {
    const user_q = `SELECT * FROM users`;

    const user_result = await pool.query(user_q); // return from query
    // console.log(user_result.rows);

    if (!user_result) {
      return res
        .status(400)
        .json({ msg: `We don't have information about the user` });
    } else {
      res.json(user_result.rows);
    }
    // response.json(info);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

/* ===== POST USER ===== */
// @route   POST routes/api/user
// @desc    Add user infomation to the database
// @access  Private
router.post('/user', (req, res) => {
  console.log(req.body); // need to initualize the middleware for req.body to work
  res.send('User route');
});
