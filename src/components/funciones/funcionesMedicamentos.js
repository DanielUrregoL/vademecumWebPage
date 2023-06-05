import axios from "axios";
// RUTA
const url = "http://18.205.25.246:9000/api/medicamentos";
//TRAER TODO LOS Admins REGISTRADOS

const Medicamentos = async (estado) => {
  try {
    const peticion = await axios.get(url);
    estado(peticion.data);
  } catch (error) {
    console.log(error);
  };
};

//AÑADIR UN NUEVO admin 

const AddMedicamento = async (medicamento) => {
  try {
    const peticion = await axios.post(url, medicamento);
    console.log("petición", peticion.data);
  } catch (error) {
    console.error(error);
  };
};

const UpdateMedicamento = async (_id, medicamento) => {
  try {
    const peticion = await axios.put(url + "/" + _id, medicamento)
  } catch (error) {
    console.error(error);
  };
};
const DeleteMedicamento = async (_id) => {
  try {
    const peticion = await axios.delete(url + "/" + _id)
  } catch (error) {
    console.error(error);
  };
};


export {
  Medicamentos,
  AddMedicamento,
  DeleteMedicamento,
  UpdateMedicamento,
};