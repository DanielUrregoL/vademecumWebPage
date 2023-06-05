import React, { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Usuarios, AddUsuario } from "../funciones/funcionesUsuarios";
import Footer from "../template/Footer";

export default function Register() {

    const navigate = useNavigate();

    //INICIAÑIZA LOS DATOS

    const [usuario, setUsuarios] = useState([{}]);

    const [newUsuario, setNewUsuarios] = useState({
        nombreUsuario: null,
        correoUsuario: null,
        contrasenaUsuario: null,
        tipoUsuario: 0,
    });

    useEffect(() => {
        Usuarios(setUsuarios)
    }, []);


    //TOMA EL VALOR AL ESCRIBIR EN EL INPUT

    const handleChange = (event) => {
        setNewUsuarios({
            ...newUsuario,
            [event.target.id]: event.target.value,
        });
    };

    //ESPERA QUE EL FORMULARIO SE ENVIE PARA EJECUTARSE

    const handleSubmit = (event) => {
        event.preventDefault();

        const usuarioExiste = usuario.some(usuario => usuario.correoUsuario === newUsuario.correoUsuario)
        if (usuarioExiste === true) {
            alert("El usuario ya existe")
            navigate("/register");
        } else {
            AddUsuario(newUsuario);
            alert("Usuario creado con exito")
            navigate("/login");
        }

    };


    return (

        <Fragment>
            <div className="containers p-5 mt-5 mb-5 border-bottom border-secondary">
                <div className="row">
                    <div className="col-5" />
                    <div className="col-7">

                        <h1>Registro</h1>
                        <br />
                        <form onSubmit={handleSubmit} className="form-group row">
                            <h4>Nombre de Usuario</h4>
                            <br />
                            <input onChange={handleChange} className="mb-3 form-control " style={{ width: "300px" }} type={"text"} placeholder="Nombre de Usuario" id="nombreUsuario" required="required" />
                            <h4>Correo electronico</h4>
                            <br />
                            <input onChange={handleChange} className="mb-3 form-control " style={{ width: "300px" }} type={"email"} placeholder="Correo electronico @" id="correoUsuario" require="required" />
                            <br />
                            <h4>Contraseña</h4>
                            <br />
                            <input onChange={handleChange} className="mb-3 form-control " style={{ width: "300px" }} type={"password"} placeholder="********" id="contrasenaUsuario" require="required" />
                            <br />
                            <Link to={"/login"} className="h4 text-decoration-none">Ya tengo una cuenta</Link>
                            <br />
                            <br />
                            <input className="btn btn-primary" style={{ width: "300px" }} type="submit" value="Registrarse" />
                        </form>
                    </div>
                </div>
            </div>

            <Footer />

        </Fragment>
    );

};