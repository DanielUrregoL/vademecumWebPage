import axios from "axios";
//RUTA 
const url = "http://localhost:9000/api/usuarios";
//TRAER TODO LOS USUARIOS REGISTRADOS

const Usuarios = async (estado) => {
    try {
        const peticion = await axios.get(url);
        estado(peticion.data);
    } catch (error) {
        console.error(error);
    };
};
//AÑADIR UN NUEVO USUARIO 

const AddUsuario = async (usuario) => {
    try {
        const peticion = await axios.post(url, usuario);
    } catch (error) {
        console.error(error);
    };
};

const UpdateUsuario = async (_id, usuario) => {
    try {
        const peticion = await axios.put(url + "/" + _id, usuario);
    } catch (error) {
        console.error(error);
    };
};

const DeleteUsuario = async (_id) => {
    try {
        const peticion = await axios.delete(url + "/" + _id);
    } catch (error) {
        console.error(error);
    };
};


export {
    Usuarios,
    AddUsuario,
    DeleteUsuario,
    UpdateUsuario,
};