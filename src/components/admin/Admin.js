import React, { Fragment, useEffect, useState } from "react";
import { Usuarios, AddUsuario, UpdateUsuario, DeleteUsuario } from "../funciones/funcionesUsuarios"
import { Medicamentos, AddMedicamento, UpdateMedicamento, DeleteMedicamento } from "../funciones/funcionesMedicamentos";
import { Categorias, AddCategoria, UpdateCategoria, DeleteCategoria } from "../funciones/funcionesCategorias";
import Select from "react-select"

export default function Admin() {
    let name = "";

    const [usuario, setUsuarios] = useState([]);
    const [medicamento, setMedicamentos] = useState([]);
    const [categoria, setCategorias] = useState([]);

    const [form, setForm] = useState({});
    const [conteiner, setConteiner] = useState({});
    const [selectCategoria, setSelectCategoria] = useState();

    useEffect(() => {
        Usuarios(setUsuarios)
    }, []);

    useEffect(() => {
        Medicamentos(setMedicamentos)
    }, []);

    useEffect(() => {
        Categorias(setCategorias)
    }, []);


    const tablaSelect = (event) => {
        name = event.target.value;
        if (name === "USUARIOS") {

            setConteiner({
                name: "USUARIOS",
                tableHead: (
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">NOMBRE</th>
                        <th scope="col">CORREO</th>
                        <th scope="col">CONTRASEÑA</th>
                        <th scope="col">TIPO USUARIO</th>
                    </tr>
                ),
                tableBody: usuario.map((usuario) =>
                    <tr key={usuario._id}>
                        <td> {usuario._id}</td>
                        <td>{usuario.nombreUsuario}</td>
                        <td>{usuario.correoUsuario}</td>
                        <td>{usuario.contrasenaUsuario}</td>
                        <td>{usuario.tipoUsuario === 1 ? "Administrador" : "Usuario"}</td>
                    </tr>
                ),
                crudBody: (
                    <form className="form-group row">
                        <label htmlFor="crudNombre" className="col-sm-3 col-form-label">Nombre Usuario</label>
                        <div className="col-sm-9">
                            <input type="text" className="form-control mb-2" id="nombreUsuario" onChange={hanldeChange} />
                        </div>
                        <label htmlFor="crudCorreo" className="col-sm-3 col-form-label">Correo Usuario</label>
                        <div className="col-sm-9">
                            <input type="email" className="form-control mb-2" id="correoUsuario" onChange={hanldeChange} />
                        </div>
                        <label htmlFor="crudPass" className="col-sm-3 col-form-label">Contraseña Usuario</label>
                        <div className="col-sm-9">
                            <input type="text" className="form-control mb-2" id="contrasenaUsuario" onChange={hanldeChange} />
                        </div>
                        <label htmlFor="crudTipoUsuario" className="col-sm-3 col-form-label">Tipo Usuario</label>
                        <div className="col-sm-9">
                            <select className="form-control mb-2" id="tipoUsuario" onChange={hanldeChange}>
                                <option value="1">Administrador</option>
                                <option value="2">Usuario</option>
                            </select>
                        </div>
                    </form>
                )
            });
            setForm({
                nombreUsuario: null,
                correoUsuario: null,
                contrasenaUsuario: null,
                tipoUsuario: 1,
            });

        } else if (name === "CATEGORIAS") {

            setConteiner({
                name: "CATEGORIAS",
                tableHead: (
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">NOMBRE</th>
                        <th scope="col">INFORMACIÓN</th>
                        <th scope="col">IMAGEN</th>
                    </tr>
                ),
                tableBody: categoria.map((categoria) =>
                    <tr key={categoria._id}>
                        <td>{categoria._id}</td>
                        <td>{categoria.nombreCategoria}</td>
                        <td>{categoria.infoCategoria}</td>
                        <td>{categoria.imgCategoria}</td>
                    </tr>
                ),
                crudBody: (<form className="form-group row">
                    <label htmlFor="crudNombre" className="col-sm-3 col-form-label">Nombre deL Categoria</label>
                    <div className="col-sm-9">
                        <input type="text" className="form-control mb-2" id="nombreCategoria" onChange={hanldeChange} />
                    </div>
                    <label htmlFor="crudNumero" className="col-sm-3 col-form-label">Información de la Categoria</label>
                    <div className="col-sm-9">
                        <textarea className="form-control mb-2" placeholder="Escriba la información" id="infoCategoria" onChange={hanldeChange}></textarea>
                    </div>
                    <label htmlFor="crudCorreo" className="col-sm-3 col-form-label">Imagen de la Categoria</label>
                    <div className="col-sm-9">
                        <input type="file" className="form-control mb-2" id="imgCategoria" onChange={hanldeChange} />
                    </div>
                </form>
                ),
            });
            setForm({
                nombreCategoria: null,
                infoCategoria: null,
                imgCategoria: null,
            });
        } else if (name === "MEDICAMENTOS") {

            setConteiner({
                name: "MEDICAMENTOS",
                tableHead: (
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">NOMBRE</th>
                        <th scope="col">INFORMACIÓN</th>
                        <th scope="col">IMAGEN</th>
                        <th scope="col">CATEGORIA(S)</th>
                    </tr>
                ),
                tableBody: medicamento.map((medicamento) =>
                    <tr key={medicamento._id}>
                        <td>{medicamento._id}</td>
                        <td>{medicamento.nombreMedicamento}</td>
                        <td>{medicamento.infoMedicamento}</td>
                        <td>{medicamento.imgMedicamento}</td>
                        <td>{medicamento.categoria}</td>
                    </tr>
                ),
                crudBody: (
                    <form className="form-group row">
                        <label htmlFor="crudNombre" className="col-sm-3 col-form-label">Nombre deL Medicamento</label>
                        <div className="col-sm-9">
                            <input type="text" className="form-control mb-2" id="nombreMedicamento" onChange={hanldeChange} />
                        </div>
                        <label htmlFor="crudNumero" className="col-sm-3 col-form-label">Información del Medicamento</label>
                        <div className="col-sm-9">
                            <textarea className="form-control mb-2" placeholder="Escriba la información" id="infoMedicamento" onChange={hanldeChange}></textarea>
                        </div>
                        <label htmlFor="crudCorreo" className="col-sm-3 col-form-label">Categoria(s) del Medicamento</label>
                        <div className="col-sm-9">
                            <Select
                                id="categoria"

                                options={categoria.map((categoria) => ({ value: categoria._id, label: categoria.nombreCategoria }))}
                                placeholder="Seleccione una o más categorias"
                                value={selectCategoria}
                                onChange={handleSelect}
                                isMulti
                            />
                        </div>
                        <label htmlFor="crudCorreo" className="col-sm-3 col-form-label">Imagen del Medicamento</label>
                        <div className="col-sm-9">
                            <input type="file" className="form-control mb-2" id="imgMedicamento" onChange={hanldeChange} />
                        </div>
                    </form>
                ),
            });
            setForm({
                nombreMedicamento: null,
                infoMedicamento: null,
                imgMedicamento: null,
                categoria: null,
            });
        }
    };

    const handleSelect = (selectCategoria) => {
        setSelectCategoria(selectCategoria);
    }

    const hanldeChange = (event) => {
        const { id, value } = event.target;

        if (name === "USUARIOS") {
            setForm((prevState) => ({
                ...prevState,
                [id]: value !== "" ? value : prevState[id],
            }));
        }  else if (name === "CATEGORIAS") {
            setForm((prevState) => ({
                ...prevState,
                [id]: value !== "" ? value : prevState[id],
            }));

        } else if (name === "MEDICAMENTOS") {
            setForm((prevState) => ({
                ...prevState,
                [id]: value !== "" ? value : prevState[id],

            }));
        };
    };

    const eliminar = () => {
        const id = document.getElementById("buscar").value;
        if (conteiner.name === "USUARIOS") {
            DeleteUsuario(id);
            alert("Usuario Eliminado Exitosamente");
        } else if (conteiner.name === "CATEGORIAS") {
            DeleteCategoria(id);
            alert("Categoria Eliminado Exitosamente");
        } else if (conteiner.name === "MEDICAMENTOS") {
            DeleteMedicamento(id);
            alert("Medicamento Eliminado Exitosamente");
        };
    };
    const update = () => {
        const id = document.getElementById("buscar").value;
        const fieldsWithValues = { ...form }
        if (conteiner.name === "USUARIOS") {
            const existe = usuario.find((usuario) => usuario._id === id);
            if (existe) {
                console.log(existe)
                if (!fieldsWithValues.nombreUsuario) {
                    fieldsWithValues.nombreUsuario = existe.nombreUsuario
                }; if (!fieldsWithValues.correoUsuario) {
                    fieldsWithValues.correoUsuario = existe.correoUsuario
                }; if (!fieldsWithValues.contrasenaUsuario) {
                    fieldsWithValues.contrasenaUsuario = existe.contrasenaUsuario
                }; if (!fieldsWithValues.tipoUsuario) {
                    fieldsWithValues.tipoUsuario = existe.tipoUsuario
                };
            };
            console.log(fieldsWithValues);
            UpdateUsuario(id, fieldsWithValues);
            alert("Usuario Actualizado Exitosamente");
        } else if (conteiner.name === "CATEGORIAS") {

            const existe = categoria.find((categoria) => categoria._id === id);
            if (existe) {
                console.log(existe)
                if (!fieldsWithValues.nombreCategoria) {
                    fieldsWithValues.nombreCategoria = existe.nombreCategoria
                }; if (!fieldsWithValues.infoCategoria) {
                    fieldsWithValues.infoCategoria = existe.infoCategoria
                }; if (!fieldsWithValues.imgCategoria) {
                    fieldsWithValues.imgCategoria = existe.imgCategoria
                } else {
                    const filePath = fieldsWithValues.imgCategoria;
                    const fileName = filePath.substring(filePath.lastIndexOf("\\") + 1);
                    fieldsWithValues.imgCategoria = "/uploads/" + fileName;
                    console.log(fileName);
                };
            };
            console.log(fieldsWithValues);
            UpdateCategoria(id, fieldsWithValues);
            alert("Categoria Actualizado Exitosamente")
        } else if (conteiner.name === "MEDICAMENTOS") {

            const existe = medicamento.find((medicamento) => medicamento._id === id);
            console.log(selectCategoria)

            if (existe) {
                console.log("obejto original", existe)
                if (!fieldsWithValues.nombreMedicamento) {
                    fieldsWithValues.nombreMedicamento = existe.nombreMedicamento
                }; if (!fieldsWithValues.infoMedicamento) {
                    fieldsWithValues.infoMedicamento = existe.infoMedicamento
                }; if (!fieldsWithValues.imgMedicamento) {
                    fieldsWithValues.imgMedicamento = existe.imgMedicamento
                } else {
                    const filePath = fieldsWithValues.imgMedicamento;
                    const fileName = filePath.substring(filePath.lastIndexOf("\\") + 1);
                    fieldsWithValues.imgMedicamento = "/uploads/" + fileName;
                    console.log(fileName);
                } if (selectCategoria === undefined || selectCategoria.length === []) {
                    fieldsWithValues.categoria = existe.categoria;
                } else {
                    const aux = selectCategoria.map((categoria) => categoria.value);
                    const updatedForm = { ...fieldsWithValues, categoria: aux };
                    console.log("categorias seleccionadas", aux);
                    console.log("objeto de actualización", updatedForm);
                    UpdateMedicamento(id, updatedForm);
                }
            };
            console.log("objeto de actulizacon", fieldsWithValues);
            UpdateMedicamento(id, fieldsWithValues);
            alert("Medicamento Actualizado Exitosamente")
        };
    };

    const create = () => {
        if (conteiner.name === "USUARIOS") {
            AddUsuario(form)
            alert("Usuario Creado Exitosamente")
        } else if (conteiner.name === "CATEGORIAS") {
            const filePath = form.imgCategoria;
            const fileName = filePath.substring(filePath.lastIndexOf("\\") + 1);
            form.imgCategoria = "/uploads/" + fileName;

            console.log(form)
            AddCategoria(form)
            alert("Categoria Creado Exitosamente")
        } else if (conteiner.name === "MEDICAMENTOS") {
            const filePath = form.imgMedicamento;
            const fileName = filePath.substring(filePath.lastIndexOf("\\") + 1);
            form.imgMedicamento = "/uploads/" + fileName;

            const aux = selectCategoria.map((categoria) => categoria.value);
            const updatedForm = {
                ...form,
                categoria: aux,
            };
            console.log(updatedForm)
            AddMedicamento(updatedForm);
            alert("Medicamento Creado Exitosamente");
        };
    };

    const buscar = () => {

        const id = document.getElementById("buscar").value;

        if (conteiner.name === "USUARIOS") {

            const unicoUsuario = usuario.find((usuario) => usuario._id === id);
            console.log(unicoUsuario)

            setConteiner((prevState) => ({
                ...prevState,
                tableBody: (
                    <tr>
                        <th scope="row">{unicoUsuario._id}</th>
                        <td>{unicoUsuario.nombreUsuario}</td>
                        <td>{unicoUsuario.correoUsuario}</td>
                        <td>{unicoUsuario.contrasenaUsuario}</td>
                        <td>{unicoUsuario.tipoUsuario === 1 ? "Administrador" : "Usuario"}</td>
                    </tr>
                ),
            }));


        } else if (conteiner.name === "CATEGORIAS") {

            const unicocategoria = categoria.find((categoria) => categoria._id === id);
            console.log(unicocategoria)
            setConteiner((prevState) => ({
                ...prevState,
                tableBody: (
                    <tr>
                        <th scope="row">{unicocategoria._id}</th>
                        <td>{unicocategoria.nombreCategoria}</td>
                        <td>{unicocategoria.infoCategoria}</td>
                        <td>{unicocategoria.imgCategoria}</td>
                    </tr>
                ),
            }));
        } else if (conteiner.name === "MEDICAMENTOS") {

            const unicoMedicamento = medicamento.find((medicamento) => medicamento._id === id);
            console.log(unicoMedicamento)
            setConteiner((prevState) => ({
                ...prevState,
                tableBody: (
                    <tr>
                        <th scope="row">{unicoMedicamento._id}</th>
                        <td>{unicoMedicamento.nombreMedicamento}</td>
                        <td>{unicoMedicamento.infoMedicamento}</td>
                        <td>{unicoMedicamento.imgMedicamento}</td>
                        <td>{unicoMedicamento.categoria}</td>
                    </tr>
                ),
            }));
        };
    };

    return (

        <Fragment>

            <div className="container ms-0">
                <div className="row">
                    <div className="col-4 mt-5" >
                        <h2>TABLAS</h2>
                        <input type="radio" name="tableName" value="USUARIOS" onChange={tablaSelect} /><span>USUARIOS</span> <br />
                       <input type="radio" name="tableName" value="CATEGORIAS" onChange={tablaSelect} /><span>CATEGORIAS</span> <br />
                        <input type="radio" name="tableName" value="MEDICAMENTOS" onChange={tablaSelect} /><span>MEDICAMENTOS</span> <br />


                        <br />
                        <h2 className="mt-5">ACCIONES</h2>
                        <button className="btn btn-success col-5" onClick={create}>CREATE</button><br />
                        <button className="btn btn-primary mt-1 col-5" onClick={update}>UPDATE</button><br />
                        <button className="btn btn-danger mt-1  col-5" onClick={eliminar}>DELETE</button><br />
                        <button className="btn btn-warning mt-1 mb-5 col-5 text-light" onClick={buscar}>BUSCAR </button><br />
                        <h2 className="mt-5">REQUERIMIENTO (ID)</h2>
                        <input type="text" id="buscar" className="form-control border border-secondary" style={{ width: "300px" }} /> <br />

                    </div>

                    <div className="col-8 pt-5  border-start border-2">
                        <h1>FORMULARIO {conteiner.name}</h1>
                        <div className="row">

                            <div>
                                {conteiner.crudBody}
                            </div>

                        </div>

                        <hr />
                        <h1>TABLA {conteiner.name}</h1>
                        <table className="table table-bordered ">
                            <thead>
                                {conteiner.tableHead}
                            </thead>
                            <tbody>
                                {conteiner.tableBody}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>

        </Fragment>

    );
};