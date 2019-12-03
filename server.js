const express = require('express');
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const path = require('path');
const cors = require('cors');
// validate - search more info at express-validator

const app = express();
// Init Middleware - used to be bodyParser.json() - now do the below
// it helps us get data from users.js when we do - req.body
app.use(express.json({ extended: false }));
app.use(cors());

// Set up Auth0 configuration
const authConfig = {
  domain: 'DOMAIN',
  audience: 'API_IDENTIFIER'
};

// Define middleware that validates incoming bearer tokens
// using JWKS from dev--gak610i.auth0.com
const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`
  }),

  audience: authConfig.audience,
  issuer: `https://${authConfig.domain}/`,
  algorithm: ['RS256']
});

// Define an endpoint that must be called with an access token
app.get('/api/external', checkJwt, (req, res) => {
  res.send({
    msg: 'Your Access Token was successfully validated!'
  });
});

/* ==== make sure to get rid of app.get('/', (req, res) => res.send('API Running')) === */
// app.get('/', (req, res) => res.send('API Running'));

// Define Routes -- when type ex. /api/users - it will go get /routes/api/user
app.use('/', require('./routes/api/total'));
app.use('/', require('./routes/api/income'));
app.use('/', require('./routes/api/expense'));
app.use('/', require('./routes/api/reserve'));
app.use('/', require('./routes/api/user'));

// Serve static assets in production
if (process.env.NODE.ENV == 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
