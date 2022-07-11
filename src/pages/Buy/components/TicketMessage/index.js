import React from 'react'
import styles from './index.module.css'

export default function TicketBanner(props) {

    // 下面三行代码，若该组件需要的属性一开始没有传过来，组件只展示外部容器
    const needProps = ['filmImg', 'title', 'duration', 'cinemaName', 'room', 'cost'];
    for (const p of needProps) {
        if (!props[p]) return <div className={styles.wrap}></div>
    }

    const [month, day, time] = showTimeFormat(props.showTime);

    return (
        <div className={styles.wrap}>
            <div className={styles.movieMsg}>
                <img src={props.filmImg} alt={`${props.title}电影海报`} />
                <div className={styles.content}>
                    <p>{props.title}</p>
                    <p>{props.duration}分钟</p>
                </div>
            </div>

            <div className={styles.showMsg}>
                <p><span>影院：</span><span>{props.cinemaName}</span></p>
                <p><span>影厅：</span><span>{props.room}</span></p>
                <p><span>场次：</span><span className={styles.red}>{month}月{day}日 {time}</span></p>
                <p><span>单价：</span><span className={styles.cost}>{props.cost}</span></p>
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