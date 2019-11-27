/* ====================================== 模块子路由配置  ====================================== */
import React from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
//import { TransitionGroup, CSSTransition } from 'react-transition-group'
// ===================================================================== 异步加载
import { Import } from '@common/bundle'
// ===================================================================== 二级路由
class AppRouter extends React.Component{
	render(){
		const { url } = this.props.match
		return (
			<Switch>
				<Route 	path={ `${url}` }  component={ Import('react/index') } exact />
				{/* 组件 */}
				<Route path={ `${url}/component` } render={ ({ match }) => (
					<Switch>
						<Route path={`${match.url}/lifeCycle`} 	component={ Import('react/component/lifeCycle') } exact />
					</Switch>
				)}/>
				{/* Hook */}
				<Route path={ `${url}/hook` } render={ ({ match }) => (
					<Switch>
						<Route path={`${match.url}/base`} 	component={ Import('react/hook/base') } exact />
					</Switch>
				)}/>
				{/* render */}
				<Route path={ `${url}/render` } render={ ({ match }) => (
					<Switch>
						<Route path={`${match.url}/render`} 	component={ Import('react/render/render') } exact />
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