import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import MyVerticallyCenteredModal from '../components/modal/MyVerticallyCenteredModal';
import { changePassword, forgotPassword, verifyOtp } from '../components/services/context';

const ForgotPassword = (props) => {

    const [email, setEmail] = useState('');
    const [show, setShow] = useState('');
    const [otp, setOTP] = useState('');
    const [open, setOpen] = useState()
    const [password, setPassword] = useState('');
    const [cpassword, setCPassword] = useState('');
    const [Message, setMessage] = useState('');

    const handleForgot = async () => {
        const res = await forgotPassword(email)
        setShow(res);
        // console.log("forgot password : ", res);
    }

    const handleVerify = async () => {
        const res = await verifyOtp(email, otp);
        setShow(res);
    }

    const handleChangePassword = async () => {
        if (password === cpassword) {
            const res = await changePassword(password)
            setOpen(false)
            setShow(res)
        } else {
            setMessage('Password does not match')
        }
    }


    const PasswordForm = <Form>
        <Form.Label><font color='red' >{Message}</font></Form.Label>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control value={password} name='password' onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control value={cpassword} name='cpassword' onChange={(e) => setCPassword(e.target.value)} type="password" placeholder="Confirm Password" required />
        </Form.Group>
        <div className="d-grid gap-2">
            <Button variant="primary" onClick={() => handleChangePassword()}>
                Change Password
            </Button>
        </div>
    </Form >

    const body = <>
        {show === 'OtpGenerated' || show === '' ?
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control value={email} name='email' onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" required />
                </Form.Group>
                {show === 'OtpGenerated' ? <>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control value={otp} name='otp' onChange={(e) => setOTP(e.target.value)} type="number" placeholder="Enter OTP" required />
                    </Form.Group>
                    <div className="d-grid gap-2">
                        <Button variant="primary" onClick={() => handleVerify()}>
                            Verify OTP
                        </Button>
                    </div>
                </> : <>
                    <div className="d-grid gap-2">
                        <Button variant="primary" onClick={() => handleForgot()}>
                            Send
                        </Button>
                    </div>
                </>}
            </Form> :
            PasswordForm
        }
    </>

    return (
        <>
            <MyVerticallyCenteredModal
                show={open === false ? open : props.modalShow}
                onHide={props.onHide}
                heading={'Forgot Password'}
                body={body}
                size={props.size}
            />
        </>
    )
}

export default ForgotPassword