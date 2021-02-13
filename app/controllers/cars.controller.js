const dataModels = rootRequire('app/models/cars.model')

const getCars = async (req,res) =>{
  try {
    let data = await dataModels.getCars();
    res.json(data)
  } catch (error) {
    console.error("An error ocurred: ",error);
    throw ("An error ocurred: ",error);
  }
}

const getCarById = async (req,res) =>{
  try {
    const { id } = req.params;
    let data = await dataModels.getCarById(id);
    res.json(data);
  } catch (error) {
    console.error("An error ocurred: ",error);
    throw ("An error ocurred: ",error);
  }
}

const insertCar = async (req,res) =>{
  try {
    let data = await dataModels.insertCar(req.body);
    res.json(data);
  } catch (error) {
    console.error("An error ocurred: ",error);
    throw ("An error ocurred: ",error);
  }
}

const editCar = async (req,res) =>{
  try {
    const { id } = req.params;
    const { marca, descripcion } = req.body;
    let data = await dataModels.editCar(id, marca, descripcion);
    res.json(data);
  } catch (error) {
    console.error("An error ocurred: ",error);
    throw ("An error ocurred: ",error);
  }
}

const deleteCar = async (req,res) =>{
  try {
    const { id } = req.params;
    let data = await dataModels.deleteCar(id);
    res.json(data);
  } catch (error) {
    console.error("An error ocurred: ",error);
    throw ("An error ocurred: ",error);
  }
}

module.exports = {
  getCars,
  getCarById,
  insertCar,
  editCar,
  deleteCar
}