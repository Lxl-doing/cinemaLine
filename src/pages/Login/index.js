import React, { useState } from 'react'
import styles from './index.module.css'
import { login } from '../../api/loginService'
import loginCtx from '../../store/login';

export default function Login(props) {
    const [username, setUsername] = useState('');  // 输入框用户名
    const [password, setPassword] = useState('');  // 输入框密码
    const [loginStatus, setLoginStatus] = useState('登录');  // 登录状态，按钮显示的值。发送登录请求时改变
    const [error1, setError1] = useState('');  // 错误提示内容
    const [error2, setError2] = useState('');  // 错误提示内容

    async function handleClick(changeUserMsg) {
        // console.log(username, password);
        setError1('');
        setError2('');

        if (username === '' || password === '') {
            if (username === '') setError1('用户名不能为空');
            else setError1('');
            if (password === '') setError2('密码不能为空');
            else setError2('');
            return;
        }

        setLoginStatus('登录中...');
        const resp = await login(username, password);
        setLoginStatus('登录');
        console.log(resp);

        if (!resp) return;  // 接口捕获错误，返回空

        // 密码错误
        if (resp.code === 1) {
            setError2('密码错误');
        } else {
            console.log('登录成功');
            changeUserMsg(resp.data);  // 修改上下文用户信息

            props.history.push('/home');
        }
    }

    return (
        <loginCtx.Consumer>
            {({ changeUserMsg }) => {
                return (
                    <div className={styles.wrap}>
                        <h1>登录</h1>

                        <p>
                            用户名：<input type="text" placeholder='请输入用户名' value={username} onChange={e => {
                                setUsername(e.target.value);
                            }} />
                        </p>
                        <p className={styles.error}>{error1}</p>

                        <p>
                            密码：<input type="password" placeholder='请输入密码' value={password} onChange={e => {
                                // 实现输入改变字体大小，字体距离。无内容原状（为了好的密码样式）
                                if (e.target.value) {
                                    e.target.className = styles.pwd;
                                } else {
                                    e.target.className = '';
                                }
                                setPassword(e.target.value);
                            }} />
                        </p>
                        <p className={styles.error}>{error2}</p>

                        <div className={styles.tip}>未注册的用户将自动生成新账号</div>

                        <div className={styles.btn} onClick={() => { handleClick(changeUserMsg) }}>{loginStatus}</div>
                    </div>
                )
            }}
        </loginCtx.Consumer>
    )
}