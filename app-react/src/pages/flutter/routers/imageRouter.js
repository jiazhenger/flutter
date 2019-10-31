/* ====================================== 模块子路由配置  ====================================== */
import React from 'react'
import { Switch, Route } from 'react-router-dom'
//import { TransitionGroup, CSSTransition } from 'react-transition-group'
// ===================================================================== 异步加载
import { Import } from '@common/bundle'
// ===================================================================== 二级路由
export default class ImageRouter extends React.Component{
	render(){
		const { match } = this.props
		return (
				<Switch>
					{/* style */}
					<Route path={`${match.url}/DecorationImage`} 		component={ Import('flutter/image/style/DecorationImage') } exact />
					<Route path={`${match.url}/AssetImage`} 			component={ Import('flutter/image/style/AssetImage') } exact />
					<Route path={`${match.url}/NetworkImage`} 			component={ Import('flutter/image/style/NetworkImage') } exact />
					<Route path={`${match.url}/BoxFit`} 				component={ Import('flutter/image/style/x/BoxFit') } exact />
					<Route path={`${match.url}/ImageRepeat`} 			component={ Import('flutter/image/style/x/ImageRepeat') } exact />
					<Route path={`${match.url}/BlendMode`} 				component={ Import('flutter/image/style/x/BlendMode') } exact />
					<Route path={`${match.url}/ColorFilter`} 			component={ Import('flutter/image/style/x/ColorFilter') } exact />
					<Route path={`${match.url}/FilterQuality`} 			component={ Import('flutter/image/style/x/FilterQuality') } exact />
					{/* Image widget */}
					<Route path={`${match.url}/Image`} 				component={ Import('flutter/image/widget/Image/Image') } exact />
					<Route path={`${match.url}/ImageAsset`} 		component={ Import('flutter/image/widget/Image/Image.asset') } exact />
					<Route path={`${match.url}/ImageNetwork`} 		component={ Import('flutter/image/widget/Image/Image.network') } exact />
					<Route path={`${match.url}/ImageFile`} 			component={ Import('flutter/image/widget/Image/Image.file') } exact />
					<Route path={`${match.url}/ImageMemory`} 		component={ Import('flutter/image/widget/Image/Image.memory') } exact />
					{/* FadeInImage widget */}
					<Route path={`${match.url}/FadeInImage`} 				component={ Import('flutter/image/widget/FadeInImage/FadeInImage') } exact />
				</Switch>
		)
	}
}