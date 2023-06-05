import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./funciones/protectedRoute";
import Cookies from "universal-cookie";

import AppPrincipal from "./conteiner/AppPrincipal";
import Login from "./usuario/Login";
import Register from "./usuario/Register";
import Cuentas from "./template/Cuentas";
import Admin from "./admin/Admin"

export default function App() {
    const cookies = new Cookies();
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        if (cookies.get("tipoUsuario") === "1") {
            setIsAdmin(true);
        }
    }, []);


    return (

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AppPrincipal />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/cuentas' element={<Cuentas />} />
                <Route element={<ProtectedRoute isAdmin={isAdmin} />}>
                    <Route path="/admin" element={<Admin />} />
                </Route>
            </Routes>
        </BrowserRouter>

    );
};

