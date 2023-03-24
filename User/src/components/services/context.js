import { notifyError, notifySuccess } from "../notify/Notify";
import { getRequestWithFetch, postRequestWithFetch, putRequestWithFetch } from "./sevices";

const login = async (email, pass, navigate) => {
    if (email && pass) {
        const res = await fetch('http://localhost:7070/api/user/Login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email, password: pass }),
        });
        const data = await res.json();
        console.log(data);
        if (data.status === true) {
            localStorage.setItem('token', data.token);
            // window.location.reload();
            navigate('/')
        } else {
            notifyError({
                Message: `${data.Error}`
            })
            handleLogOut(navigate);
        }
    } else {
        notifyError({
            Message: `Please fill all fields`
        })
    }
}

const handleLogOut = async (navigate) => {
    localStorage.removeItem('token');
    navigate('/')
}

const RegisterUser = async (name, email, contact, gender, area, hobby, city, state, password, navigate) => {
    const body = {
        name: name,
        email: email,
        contact: contact,
        gender: gender,
        address: area,
        hobby: hobby,
        city: city,
        state: state,
        password: password,
    }
    const res = await fetch('http://localhost:7070/api/user/Register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });
    const data = await res.json();
    if (data.status === true) {
        notifySuccess({ Message: `${data.Message}` })
        window.location.reload();
        navigate('/')
    } else {
        notifyError({
            Message: `${data.Error}`
        })
    }
}

const myProfile = async () => {
    const res = await getRequestWithFetch('user/List');
    if (res.status === true) {
        return await res.data;
    } else {
        notifyError({ Message: `${res.Error}` });
    }
}

const updateProfile = async (name, email, contact, gender, area, hobby, city, state, image, navigate) => {
    const body = {
        name: name,
        email: email,
        contact: contact,
        gender: gender,
        area: area,
        hobby: hobby,
        city: city,
        state: state,
        image: image,
    }
    const res = await putRequestWithFetch('user/Update', body);
    if (res.status === true) {
        notifySuccess({ Message: `profile Updated Successfully` })
    } else {
        notifyError({ Message: `Opps Some error accur` })
    }
}

const forgotPassword = async (email) => {
    if (email) {
        const body = {
            email: email,
        }
        const res = await postRequestWithFetch('user/sendOTP', body);
        if (res.status === true) {
            notifySuccess({ Message: `OTP sent to registered email` });
            return 'OtpGenerated';
        } else {
            notifyError({ Message: `${res.Error}` });
            return '';
        }
    } else {
        notifyError({ Message: `Email must be required` });
        return '';
    }
}

const verifyOtp = async (email, otp) => {
    if (otp) {
        const body = {
            email: email,
            otp: otp,
        }
        const res = await postRequestWithFetch('user/verifyOtp', body);
        if (res.status === true) {
            notifySuccess({ Message: `OTP Verified` });
            localStorage.setItem('forgotEmail', email);
            return 'OtpVerified';
        } else {
            notifyError({ Message: `${res.Error}` });
            return 'OtpGenerated'
        }
    } else {
        notifyError({ Message: `OTP must be required` });
        return 'OtpGenerated'
    }
}

const changePassword = async (password) => {
    const body = {
        email: localStorage.getItem('forgotEmail'),
        password: password
    }
    const res = await postRequestWithFetch('user/changePassword', body);
    if (res.status === true) {
        localStorage.removeItem('forgotEmail')
        notifySuccess({ Message: `Password Changed Successfully` });
        return 'Password Changed Successfully';
    } else {
        localStorage.removeItem('forgotEmail')
        notifyError({ Message: `${res.Error}` });
    }
}

export { login, handleLogOut, RegisterUser, myProfile, updateProfile, forgotPassword, verifyOtp, changePassword }