# Money Pal App

Breakdown income, expense, and reserve fund into a daily budget.

## Built With

- Node.js and Express.js - server side
- PostgresQL - database
- React.js - client side
- HTML, CSS-Grid, Flexbox , and SCSS - base UI

## Author

Noi Sinnang (Patthamavadee)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

#### Download and Install dependencies

** Step 1 ** clone or download project from the repo

** Step 2 ** at the root of the server folder - run npm install to install all dependencies use for server

** Step 3 ** navigate to the root of client folder - run npm install to install all dependencies use for React client

#### Config environment variables for server

** Step 1 ** - On the sever side, at the root, create .env file and config all credentials keys with your credential

```
DOMAIN=YOUR_AUTH0_DOMAIN
CLIENT_YOUR_AUTH0_KEY
API_IDENTIFIER=http://localhost

```

** Step 2 ** still on the root of server side

    - Create a folder calls secrets
    - Inside create a file calls db_configuration.js

```
module.exports = {
  user: 'YOUR_DATABASE_USER',
  host: 'localhost',
  database: 'YOUR_DATABASE_NAME',
  password: 'YOUR_DATABASE_PASSWORD',
  port: 5432 OR YOUR_PORT
};
```

#### Config environment variables for client

** Step 1 ** Create a file .env.local in the root of client

```
REACT_APP_AUTH0_DOMAIN=YOUR_AUTH_DOMAIN
REACT_APP_AUTH0_CLIENT_ID=YOUR_AUTH_KEY
REACT_APP_API_IDENTIFIER=http://localhost
```

![alt MoneyPal](https://i.ibb.co/nfTbZpH/money-pal-img.png)
