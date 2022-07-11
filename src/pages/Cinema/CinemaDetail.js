import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import CinemaBanner from './components/CinemaBanner'
import ShowTimeList from './components/ShowTimeList'
import { getCinemaDetail } from '../../api/getCinema'
import getMovieList, { getMovieDetail } from '../../api/getMovie'
import { getTimeList } from '../../api/buyTicket'
import qs from 'query-string'
import styles from './CinemaDetail.module.css'

import { withRouter } from 'react-router-dom'

const nowTime = new Date();
const nowMonth = nowTime.getMonth() + 1;
const nowDate = nowTime.getDate();

export default function CinemaDetail(props) {
    const cinemaId = props.match.params.id;
    const query = qs.parse(props.location.search);

    const [movieId, setMovieId] = useState(query.filmId);

    // 一开始点开影院，影院具体信息，这时候地址上没有电影id，自动加上热映的第一个，方便购票
    useEffect(() => {
        if (query.filmId) return;
        else {
            getMovieList({ sort: "hot" }).then(resp => {
                const movieId = resp.data[0].id;
                console.log(movieId);
                setMovieId(movieId);
                const path = props.location.pathname;
                props.history.push(`${path}?filmId=${movieId}`)
            })
        }
    });


    const [cinemaMsg, setCinemaMsg] = useState({});

    // 获得电影院信息
    useEffect(() => {
        getCinemaDetail(cinemaId).then(resp => {
            // console.log(resp);
            if (!resp) {
                setCinemaMsg({});
            } else {
                setCinemaMsg(resp);
            }
        })
    }, [cinemaId]);


    const [movieMsg, setMovieMsg] = useState({});

    // 获得电影信息
    useEffect(() => {
        movieId && getMovieDetail(movieId).then(resp => {
            // console.log(2222222, resp);
            if (!resp) setMovieMsg({});
            else setMovieMsg(resp);
        })
    }, [movieId])

    const tags = movieMsg.tags && movieMsg.tags.map((it, index) => {
        return <span key={index}>{it}</span>
    });

    const actors = movieMsg.people && movieMsg.people.map((it, index) => {
        if (!it.isDirector) return <span key={index}>{it.personName}</span>;
    }).filter(it => {
        if (it) return true;
        else return false;
    }).slice(0, 3);


    const [timeList, setTimeList] = useState([]);

    // 获得时间列表
    useEffect(() => {
        getTimeList(movieId, cinemaId).then(resp => {
            if (!resp) setTimeList([]);
            else setTimeList(resp);
        })
    }, [movieId, cinemaId]);


    return <Layout header={<Header {...props} />}
        banner={Object.keys(cinemaMsg).length === 0 ? null : < CinemaBanner {...cinemaMsg} />}
    >
        <div className={styles.movieWrap}>
            <div className={styles.brief}>
                <div>{movieMsg.title}</div>
                {movieMsg.score === -1 ? <div></div> : <div>{movieMsg.score}<span>分</span></div>}
            </div>
            <div className={styles.msg}>
                <div><span>时长：</span><span>{movieMsg.duration}分钟</span></div>
                <div><span>类型：</span>{tags}</div>
                <div><span>主演：</span>{actors}</div>
            </div>
        </div>

        <div className={styles.dateWrap}><div className={styles.date}>{nowMonth}月{nowDate}日</div></div>

        <ShowTimeList timeList={timeList} duration={movieMsg.duration} onBuyTicket={(showId) => {
            // console.log(movieId, cinemaId, showId);
            props.history.push(`/buy/${movieId}/${cinemaId}/${showId}`);
        }} />
    </Layout >
}
