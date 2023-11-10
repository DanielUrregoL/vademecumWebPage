import React, { useEffect, useState } from 'react';
import { Categorias } from "../funciones/funcionesCategorias";


export default function Nav({ onThemeChange, onSearchChange }) {

    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        Categorias(setCategorias);
    }, []);

    const categoriasList = categorias.map((categoria) => (

        <option key={categoria._id} value={categoria._id}>{categoria.nombreCategoria}</option>

    ));

    const handleClick = (event) => {
        onThemeChange(event.target.value);
    };

    const handleSearch = (event) => {
        onSearchChange(event.target.value);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">

                <select className="form-control" id="_id" style={{ width: "200px" }} defaultValue="0" onChange={handleClick}>
                    <option value="0">Todas las categorias</option>
                    {categoriasList}
                </select>

                <form className="d-flex col-3 ms-1">
                    <input className="form-control me-2" type="search" id="search" placeholder="Search" aria-label="Search" onChange={handleSearch} ></input>
                    <button className="btn btn-success" type="submit"><i className="bi bi-search"></i></button>
                </form>


                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="/"> <i className="bi bi-house-fill"></i> Home</a>
                        <a className="nav-link" href="/login"><i className="bi bi-person-fill"></i> Login</a>
                        <a className="nav-link" href="/register"><i className="bi bi-clipboard-check-fill"></i> Register</a>
                        <a className="nav-link" href="/cuentas"> <i className="bi bi-coin"></i> Cuentas</a>
                        <a className="nav-link" href="/admin"> <i className="bi bi-diamond-fill"></i> Adminstrar</a>
                    </div>
                </div>
            </div>
        </nav>
    );

};