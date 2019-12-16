/* ====================================== 模块子路由配置  ====================================== */
import React from 'react'
import { Switch, Route } from 'react-router-dom'
//import { TransitionGroup, CSSTransition } from 'react-transition-group'
// ===================================================================== 异步加载
import { Import } from '@common/bundle'
// ===================================================================== 二级路由
export default class StyleRouter extends React.Component{
	render(){
		const { match } = this.props
		return (
				<Switch>
					<Route path={`${match.url}/Colors`} 			component={ Import('flutter/style/Colors') } exact />
					<Route path={`${match.url}/TextStyle`} 			component={ Import('flutter/style/TextStyle') } exact />
					<Route path={`${match.url}/StrutStyle`} 			component={ Import('flutter/style/StrutStyle') } exact />
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
							<Route path={`${match.url}/AlignmentDirectional`} 	component={ Import('flutter/style/align/AlignmentDirectional') } exact />
						</Switch>
					)} />
					{/* 边框 */}
					<Route path={`${match.url}/border`} render={ ({ match }) => (
						<Switch>
							<Route path={`${match.url}/BorderSide`} 	component={ Import('flutter/style/border/BorderSide') } exact />
							<Route path={`${match.url}/Border`} 		component={ Import('flutter/style/border/Border') } exact />
							<Route path={`${match.url}/OutlineInputBorder`} 		component={ Import('flutter/style/border/OutlineInputBorder') } exact />
							<Route path={`${match.url}/UnderlineInputBorder`} 		component={ Import('flutter/style/border/UnderlineInputBorder') } exact />
							<Route path={`${match.url}/TableBorder`} 		component={ Import('flutter/style/border/TableBorder') } exact />
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
							<Route path={`${match.url}/InputDecoration`} 	component={ Import('flutter/style/decoration/InputDecoration') } exact />
						</Switch>
					)} />
					{/* 矩阵 */}
					<Route path={`${match.url}/rotation`} 	  		component={ Import('flutter/style/Matrix4/rotation') } exact />
					<Route path={`${match.url}/scale`} 	   			component={ Import('flutter/style/Matrix4/scale') } exact />
					<Route path={`${match.url}/translation`} 		component={ Import('flutter/style/Matrix4/translation') } exact />
					<Route path={`${match.url}/skew`}		component={ Import('flutter/style/Matrix4/skew') } exact />
					<Route path={`${match.url}/solve`}		component={ Import('flutter/style/Matrix4/solve') } exact />
					<Route path={`${match.url}/other`}		component={ Import('flutter/style/Matrix4/other') } exact />
					{/* 主题 */}
					<Route path={`${match.url}/ThemeData`} 	component={ Import('flutter/theme/ThemeData') } exact />
					<Route path={`${match.url}/Theme`} 	component={ Import('flutter/theme/Theme') } exact />
					<Route path={`${match.url}/IconThemeData`} 	component={ Import('flutter/theme/IconThemeData') } exact />
					<Route path={`${match.url}/TextTheme`} 	component={ Import('flutter/theme/TextTheme') } exact />
					{/* 地区 */}
					<Route path={`${match.url}/locale`} render={ ({ match }) => (
						<Switch>
							<Route path={`${match.url}/Locale`} 		component={ Import('flutter/style/locale/Locale') } exact />
							<Route path={`${match.url}/MaterialLocalizations`} 		component={ Import('flutter/style/locale/MaterialLocalizations') } exact />
						</Switch>
					)} />
					{/* 其它 */}
					<Route path={`${match.url}/Rect`} 			component={ Import('flutter/style/Rect') } exact />
					<Route path={`${match.url}/Size`} 			component={ Import('flutter/style/Size') } exact />
					<Route path={`${match.url}/Clip`} 			component={ Import('flutter/style/Clip') } exact />
					<Route path={`${match.url}/BoxConstraints`} component={ Import('flutter/style/BoxConstraints') } exact />
					<Route path={`${match.url}/IntrinsicColumnWidth`} component={ Import('flutter/style/IntrinsicColumnWidth') } exact />
					<Route path={`${match.url}/Future`} 	component={ Import('flutter/style/Future') } exact />
					<Route path={`${match.url}/Stream`} 	component={ Import('flutter/style/Stream') } exact />
					<Route path={`${match.url}/StackTrace`} 	component={ Import('flutter/style/StackTrace') } exact />
					<Route path={`${match.url}/Step`} 	component={ Import('flutter/style/Step') } exact />
					<Route path={`${match.url}/BottomNavigationBarItem`} 	component={ Import('flutter/style/BottomNavigationBarItem') } exact />
					<Route path={`${match.url}/TabController`} 	component={ Import('flutter/style/TabController') } exact />
				</Switch>
		)
	}
}