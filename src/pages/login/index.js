import  React from 'react'
// import {useKeepAliveEffect} from 'react-keep-alive'

// img
import logo from '../../logo.svg';

// ui
import './index.css'
import LogButton from '../../components/LogButton/index'
import LogTextField from '../../components/LogTextFiled/index'

export default function Login() {


    return (
        <div className='login'>
            
            <div className='login-item'>
                <div>React Chatroom</div>
            </div>
            
            <img src={logo} className='login-logo' alt="logo"/>


            <form className='login-filed' noValidate autoComplete="off">
                <LogTextField id="standard-basic" label="账号"/>
                <LogTextField id="standard-basic" label="密码" type="password"/>
                <LogButton variant="outlined">登陆</LogButton>
                <LogButton variant="outlined">去注册?</LogButton>
            </form>
        </div>
    )
}