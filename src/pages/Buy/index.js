import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import buyContext from '../../store/buy';
import loginCtx from '../../store/login';
import { getSeat, getTimeList, canIBuy } from '../../api/buyTicket';
import { getMovieDetail } from '../../api/getMovie';
import styles from './index.module.css'

import Seat from './components/Seat';
import TicketMessage from './components/TicketMessage'

export default function Home(props) {
    // console.log(2222222, props)

    const [movieId, setMovieId] = useState(props.match.params.filmId);
    const [cinemaId, setCinemaId] = useState(props.match.params.cinemaId);
    const [showId, setShowId] = useState(props.match.params.showId);

    const [seatArr, setSeatArr] = useState([[]]);
    const [movieMsg, setMovieMsg] = useState({});
    const [showMsg, setShowMsg] = useState({});  // 场次信息

    // 获得座位信息、电影信息、影院信息、场次信息
    useEffect(() => {
        getSeat(movieId, cinemaId, showId).then(resp => {
            if (!resp) setSeatArr([[]]);
            else setSeatArr(resp.seatMsg);
        });

        getMovieDetail(movieId).then(resp => {
            if (!resp) setMovieMsg({});
            else setMovieMsg(resp);
        });

        getTimeList(movieId, cinemaId).then(resp => {
            if (resp) {
                for (const it of resp) {
                    if (it.showId == showId) {
                        setShowMsg(it);
                        break;
                    }
                }
            }
        });
    }, [movieId, cinemaId, showId]);


    // 用户选择的票，待购买
    const [needBuy, setNeedBuy] = useState([]);

    return <Layout header={<Header {...props} />}>
        <buyContext.Provider value={{
            seatArr,
            setSeatArr,

            needBuy,
            setNeedBuy,
        }}>

            <TicketMessage {...movieMsg} {...showMsg} />


            <div style={{
                width: 1020,
                margin: '0 auto',
                marginTop: 30,
            }}>
                <Seat seatArr={seatArr} setSeatArr={setSeatArr} />
            </div>


            <div className={styles.buyFooter}>
                <div className={styles.needList}>
                    <p>已选择：</p>
                    <div className={styles.ticket}>
                        {needBuy.map((it, i) => {
                            const [row, col] = it.split('S');
                            return <span key={i}>{+row + 1}排{+col + 1}座</span>
                        })}
                    </div>
                    <p>总计：<span>￥ {needBuy.length * showMsg.cost}</span></p>
                </div>


                {/* 购票按钮 */}
                <loginCtx.Consumer>
                    {({ userMsg }) => {
                        return <div className={styles.btn} onClick={() => {
                            if (needBuy.length === 0) {
                                alert('请选择您要购买的票');
                                return;
                            }

                            const row = [];
                            const col = [];
                            for (const str of needBuy) {
                                const [rowStr, colStr] = str.split('S');
                                row.push(+rowStr);
                                col.push(+colStr);
                            }

                            canIBuy({
                                filmId: movieId,
                                userId: userMsg.userId,
                                cinemaId, showId, row, col
                            }).then(resp => {
                                if (resp.code === 1) {
                                    alert('有票已经被他人购票，请重新选择');
                                    window.location.replace(props.location.pathname);
                                } else {
                                    // console.log(2222, resp);
                                    props.history.push('/pay/' + resp.data.orderId);
                                }
                            })
                            // console.log(userMsg.userId, movieId, cinemaId, showId, 'row:', row, 'col:', col)
                        }}>购票</div>
                    }}
                </loginCtx.Consumer>
            </div>

        </buyContext.Provider>
    </Layout >
}
