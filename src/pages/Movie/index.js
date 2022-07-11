import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import MovieList from './components/MovieList'
import getMovieList from '../../api/getMovie'
import { withRouter } from 'react-router-dom'

const MovieListWrap = withRouter(MovieList);

export default function Movie(props) {
    const [listMsg, setListMsg] = useState([]);  // 电影列表

    // 一开始获得电影列表
    useEffect(() => {
        getMovieList().then(data => {
            const movieArr = data.data;
            setListMsg(movieArr);
        });
    }, []);

    return <Layout header={<Header {...props} />}>
        <div style={{
            margin: '60px 0'
        }}>
            <MovieListWrap movieArr={listMsg} />  {/* MovieList组件传入电影数组进行渲染 */}
        </div>
    </Layout>
}
