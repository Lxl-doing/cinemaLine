import React, { useState, useEffect, useContext } from 'react'
import styles from './index.module.css'
import loginCtx from '../../store/login'
import MyTitle from '../../components/MyTitle'
import { getOrderList, refundTicket } from '../../api/buyTicket'
import { updateMsg } from '../../api/loginService'

export default function User(props) {
    // 朦层，以及修改的昵称和头像
    const [isShowModal, setIsShowModal] = useState(false);
    const [newName, setNewName] = useState('');
    const [newAvatar, setNewAvatar] = useState('');
    const [newAvatarAddr, setNewAvatarAddr] = useState('');

    // 上下文用户信息
    const { userMsg } = useContext(loginCtx);
    console.log(userMsg)

    // 退票按钮
    function handleRefund(orderId) {
        refundTicket(orderId).then(resp => {
            console.log(resp);
            if (resp.code === 0) {
                alert('退票成功！');
                window.location.replace('/user');
            } else {
                alert('退票失败！请查看是否过期');
                window.location.replace('/user');
            }
        })
    }

    // 用户订单列表
    const [ordersList, setOrdersList] = useState([]);
    useEffect(() => {
        if (!userMsg.userId) return;
        getOrderList(userMsg.userId).then(resp => {
            if (!resp.data) {
                setOrdersList([]);
            }
            else setOrdersList(resp.data);
        })
    }, [userMsg]);

    // 订单列表元素
    const items = ordersList.map(it => {
        const [m, d, t] = showTimeFormat(it.showTime);

        // 判断是否可以退票，开演前半小时可退
        let canRefund = false;

        const showTimeArr = it.showTime.split('T');
        const parmArr = (showTimeArr[0].split('-').concat(showTimeArr[1].split(':'))).map((it, index) => {
            if (index === 1) return +it - 1;
            return +it;
        })
        // console.log(parmArr);
        const showTimeStamp = +new Date(...parmArr);
        const nowStamp = +new Date();
        // console.log(showTimeStamp, nowStamp)

        if (showTimeStamp - nowStamp > 1000 * 60 * 60 * 0.5) {
            canRefund = true;
        }


        return <div key={it.orderId} className={styles.item}>
            <div className={styles.movieMsg}>
                <div className={styles.title}>
                    <span>{it.title}</span>
                    <span>{it.duration}分钟</span>
                </div>

                <div className={styles.needList}>
                    <div className={styles.ticket}>
                        <span>已选择：</span>
                        {it.row.map((ii, index) => {
                            return <span style={{
                                marginRight: 5
                            }} key={index}>{ii + 1}行{it.col[index] + 1}列</span>
                        })}
                    </div>
                </div>
                <div>总计：<span>￥ {it.cost * it.row.length}</span></div>
            </div>

            <div className={styles.showMsg}>
                <p><span>影院：</span><span>{it.cinemaName}</span></p>
                <p><span>影厅：</span><span>{it.room}</span></p>
                <p><span>场次：</span><span className={styles.red}>{m}月{d}日 {t}</span></p>
                <p><span>单价：</span><span className={styles.cost}>{it.cost}</span></p>
            </div>

            <img className={styles.qrcode} src={it.qrcode} alt="订单二维码" />

            {it.status === 1 ?
                <div className={styles.refunded}>已退票</div>
                :
                <div
                    className={styles.refund}
                    onClick={() => {
                        handleRefund(it.orderId);
                    }}
                    style={{
                        visibility: canRefund ? 'visible' : 'hidden'
                    }}
                >退票</div>
            }
        </div>
    })


    return (
        <div className={styles.wrap}>

            {/* 用户信息 */}
            <div className={styles.user}>
                <div className={styles.bg}></div>
                <img src={userMsg.avatar} alt="用户头像图片" />
                <p>{userMsg.nickName}</p>
                <div className={styles.btn} onClick={() => {
                    setIsShowModal(true);
                }}>编辑资料</div>

                <nav onClick={() => {
                    props.history.push('/home');
                }}>返回首页</nav>
            </div>


            {/* 订单信息 */}
            <div className={styles.orders}>
                <MyTitle title="购票记录" style={{
                    marginBottom: 20
                }} />

                {/* 订单列表 */}
                {items}
            </div>


            {/* 朦层 */}
            {isShowModal ? <div className={styles.modal}>
                <div className={styles.form}>
                    <p><span onClick={() => {
                        setIsShowModal(false);
                        setNewName('');
                        setNewAvatar('');
                    }}>×</span></p>

                    <p>
                        修改昵称：<input type="text" value={newName} onChange={e => {
                            setNewName(e.target.value);
                            console.log(e.target.value);
                        }} />
                    </p>

                    <p>
                        <input type="file" value={newAvatarAddr} onChange={e => {
                            // console.log(e.target.files[0]);
                            // console.log(e.target.value);
                            setNewAvatar(e.target.files[0]);
                            setNewAvatarAddr(e.target.value);
                        }} />
                    </p>
                    <div>
                        <div className={styles.btn} onClick={() => {
                            if (!newName || !newAvatar) {
                                alert('请输入完整信息');
                                return;
                            }
                            updateMsg(userMsg.userId, newName, newAvatar, newAvatarAddr)
                                .then(resp => {
                                    // console.log(resp);
                                    if (resp.code === 0) {
                                        alert('修改成功');
                                    }
                                    else {
                                        alert('修改失败');
                                    }
                                    window.location.replace('/user');
                                })
                        }}>修改</div>
                    </div>
                </div>
            </div> : null
            }
        </div >
    )
}

function showTimeFormat(timeStr) {
    const [left, right] = timeStr.split('T');
    const month = parseInt(left.slice(5, 7));
    const day = parseInt(left.slice(8, 10));
    const time = right.slice(0, -3);
    return [month, day, time];
}