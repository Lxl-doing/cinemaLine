import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import { getMovieDetail } from '../../api/getMovie';
import MovieBanner from './components/MovieBanner';
import MyTitle from '../../components/MyTitle';
import styles from './MovieDetail.module.css'

export default function MovieDetail(props) {
    const movieId = props.match.params.id;  // 电影id
    // console.log(movieId);

    const [movieMsg, setMovieMsg] = useState({});

    useEffect(() => {
        getMovieDetail(movieId).then(msg => {
            // console.log(msg);
            if (!msg) {
                setMovieMsg({});
            } else {
                setMovieMsg(msg);
            }
        })
    }, [movieId]);

    const directList = [];
    const actorList = [];

    movieMsg.people && movieMsg.people.forEach((it, index) => {
        const item = <div key={index} className={styles.item}>
            <img src={it.personImg} alt={`${it.personName}照片`} />
            <p>{it.personName}</p>
        </div>

        if (it.isDirector) {
            directList.push(item);
        } else {
            actorList.push(item);
        }
    });

    return <Layout
        header={<Header {...props} />}
        banner={Object.keys(movieMsg).length === 0 ? null : <MovieBanner {...props} {...movieMsg} />}
        right={<h1>lalal</h1>}
    >
        <div className={styles.main}>
            <div className={styles.plot}>
                <MyTitle title="剧情简介" />
                <div style={{ marginTop: 20 }}>{movieMsg.description}</div>
            </div>

            <div className={styles.people}>
                <MyTitle title="演职人员" />
                <div className={styles.wrap}>
                    <div className={styles.direct}>
                        <p>导演</p>
                        <div className={styles.list}>
                            {directList}
                        </div>
                    </div>
                    <div className={styles.actor}>
                        <p>演员</p>
                        <div className={styles.list}>
                            {actorList}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
}
