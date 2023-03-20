import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
    let auth;
    if (localStorage.getItem('AdminToken')) {
        auth = true;
    } else {
        auth = false;
    }
    return auth === true ? <Outlet /> : <Navigate to="/login" />
}



export default PrivateRoutes;
