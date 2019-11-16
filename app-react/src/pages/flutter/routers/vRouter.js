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
					<Route path={`${match.url}/Vector2`} 	component={ Import('flutter/v/Vector2') } exact />
					<Route path={`${match.url}/Vector3`} 	component={ Import('flutter/v/Vector3') } exact />
					<Route path={`${match.url}/Vector4`} 	component={ Import('flutter/v/Vector4') } exact />
					<Route path={`${match.url}/Quaternion`} 	component={ Import('flutter/v/Quaternion') } exact />
				</Switch>
		)
	}
}