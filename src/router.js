import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from './pages/login/Login'
import Worong from './pages/404/index'


class router extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                <Route path='/Login' component={Login}/>
                <Route path='/' exact ></Route>
                <Route path='/404' component={Worong}></Route>
                <Redirect from='/*' to="/404"/>
                </Switch>
            </HashRouter>
        );
    }
}

export default router;