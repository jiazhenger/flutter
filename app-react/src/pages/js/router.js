/* ====================================== 模块子路由配置  ====================================== */
import React from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
//import { TransitionGroup, CSSTransition } from 'react-transition-group'
// ===================================================================== 异步加载
import Import from '@common/bundle'
// ===================================================================== 二级路由
class AppRouter extends React.Component{
	render(){
		const { url } = this.props.match
		return (
			<Switch>
				<Route 	path={ `${url}` }  component={ Import('js/index') } exact />
				{/* 基础语法 */}
				<Route path={ `${url}/grammar` } render={ ({ match }) => (
					<Switch>
						<Route path={`${match.url}/var`} 	component={ Import('js/grammar/var/var') } exact />
						<Route path={`${match.url}/data-type`} render={ ({ match }) => (
							<Switch>
								<Route path={`${match.url}/number`} 	component={ Import('js/grammar/data-type/number') } exact />
								<Route path={`${match.url}/string`} 	component={ Import('js/grammar/data-type/string') } exact />
								<Route path={`${match.url}/boolean`} 	component={ Import('js/grammar/data-type/boolean') } exact />
								<Route path={`${match.url}/function`} 	component={ Import('js/grammar/data-type/function') } exact />
								<Route path={`${match.url}/object`} 	component={ Import('js/grammar/data-type/object') } exact />
								<Route path={`${match.url}/type`} 		component={ Import('js/grammar/type') } exact />
							</Switch>
						)} />
					</Switch>
				)}/>
				{/* 对象 */}
				<Route path={ `${url}/object` } render={ ({ match }) => (
					<Switch>
						<Route path={`${match.url}/number`} render={ ({ match }) => (
							<Switch>
								<Route path={`${match.url}/property`} 	component={ Import('js/object/number/property') } exact />
								<Route path={`${match.url}/method`} 	component={ Import('js/object/number/method') } exact />
							</Switch>
						)} />
						<Route path={`${match.url}/string`} render={ ({ match }) => (
							<Switch>
								<Route path={`${match.url}/property`} 	component={ Import('js/object/string/property') } exact />
								<Route path={`${match.url}/method`} 	component={ Import('js/object/string/method') } exact />
							</Switch>
						)} />
						<Route path={`${match.url}/boolean`} render={ ({ match }) => (
							<Switch>
								<Route path={`${match.url}/property`} 	component={ Import('js/object/boolean/property') } exact />
								<Route path={`${match.url}/method`} 	component={ Import('js/object/boolean/method') } exact />
							</Switch>
						)} />
						<Route path={`${match.url}/function`} render={ ({ match }) => (
							<Switch>
								<Route path={`${match.url}/property`} 	component={ Import('js/object/function/property') } exact />
								<Route path={`${match.url}/method`} 	component={ Import('js/object/function/method') } exact />
								<Route path={`${match.url}/arguments`} 	component={ Import('js/object/function/arguments') } exact />
								<Route path={`${match.url}/function-property`} 	component={ Import('js/object/function/function-property') } exact />
								<Route path={`${match.url}/function-method`} 	component={ Import('js/object/function/function-method') } exact />
							</Switch>
						)} />
						<Route path={`${match.url}/object`} render={ ({ match }) => (
							<Switch>
								<Route path={`${match.url}/property`} 	component={ Import('js/object/object/property') } exact />
								<Route path={`${match.url}/method`} 	component={ Import('js/object/object/method') } exact />
								<Route path={`${match.url}/prototype-property`} 	component={ Import('js/object/object/prototype-property') } exact />
								<Route path={`${match.url}/prototype-method`} 	component={ Import('js/object/object/prototype-method') } exact />
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