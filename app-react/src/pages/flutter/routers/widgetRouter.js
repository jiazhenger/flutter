/* ====================================== 模块子路由配置  ====================================== */
import React from 'react'
import { Switch, Route } from 'react-router-dom'
// ===================================================================== 异步加载
import Import from '@common/bundle'
// ===================================================================== 二级路由
export default class WidgetOtherRouter extends React.Component{
	render(){
		const { match } = this.props
		return (
				<Switch>
					{/* 异步 */}
					<Route path={`${match.url}/FutureBuilder`} 	component={ Import('flutter/widget/async/FutureBuilder') } exact />
					<Route path={`${match.url}/StreamBuilder`} 	component={ Import('flutter/widget/async/StreamBuilder') } exact />
					{/* 其它 */}
					<Route path={`${match.url}/AbsorbPointer`} 	component={ Import('flutter/widget/other/AbsorbPointer') } exact />
					<Route path={`${match.url}/Builder`} 	component={ Import('flutter/widget/other/Builder') } exact />
					<Route path={`${match.url}/DropdownMenuItem`} 	component={ Import('flutter/widget/other/DropdownMenuItem') } exact />
				</Switch>
		)
	}
}