const connection = require('../../config/connection');

var dataModels = {
  
  getCars: (callback) => {
    if(connection){
      let querySql = `select * from cars`;
      connection.query(querySql, (error, rows) =>{
        if(error) throw `An erro ocurred: ${error}`;
        callback(rows)
      })
    }
  },

  getCarById: (data,callback) => {
    if(connection){
      // console.log(data,connection.escape(data))
      let querySql = `select * from cars where id=${connection.escape(data)}`;
      connection.query(querySql, (error, rows) =>{
        if(error) throw `An erro ocurred: ${error}`;
        callback(rows)
      })
    }
  }

}

module.exports = dataModels;