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
import IconRouter from './routers/iconRouter'
import FormRouter from './routers/formRouter'
import TableRouter from './routers/tableRouter'
import LayoutRouter from './routers/layoutRouter'
import ScrollRouter from './routers/scrollRouter'
import PopoverRouter from './routers/popoverRouter'
import UiRouter from './routers/uiRouter'
import WidgetRouter from './routers/widgetRouter'
import VRouter from './routers/vRouter'
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
				<Route path={ `${url}/icon` } render={ ({ match }) => <IconRouter match={ match } /> } />
				<Route path={ `${url}/form` } render={ ({ match }) => <FormRouter match={ match } /> } />
				<Route path={ `${url}/table` } render={ ({ match }) => <TableRouter match={ match } /> } />
				<Route path={ `${url}/layout` } render={ ({ match }) => <LayoutRouter match={ match } /> } />
				<Route path={ `${url}/scroll` } render={ ({ match }) => <ScrollRouter match={ match } /> } />
				<Route path={ `${url}/widget` } render={ ({ match }) => <WidgetRouter match={ match } /> } />
				<Route path={ `${url}/ui` } render={ ({ match }) => <UiRouter match={ match } /> } />
				<Route path={ `${url}/popover` } render={ ({ match }) => <PopoverRouter match={ match } /> } />
				{/* 事件 */}
				<Route path={ `${url}/event` } render={ ({ match }) => (
					<Switch>
						<Route path={`${match.url}/TapGestureRecognizer`} 	component={ Import('flutter/event/TapGestureRecognizer') } exact />
						<Route path={`${match.url}/RawKeyboardListener`} 	component={ Import('flutter/event/RawKeyboardListener') } exact />
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
				{/* 公共用法 */}
				<Route path={ `${url}/com` } render={ ({ match }) => (
					<Switch>
						<Route path={`${match.url}/widget-state`} 	component={ Import('flutter/com/widget-state') } exact />
						<Route path={`${match.url}/life`} 	component={ Import('flutter/com/life') } exact />
						<Route path={`${match.url}/key`} 	component={ Import('flutter/com/key') } exact />
					</Switch>
				)}/>
				{/* v 对象 */}
				<Route path={ `${url}/v` } render={ ({ match }) => <VRouter match={ match } /> } />
				{/*  */}
				<Redirect from={url}		to={ `${url}` } 		exact />
				<Route 	render = { () => <div>404</div> } exact />
			</Switch>
		)
	}
}

export default withRouter(AppRouter)