import React from 'react'
import styles from './index.module.css'
import { Link } from 'react-router-dom'
import PropsTypes from 'prop-types'

MovieList.defaultProps = {
    movieArr: [],
}

MovieList.propsTypes = {
    movieArr: PropsTypes.array.isRequired,
}

export default function MovieList(props) {
    const movies = props.movieArr.map(movieObj => {
        const style = movieObj.score === -1 ? 'noScore' : 'score';
        const text = movieObj.score === -1 ? '暂无评分' : movieObj.score;
        const movieId = movieObj.id;
        const linkTo = `/movie/${movieId}`

        return (<div className={styles.item} key={movieObj.id}>
            <img src={movieObj.filmImg} alt={movieObj.title + '的电影海报'} onClick={() => {
                props.history.push(linkTo);
            }} />
            <p><Link to={linkTo}>{movieObj.title}</Link></p>
            <p className={styles[style]}>{text}</p>
        </div>)
    })

    return (
        <div className={styles.wrap}>
            {movies}
        </div >
    )
}