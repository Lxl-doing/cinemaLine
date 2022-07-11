import React, { useState, useEffect, useContext } from 'react'
import styles from './index.module.css'
import { Link, NavLink } from 'react-router-dom'
import getAddress, { getNowAddress } from '../../api/getAddress';
import loginCtx from '../../store/login';
import areaCtx from '../../store/area';

export default function Header(props) {
    const [nowCity, setNowCity] = useState('定位中...');  // 当前的城市
    const [cityList, setCityList] = useState({});  // 所有城市列表

    // 获得所有城市数据
    useEffect(() => {
        getAddress().then(cityObj => {
            setCityList(cityObj);
        })
    }, []);  // 只运行一次

    const { changeArea } = useContext(areaCtx);

    useEffect(() => {
        getNowAddress().then(city => {
            setNowCity(city);
            changeArea(city);
        });
    }, []);


    return (
        <div className={styles.header}>
            <Link to='/home'>
                <h1 className={styles.titles}><i className='iconfont icon-dianyingyuan' />时光电影</h1>
            </Link>

            <areaCtx.Consumer>
                {({ area, changeArea }) => {
                    if (area !== '') setNowCity(area);

                    const divs = [];  // 渲染城市列表的react元素
                    for (const prop in cityList) {
                        const spanRef = {};

                        const spanList = cityList[prop].map(it => {
                            return <span key={it.id} ref={el => { spanRef[it.city] = el }} onClick={e => {
                                const selectCity = spanRef[it.city].innerText;
                                setNowCity(selectCity);
                                changeArea(selectCity);
                            }}>{it.city}</span>
                        })
                        divs.push(<div key={prop}>
                            <div>{prop}</div>
                            <div>
                                {spanList}
                            </div>
                        </div>)
                    }

                    return <div className={styles.city}>
                        <div className={styles.wrap}><span>{nowCity === '定位中...' ? '城市' : nowCity}<i className='iconfont icon-xiajiantou'></i></span></div>
                        <div className={styles.areas}>
                            <p>定位城市：{nowCity}</p>
                            {divs}
                        </div>
                    </div>
                }}
            </areaCtx.Consumer>

            <ul>
                <li><NavLink to='/home' className={`${styles.item} ${props.location.pathname === '/' && styles.active}`} activeClassName={styles.active}>首页</NavLink></li>
                <li><NavLink to='/movie' className={styles.item} activeClassName={styles.active}>电影</NavLink></li>
                <li><NavLink to='/cinema' className={styles.item} activeClassName={styles.active}>影院</NavLink></li>
            </ul>

            <div className={styles.search}>
                <input className={styles.input} type="text" placeholder='找电影' />
                <i className={`iconfont icon-sousuokuang ${styles.icon}`}></i>
            </div>

            <loginCtx.Consumer>
                {({ userMsg, isLoading, changeUserMsg }) => {
                    console.log(userMsg, isLoading);

                    function handleClick() {
                        if (userMsg.userId) {
                            props.history.push('/user');
                        } else {
                            props.history.push('/login')
                        }
                    }

                    return <div className={styles.login}>
                        <i className={`${userMsg.avatar ? '' : 'iconfont icon-touxiang'} ${styles.avatar}`}
                            style={{
                                backgroundImage: `url(${userMsg.avatar})`,
                                backgroundSize: 'cover'
                            }}
                            onClick={handleClick}
                        ></i>

                        {userMsg.userId ? <div className={styles.loginout} onClick={() => {
                            changeUserMsg({});
                        }}>退出登录</div> : null}

                        {isLoading ? <div className={styles.status}>登录中...</div> : (userMsg.nickName ? <div className={styles.status} onClick={handleClick}>{userMsg.nickName}</div> : <div className={styles.status} onClick={handleClick}>登录</div>)}
                    </div>
                }}
            </loginCtx.Consumer>

        </div>
    )
}
