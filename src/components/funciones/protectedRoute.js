import { Navigate, Outlet } from "react-router-dom";
import cookies from "universal-cookie";

const  ProtectedRoute = ({ isAdmin, redirect="/" }) => {
/*
    console.log(isAdmin);
    if (!isAdmin) {

        return <Navigate to={redirect} replace  />

    } else {
        return <Outlet />
    };
};*/

    const cookie = new cookies();
    const tipoUsuario = cookie.get("tipoUsuario");

    if (tipoUsuario === "1") {
            return <Outlet />
        }else {
            return <Navigate to={redirect} replace  />
        }


};


export default ProtectedRoute;