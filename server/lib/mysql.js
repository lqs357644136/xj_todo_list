const mysql = require('mysql')
const config = require('./config/index.js')

const pool = mysql.createPool({
  host        : config.mysqlConfig.HOST,
  user        : config.mysqlConfig.USERNAME,
  password    : config.mysqlConfig.PASSWORD,
  database    : config.mysqlConfig.DATABASE,
  port        : config.mysqlConfig.PORT,
  dateStrings : true
})

let query = ( sql, values ) => {
  return new Promise(( resolve, reject ) => {
    pool.getConnection( (err, connection) => {
      if (err) {
        reject( err )
      } else {
        connection.query(sql, values, ( err, rows) => {
          if ( err ) {
            reject( err )
          } else {
            resolve( rows )
          }
          connection.release()
        })
      }
    })
  })
}

module.exports = query