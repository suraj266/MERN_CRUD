
const ServerUrl = "http://localhost:7070/api/";

async function postRequestWithFetch(url, body) {
    try {
        const res = await fetch(ServerUrl + url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
            body: JSON.stringify(body),
        });
        return await res.json();
    } catch (err) {
        console.log(err);
    }
}
async function putRequestWithFetch(url, body) {
    try {
        const res = await fetch(ServerUrl + url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
            body: JSON.stringify(body),
        });
        return await res.json();
    } catch (err) {
        console.log(err);
    }
}
async function deleteRequestWithFetch(url, body) {
    try {
        const res = await fetch(ServerUrl + url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
            body: JSON.stringify(body),
        });
        return await res.json();
    } catch (err) {
        console.log(err);
    }
}

async function getRequestWithFetch(url, _body) {
    try {
        const res = await fetch(ServerUrl + url, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        });
        return await res.json();
    } catch (err) {
        console.log(err);
    }
}


export { postRequestWithFetch, getRequestWithFetch, putRequestWithFetch, deleteRequestWithFetch };
