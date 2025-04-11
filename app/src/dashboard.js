const sqlite3 = require('sqlite3').verbose();

let _dbname = "data\\database1.db"


let db = new sqlite3.Database(_dbname, (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected successfully.');
});