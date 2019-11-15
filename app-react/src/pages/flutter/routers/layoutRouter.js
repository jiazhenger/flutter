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
					<Route path={`${match.url}/Container`} 	component={ Import('flutter/widget/layout/style/Container') } exact />
					<Route path={`${match.url}/Padding`} 	component={ Import('flutter/widget/layout/style/Padding') } exact />
					<Route path={`${match.url}/Center`} 	component={ Import('flutter/widget/layout/style/Center') } exact />
					<Route path={`${match.url}/Align`} 	component={ Import('flutter/widget/layout/style/Align') } exact />
					<Route path={`${match.url}/Opacity`} 	component={ Import('flutter/widget/layout/style/Opacity') } exact />
					<Route path={`${match.url}/FittedBox`} 	component={ Import('flutter/widget/layout/style/FittedBox') } exact />
					<Route path={`${match.url}/ListBody`} 	component={ Import('flutter/widget/layout/list/ListBody') } exact />
					{/* 列表 */}
					<Route path={`${match.url}/Wrap`} 	component={ Import('flutter/widget/layout/list/Wrap') } exact />
					<Route path={`${match.url}/Flow`} 	component={ Import('flutter/widget/layout/list/Flow') } exact />
					<Route path={`${match.url}/LayoutBuilder`} 	component={ Import('flutter/widget/layout/list/LayoutBuilder') } exact />
					{/* 定位 */}
					<Route path={`${match.url}/Stack`} 	component={ Import('flutter/widget/layout/position/Stack') } exact />
					<Route path={`${match.url}/Positioned`} 	component={ Import('flutter/widget/layout/position/Positioned') } exact />
					{/* 弹性 */}
					<Route path={`${match.url}/Flex`} 	component={ Import('flutter/widget/layout/flex/Flex') } exact />
					<Route path={`${match.url}/Row`} 	component={ Import('flutter/widget/layout/flex/Row') } exact />
					<Route path={`${match.url}/Column`} 	component={ Import('flutter/widget/layout/flex/Column') } exact />
					{/* 滚动 */}
					<Route path={`${match.url}/ListView`} 	component={ Import('flutter/widget/layout/scroll/ListView') } exact />
					<Route path={`${match.url}/GridView`} 	component={ Import('flutter/widget/layout/scroll/GridView') } exact />
					{/* 自定义控件 */}
					<Route path={`${match.url}/CustomSingleChildLayout`} 	component={ Import('flutter/widget/layout/my-widget/CustomSingleChildLayout') } exact />
					<Route path={`${match.url}/CustomMultiChildLayout`} 	component={ Import('flutter/widget/layout/my-widget/CustomMultiChildLayout') } exact />
				</Switch>
		)
	}
}