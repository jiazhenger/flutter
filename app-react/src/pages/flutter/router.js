/* ====================================== 模块子路由配置  ====================================== */
import React from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
//import { TransitionGroup, CSSTransition } from 'react-transition-group'
// ===================================================================== 异步加载
import { Import } from '@common/bundle'
// ===================================================================== 异步加载
import StyleRouter from './routers/styleRouter'
import AnimationRouter from './routers/animationRouter'
// widget
import ImageRouter from './routers/imageRouter'
import CircleRouter from './routers/circleRouter'
import TextRouter from './routers/textRouter'
import ButtonRouter from './routers/buttonRouter'
// ===================================================================== 二级路由
class AppRouter extends React.Component{
	render(){
		const { url } = this.props.match
		return (
			<Switch>
				<Route 	path={ `${url}` }  component={ Import('flutter/index') } exact />
				{/* app 入口 */}
				<Route path={ `${url}/app` } render={ ({ match }) => (
					<Switch>
						<Route path={`${match.url}/MaterialApp`} 	component={ Import('flutter/app/MaterialApp') } exact />
						{/* 路由 */}
						<Route path={`${match.url}/router`} render={ ({ match }) => (
							<Switch>
								<Route path={`${match.url}/base-router`} 	component={ Import('flutter/app/router/base-router') } exact />
								<Route path={`${match.url}/router-skip`} 	component={ Import('flutter/app/router/router-skip') } exact />
							</Switch>
						)} />
						{/* 主题 */}
						<Route path={`${match.url}/theme`} 	component={ Import('flutter/app/theme') } exact />
					</Switch>
				)}/>
				{/* 样式 */}
				<Route path={ `${url}/style` } render={ ({ match }) => <StyleRouter match={ match } /> } />
				{/* 控件 */}
				<Route path={ `${url}/image` } render={ ({ match }) => <ImageRouter match={ match } /> } />
				<Route path={ `${url}/circle` } render={ ({ match }) => <CircleRouter match={ match } /> } />
				<Route path={ `${url}/text` } render={ ({ match }) => <TextRouter match={ match } /> } />
				<Route path={ `${url}/button` } render={ ({ match }) => <ButtonRouter match={ match } /> } />
				{/* 事件 */}
				<Route path={ `${url}/event` } render={ ({ match }) => (
					<Switch>
						<Route path={`${match.url}/TapGestureRecognizer`} 	component={ Import('flutter/event/TapGestureRecognizer') } exact />
						<Route path={`${match.url}/FocusNode`} 	component={ Import('flutter/event/FocusNode') } exact />
					</Switch>
				)} />
				{/* 时间 */}
				<Route path={ `${url}/time` } render={ ({ match }) => (
					<Switch>
						<Route path={`${match.url}/Duration`} 			component={ Import('flutter/time/Duration') } exact />
					</Switch>
				)} />
				{/* 动画 */}
				<Route path={ `${url}/animation` } render={ ({ match }) => <AnimationRouter match={ match } /> } />
				
				{/* http */}
				<Route path={ `${url}/http` } render={ ({ match }) => (
					<Switch>
						<Route path={`${match.url}/http-client`} 	component={ Import('flutter/http/http-client') } exact />
					</Switch>
				)}/>
				{/*  */}
				<Redirect from={url}		to={ `${url}` } 		exact />
				<Route 	render = { () => <div>404</div> } exact />
			</Switch>
		)
	}
}

export default withRouter(AppRouter)