/* ====================================== 模块子路由配置  ====================================== */
import React from 'react'
import { Switch, Route, Redirect, withRouter, useRouteMatch } from 'react-router-dom'
//import { TransitionGroup, CSSTransition } from 'react-transition-group'
// ===================================================================== 异步加载
import { Import } from '@common/bundle'
// ===================================================================== 二级路由
const AppRouter = () => {
	const { url } = useRouteMatch()
	return (
		<Switch>
			<Route 	path={ `${url}` }  component={ Import('react/index') } exact />
			{/* render */}
			<Route path={ `${url}/render` } render={ ({ match }) => (
				<Switch>
					<Route path={`${match.url}/render`} 	component={ Import('react/render/render') } exact />
					<Route path={`${match.url}/bind`} 	component={ Import('react/render/bind') } exact />
					<Route path={`${match.url}/style`} 	component={ Import('react/render/style') } exact />
					<Route path={`${match.url}/for`} 	component={ Import('react/render/for') } exact />
					<Route path={`${match.url}/if`} 	component={ Import('react/render/if') } exact />
					<Route path={`${match.url}/event`} 	component={ Import('react/render/event') } exact />
				</Switch>
			)}/>
			{/* 组件 */}
			<Route path={ `${url}/component` } render={ ({ match }) => (
				<Switch>
					<Route path={`${match.url}/lifeCycle`} 	component={ Import('react/component/lifeCycle') } exact />
					<Route path={`${match.url}/state/create`} 	component={ Import('react/component/state/create') } exact />
					<Route path={`${match.url}/noState/create`} 	component={ Import('react/component/noState/create') } exact />
				</Switch>
			)}/>
			{/* Hook */}
			<Route path={ `${url}/hook` } render={ ({ match }) => (
				<Switch>
					<Route path={`${match.url}/base`} 	component={ Import('react/hook/base') } exact />
				</Switch>
			)}/>
			{/* render */}
			<Route path={ `${url}/ReactDOM` } render={ ({ match }) => (
				<Switch>
					<Route path={`${match.url}/pop`} 	component={ Import('react/ReactDOM/pop') } exact />
				</Switch>
			)}/>
			{/*  */}
			<Redirect from={url}		to={ `${url}` } 		exact />
			<Route 	render = { () => <div>404</div> } exact />
		</Switch>
	)
}

export default withRouter(AppRouter)