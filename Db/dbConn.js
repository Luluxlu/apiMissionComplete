 
// Node.js MySQL Connection
const mysql = require('mysql2/promise');
const config = require('./config');

async function query(sql, params) {
  const connection = await mysql.createConnection(config.db);

  const [results, ] = await connection.execute(sql, params);

  connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database!');
  
  });

  return results;
}

module.exports = { query };

