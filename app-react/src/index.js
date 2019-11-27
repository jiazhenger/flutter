/* ====================================== 兼容IE  ====================================== */
//import '@babel/polyfill'
// ======================================================== css
import './App.css'
import '@css/public.css'
// ======================================================== global js
import './common/global'
// ======================================================== react
import React from 'react'
import ReactDOM from 'react-dom'
// ======================================================== 注册服务器
import * as serviceWorker from './serviceWorker'
// ======================================================== antd
//import { LocaleProvider } from 'antd'
//import zhCN from 'antd/lib/locale-provider/zh_CN'
// ======================================================== redux
//import { Provider } from 'react-redux'
//import Store from '@redux/store'
// ======================================================== 入口文件
import App from './App'
// ======================================================== 启动 react
//ReactDOM.render((<Provider store={Store}><LocaleProvider locale={zhCN}><App/></LocaleProvider></Provider>),document.getElementById('root'))	// redux + antd 启动
//ReactDOM.render((<Provider store={Store}><App/></Provider>),document.getElementById('app-root'))	// redux 启动
ReactDOM.render((<App/>),document.getElementById('app-root'))	// 普通启动
// ======================================================== 注册服务
serviceWorker.unregister();

document.querySelector('#app-loading').style.display = 'none'
