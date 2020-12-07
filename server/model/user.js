const query = require("../lib/mysql");

class usersSql {
  findAllData() {
    let _sql = `SELECT * FROM user`;
    return query(_sql);
  }
  addData(v) {
    console.log('===========addData===========');
    console.log(v);
    let _sql = `insert into user set id=?, name=?;`
    return query(_sql, v)
  }
  delData(id) {
    let _sql = `delete from user where id="${id}";`
    return query(_sql)
  }
}

module.exports = new usersSql();
