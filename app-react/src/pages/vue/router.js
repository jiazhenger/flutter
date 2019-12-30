/* ====================================== 模块子路由配置  ====================================== */
import React from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
// ===================================================================== 异步加载
import Import from '@common/bundle'
// ===================================================================== 二级路由
class AppRouter extends React.Component{
	render(){
		const { url } = this.props.match
		return (
			<Switch>
				<Route 	path={ `${url}` }  component={ Import('vue/index') } exact />
				{/* 组件 */}
				<Route path={ `${url}/component` } render={ ({ match }) => (
					<Switch>
						<Route path={`${match.url}/lifeCycle`} 	component={ Import('vue/component/lifeCycle') } exact />
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