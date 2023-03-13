import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { MdDashboard, MdSupervisorAccount } from "react-icons/md"

const classCSS = 'nav-link text-white fs-5 d-flex align-items-center';

const Sidebar = () => {
    return (
        <Navbar bg="info" expand="lg" className="flex-column" style={{ height: '40em' }}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar id="basic-navbar-nav">
                <Nav className="flex-column">
                    <Nav.Item>
                        <Link className={classCSS} exact to="/">
                            <MdDashboard size={25} className='me-2' />
                            Dashboard
                        </Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link className={classCSS} to="/user">
                            <MdSupervisorAccount size={25} className='me-2' />
                            User
                        </Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
        </Navbar>
    );
};

export default Sidebar;