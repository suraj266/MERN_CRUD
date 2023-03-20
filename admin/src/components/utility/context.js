import { getRequestWithFetch, postRequestWithFetch } from "./services"

const LogIn = async (data) => {
    try {
        if (data) {
            const res = await postRequestWithFetch(`admin/Login`, data)
            if (res.status === true) {
                localStorage.setItem('AdminToken', res.token);
                return res.token
            } else {
                return res.Error
            }
        } else {
            return "All fields are required";
        }
    } catch (error) {
        console.log(error);
    }
}

const LogOut = (navigate) => {
    localStorage.removeItem('AdminToken');
    navigate("/login");
}

const userList = async () => {
    const res = await getRequestWithFetch(`user/List`);
    return res;
}
export { LogIn, userList, LogOut }