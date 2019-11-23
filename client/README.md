# Money Pal

Help makes spending awareness

## Getting Started

### Step 1

Download or clone from the repo

### Step 2 - Database configuration

On the server side

- Create a folder calls secrets and inside create a file call db_cofiguration.js at the root of the project
- Add your Postgresql local connection inside db_configuration.js
- Ex.
  module.exports = {
  user: 'YOUR_DATABASE_USER',
  host: 'localhost',
  database: 'DATABASE_NAME',
  password: 'PASSWORD',
  port: PORT OR 5432 which is the defalut for postgresql
  };
