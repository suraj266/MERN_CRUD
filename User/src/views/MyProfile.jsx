import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import MyVerticallyCenteredModal from '../components/modal/MyVerticallyCenteredModal';
import { myProfile, updateProfile } from '../components/services/context';
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
    // const [file, setFile] = useState('');
    const [image, setImage] = useState('');
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
        updateProfile(name, email, contact, gender, area, hobby, city, state, image, navigate);
    }

    const previewFiles = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImage(reader.result);
        }
    }

    const handleImage = (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        // setFile(file);
        previewFiles(file);
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {

            myProfile().then((res) => {
                const { name, email, contact, gender, hobby, area, city, state, image } = res[0]
                setName(name);
                setEmail(email);
                setContact(contact);
                setGender(gender);
                setArea(area);
                setCity(city);
                setState(state);
                setHobby(hobby);
                setImage(image)
            })
        }
    }, [props.modalShow]);



    const Body = <>
        <Form>
            <Container>
                <Row style={{ marginBottom: '.5em', }}>
                    <Col sm={6}>
                        {image && (<>
                            {/* <div className="profile-image">
                                <Image src={image} alt={image} fluid roundedCircle />
                            </div> */}
                            <img src={image} alt="Selected" style={{ width: "100%", height: "260px" }} />
                        </>
                        )}
                    </Col>
                    <Col sm={6}>
                        <Row style={{ marginBottom: '.5em', }}>
                            <Col sm={12}>
                                <Form.Control type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />
                            </Col>
                        </Row>
                        <Row style={{ marginBottom: '.5em', }}>
                            <Col sm={12}>
                                <Form.Control type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" disabled />
                            </Col>
                        </Row>
                        <Row style={{ marginBottom: '.5em', }}>
                            <Col sm={12}>
                                <Form.Control type="number" name='contact' value={contact} onChange={(e) => setContact(e.target.value)} placeholder="Enter Contact" />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
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
                                        label="Female"
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
                            <Col sm={12}>
                                <Form.Control type="text" name='area' value={area} onChange={(e) => setArea(e.target.value)} placeholder="Enter Your Area" />
                            </Col>
                        </Row>
                        <Row style={{ marginBottom: '.5em', }}>
                            <Col sm={12}>
                                <Form.Select name='city' value={city} onChange={(e) => setCity(e.target.value)} aria-label="Select City">
                                    <option>Select City</option>
                                    <option value="Gwalior">Gwalior</option>
                                    <option value="Indore">Indore</option>
                                    <option value="Bhopal">Bhopal</option>
                                </Form.Select>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row style={{ marginBottom: '.5em', }}>
                    <Col sm={6}>
                        <Form.Control type="file" name='file' onChange={(e) => handleImage(e)} placeholder="upload Image" accept='image/png, image/jpeg, image/jpg' />
                    </Col>
                    <Col sm={6}>
                        <Form.Select name='state' value={state} onChange={(e) => setState(e.target.value)} aria-label="Select State">
                            <option>Select City</option>
                            <option value="mp">MP</option>
                            <option value="up">UP</option>
                            <option value="Gujrat">Gujrat</option>
                        </Form.Select>
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
                        <Row style={{ marginBottom: '.5em', }}>
                            {hobby.length ?
                                hobby.map((item, index) => {
                                    return <Col sm={6} key={index} style={{ marginBottom: '.5em', }}>
                                        <InputGroup>
                                            <Form.Control
                                                disabled
                                                value={item}
                                                type="text"
                                                aria-label="Input group example"
                                                aria-describedby="btnGroupAddon"
                                            />
                                            <Button variant="secondary" onClick={() => handleRemove(index)}>X</Button>
                                        </InputGroup>
                                    </Col>
                                })
                                : "No Hobby added"
                            }
                        </Row>


                    </Col>
                </Row>


                <Row style={{ marginBottom: '.5em', }}>
                    <Col sm={6}>

                    </Col>
                    <Col sm={6}>

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