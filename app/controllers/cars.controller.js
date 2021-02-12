const dataModels = require('../models/cars.model')

const getCars = (req,res) =>{
  dataModels.getCars((data, error) =>{
    res.json(data);
  });
}

const getCarById = (req,res) =>{
  const { id } = req.params
  dataModels.getCarById( id, (data, error) =>{
    res.json(data);
  });
}

const insertCar = (req,res) =>{
  dataModels.insertCar(req.body, (data, error) =>{
    res.json(data);
  })
}

const editCar = (req,res) =>{
  const { id } = req.params;
  const { marca, descripcion } = req.body;
  dataModels.editCar({ id, marca, descripcion }, (data, error) =>{
    res.json(data);
  })
}

const deleteCar = (req,res) =>{
  const { id } = req.params
  dataModels.deleteCar(id, (data, error) =>{
    res.json(data);
  })
}

module.exports = {
  getCars,
  getCarById,
  insertCar,
  editCar,
  deleteCar
}