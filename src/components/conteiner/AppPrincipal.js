import React, { Fragment, useEffect, useState } from 'react';
import Footer from '../template/Footer';
import Nav from '../template/Nav';
import { Categorias } from '../funciones/funcionesCategorias';
import { Medicamentos } from '../funciones/funcionesMedicamentos';

export default function AppPrincipal() {

    const [selectedTheme, setSelectedTheme] = useState("0");
    const [selectedSearch, setSelectedSearch] = useState("");
    const [categorias, setCategorias] = useState([]);
    const [medicamentos, setMedicamentos] = useState([]);
    const [info, setInfo] = useState({
        infoCategoria: null,
        infoMedicamento: null
    });


    useEffect(() => {
        Categorias(setCategorias);
    }, []);

    useEffect(() => {
        Medicamentos(setMedicamentos);
    }, []);

    const handleThemeChange = (theme) => {
        setSelectedTheme(theme);
    };

    const handleSearchChange = (search) => {
        setSelectedSearch(search);
    };

    const listaCategorias = (categoria) => {
        const customKey = categoria._id; // Asignar la clave a una propiedad personalizada

        return (
            <div key={customKey} className="card col-3 m-3 " onClick={(e) => setSelectedTheme(customKey)}  style={{ height: "700px", width: "400px" }}>
                <img src={"http://18.205.25.246:9000" + categoria.imgCategoria} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h3 className="card-title text-center">{categoria.nombreCategoria}</h3>
                    <p className="card-text text-start">{categoria.infoCategoria}</p>
                </div>
            </div>
        );
    };

    const listaMedicamentos = (medicamento) => (
        <div key={medicamento._id} className="card col-8 m-5 p-5">
        <div className="row">
            <div className="col-md-6">
                <img src={"http://18.205.25.246:9000" + medicamento.imgMedicamento} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-6">
                <div className="card-body">
                    <h3 className="card-title">{medicamento.nombreMedicamento}</h3>
                    <br />
                    <p className="card-text">{medicamento.infoMedicamento}</p>
                </div>
            </div>
        </div>
    </div>
)

    useEffect(() => {
        if (selectedTheme === "0") {
            setInfo({
                infoCategoria: categorias.map(listaCategorias),
                infoMedicamento: null
            });
        } else {
            const existeCategoria = categorias.find((categoria) => categoria._id === selectedTheme);
            const existeMedicamento = []
            for (let i = 0; i < medicamentos.length; i++) {
                if (medicamentos[i].categoria == existeCategoria._id) {
                    existeMedicamento.push(medicamentos[i])
                };
            };
            console.log("categoria", existeCategoria);
            console.log("medicamento", existeMedicamento);
            if (existeCategoria && !existeMedicamento) {
                setInfo({
                    ...info,
                    infoCategoria: (
                        <div key={existeCategoria._id} className="card col-11 m-5 p-5">
                            <img src={"http://18.205.25.246:9000" + existeCategoria.imgCategoria} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h3 className="card-title text-center">{existeCategoria.nombreCategoria}</h3>
                                <p className="card-text text-start">{existeCategoria.infoCategoria}</p>
                            </div>
                        </div>
                    ),
                    infoMedicamento: (
                        <div className="card col-11 m-5 p-5">
                            <div className="card-body">
                                <h3 className="card-title text-center">No hay medicamentos en esta categoria</h3>
                            </div>
                        </div>
                    ),
                });
            } else {

                setInfo({
                    ...info,
                    infoCategoria: (
                        <div key={existeCategoria._id} className="card col-11 m-5 p-5">
                            <img src={"http://18.205.25.246:9000" + existeCategoria.imgCategoria} className="card-img-top" alt="..." />
                            <br />
                            <div className="card-body">
                                <h1 className="card-title text-center">{existeCategoria.nombreCategoria}</h1>
                                <br />
                                <p className="card-text text-start">{existeCategoria.infoCategoria}</p>
                            </div>
                        </div>
                    ),
                    infoMedicamento: (
                        existeMedicamento.map((medicamento) => (
                            <div key={medicamento._id} className="card col-9 m-5 p-5">
                                <div className="row">
                                    <div className="col-md-7">
                                        <img src={"http://18.205.25.246:9000" + medicamento.imgMedicamento} className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-5">
                                        <div className="card-body">
                                            <h3 className="card-title">{medicamento.nombreMedicamento}</h3>
                                            <br />
                                            <p className="card-text">{medicamento.infoMedicamento}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))),
                });
            }
        }
    }, [selectedTheme, categorias]);


    useEffect(() => {
        if (!selectedSearch) {
            setInfo({
                infoCategoria: categorias.map(listaCategorias),
                infoMedicamento: null
            });
        }
        const RegExpress = new RegExp(selectedSearch.toLocaleLowerCase());
        const categoryNames = categorias.map((categoria) => categoria.nombreCategoria.toLowerCase());
        const medicamentosNames = medicamentos.map((medicamento) => medicamento.nombreMedicamento.toLowerCase());

        if (categoryNames.some((categoria) => RegExpress.test(categoria))) {
            setInfo({
                ...info,
                infoCategoria: categorias.filter((categoria) => RegExpress.test(categoria.nombreCategoria.toLowerCase())).map(listaCategorias),
                infoMedicamento: null
            });
        } else if (medicamentosNames.some((medicamento) => RegExpress.test(medicamento))) {
            setInfo({
                ...info,
                infoCategoria: null,
                infoMedicamento: medicamentos.filter((medicamento) => RegExpress.test(medicamento.nombreMedicamento.toLowerCase())).map(listaMedicamentos)
            });
        } else {
            setInfo({
                ...info,
                infoCategoria: null,
                infoMedicamento: (
                    <div className="card col-11 m-5 p-5">
                        <div className="card-body">
                            <h3 className="card-title text-center">No se encontraron resultados</h3>
                        </div>
                    </div>
                )
            });
        };

    }, [selectedSearch, categorias, medicamentos]);



    return (
        <Fragment>
            <Nav onThemeChange={handleThemeChange} onSearchChange={handleSearchChange} />
            <div className="container">
                <div className="row align-items-start">
                    {info.infoCategoria}
                    {info.infoMedicamento}
                </div>
            </div>
            <Footer />
        </Fragment>
    );
};