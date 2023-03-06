import { notifyError, notifySuccess } from "../notify/Notify";
import { getRequestWithFetch, putRequestWithFetch } from "./sevices";

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
            window.location.reload();
            navigate('/')
        } else {
            notifyError({
                Message: `${data.Error}`
            })
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

const updateProfile = async (name, email, contact, gender, area, hobby, city, state, navigate) => {
    const body = {
        name: name,
        email: email,
        contact: contact,
        gender: gender,
        area: area,
        hobby: hobby,
        city: city,
        state: state,
    }
    const res = await putRequestWithFetch('user/Update', body);
    if (res.status === true) {
        notifySuccess({ Message: `profile Updated Successfully` })
    } else {
        notifyError({ Message: `Opps Some error accur` })
    }
}

export { login, handleLogOut, RegisterUser, myProfile, updateProfile }