import React from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { LogOut } from '../utility/context';
import { ReactComponent as Logo } from '../../components/img/logo.svg';
import { useNavigate } from 'react-router-dom';


const Header = () => {
    const navigate = useNavigate();
    const handleLogOut = () => {
        LogOut(navigate);
    }
    return (
        <Navbar bg="light" variant="light" className='shadow-sm p-2'>
            <Container fluid>
                <div style={{ marginLeft: '4em', display: 'flex', justifyContent: 'space-between', width: '21em' }}>
                    <a href='/'>
                        <Logo height="40" width="40" />
                    </a>
                    <Navbar.Brand href="#home">EduCaps Portfolio Manager</Navbar.Brand>
                </div>
                <Button onClick={() => handleLogOut()} variant="outline-info">LogOut</Button>
            </Container>
        </Navbar>
    )
}

export default Header