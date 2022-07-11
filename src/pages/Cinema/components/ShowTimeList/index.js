import React from 'react'
import styles from './index.module.css'

function fixZero(num) {
    if (num < 10) return `0${num}`;
    return num + '';
}

export default function ShowTimeList(props) {
    if (!props.duration) return null;

    const divList = props.timeList.length === 0 ? [] : props.timeList.map(it => {
        const showTimeArr = it.showTime.split('T');
        const parmArr = (showTimeArr[0].split('-').concat(showTimeArr[1].split(':'))).map((it, index) => {
            if (index === 1) return +it - 1;
            return +it;
        })
        // console.log(parmArr);
        const showTimeStamp = +new Date(...parmArr);
        const nowStamp = +new Date();
        // console.log(showTimeStamp, nowStamp);

        // 获得结束时间
        const overStamp = showTimeStamp + 1000 * 60 * props.duration;
        const overHour = new Date(overStamp).getHours();
        const overMinute = new Date(overStamp).getMinutes();

        if (showTimeStamp - nowStamp > -1000 * 60 * 60 * 0.5) {
            // 电影放映半小时之前都可以买票
            return <div key={it.showId} className={styles.item}>
                <div>
                    <p>{showTimeArr[1].slice(0, -3)}</p>
                    <p>{fixZero(overHour)}:{fixZero(overMinute)}散场</p>
                </div>
                <div>{it.room}（须佩戴口罩）</div>
                <div><span>￥</span><span>{it.cost}</span></div>
                <div><div className={styles.btn} onClick={() => {
                    props.onBuyTicket && props.onBuyTicket(it.showId);
                }}>选座购票</div></div>
            </div>
        }
    })

    return (
        <div className={styles.wrap} style={props.style}>
            {divList}
        </div>
    )
}
