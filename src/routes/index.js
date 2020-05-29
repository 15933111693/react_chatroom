import React from 'react'
import { KeepAlive } from 'react-keep-alive'
import App from '../App'
import Login from '../pages/login/index'

const routeConfig = [
    {path:'/', component: () => (
        <KeepAlive name='index'>
            <App/>
        </KeepAlive>
    )},
    {path:'/login', component: () => (
        <KeepAlive name='login'>
            <Login/>
        </KeepAlive>
    )},
]

export default routeConfig