const cars = require('./controllers/cars.controller'); 

const GET = "get";
const PUT = "put";
const POST = "post";
const DELETE = "delete";

const routes = [
  /**
   * Ruta que retorna la lista de todos los carros
   */
  [GET, '/', cars.getCars],

  /*
   * Ruta que consulta por id y retorna un registro 
   */
  [GET, '/:id', cars.getCarById],

  /*
   * Inserta un nuevo carro. 
   */
  [POST, '/', cars.insertCar],

  /*
   * Actualiza el registro de un carro. 
   */
  [PUT, '/:id', cars.editCar],

  /*
   * Elimina un registro de los carros. 
   */
  [DELETE, '/:id', cars.deleteCar]
]

module.exports = routes;