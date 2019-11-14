/* ====================================== 模块子路由配置  ====================================== */
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
					<Route path={`${match.url}/Container`} 	component={ Import('flutter/widget/layout/Container') } exact />
					<Route path={`${match.url}/Padding`} 	component={ Import('flutter/widget/layout/Padding') } exact />
					<Route path={`${match.url}/Center`} 	component={ Import('flutter/widget/layout/Center') } exact />
					<Route path={`${match.url}/Align`} 	component={ Import('flutter/widget/layout/Align') } exact />
				</Switch>
		)
	}
}