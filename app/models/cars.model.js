const connection = require('../../config/connection');

class dataModels {

  static async getCars(){
    return new Promise(async (resolve, reject) =>{
      try {
        if(connection){
          let querySql = `select * from cars`;
          connection.query(querySql, (error, rows) =>{
            if(error) reject(`An error ocurred in the query getCars: ${error}`);
            resolve (rows);
          })
        }
      } catch (error) {
        console.error(`An error ocurred in getCars: ${error}`);
        reject(`An error ocurred in getCars: ${error}`);
      }
    })
  }

  static async getCarById(data){
    return new Promise(async (resolve, reject) =>{
      try {
        if(connection){
          let querySql = `select * from cars where id=${data}`;
          connection.query(querySql, (error, rows) =>{
            if(error) reject(`An error ocurred in the query getCarById: ${error}`);
            resolve (rows);
          })
        }
      } catch (error) {
        console.error(`An error ocurred in getCarById: ${error}`);
        reject(`An error ocurred in getCarById: ${error}`);
      }
    })
  }

  static async insertCar(data){
    return new Promise(async (resolve, reject) =>{
      try {
        if(connection){
          let querySql = 
            `Insert into cars(marca, descripcion)
            values ('${data.marca}', '${data.descripcion}')`;
          connection.query(querySql, (error, rows) =>{
            if(error) reject(`An error ocurred in the query insertCar: ${error}`);
            resolve ([rows, {message: "Carro agregado"}]);
          })
        }
      } catch (error) {
        console.error(`An error ocurred in insertCar: ${error}`);
        reject(`An error ocurred in insertCar: ${error}`);
      }
    })
  }

  static async editCar(id, marca, descripcion){
    return new Promise(async (resolve, reject) =>{
      try {
        if(connection){
          let querySql = `Update cars set
            marca = '${marca}',
            descripcion = '${descripcion}'
            where id = ${id}`;
          connection.query(querySql, (error, rows) =>{
            if(error) reject(`An error ocurred in the query editCar: ${error}`);
            resolve ([rows, {message: "Carro editado"}]);
          })
        }
      } catch (error) {
        console.error(`An error ocurred in editCar: ${error}`);
        reject(`An error ocurred in editCar: ${error}`);
      }
    })
  }

  static async deleteCar(id){
    return new Promise(async (resolve, reject) =>{
      try {
        if(connection){
          let querySql = `delete from cars where id=${id}`;
          connection.query(querySql, (error, rows) =>{
            if(error) reject(`An error ocurred in the query deleteCar: ${error}`);
            resolve ([rows, {message: "Carro eliminado"}]);
          })
        }
      } catch (error) {
        console.error(`An error ocurred in deleteCar: ${error}`);
        reject(`An error ocurred in deleteCar: ${error}`);
      }
    })
  }

}

module.exports = dataModels;