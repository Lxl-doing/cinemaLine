import React from 'react'
import styles from './index.module.css'
import bigNumFormat from '../../../../utils.js/bigNumFormat';
import qs from 'query-string'

export default function MovieBanner(props) {
    let tagStr = '';
    props.tags && props.tags.forEach(it => {
        tagStr += it + ' ';
    });


    // 处理时间，根据时间确定是否能购票
    const timeStr = props.years && `${props.years.split('T')[0]} ${props.years.split('T')[1].slice(0, -3)}中国大陆上映`;

    const nowTime = +new Date();
    const yearsTime = +new Date(props.years && props.years.split('T')[0]);
    let isCanBuy = false;
    if (nowTime - yearsTime >= 0 && nowTime - yearsTime <= 1000 * 60 * 60 * 24 * 30) {
        isCanBuy = true;
    }


    // 票房展示
    const [num, desc] = bigNumFormat(props.income);

    // 购票所处按钮及路由跳转
    let buyContent;  // 购票按钮展示的信息
    if (props.location.pathname.startsWith('/movie')) {
        buyContent = '特惠购票';
    } else {
        buyContent = '查看更多电影详情';
    }

    function handleBuyClick() {
        const filmId = props.match.params.id;

        if (props.location.pathname.startsWith('/movie')) {
            props.history.push(`/cinema?filmId=${filmId}`);
        } else {
            const query = qs.parse(props.location.search);
            const movieId = query.filmId  // 电影id
            console.log(movieId);
            props.history.push(`/movie/${movieId}`);
        }
    }

    return (
        <div className={styles.wrap}>
            <div className={styles.show}>
                <div className={styles.avatar}>
                    <img src={props.filmImg} alt={`${props.title}电影海报`} />
                </div>

                <div className={styles.brief}>
                    <h1>{props.title}</h1>

                    <div className={styles.content}>
                        <div className={styles.msg}>
                            <div>
                                <p>{tagStr}</p>
                                <p>{`${props.area} / ${props.duration}分钟`}</p>
                                <p>{timeStr}</p>
                            </div>

                            <div className={styles.btns}>
                                <div className={styles.wanted}><i className='iconfont icon-xiai'></i>想看</div>
                                <div className={styles.score}><i className='iconfont icon-shoucang'></i>评分</div>
                                {isCanBuy && <div className={styles.buy} onClick={handleBuyClick}>{buyContent}</div>}
                            </div>
                        </div>

                        <div className={styles.achive}>
                            <p>猫眼口碑</p>
                            {props.score === -1 ? <div className={styles.gray}>暂无</div> : <div className={styles.gold}>{props.score}</div>}
                            <p>累计票房</p>
                            <div>{num} <span>{desc}</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
