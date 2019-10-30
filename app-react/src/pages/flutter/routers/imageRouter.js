/* ====================================== 模块子路由配置  ====================================== */
import React from 'react'
import { Switch, Route } from 'react-router-dom'
//import { TransitionGroup, CSSTransition } from 'react-transition-group'
// ===================================================================== 异步加载
import { Import } from '@common/bundle'
// ===================================================================== 二级路由
class ImageRouter extends React.Component{
	render(){
		const { match } = this.props
		return (
				<Switch>
					{/* style */}
					<Route path={`${match.url}/DecorationImage`} 		component={ Import('flutter/image/style/DecorationImage') } exact />
					<Route path={`${match.url}/BoxFit`} 				component={ Import('flutter/image/style/x/BoxFit') } exact />
					<Route path={`${match.url}/ImageRepeat`} 			component={ Import('flutter/image/style/x/ImageRepeat') } exact />
					<Route path={`${match.url}/BlendMode`} 				component={ Import('flutter/image/style/x/BlendMode') } exact />
					<Route path={`${match.url}/ColorFilter`} 			component={ Import('flutter/image/style/x/ColorFilter') } exact />
					{/* widget */}
					<Route path={`${match.url}/Image`} 		component={ Import('flutter/image/widget/Image') } exact />
				</Switch>
		)
	}
}

export default ImageRouter