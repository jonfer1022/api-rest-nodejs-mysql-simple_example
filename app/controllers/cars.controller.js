const dataModels = require('../models/cars.model')

const getCars = (req,res) =>{
  dataModels.getCars((data, error) =>{
    res.json(data);
  });
}

const getCarById = (req,res) =>{
  // console.log("id: ",req.params);
  const { id } = req.params
  dataModels.getCarById( id, (data, error) =>{
    res.json(data);
  });
}

const insertCar = (req,res) =>{
  res.json({message: 'Carros!!!'})
}

const editCar = (req,res) =>{
  res.json({message: 'Carros!!!'})
}

const deleteCar = (req,res) =>{
  res.json({message: 'Carros!!!'})
}

module.exports = {
  getCars,
  getCarById,
  insertCar,
  editCar,
  deleteCar
}