import axios from "axios";
// RUTA
const url = "http://18.205.25.246:9000/api/categorias";
//TRAER TODO LOS Admins REGISTRADOS

const Categorias = async (estado) => {
  try {
    const peticion = await axios.get(url);
    estado(peticion.data);
  } catch (error) {
    console.log(error);
  };
};

//AÑADIR UN NUEVO admin 

const AddCategoria = async (categoria) => {
  try {
    const peticion = await axios.post(url, categoria);
  } catch (error) {
    console.error(error);
  };
};

const UpdateCategoria = async (_id, categoria) => {
  try {
    const peticion = await axios.put(url + "/" + _id, categoria)
  } catch (error) {
    console.error(error);
  };
};
const DeleteCategoria = async (_id) => {
  try {
    const peticion = await axios.delete(url + "/" + _id)
  } catch (error) {
    console.error(error);
  };
};


export {
  Categorias,
  AddCategoria,
  DeleteCategoria,
  UpdateCategoria,
};