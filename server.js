const express = require('express');
// validate - search more info at express-validator

const app = express();

// Connect Database

// Init Middleware - used to be bodyParser.json() - now do the below
// it helps us get data from users.js when we do - req.body
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

// Define Routes -- when type ex. /api/users - it will go get /routes/api/user
app.use('/', require('./routes/api/info'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
