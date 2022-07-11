import React from 'react'
import styles from './index.module.css'

export default function MyTitle(props) {
    return (
        <div className={styles.title} style={props.style}>
            {props.bold ? <h2 style={{ fontWeight: 'bold' }}>{props.title}</h2> : <h2>{props.title}</h2>}
        </div>
    )
}
