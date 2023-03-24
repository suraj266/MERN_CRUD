import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { login } from '../components/services/context';
import MyVerticallyCenteredModal from '../components/modal/MyVerticallyCenteredModal';
import ForgotPassword from './ForgotPassword';


function Login(props) {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [open, setOpen] = useState(false)
    const [forgot, setForgot] = React.useState(false);

    const handleLogin = () => {
        login(email, password, navigate);
        props.setLoginOpen(false)
        setOpen(false)
    }

    const handleForgot = () => {
        props.setLoginOpen(false)
        setOpen(false)
        setForgot(true)
    }

    const Body = <>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
            </Form.Group>
            <div className="d-grid gap-2">
                <Button variant="primary" onClick={() => handleLogin()}>
                    Submit
                </Button>
            </div>
        </Form>
        {/* <br /> */}
        <hr />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: "space-between", padding: '0px 10px 0px 10px' }}>
            <div>
                <Nav.Link style={{ color: 'blue' }} as={Link} to="/contact">Create New Account</Nav.Link>
            </div>
            <div>
                <Nav.Link style={{ color: 'blue' }} onClick={() => handleForgot()}>Forgot Password</Nav.Link>
            </div>
        </div>

    </>

    return (<>
        <MyVerticallyCenteredModal
            show={props.modalShow === true ? props.modalShow : open}
            onHide={props.onHide}
            heading={'Login'}
            body={Body}
            size={props.size}
        />
        <ForgotPassword
            modalShow={forgot}
            onHide={() => setForgot(false)}
        />
    </>
    );
}

export default Login;