const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  possword: 'root',
  host: 'localhost',
  port: 5432,
})

module.exports = pool