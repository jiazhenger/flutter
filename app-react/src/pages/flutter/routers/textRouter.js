/* ====================================== 模块子路由配置  ====================================== */
import React from 'react'
import { Switch, Route } from 'react-router-dom'
// ===================================================================== 异步加载
import Import from '@common/bundle'
// ===================================================================== 二级路由
export default class TextRouter extends React.Component{
	render(){
		const { match } = this.props
		return (
				<Switch>
					<Route path={`${match.url}/Text`} 				component={ Import('flutter/widget/text/Text') } exact />
					<Route path={`${match.url}/TextRich`} 			component={ Import('flutter/widget/text/TextRich') } exact />
					<Route path={`${match.url}/RichText`} 			component={ Import('flutter/widget/text/RichText') } exact />
					<Route path={`${match.url}/Baseline`} 			component={ Import('flutter/widget/text/Baseline') } exact />
					{/* style */}
					<Route path={`${match.url}/TextSpan`} 			component={ Import('flutter/widget/text/x/TextSpan') } exact />
				</Switch>
		)
	}
}