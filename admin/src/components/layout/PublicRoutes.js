import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoutes = () => {
    let auth;
    if (localStorage.getItem('AdminToken')) {
        auth = true;
    } else {
        auth = false;
    }
    return auth === false ? <Outlet /> : <Navigate to="/" />
}

export default PublicRoutes