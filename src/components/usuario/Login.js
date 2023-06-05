import React, { Fragment, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Usuarios } from "../funciones/funcionesUsuarios";

import Footer from "../template/Footer";
import Cookies from "universal-cookie";

export default function Login() {
    const cookies = new Cookies();
    const navigate = useNavigate();

    const [usuarioLogin, setUsuarioLogin] = useState({});

    const [usuarios, setUsuarios] = useState(null);

    useEffect(() => {
        Usuarios(setUsuarios);
    }, []);

    const handleChange = (event) => {
        setUsuarioLogin({
            ...usuarioLogin,
            [event.target.id]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (usuarios === null) {
            console.log("No hay usuarios registrados");
        } else {
            const usuarioEncontrado = usuarios.find((usuario) =>
                usuario.correoUsuario === usuarioLogin.correoUsuario && usuario.contrasenaUsuario === usuarioLogin.contrasenaUsuario
            );
            console.log(usuarioLogin);
            if (usuarioEncontrado) {
                cookies.set("_id", usuarioEncontrado._id, { path: "/" });
                console.log(cookies.get("_id"));
                cookies.set("nombreUsuario", usuarioEncontrado.nombreUsuario, { path: "/" });
                cookies.set("correoUsuario", usuarioEncontrado.correoUsuario, { path: "/" });
                cookies.set("contrasenaUsuario", usuarioEncontrado.contrasenaUsuario, { path: "/" });
                cookies.set("tipoUsuario", usuarioEncontrado.tipoUsuario, { path: "/" });
                navigate("/");

            } else {
                alert("Correo o Contraseña incorrecta. Inténtelo nuevamente");
            };
        };
    };

    return (

        <Fragment>
            <div className="containers p-5 mt-5 mb-5 border-bottom border-secondary">

                <div className="row">
                    <div className="col-5" />
                    <div className="col-7">
                        <h1>Iniciar Sesión</h1>
                        <br />
                        <form onSubmit={handleSubmit} className="form-group row">
                            <h4>Correo electronico</h4>
                            <br />
                            <input className="mb-3 form-control " style={{ width: "300px" }} type={"email"} placeholder="Correo electronico" id="correoUsuario" onChange={handleChange} />
                            <h4>Contraseña</h4>
                            <br />
                            <input className="mb-3 form-control" style={{ width: "300px" }} type={"password"} placeholder="********" id="contrasenaUsuario" onChange={handleChange} />
                            <br />
                            <Link to={"/register"} className="h4 text-decoration-none">Registrarse</Link>
                            <br />
                            <br />
                            <input className="btn btn-primary " style={{ width: "300px" }} type={"submit"} value="Iniciar Sesion " />
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
};