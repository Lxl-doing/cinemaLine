import React from 'react'
import styles from './index.module.css'

export default function CinemaList(props) {
    const lis = props.datas.map(it => {
        return <li></li>
    })
    return (
        <div>
            <p></p>
            <ul>
                {lis}
            </ul>
        </div>
    )
}
