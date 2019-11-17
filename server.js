const express = require('express');
// validate - search more info at express-validator

const app = express();

// Connect Database

// Init Middleware - used to be bodyParser.json() - now do the below
// it helps us get data from users.js when we do - req.body
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

// Define Routes -- when type ex. /api/users - it will go get /routes/api/user
app.use('/', require('./routes/api/get/total'));

app.use('/', require('./routes/api/get/income'));
app.use('/', require('./routes/api/post/income'));
app.use('/', require('./routes/api/put/income'));
app.use('/', require('./routes/api/delete/income'));

app.use('/', require('./routes/api/get/expense'));
app.use('/', require('./routes/api/post/expense'));
app.use('/', require('./routes/api/put/expense'));
app.use('/', require('./routes/api/delete/expense'));

app.use('/', require('./routes/api/get/reserve'));
app.use('/', require('./routes/api/post/reserve'));
app.use('/', require('./routes/api/put/reserve'));
app.use('/', require('./routes/api/delete/reserve'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
