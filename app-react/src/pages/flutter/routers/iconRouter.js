/* ====================================== 模块子路由配置  ====================================== */
import React from 'react'
import { Switch, Route } from 'react-router-dom'
// ===================================================================== 异步加载
import Import from '@common/bundle'
// ===================================================================== 二级路由
export default class 
 extends React.Component{
	render(){
		const { match } = this.props
		return (
				<Switch>
					<Route path={`${match.url}/Icon`} 	component={ Import('flutter/widget/icon/Icon') } exact />
					<Route path={`${match.url}/ImageIcon`} 	component={ Import('flutter/widget/icon/ImageIcon') } exact />
				</Switch>
		)
	}
}