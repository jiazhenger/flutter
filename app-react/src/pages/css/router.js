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
				<Route 	path={ `${url}` }  component={ Import('css/index') } exact />
				{/* 基础语法 */}
				<Route path={ `${url}/base` } render={ ({ match }) => (
					<Switch>
						<Route path={`${match.url}/import`} 	component={ Import('css/base/import') } exact />
						<Route path={`${match.url}/grammar`} 	component={ Import('css/base/grammar') } exact />
						<Route path={`${match.url}/browser`} 	component={ Import('css/base/browser') }/>
					</Switch>
				)}/>
				{/* css 样式 */}
				<Route path={ `${url}/style` } render={ ({ match }) => (
					<Switch>
						<Route path={`${match.url}/font`} 			component={ Import('css/style/font') } exact />
						<Route path={`${match.url}/text`} 			component={ Import('css/style/text') } exact />
						<Route path={`${match.url}/size`} 			component={ Import('css/style/size') } exact />
						<Route path={`${match.url}/background`} 	component={ Import('css/style/background') } exact />
						<Route path={`${match.url}/border`} 		render={ ({ match }) => (
							<Switch>
								<Route path={`${match.url}/border`} 			component={ Import('css/style/border/border') } exact />
								<Route path={`${match.url}/border-image`} 		component={ Import('css/style/border/border-image') } exact />
								<Route path={`${match.url}/outline`} 			component={ Import('css/style/border/outline') } exact />
								<Route path={`${match.url}/border-radius`} 		component={ Import('css/style/border/border-radius') } exact />
							</Switch>
						)} />
						<Route path={`${match.url}/opacity`} 		component={ Import('css/style/opacity') } exact />
						<Route path={`${match.url}/margin`} 		component={ Import('css/style/margin') } exact />
						<Route path={`${match.url}/padding`} 		component={ Import('css/style/padding') } exact />
						<Route path={`${match.url}/float`} 			component={ Import('css/style/float') } exact />
						<Route path={`${match.url}/position`} 		component={ Import('css/style/position') } exact />
						<Route path={`${match.url}/hidden`} 		component={ Import('css/style/hidden') } exact />
						<Route path={`${match.url}/list`} 			component={ Import('css/style/list') } exact />
						<Route path={`${match.url}/table`} 			component={ Import('css/style/table') } exact />
						<Route path={`${match.url}/cursor`} 		component={ Import('css/style/cursor') } exact />
						<Route path={`${match.url}/filter`} 		component={ Import('css/style/filter') } exact />
						<Route path={`${match.url}/flex`} 			component={ Import('css/style/flex') } exact />
						<Route path={`${match.url}/transform`} 		component={ Import('css/style/transform') } exact />
						<Route path={`${match.url}/transition`} 		component={ Import('css/style/transition') } exact />
						<Route path={`${match.url}/animation`} 		component={ Import('css/style/animation') } exact />
						<Route path={`${match.url}/other`} 			component={ Import('css/style/other') } exact />
					</Switch>
				)}/>
				{/* 选择器 */}
				<Route path={ `${url}/selector` } render={ ({ match }) => (
					<Switch>
						<Route path={`${match.url}/base`} 	component={ Import('css/selector/base') } exact />
						<Route path={`${match.url}/pseudo`} 	component={ Import('css/selector/pseudo') } exact />
						<Route path={`${match.url}/other`} 	component={ Import('css/selector/other') } exact />
					</Switch>
				)}/>
				{/* 响应式布局 */}
				<Route path={ `${url}/responsive-layout` } render={ ({ match }) => (
					<Switch>
						<Route path={`${match.url}/media`} 	component={ Import('css/responsive-layout/media') } exact />
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