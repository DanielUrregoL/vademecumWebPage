import React, { Fragment } from "react";
import Nav from "../template/Nav";
import Footer from "../template/Footer";

export default function Cuentas() {

    return (
        <Fragment>
            <Nav />
            <div className="text-center mb-5 mt-5">
                <h1> Cuentas Bancarias </h1>
                <br />
                <hr />
                <h2>Uala</h2>
                <h2>8252231002055859</h2> <br />
                <br />
                <h2>Nequi</h2>
                <h2>3160537266</h2>
                <br />
                <br />
                <hr />
                <h2>Datos adicionales</h2>
                <h2>Cedula de ciudadania: 1089378733</h2>
                <h2>Daniel Urrego Leon</h2>
            </div>
            <Footer />
        </Fragment>
    );


};