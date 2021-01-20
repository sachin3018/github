import React from 'react'
import {
    Route,
    Switch,
    BrowserRouter
} from 'react-router-dom'
import App from './App'
import Login from './Component/Login'
import MainPage from './Component/MainPage'
import PrivateRoute from './Component/privateRoute/PrivateRoute'
import SignUp from './Component/SignUp'

const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={App} exact/>
                <Route path="/login" component={Login} exact/>
                <Route path="/signup" component={SignUp} exact/>
                <PrivateRoute path="/search" component={MainPage} exact/>
            </Switch>
        </BrowserRouter>
    )
}

export default Router