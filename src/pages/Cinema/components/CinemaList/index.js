import React from 'react'
import MyTitle from '../../../../components/MyTitle'
import styles from './index.module.css'
import qs from 'query-string'

export default function CinemaList(props) {
    const query = qs.parse(props.location.search);
    // console.log(Object.keys(query).length);

    function handleClick(cinemaId) {
        let url = `/cinema/${cinemaId}`;
        if (Object.keys(query).length > 0) {
            url += '?';
            for (const prop in query) {
                url += `${prop}=${query[prop]}&`
            }
            url = url.slice(0, -1);
        }
        // console.log(url);
        props.history.push(url);
    }

    const items = props.cinemaList.map(it => {
        return (<div className={styles.item} key={it.cinemaId}>
            <div className={styles.msg}>
                <p onClick={() => {
                    handleClick(it.cinemaId);
                }}>{it.cinemaName}</p>
                <p>地址：{it.cinemaAddr}</p>
            </div>
            <div className={styles.buy}>
                <p><span>￥</span><span>{it.cost}</span><span>起</span></p>
                <div onClick={() => {
                    handleClick(it.cinemaId);
                }}>选座购票</div>
            </div>
        </div>)
    })

    return (
        <div className={styles.wrap} style={props.style}>
            <MyTitle bold title='影院列表' />
            {items}
        </div>
    )
}
