import React from 'react'
import Sidebar from '../sidebar/Sidebar';
import Dashboard from '../../views/Dashboard/Dashboard';
import User from '../../views/User/User';
import Header from '../header/Header';
import { Route, Routes } from 'react-router-dom';

const Layout = () => {
    return <div className="fluid">
        <div className="row">
            <Header />
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10 mt-3">
                <Routes>
                    <Route exact path="/" element={<Dashboard />} />
                    <Route exact path="/user" element={<User />} />
                </Routes>
            </div>
        </div>
    </div>
}

export default Layout