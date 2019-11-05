/* ====================================== 模块子路由配置  ====================================== */
import React from 'react'
import { Switch, Route } from 'react-router-dom'
//import { TransitionGroup, CSSTransition } from 'react-transition-group'
// ===================================================================== 异步加载
import { Import } from '@common/bundle'
// ===================================================================== 二级路由
export default class CircleRouter extends React.Component{
	render(){
		const { match } = this.props
		return (
				<Switch>
					<Route path={`${match.url}/CircleAvatar`} 		component={ Import('flutter/widget/circle/CircleAvatar') } exact />
					<Route path={`${match.url}/ClipOval`} 			component={ Import('flutter/widget/circle/ClipOval') } exact />
					<Route path={`${match.url}/ClipRRect`} 			component={ Import('flutter/widget/circle/ClipRRect') } exact />
				</Switch>
		)
	}
}