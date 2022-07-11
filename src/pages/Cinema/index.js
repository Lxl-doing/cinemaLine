import React, { useState, useEffect, useContext } from 'react'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import MovieBanner from '../Movie/components/MovieBanner'
import qs from 'query-string'
import CinemaList from './components/CinemaList'
import getCinemaList from '../../api/getCinema'
import areaCtx from '../../store/area'
import { getMovieDetail } from '../../api/getMovie'

import { withRouter } from 'react-router-dom'

const CinemaListWrap = withRouter(CinemaList);



export default function Cinema(props) {
    const query = qs.parse(props.location.search);
    // console.log(query.filmId)
    const movieId = query.filmId  // 电影id

    const [nowCity, setNowCity] = useState(null);
    const [movieMsg, setMovieMsg] = useState({});

    const [cinemaList, setCinemaList] = useState([]);

    const { area } = useContext(areaCtx);

    // 获得电影细节
    useEffect(() => {
        if (!movieId) return;
        getMovieDetail(movieId).then(msg => {
            // console.log(msg);
            if (!msg) setMovieMsg({});
            else setMovieMsg(msg);
        })
    }, [movieId]);


    // 获得影院列表
    useEffect(() => {
        console.log(2222, nowCity);
        if (!nowCity) return;  // 一开始城市为空，就不发请求，避免多个请求后面来的覆盖正确的（一开始没有地址会得到所有数据）
        getCinemaList(nowCity, movieId).then(msg => {
            console.log(333, msg)
            setCinemaList(msg);
        });
    }, [nowCity, movieId]);


    return <Layout header={<Header {...props} />} banner={(Object.keys(movieMsg).length === 0 || !movieMsg) ? null : <MovieBanner {...props} {...movieMsg} />}>
        <areaCtx.Consumer>
            {({ area }) => {
                setNowCity(area);
                return <CinemaListWrap style={{
                    margin: '90px 0',
                }} cinemaList={cinemaList} />
            }}
        </areaCtx.Consumer>
        {/* <CinemaListWrap style={{
            margin: '90px 0',
        }} cinemaList={cinemaList} /> */}
    </Layout>
}
