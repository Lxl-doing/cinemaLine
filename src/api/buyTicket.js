import axios from "./request.js";
import delay from "../utils.js/delay";

export async function getTimeList(filmId, cinemaId) {
    // await delay(500);
    const resp = await axios.get(`/show/getTimeList?filmId=${filmId}&cinemaId=${cinemaId}`);
    // console.log(resp.data);
    return resp.data.data;
}

export async function getSeat(filmId, cinemaId, showId) {
    // await delay(500);
    const resp = await axios.get(`/buy/getSeat?filmId=${filmId}&cinemaId=${cinemaId}&showId=${showId}`);
    // console.log(resp.data);
    return resp.data.data;
}

export async function canIBuy(paramsObj) {
    // await delay(500);

    let rowStr = '';
    let colStr = '';
    paramsObj.row.forEach(it => {
        rowStr += `row=${it}&`;
    });
    paramsObj.col.forEach(it => {
        colStr += `col=${it}&`;
    });

    const paramsStr = `${rowStr}${colStr}cinemaId=${paramsObj.cinemaId}&filmId=${paramsObj.filmId}&showId=${paramsObj.showId}&userId=${paramsObj.userId}`;
    const url = `/buy/canIBuy?${paramsStr}`;
    const resp = await axios.get(url);

    console.log(111, resp);
    if (resp.data.code === 0) {
        // 有订单
        const r = await getOrderId(paramsStr);
        // console.log(2222, r);
        // console.log(22222, resp);
        resp.data.data.orderId = r.data.data.orderId;
    }
    return resp.data;
}

async function getOrderId(params) {
    const resp = await axios.get(`/buy/getOrderId?${params}`);
    return resp;
}

export async function getOrder(orderId) {
    // await delay(500);
    const resp = await axios.get(`/buy/getOrder?orderId=${orderId}`);
    return resp.data;
}


export async function confirmPay(orderId) {
    const resp = await axios.get(`/buy/confirmPay?orderId=${orderId}`);
    return resp.data;
}

export async function getOrderList(userId) {
    const resp = await axios.get(`/order/getList?userId=${userId}`)
    return resp.data;
}

export async function refundTicket(orderId) {
    try {
        const resp = await axios.get(`/order/refund?orderId=${orderId}`)
        return resp.data;
    }
    catch {
        return { code: 1 };
    }
}