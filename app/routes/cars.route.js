const route = require('express').Router()
const { getCars, getCarById, insertCar, editCar, deleteCar } = require('../controllers/cars.controller') 

route.route('/').get(getCars);

route.route('/:id').get(getCarById);

route.route('/').post(insertCar);

route.route('/:id').put(editCar);

route.route('/:id').delete(deleteCar);

module.exports = route;