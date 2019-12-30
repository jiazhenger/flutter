/* ====================================== 模块子路由配置  ====================================== */
import React from 'react'
import { Switch, Route } from 'react-router-dom'
// ===================================================================== 异步加载
import Import from '@common/bundle'
// ===================================================================== 二级路由
export default class AnimationRouter extends React.Component{
	render(){
		const { match } = this.props
		return (
				<Switch>
					<Route path={`${match.url}/Curves`} 			component={ Import('flutter/animation/x/Curves') } exact />
					<Route path={`${match.url}/AlwaysStoppedAnimation`} 			component={ Import('flutter/animation/x/AlwaysStoppedAnimation') } exact />
					<Route path={`${match.url}/AnimationController`} 			component={ Import('flutter/animation/x/AnimationController') } exact />
				</Switch>
		)
	}
}