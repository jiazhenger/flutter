﻿/* ====================================== 模块子路由配置  ====================================== */
import React from 'react'
import { Switch, Route } from 'react-router-dom'
//import { TransitionGroup, CSSTransition } from 'react-transition-group'
// ===================================================================== 异步加载
import { Import } from '@common/bundle'
// ===================================================================== 二级路由
export default class 
 extends React.Component{
	render(){
		const { match } = this.props
		return (
				<Switch>
					<Route path={`${match.url}/Card`} 	component={ Import('flutter/ui/Card') } exact />
					<Route path={`${match.url}/Chip`} 	component={ Import('flutter/ui/Chip') } exact />
					<Route path={`${match.url}/Tooltip`} 	component={ Import('flutter/ui/Tooltip') } exact />
					<Route path={`${match.url}/DataTable`} 	component={ Import('flutter/ui/DataTable') } exact />
					<Route path={`${match.url}/RefreshIndicator`} 	component={ Import('flutter/ui/RefreshIndicator') } exact />
					<Route path={`${match.url}/Divider`} 	component={ Import('flutter/ui/Divider') } exact />
					<Route path={`${match.url}/Stepper`} 	component={ Import('flutter/ui/Stepper') } exact />
					<Route path={`${match.url}/Drawer`} 	component={ Import('flutter/ui/Drawer') } exact />
					{/* 标题  */}
					<Route path={`${match.url}/ListTile`} 	component={ Import('flutter/ui/title/ListTile') } exact />
					<Route path={`${match.url}/ExpansionTile`} 	component={ Import('flutter/ui/title/ExpansionTile') } exact />
					{/* 进度条 */}
					<Route path={`${match.url}/LinearProgressIndicator`} 	component={ Import('flutter/ui/progress/LinearProgressIndicator') } exact />
					<Route path={`${match.url}/CircularProgressIndicator`} 	component={ Import('flutter/ui/progress/CircularProgressIndicator') } exact />
				</Switch>
		)
	}
}