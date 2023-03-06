import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { login } from '../component/services/context';
import MyVerticallyCenteredModal from '../component/modal/MyVerticallyCenteredModal';


function Login(props) {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [open, setOpen] = useState()
    const handleLogin = () => {
        login(email, password, navigate);
        setOpen(false)
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

    </>

    return (
        <MyVerticallyCenteredModal
            show={open === false ? open : props.modalShow}
            onHide={props.onHide}
            heading={'Login'}
            body={Body}
            size={props.size}
        />
    );
}

export default Login;