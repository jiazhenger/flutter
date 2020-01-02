// ======================================================== 兼容IE
//import '@babel/polyfill'
// ======================================================== css
import '@css/public.css'
import './App.css'
// ======================================================== global js
import './common/global'
// ======================================================== react
import React from 'react'
import ReactDOM from 'react-dom'
// ======================================================== 注册服务器
//import * as serviceWorker from './serviceWorker'
// ======================================================== 入口文件
import App from './App'
// ======================================================== 启动 react
ReactDOM.render( <App/>, document.querySelector('#app-root') )
setTimeout(()=>document.body.removeChild(document.querySelector('#app-loading')),100)
// ======================================================== 注册服务
//serviceWorker.unregister()