import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { notifyError, notifySuccess } from '../component/notify/Notify';

const Contact = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = () => {
        if (name, email, subject, message) {
            notifySuccess({ Message: `Submitted` })
            setName('')
            setEmail('')
            setSubject('')
            setMessage('')
        } else {
            notifyError({ Message: `All fields are require ` })
        }
    }

    return (
        <>
            <div style={{ margin: '3em 0em 3em 0em' }}>
                <Container>
                    <Row>
                        <Col sm={12}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.676453519505!2d78.16196671483675!3d26.207201283436557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c42917a7bb0b%3A0x949ed3eb12f9d1bd!2sPRAEDICO%20GLOBAL%20RESEARCH%20PVT.%20LTD.!5e0!3m2!1sen!2sin!4v1678076817375!5m2!1sen!2sin" title='map' width="100%" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </Col>
                    </Row>
                </Container>
                <Form>
                    <Container>
                        <Row style={{ marginBottom: '.5em', }}>
                            <Col sm={6}>
                                <Form.Control type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
                            </Col>
                            <Col sm={6}>
                                <Form.Control type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                            </Col>
                        </Row>
                        <Row style={{ marginBottom: '.5em', }}>
                            <Col sm={12}>
                                <Form.Control type="text" name='subject' value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Subject" />
                            </Col>
                        </Row>
                        <Row style={{ marginBottom: '.5em', }}>
                            <Col sm={12}>
                                <FloatingLabel controlId="floatingTextarea2" label="Comments">
                                    <Form.Control
                                        onChange={(e) => setMessage(e.target.value)}
                                        value={message}
                                        as="textarea"
                                        placeholder="Leave a comment here"
                                        style={{ height: '100px' }}
                                    />
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <Row style={{ marginBottom: '.5em', }}>
                            <Col sm={12}>
                                <div className="d-grid">
                                    <Button variant="primary" size="lg" onClick={() => handleSubmit()}>
                                        Submit
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Form>
            </div>
        </>
    )
}

export default Contact