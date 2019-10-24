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
				{/* 基础语法 */}
				<Route path={ `${url}/grammar` } render={ ({ match }) => (
					<Switch>
						{/* 顶级入口 */}
						<Route 	path={ `${match.url}/main` }  component={ Import('dart/grammar/entrance/base') } exact />
						{/* 测试输出 */}
						<Route 	path={ `${match.url}/test` }  component={ Import('dart/grammar/test/base') } exact />
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
						{/* 操作符 */}
						<Route 	path={ `${match.url}/operator` }  component={ Import('dart/grammar/operator/base') } exact />
						{/* 语句 */}
						<Route path={`${match.url}/statement`} render={ ({ match }) => (
							<Switch>
								<Route path={`${match.url}/if`} 	component={ Import('dart/grammar/statement/if') } exact />
								<Route path={`${match.url}/for`} 	component={ Import('dart/grammar/statement/for') } exact />
							</Switch>
						)} />
						{/* 函数 */}
						<Route path={`${match.url}/function`} render={ ({ match }) => (
							<Switch>
								<Route path={`${match.url}/base`} 	component={ Import('dart/grammar/function/base') } exact />
								<Route path={`${match.url}/inner`} 	component={ Import('dart/grammar/function/inner') } exact />
							</Switch>
						)} />
						{/* 类 */}
						<Route path={`${match.url}/class`} render={ ({ match }) => (
							<Switch>
								<Route path={`${match.url}/base`} 	component={ Import('dart/grammar/class/base') } exact />
								<Route path={`${match.url}/constructor`} 	component={ Import('dart/grammar/class/constructor') } exact />
								<Route path={`${match.url}/get-set`} 	component={ Import('dart/grammar/class/get-set') } exact />
								<Route path={`${match.url}/extends`} 	component={ Import('dart/grammar/class/extends') } exact />
								<Route path={`${match.url}/override`} 	component={ Import('dart/grammar/class/override') } exact />
								<Route path={`${match.url}/interface`} 	component={ Import('dart/grammar/class/interface') } exact />
								<Route path={`${match.url}/operator`} 	component={ Import('dart/grammar/class/operator') } exact />
								<Route path={`${match.url}/enum`} 	component={ Import('dart/grammar/class/enum') } exact />
							</Switch>
						)} />
						{/* 异步 */}
						<Route 	path={ `${match.url}/async` }  component={ Import('dart/grammar/async/base') } exact />
						{/* 错误处理 */}
						<Route 	path={ `${match.url}/error` }  component={ Import('dart/grammar/error/base') } exact />
						{/* 元数据 */}
						<Route 	path={ `${match.url}/metadata` }  component={ Import('dart/grammar/metadata/base') } exact />
					</Switch>
				)}/>
				{/* 时间 */}
				<Route 	path={ `${url}/time` } render={ ({ match }) => (
					<Switch>
						<Route path={`${match.url}/DateTime`} 	component={ Import('dart/time/DateTime') } exact />
						<Route path={`${match.url}/Duration`} 	component={ Import('dart/time/Duration') } exact />
					</Switch>
				) }/>
				{/* 包 */}
				<Route 	path={ `${url}/package` } render={ ({ match }) => (
					<Switch>
						<Route path={`${match.url}/convert`} 	component={ Import('dart/package/convert') } exact />
						<Route path={`${match.url}/html`} 	component={ Import('dart/package/html') } exact />
						<Route path={`${match.url}/math`} 	component={ Import('dart/package/math') } exact />
					</Switch>
				) }/>
				{/* document */}
				<Route 	path={ `${url}/document` } render={ ({ match }) => (
					<Switch>
						<Route path={`${match.url}/dom`} 	component={ Import('dart/document/dom') } exact />
					</Switch>
				) }/>
				{/*  */}
				<Redirect from={url}		to={ `${url}` } 		exact />
				<Route 	render = { () => <div>404</div> } exact />
			</Switch>
		)
	}
}

export default withRouter(AppRouter)