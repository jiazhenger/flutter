﻿/* ====================================== 模块子路由配置  ====================================== */
import React from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
// ===================================================================== 异步加载
import { Import } from '@common/bundle'
// ===================================================================== 同步路由（父路由必须是同步路由、否则，子路由切换，会刷新父路由）
import Css from '@pages/css/main'
import JavaScript from '@pages/js/main'
import Flutter from '@pages/flutter/main'
import Dart from '@pages/dart/main'
// ===================================================================== 二级路由
class AppRouter extends React.Component{
	render(){
		return (
			<Switch>
				<Route 	path='/' 		component={ Import('index') } exact />
				<Route 	path='/css' 	component={ Css }  />
				<Route 	path='/js' 		component={ JavaScript }  />
				<Route 	path='/dart' 	component={ Dart }  />
				<Route 	path='/flutter' component={ Flutter }  />
				{/*  */}
				<Redirect from='/index'		to='/' 		exact />
				<Route render = { () => <div>404</div> } />
			</Switch>
		)
	}
}

export default withRouter(AppRouter)