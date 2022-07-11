import axios from "axios";

const request = axios.create({
    // baseURL: 'http://www.lisoulspace.xyz:8080',
    headers: { 'Authorization': '' }
});


request.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // console.log(window.localStorage.getItem('jwt'))
    const jwt = window.localStorage.getItem('jwt')
    if (jwt && jwt.length !== 0) {
        const { time, token } = JSON.parse(jwt);
        if (+new Date() - time >= 1000 * 60 * 60 * 24) {  // 过了一天
            window.localStorage.setItem('jwt', '')
        } else {
            config.headers.Authorization = token;
        }
    }
    console.log(config);
    return config;
});

request.interceptors.response.use(function (resp) {
    console.log("拦截器", resp);
    if (resp.headers.token) {
        // 设置token
        window.localStorage.setItem('jwt', JSON.stringify({
            time: +new Date(),
            token: resp.headers.tokenhead + resp.headers.token
        }));
    }
    return resp;
});

export default request;

/*
token: "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyb290MiIsImNyZWF0ZWQiOjE2NTUwMzkwNDcyODksImV4cCI6MTY1NTY0Mzg0N30.8a0pWOi5uRiBeoFmw2c4o8mSTS8vaWYrIi81LMyDx8AIxf3Q_vXiRwTjXvB5Kx_lC5e6wEKQYo_876EkPyK7Ig"
tokenhead: "Bearer"
tokenheader: "Authorization"

*/
