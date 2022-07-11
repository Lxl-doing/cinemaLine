import React from 'react'
import styles from './index.module.css'

export default function CinemaBanner(props) {
    const serviceArr = props.service ? props.service.split('。') : [];
    const serviceList = serviceArr.map((it, index) => {
        return <p key={index}>{it}</p>
    })

    return (
        <div className={styles.wrap}>
            <div className={styles.show}>
                <div className={styles.avatar}>
                    <img src={props.cinemaImg} alt={`影院图片`} />
                </div>

                <div className={styles.brief}>
                    <div className={styles.msg}>
                        <h1>{props.cinemaName}</h1>
                        <p>{props.cinemaAddr}</p>
                        <p>{props.cinemaTel}</p>
                    </div>

                    <div className={styles.service}>
                        <div>
                            <p>影院服务</p>
                        </div>
                        <div>
                            {serviceList}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
