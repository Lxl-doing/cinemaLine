import axios from "./request.js";

import delay from '../utils.js/delay';

export async function login(username, password) {
    // await delay(2000);
    const config = {
        method: 'post',
        url: '/user/login',
        data: JSON.stringify({
            username: username,
            password: password
        }),
        headers: {
            'Content-Type': 'application/json',
        }
    }
    try {
        const resp = await axios(config);
        // console.log(resp);
        return resp.data;
    } catch {
        return null;
    }

}

export async function whoAmI() {
    // await delay(2000);
    try {
        const resp = await axios.get('/user/whoami');
        // console.log(resp);
        return resp.data.data;
    }
    catch {
        return null;
    }
}

export async function updateMsg(userId, newName, newAvatar, newAvatarAddr) {
    const fd = new FormData();
    fd.append('userId', userId);
    fd.append('nickName', newName);
    fd.append("avatar", newAvatar, newAvatarAddr);
    const requestOptions = {
        method: 'POST',
        body: fd,
    };
    const resp = await fetch("user/update", requestOptions)
    return resp.json();
}