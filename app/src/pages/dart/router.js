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
				<Route 	path={ `${url}` }  component={ Import('dart/index') } exact />
				{/* 变量声明 */}
				<Route path={ `${url}/grammar` } render={ ({ match }) => (
					<Switch>
						<Route path={`${match.url}/var`} render={ ({ match }) => (
							<Switch>
								<Route path={`${match.url}/var`} 	component={ Import('dart/grammar/var/var') } exact />
								<Route path={`${match.url}/type`} 	component={ Import('dart/grammar/var/type') } exact />
							</Switch>
						)} />
						<Route path={`${match.url}/data-type`} render={ ({ match }) => (
							<Switch>
								<Route path={`${match.url}/num`} 		component={ Import('dart/grammar/data-type/num') } exact />
								<Route path={`${match.url}/string`} 	component={ Import('dart/grammar/data-type/string') } exact />
								<Route path={`${match.url}/bool`} 		component={ Import('dart/grammar/data-type/bool') } exact />
								<Route path={`${match.url}/list`} 		component={ Import('dart/grammar/data-type/list') } exact />
								<Route path={`${match.url}/map`} 		component={ Import('dart/grammar/data-type/map') } exact />
								<Route path={`${match.url}/set`} 		component={ Import('dart/grammar/data-type/set') } exact />
								<Route path={`${match.url}/symbols`} 	component={ Import('dart/grammar/data-type/symbols') } exact />
								<Route path={`${match.url}/Object`} 	component={ Import('dart/grammar/data-type/object') } exact />
								<Route path={`${match.url}/dynamic`} 	component={ Import('dart/grammar/data-type/dynamic') } exact />
							</Switch>
						)} />
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