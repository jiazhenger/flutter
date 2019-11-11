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
					<Route path={`${match.url}/Form`} 	component={ Import('flutter/widget/form/Form') } exact />
					<Route path={`${match.url}/TextFormField`} 	component={ Import('flutter/widget/form/TextFormField') } exact />
				</Switch>
		)
	}
}