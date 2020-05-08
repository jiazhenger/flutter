/* ====================================== 模块子路由配置  ====================================== */
import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
// ===================================================================== 异步加载
import Import from '@common/bundle'
// ===================================================================== 同步路由
import Css 			from '@pages/css/main'
import JavaScript 	from '@pages/js/main'
import Reactjs 		from '@pages/react/main'
import Vue 			from '@pages/vue/main'
import Flutter 		from '@pages/flutter/main'
import Dart 		from '@pages/dart/main'
// ===================================================================== 二级路由
const AppRouter = () => (
	<Switch>
		<Route 	path='/' 		component={ Import('index') } exact />
		<Route 	path='/css' 	component={ Css }  />
		<Route 	path='/js' 		component={ JavaScript }  />
		<Route 	path='/react' 	component={ Reactjs }  />
		<Route 	path='/vue' 	component={ Vue }  />
		<Route 	path='/dart' 	component={ Dart }  />
		<Route 	path='/flutter' component={ Flutter }  />
		{/*  */}
		<Redirect from='/index'		to='/' 		exact />
		<Route component = { Import('404') }/>
	</Switch>
)

export default AppRouter