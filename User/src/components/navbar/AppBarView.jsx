import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import Login from '../../views/Login';
import MyProfile from '../../views/MyProfile';
import Register from '../../views/Register';
import { handleLogOut } from '../services/context';

function AppBarView() {
  const navigate = useNavigate();
  const [loginOpen, setLoginOpen] = React.useState(false);
  const [registerOpen, setRegisterOpen] = React.useState(false);
  const [openMyProfile, setOpenMyProfile] = React.useState(false);

  const Links = <Container fluid>
    <Navbar.Brand href="/">User</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/about">About</Nav.Link>
      <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
      {localStorage.getItem("token") ? <>
        <Nav.Link onClick={() => setOpenMyProfile(true)}>My Profile</Nav.Link>
        <Nav.Link onClick={() => handleLogOut(navigate)}>Logout</Nav.Link>
      </> : <>
        <Nav.Link onClick={() => setLoginOpen(true)}>Login</Nav.Link>
        <Nav.Link onClick={() => setRegisterOpen(true)}>Register</Nav.Link>
      </>
      }
    </Nav>
  </Container >

  return (
    <>
      <Navbar bg="light" variant="light">
        {Links}
      </Navbar>

      <Login
        modalShow={loginOpen}
        onHide={() => setLoginOpen(false)}
        setLoginOpen={setLoginOpen}
      />

      <Register
        modalShow={registerOpen}
        onHide={() => setRegisterOpen(false)}
        size={'lg'}
      />

      <MyProfile
        modalShow={openMyProfile}
        onHide={() => setOpenMyProfile(false)}
        size={'lg'}
      />
    </>
  );
}

export default AppBarView;