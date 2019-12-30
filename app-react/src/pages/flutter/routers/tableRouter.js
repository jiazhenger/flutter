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
					<Route path={`${match.url}/Table`} 		component={ Import('flutter/widget/table/Table') } exact />
					<Route path={`${match.url}/TableRow`} 	component={ Import('flutter/widget/table/TableRow') } exact />
					<Route path={`${match.url}/TableCell`} 	component={ Import('flutter/widget/table/TableCell') } exact />
					{/* x */}
					<Route path={`${match.url}/FixedColumnWidth`} 	component={ Import('flutter/widget/table/x/FixedColumnWidth') } exact />
				</Switch>
		)
	}
}