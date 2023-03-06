import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import MyVerticallyCenteredModal from '../component/modal/MyVerticallyCenteredModal';
import { myProfile, updateProfile } from '../component/services/context';
import { useNavigate } from 'react-router-dom';


function MyProfile(props) {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [gender, setGender] = useState('');
    const [area, setArea] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');


    const [addHobby, setAddHobby] = useState('');
    const [hobby, setHobby] = useState([]);

    const handleAdd = () => {
        setHobby([...hobby, addHobby]);
        setAddHobby('')
    }
    const handleRemove = (index) => {
        const newHobby = hobby.filter((item, i) => i !== index);
        setHobby(newHobby)
    }
    const handleUpdate = () => {
        updateProfile(name, email, contact, gender, area, hobby, city, state, navigate);
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {

            myProfile().then((res) => {
                const { name, email, contact, gender, hobby, area, city, state } = res[0]
                setName(name);
                setEmail(email);
                setContact(contact);
                setGender(gender);
                setArea(area);
                setCity(city);
                setState(state);
                setHobby(hobby);
            })
        }
    }, [props.modalShow]);



    const Body = <>
        <Form>
            <Container>
                <Row style={{ marginBottom: '.5em', }}>
                    <Col sm={6}>
                        <Form.Control type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />
                    </Col>
                    <Col sm={6}>
                        <Form.Control type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
                    </Col>
                </Row>
                <Row style={{ marginBottom: '.5em', }}>
                    <Col sm={6}>
                        <Form.Control type="number" name='contact' value={contact} onChange={(e) => setContact(e.target.value)} placeholder="Enter Contact" />
                    </Col>
                    <Col sm={6}>
                        <div key={`inline-radio`} className="mb-3">
                            <Form.Check
                                inline
                                label="Male"
                                name="gender"
                                value='male'
                                type={'radio'}
                                checked={gender === "male"}
                                id={`inline-${'radio'}-1`}
                                onChange={(e) => setGender(e.target.value)}
                            />
                            <Form.Check
                                inline
                                label="Femail"
                                value='female'
                                name="gender"
                                type={'radio'}
                                checked={gender === "female"}
                                id={`inline-${'radio'}-2`}
                                onChange={(e) => setGender(e.target.value)}
                            />
                            <Form.Check
                                inline
                                label="Other"
                                name="gender"
                                value='other'
                                type={'radio'}
                                checked={gender === "other"}
                                id={`inline-${'radio'}-3`}
                                onChange={(e) => setGender(e.target.value)}
                            />
                        </div>
                    </Col>
                </Row>

                <Row style={{ marginBottom: '.5em', }}>
                    <Col sm={6}>
                        <InputGroup>
                            <Form.Control
                                onChange={(e) => setAddHobby(e.target.value)}
                                value={addHobby}
                                type="text"
                                placeholder="Add Hobbies"
                                aria-label="Input group example"
                                aria-describedby="btnGroupAddon"
                            />
                            <Button variant="secondary" onClick={() => handleAdd()}>Add</Button>
                        </InputGroup>
                    </Col>
                    <Col sm={6}>

                        <span>
                            {hobby.length ?
                                hobby.map((item, index) => {
                                    return <InputGroup key={index}>
                                        <Form.Control
                                            disabled
                                            value={item}
                                            type="text"
                                            aria-label="Input group example"
                                            aria-describedby="btnGroupAddon"
                                        />
                                        <Button variant="secondary" onClick={() => handleRemove(index)}>X</Button>
                                    </InputGroup>
                                })
                                : "No Hobby added"
                            }
                        </span>
                    </Col>
                </Row>

                <Row style={{ marginBottom: '.5em', }}>
                    <Col sm={6}>
                        <Form.Control type="text" name='area' value={area} onChange={(e) => setArea(e.target.value)} placeholder="Enter Your Area" />
                    </Col>
                    <Col sm={3}>
                        <Form.Select name='city' value={city} onChange={(e) => setCity(e.target.value)} aria-label="Select City">
                            <option>Select City</option>
                            <option value="Gwalior">Gwalior</option>
                            <option value="Indore">Indore</option>
                            <option value="Bhopal">Bhopal</option>
                        </Form.Select>
                    </Col>
                    <Col sm={3}>
                        <Form.Select name='state' value={state} onChange={(e) => setState(e.target.value)} aria-label="Select State">
                            <option>Select City</option>
                            <option value="mp">MP</option>
                            <option value="up">UP</option>
                            <option value="Gujrat">Gujrat</option>
                        </Form.Select>
                    </Col>
                </Row>
                <Row style={{ marginBottom: '.5em', }}>
                    <Col sm={12}>
                        <div className="d-grid">
                            <Button variant="primary" size="lg" onClick={() => handleUpdate()}>
                                Update
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Form>

    </>

    return (
        <MyVerticallyCenteredModal
            show={props.modalShow}
            onHide={props.onHide}
            heading={'My Profile'}
            body={Body}
            size={props.size}
        />
    );
}

export default MyProfile;