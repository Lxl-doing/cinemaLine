import React, { useState } from 'react'
import styles from './index.module.css'
import buyContext from '../../../../store/buy';

export default function Seat(props) {
    return (
        <buyContext.Consumer>
            {(ctx) => {
                // 0有座位  1有座位不能使用  2有人使用  3空白  4用户选择了该座位
                const divList = [];
                for (let i = 0; i < ctx.seatArr.length; i++) {
                    const rowList = [];
                    if (!ctx.seatArr[i].length === 0) {
                        const rowList = [<span key={-(i + 1) * 2}>{i + 1}</span>];

                    }

                    for (let j = 0; j < ctx.seatArr[i].length; j++) {
                        // 第i行第j列
                        if (ctx.seatArr[i][j] === 0) {
                            // 可被选择的座位
                            rowList.push(<i
                                key={j}
                                className={`iconfont icon-zuowei ${styles.white}`}
                                onClick={() => {
                                    const newArr = [];
                                    ctx.seatArr.forEach(it => {
                                        newArr.push([...it]);
                                    });
                                    newArr[i][j] = 4;
                                    ctx.setSeatArr(newArr);

                                    // 统计被选选择的座位
                                    // setSelectSeats([...selectSeats, `${i}S${j}`]);
                                    ctx.setNeedBuy([...ctx.needBuy, `${i}S${j}`])
                                }}
                            ></i>)
                        }

                        else if (ctx.seatArr[i][j] === 1 || ctx.seatArr[i][j] === 2) {
                            // 总之就是不可选的灰色座位
                            rowList.push(<i key={j} className={`iconfont icon-zuowei ${styles.forbid}`}></i>)
                        }

                        else if (ctx.seatArr[i][j] === 3) {
                            // 空白，没有座位，但要渲染占位
                            rowList.push(<i key={j} className={`iconfont icon-zuowei ${styles.empty}`}></i>)
                        }

                        else if (ctx.seatArr[i][j] === 4) {
                            // 用户本次选择座位
                            rowList.push(<i
                                key={j}
                                className={`iconfont icon-zuowei ${styles.blue}`}
                                onClick={() => {
                                    const newArr = [];
                                    ctx.seatArr.forEach(it => {
                                        newArr.push([...it]);
                                    });
                                    newArr[i][j] = 0;
                                    ctx.setSeatArr(newArr);

                                    // 删除统计中的数据
                                    const newSeats = [...ctx.needBuy];
                                    const index = newSeats.indexOf(`${i}S${j}`);
                                    newSeats.splice(index, 1);
                                    ctx.setNeedBuy(newSeats);
                                }}
                            ></i>)
                        }
                    }
                    divList.push(
                        (<div className={styles.row} key={i}>
                            {rowList}
                        </div>)
                    );
                }

                return <div className={styles.container}>
                    <div className={styles.wrap}>
                        <div className={styles.screen}>
                            <div></div>
                            <p>银幕</p>
                        </div>

                        <div className={styles.seat}>
                            {divList}
                        </div>
                    </div>

                    <div className={styles.tip}>
                        <p></p>
                        <div className={styles.content}>
                            <div>
                                <i className={`iconfont icon-zuowei ${styles.white}`}></i>
                                可选座位
                            </div>
                            <div>
                                <i className={`iconfont icon-zuowei ${styles.forbid}`}></i>
                                不可选座位
                            </div>
                            <div>
                                <i className={`iconfont icon-zuowei ${styles.blue}`}></i>
                                已选座位
                            </div>
                        </div>
                    </div>
                </div>
            }}
        </buyContext.Consumer>
    )
}
