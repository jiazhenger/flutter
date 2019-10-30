﻿/* ====================================== 模块子路由配置  ====================================== */
import React from 'react'
import { Switch, Route } from 'react-router-dom'
//import { TransitionGroup, CSSTransition } from 'react-transition-group'
// ===================================================================== 异步加载
import { Import } from '@common/bundle'
// ===================================================================== 二级路由
class StyleRouter extends React.Component{
	render(){
		const { match } = this.props
		return (
				<Switch>
					<Route path={`${match.url}/Colors`} 			component={ Import('flutter/style/Colors') } exact />
					<Route path={`${match.url}/TextStyle`} 			component={ Import('flutter/style/TextStyle') } exact />
					{/* 偏移量 */}
					<Route path={`${match.url}/offset`} render={ ({ match }) => (
						<Switch>
							<Route path={`${match.url}/EdgeInsets`} 		component={ Import('flutter/style/offset/EdgeInsets') } exact />
							<Route path={`${match.url}/Offset`} 		component={ Import('flutter/style/offset/Offset') } exact />
						</Switch>
					)} />
					{/* 对齐方式 */}
					<Route path={`${match.url}/align`} render={ ({ match }) => (
						<Switch>
							<Route path={`${match.url}/Alignment`} 			component={ Import('flutter/style/align/Alignment') } exact />
							<Route path={`${match.url}/FractionalOffset`} 	component={ Import('flutter/style/align/FractionalOffset') } exact />
						</Switch>
					)} />
					{/* 边框 */}
					<Route path={`${match.url}/border`} render={ ({ match }) => (
						<Switch>
							<Route path={`${match.url}/BorderSide`} 	component={ Import('flutter/style/border/BorderSide') } exact />
							<Route path={`${match.url}/Border`} 		component={ Import('flutter/style/border/Border') } exact />
						</Switch>
					)} />
					{/* 圆角 */}
					<Route path={`${match.url}/borderRadius`} render={ ({ match }) => (
						<Switch>
							<Route path={`${match.url}/Radius`} 		component={ Import('flutter/style/borderRadius/Radius') } exact />
							<Route path={`${match.url}/BorderRadius`} 	component={ Import('flutter/style/borderRadius/BorderRadius') } exact />
						</Switch>
					)} />
					{/* 阴影 */}
					<Route path={`${match.url}/shadow`} render={ ({ match }) => (
						<Switch>
							<Route path={`${match.url}/Shadow`} 		component={ Import('flutter/style/shadow/Shadow') } exact />
							<Route path={`${match.url}/BoxShadow`} 		component={ Import('flutter/style/shadow/BoxShadow') } exact />
						</Switch>
					)} />
					{/* 渐变 */}
					<Route path={`${match.url}/gradient`} render={ ({ match }) => (
						<Switch>
							<Route path={`${match.url}/LinearGradient`} 	component={ Import('flutter/style/gradient/LinearGradient') } exact />
							<Route path={`${match.url}/RadialGradient`} 	component={ Import('flutter/style/gradient/RadialGradient') } exact />
							<Route path={`${match.url}/SweepGradient`} 		component={ Import('flutter/style/gradient/SweepGradient') } exact />
						</Switch>
					)} />
					{/* 外形 */}
					<Route path={`${match.url}/shape`} render={ ({ match }) => (
						<Switch>
							<Route path={`${match.url}/BeveledRectangleBorder`} 	component={ Import('flutter/style/shape/BeveledRectangleBorder') } exact />
							<Route path={`${match.url}/CircleBorder`} 				component={ Import('flutter/style/shape/CircleBorder') } exact />
							<Route path={`${match.url}/RoundedRectangleBorder`} 	component={ Import('flutter/style/shape/RoundedRectangleBorder') } exact />
							<Route path={`${match.url}/StadiumBorder`} 				component={ Import('flutter/style/shape/StadiumBorder') } exact />
							<Route path={`${match.url}/UnderlineInputBorder`} 		component={ Import('flutter/style/shape/UnderlineInputBorder') } exact />
						</Switch>
					)} />
					{/* 装饰器 */}
					<Route path={`${match.url}/decoration`} render={ ({ match }) => (
						<Switch>
							<Route path={`${match.url}/BoxDecoration`} 			component={ Import('flutter/style/decoration/BoxDecoration') } exact />
							<Route path={`${match.url}/ShapeDecoration`} 		component={ Import('flutter/style/decoration/ShapeDecoration') } exact />
							<Route path={`${match.url}/UnderlineTabIndicator`} 	component={ Import('flutter/style/decoration/UnderlineTabIndicator') } exact />
						</Switch>
					)} />
					{/* 其它 */}
					<Route path={`${match.url}/Rect`} 			component={ Import('flutter/style/Rect') } exact />
					<Route path={`${match.url}/Size`} 			component={ Import('flutter/style/Size') } exact />
				</Switch>
		)
	}
}

export default StyleRouter