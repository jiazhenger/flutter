/* ====================================== 模块子路由配置  ====================================== */
import React from 'react'
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom'
//import { TransitionGroup, CSSTransition } from 'react-transition-group'
// ===================================================================== 异步加载
import Import from '@common/bundle'
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
					<Route path={ `${match.url}/state` } render={ ({ match }) => (
						<Switch>
							<Route path={`${match.url}/create`} 		component={ Import('react/component/state/create') } exact />
							<Route path={`${match.url}/lifeCycle`} 	component={ Import('react/component/state/lifeCycle') } exact />
							<Route path={`${match.url}/state`} 	component={ Import('react/component/state/state') } exact />
							<Route path={`${match.url}/props`} 	component={ Import('react/component/state/props') } exact />
							<Route path={`${match.url}/ref`} 	component={ Import('react/component/state/ref') } exact />
						</Switch>
					)}/>
					<Route path={ `${match.url}/noState` } render={ ({ match }) => (
						<Switch>
							<Route path={`${match.url}/create`} 	component={ Import('react/component/noState/create') } exact />
							<Route path={`${match.url}/hook`} 	component={ Import('react/component/noState/hook') } exact />
							<Route path={`${match.url}/props`} 	component={ Import('react/component/noState/props') } exact />
							<Route path={`${match.url}/ref`} 	component={ Import('react/component/noState/ref') } exact />
						</Switch>
					)}/>
					<Route path={`${match.url}/context`} 	component={ Import('react/component/context') } exact />
					<Route path={`${match.url}/packaging`} 	component={ Import('react/component/packaging') } exact />
				</Switch>
			)}/>
			{/* WrappedComponent */}
			<Route path={ `${url}/WrappedComponent` } render={ ({ match }) => (
				<Switch>
					<Route path={`${match.url}/base`} 	component={ Import('react/WrappedComponent/base') } exact />
					<Route path={`${match.url}/param`} 	component={ Import('react/WrappedComponent/param') } exact />
				</Switch>
			)}/>
			{/* Router */}
			<Route path={ `${url}/router` } render={ ({ match }) => (
				<Switch>
					<Route path={`${match.url}/Router`} 	component={ Import('react/router/Router') } exact />
					<Route path={`${match.url}/config`} 	component={ Import('react/router/config') } exact />
					<Route path={`${match.url}/props` } render={ ({ match }) => (
						<Switch>
							<Route path={`${match.url}/history`} 		component={ Import('react/router/props/history') } exact />
							<Route path={`${match.url}/location`} 		component={ Import('react/router/props/location') } exact />
							<Route path={`${match.url}/match`} 			component={ Import('react/router/props/match') } exact />
							<Route path={`${match.url}/staticContext`} 	component={ Import('react/router/props/staticContext') } exact />
						</Switch>
					)}/>
					<Route path={`${match.url}/hook`} 	component={ Import('react/router/hook') } exact />
				</Switch>
			)}/>
			{/* Hook */}
			<Route path={ `${url}/hook` } render={ ({ match }) => (
				<Switch>
					<Route path={`${match.url}/base`} 	component={ Import('react/hook/base') } exact />
				</Switch>
			)}/>
			{/* ReactDOM */}
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

export default AppRouter