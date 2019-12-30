﻿/* ====================================== 模块子路由配置  ====================================== */
import React from 'react'
import { Switch, Route } from 'react-router-dom'
// ===================================================================== 异步加载
import Import from '@common/bundle'
// ===================================================================== 二级路由
export default class ButtonRouter extends React.Component{
	render(){
		const { match } = this.props
		return (
				<Switch>
					<Route path={`${match.url}/MaterialButton`} 		component={ Import('flutter/widget/button/MaterialButton') } exact />
					<Route path={`${match.url}/RaisedButton`} 			component={ Import('flutter/widget/button/RaisedButton') } exact />
					<Route path={`${match.url}/FlatButton`} 			component={ Import('flutter/widget/button/FlatButton') } exact />
					<Route path={`${match.url}/OutlineButton`} 			component={ Import('flutter/widget/button/OutlineButton') } exact />
					<Route path={`${match.url}/FloatingActionButton`} 	component={ Import('flutter/widget/button/FloatingActionButton') } exact />
					<Route path={`${match.url}/DropdownButton`} 		component={ Import('flutter/widget/button/DropdownButton') } exact />
					<Route path={`${match.url}/IconButton`} 			component={ Import('flutter/widget/button/IconButton') } exact />
					<Route path={`${match.url}/ButtonBar`} 				component={ Import('flutter/widget/button/ButtonBar') } exact />
				</Switch>
		)
	}
}