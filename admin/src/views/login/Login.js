import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { ReactComponent as LoginImage } from '../../components/img/login.svg';
import { ReactComponent as Logo } from '../../components/img/logo.svg';
import { LogIn } from '../../components/utility/context';

const Login = () => {

    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });
    // const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setLoginData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleLogIn = async () => {
        const res = await LogIn(loginData);
        if (res === localStorage.getItem('AdminToken')) {
            navigate("/");
        } else {
            setMessage(res);
        }
    }

    return (
        <>
            <div className='login-div'>
                <Container style={{ backgroundColor: "#E5EEF5", width: '65rem', padding: '3em 3.8em 3em 3em', borderRadius: "10px" }} className='d-flex justify-content-center'>
                    <Row>
                        <Col style={{ marginRight: '7em' }}>
                            <LoginImage height="500" width="500" />
                        </Col>
                        {/* <Col style={{ width: '10em' }}></Col> */}
                        <Col style={{ backgroundColor: "#FAFCFD", borderRadius: '10px', width: '23em' }}>
                            <Container className="login-container">
                                <Row className="justify-content-center">
                                    <Col >
                                        <div className="login-box">
                                            <div className="d-flex justify-content-center mt-4">
                                                <Logo height="100" width="100" />
                                            </div>
                                            <h4 style={{ color: "#18BAD1", fontFamily: 'sans-serif' }} className="text-center mt-5 mb-3">LOGIN</h4>
                                            {message &&
                                                <h6 style={{ color: "red", fontFamily: 'sans-serif' }} className="text-center mt-1 mb-3">{message}</h6>
                                            }
                                            <Form>
                                                <div className="d-grid gap-2">

                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Control onChange={handleChange} name='email' type="email" placeholder="Email" autoComplete='email' />
                                                    </Form.Group>

                                                    <Form.Group controlId="formBasicPassword">
                                                        <Form.Control onChange={handleChange} name='password' type="password" placeholder="Password" autoComplete='current-password' />
                                                    </Form.Group>

                                                    <Button onClick={() => handleLogIn()} style={{ backgroundColor: '#18BAD1', borderStyle: 'hidden', fontFamily: 'sans-serif', letterSpacing: '0.1em', }}>
                                                        LOGIN
                                                    </Button>
                                                    <hr />
                                                    <h6 style={{ color: "#18BAD1", fontFamily: 'sans-serif' }} className="text-center">Forget your password</h6>
                                                </div>
                                            </Form>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Login