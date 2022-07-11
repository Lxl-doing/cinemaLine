import axios from "./request.js";

import delay from '../utils.js/delay';

export default async function getMovieList({ sort, tag, area, years } = {}) {
    // console.log(sort, tag, area, years);

    let url = `/film/getList?${sort ? 'sort=' + sort + '&' : ''}${tag ? 'tag=' + tag + '&' : ''}${area ? 'area=' + area + '&' : ''}${years ? 'years=' + years + '&' : ''}`
    url = url.slice(0, -1);
    // console.log(url);
    const resp = await axios.get(url);
    // console.log(resp);
    return resp.data;
}

export async function getMovieDetail(movieId) {
    delay(1000);
    const resp = await axios.get(`/film/${movieId}`);
    // console.log(resp);
    return resp.data.data;
}