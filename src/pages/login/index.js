import  React, { useState } from 'react'
// import {useKeepAliveEffect} from 'react-keep-alive'

// img
import logo from '../../logo.svg';

// ui
import './index.css'
import Button from '@material-ui/core/Button'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import LogTextField from '../../components/LogTextFiled/index'

// 主题
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#61DAFB',
        },
    }
})

export default function Login() {


    return (
        <div className='login'>
            
            <div className='login-item'>
                <div>React Chatroom</div>
            </div>
            
            <img src={logo} className='login-logo' alt="logo"/>

            <ThemeProvider theme={theme}>
                <div className='login-filed'>
                    <LogTextField id="standard-basic" label="账号"/>
                    <LogTextField id="standard-basic" label="密码" type="password"/>
                    <Button color="primary" variant="outlined">登陆</Button>
                    <Button color="primary" variant="outlined">去注册?</Button>
                </div>
            </ThemeProvider>
        </div>
    )
}