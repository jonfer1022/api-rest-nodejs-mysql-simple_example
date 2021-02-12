const connection = require('../../config/connection');

var dataModels = {
  
  getCars: (callback) => {
    if(connection){
      let querySql = `select * from cars`;
      connection.query(querySql, (error, rows) =>{
        if(error) throw `An error ocurred: ${error}`;
        callback(rows)
      })
    }
  },

  getCarById: (data,callback) => {
    if(connection){
      let querySql = `select * from cars where id=${connection.escape(data)}`;
      connection.query(querySql, (error, rows) =>{
        if(error) throw `An error ocurred: ${error}`;
        callback(rows)
      })
    }
  },

  insertCar: (data,callback) => {
    if(connection){
      let querySql = `insert into cars(marca, descripcion)
                      values ('${data.marca}', '${data.descripcion}')`;
      connection.query(querySql, (error, rows) =>{
        if(error) throw `An error ocurred: ${error}`;
        callback([rows ,{message: "Carro insertado"}])
      })
    }
  },

  editCar: (data,callback) => {
    if(connection){
      let querySql = `Update cars set
        marca = '${data.marca}',
        descripcion = '${data.descripcion}'
        where id = ${data.id}`;
      connection.query(querySql, (error, rows) =>{
        if(error) throw `An error ocurred: ${error}`;
        callback([rows ,{message: "Carro actualizado"}])
      })
    }
  },

  deleteCar: (data,callback) => {
    if(connection){
      let querySql = `delete from cars where id=${data}`;
      connection.query(querySql, (error, rows) =>{
        if(error) throw `An error ocurred: ${error}`;
        callback([rows ,{message: "Carro eliminado"}])
      })
    }
  }
}

module.exports = dataModels;