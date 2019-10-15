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
				<Route path={ `${url}/grammar` } render={ ({ match }) => (
					<Switch>
						{/* 变量声明 */}
						<Route path={`${match.url}/var`} render={ ({ match }) => (
							<Switch>
								<Route path={`${match.url}/var`} 	component={ Import('dart/grammar/var/var') } exact />
								<Route path={`${match.url}/type`} 	component={ Import('dart/grammar/var/type') } exact />
								<Route path={`${match.url}/generic`} 	component={ Import('dart/grammar/var/generic') } exact />
								<Route path={`${match.url}/mix`} 	component={ Import('dart/grammar/var/mix') } exact />
							</Switch>
						)} />
						{/* 9种数据类型 */}
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
						{/* 数据类型管理 */}
						<Route path={`${match.url}/data-manage`} render={ ({ match }) => (
							<Switch>
								<Route path={`${match.url}/judge`} 	component={ Import('dart/grammar/data-manage/judge') } exact />
							</Switch>
						)} />
						{/* 函数 */}
						<Route path={`${match.url}/function`} render={ ({ match }) => (
							<Switch>
								<Route path={`${match.url}/base`} 	component={ Import('dart/grammar/function/base') } exact />
							</Switch>
						)} />
						{/* 函数 */}
						<Route path={`${match.url}/class`} render={ ({ match }) => (
							<Switch>
								<Route path={`${match.url}/base`} 	component={ Import('dart/grammar/class/base') } exact />
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