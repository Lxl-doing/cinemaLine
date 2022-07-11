import React, { useState, useEffect } from 'react'
import { getOrder, confirmPay } from '../../api/buyTicket'
import styles from './index.module.css'


export default function Money(props) {
    const orderId = props.match.params.orderId;
    const [orderMsg, setOrderMsg] = useState({});

    useEffect(() => {
        getOrder(orderId).then(resp => {
            console.log(11111111, resp);
            if (resp.data) {
                setOrderMsg(resp.data);
            }
        });
    }, [orderId]);

    if (Object.keys(orderMsg).length === 0) return <div className={styles.introduce}></div>

    const [month, day, time] = showTimeFormat(orderMsg.showTime);

    function payedClick() {
        confirmPay(orderId).then(resp => {
            if (resp.code !== 0) {
                alert(resp.msg);
            }
            else if (resp.code === 0) {
                props.history.push('/user');
            }
        })
    }

    return (
        <div className={styles.payWrap}>
            <div className={styles.introduce}>
                <div className={styles.wrap}>
                    <div className={styles.movieMsg}>
                        <img src={orderMsg.filmImg} alt={`${props.title}电影海报`} />
                        <div className={styles.content}>
                            <p>{orderMsg.title}</p>
                            <p>{orderMsg.duration}分钟</p>
                        </div>
                    </div>

                    <div className={styles.showMsg}>
                        <p><span>影院：</span><span>{orderMsg.cinemaName}</span></p>
                        <p><span>影厅：</span><span>{orderMsg.room}</span></p>
                        <p><span>场次：</span><span className={styles.red}>{month}月{day}日 {time}</span></p>
                        <p><span>单价：</span><span className={styles.cost}>{orderMsg.cost}</span></p>
                    </div>
                </div>


                <div className={styles.needList}>
                    <p>已选择：</p>
                    <div className={styles.ticket}>
                        {orderMsg.row.map((it, i) => {
                            return <span key={i}>{+it + 1}排{+orderMsg.col[i] + 1}座</span>
                        })}
                    </div>
                    <p>总计：<span>￥ {orderMsg.row.length * orderMsg.cost}</span></p>
                </div>
            </div>

            <div className={styles.qrcode}>
                <img src={orderMsg.qrcode} alt="付款二维码" />
                <p>扫码付款</p>
            </div>

            <div className={styles.btn} onClick={payedClick}>
                已付款
            </div>
        </div>

    )
}


function showTimeFormat(timeStr) {
    const [left, right] = timeStr.split('T');
    const month = parseInt(left.slice(5, 7));
    const day = parseInt(left.slice(8, 10));
    const time = right.slice(0, -3);
    return [month, day, time];
}