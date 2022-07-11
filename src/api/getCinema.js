import axios from "./request.js";

import delay from '../utils.js/delay';

export default async function getCinemaList(city, movieId) {
    let url = `/cinema/getList?${city ? 'city=' + city + '&' : ''}${movieId ? 'movieId=' + movieId + '&' : ''}`
    url = url.slice(0, -1);
    const resp = await axios.get(url);
    return resp.data.data;
}

export async function getCinemaDetail(cinemaId) {
    delay(1000);
    const resp = await axios.get(`/cinema/${cinemaId}`);
    console.log(resp);
    return resp.data.data;
}