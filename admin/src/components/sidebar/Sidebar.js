import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { MdDashboard, MdSupervisorAccount } from "react-icons/md"

const classCSS = 'nav-link text-white fs-6 d-flex align-items-center';

const Sidebar = () => {
    return (
        <Navbar style={{ height: '92vh', display: 'inherit' }} className='overflow-hidden' collapseOnSelect expand="lg" bg='dark' variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <ul style={{ listStyleType: 'none' }}>
                        <li style={{ marginBottom: '8px' }}>
                            <Nav.Item>
                                <NavLink className={`sidebar-hover ${classCSS}`} exact='true' to="/">
                                    <MdDashboard size={20} className='me-2' />
                                    Dashboard
                                </NavLink>
                            </Nav.Item>
                        </li>
                        <li>
                            <Nav.Item>
                                <NavLink className={`sidebar-hover ${classCSS}`} exact='true' to="/user">
                                    <MdSupervisorAccount size={20} className='me-2' />
                                    User
                                </NavLink>
                            </Nav.Item>
                        </li>
                    </ul>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    );
};

export default Sidebar;