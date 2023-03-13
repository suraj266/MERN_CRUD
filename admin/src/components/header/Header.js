import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">EduCaps Portfolio Manager</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header