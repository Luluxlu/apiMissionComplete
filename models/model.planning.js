const db = require('../Db/dbConn');
const helper = require('../Db/helper');
const config = require('../Db/config');

async function getMultiple(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT * FROM planning`
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

async function getUserById(id) {
  const offset = helper.getOffset(page, config.listPerPage);
  const sql = parse('SELECT * FROM planning WHERE id = ', id);
  const rows = await db.query(
    sql
  );
  if (users.length === 0) {
    return null;
  }

  return {
    data,
    meta
  }
   
}

module.exports = {
  getMultiple,
  getUserById,

}