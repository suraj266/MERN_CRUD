import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import About from '../../pages/About'
import Contact from '../../pages/Contact'
// import ForgotPassword from '../../pages/ForgotPassword'
import Home from '../../pages/Home'
import AppBarView from '../navbar/AppBarView'

const Routing = () => {
    return (
        <>
            <Router>
                <AppBarView />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Router>
        </>
    )
}

export default Routing