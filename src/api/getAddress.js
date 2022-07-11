import axios from "./request.js";
import delay from "../utils.js/delay";

export default async function getAddress() {
    const resp = await axios.get('/getAddrs');
    return resp.data.data;
}

export async function getNowAddress() {
    // await delay();
    return '威海';
}