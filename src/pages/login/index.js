import  React, { useState } from 'react'
// import {useKeepAliveEffect} from 'react-keep-alive'

// img
import logo from '../../logo.svg';

// ui
import './index.css'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

export default function Login() {
    const theme = createMuiTheme({
        palette: {
            primary: {
                main: '#61DAFB',
            },
        }
    })


    return (
        <div className='login'>
            
            <div className='login-item'>
                <div>React Chatroom</div>
            </div>
            
            <img src={logo} className='login-logo' alt="logo"/>

            <ThemeProvider theme={theme}>
                <div className='login-filed'>
                    <TextField id="standard-basic" label="账号"/>
                    <TextField id="standard-basic" label="密码" type="password"/>
                    <Button color="primary" variant="outlined">登陆</Button>
                    <Button color="primary" variant="outlined">去注册?</Button>
                </div>
            </ThemeProvider>
        </div>
    )
}