import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import loginCtx from "./store/login";
import areaCtx from './store/area';
import Home from './pages/Home';
import User from './pages/User';
import Movie from './pages/Movie';
import MovieDetail from './pages/Movie/MovieDetail';
import Cinema from './pages/Cinema';
import CinemaDetail from './pages/Cinema/CinemaDetail';
import Buy from './pages/Buy';
import Money from './pages/Money';
import Login from './pages/Login';

import { whoAmI } from './api/loginService';


function App() {
    // 存用户信息对象，是上下文内容之一
    const [userMsg, setUserMsg] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    // 存地区对象，是上下文内容之一
    const [area, setArea] = useState('');

    // 一开始whoAmI看cookie是否存在且不过期，不过期后端返回用户信息
    useEffect(() => {
        setIsLoading(true);
        whoAmI().then(data => {  // data可能是null，null就是没有信息
            if (data) {
                setUserMsg(data);
            }
            setIsLoading(false);
        });
    }, [])

    return (
        <loginCtx.Provider value={{  // 上下文对象，用户信息和改变的方法
            userMsg,
            isLoading,
            changeUserMsg(userObj) {
                setUserMsg(userObj);
            }
        }}>
            <areaCtx.Provider value={{
                area,
                changeArea(str) {
                    setArea(str);
                }
            }}>
                <Router>
                    <Switch>
                        <Route path='/login' component={Login} />
                        <Route path='/user' component={User} />
                        <Route path='/home' component={Home} />
                        <Route path='/movie' exact component={Movie} />
                        <Route path='/movie/:id' component={MovieDetail} />
                        <Route path='/cinema' exact component={Cinema} />
                        <Route path='/cinema/:id' component={CinemaDetail} />
                        <Route path='/buy/:filmId/:cinemaId/:showId' component={Buy} />
                        <Route path='/pay/:orderId' component={Money} />
                        <Redirect to='/home' />
                        {/* <Route path='/' component={Home} /> */}
                    </Switch>
                </Router>
            </areaCtx.Provider>
        </loginCtx.Provider>
    );
}

export default App;
