/* ====================================== 模块子路由配置  ====================================== */
import React from 'react'
import { Switch, Route } from 'react-router-dom'
// ===================================================================== 异步加载
import Import from '@common/bundle'
// ===================================================================== 二级路由
export default class ImageRouter extends React.Component{
	render(){
		const { match } = this.props
		return (
				<Switch>
					{/* Image widget */}
					<Route path={`${match.url}/Image`} 						component={ Import('flutter/widget/image/widget/Image/Image') } exact />
					<Route path={`${match.url}/ImageAsset`} 				component={ Import('flutter/widget/image/widget/Image/Image.asset') } exact />
					<Route path={`${match.url}/ImageNetwork`} 				component={ Import('flutter/widget/image/widget/Image/Image.network') } exact />
					<Route path={`${match.url}/ImageFile`} 					component={ Import('flutter/widget/image/widget/Image/Image.file') } exact />
					<Route path={`${match.url}/ImageMemory`} 				component={ Import('flutter/widget/image/widget/Image/Image.memory') } exact />
					{/* FadeInImage widget */}
					<Route path={`${match.url}/FadeInImage`} 				component={ Import('flutter/widget/image/widget/FadeInImage/FadeInImage') } exact />
					<Route path={`${match.url}/FadeInImageAssetNetwork`} 	component={ Import('flutter/widget/image/widget/FadeInImage/FadeInImageAssetNetwork') } exact />
					<Route path={`${match.url}/FadeInImageMemoryNetwork`} 	component={ Import('flutter/widget/image/widget/FadeInImage/FadeInImageMemoryNetwork') } exact />
					{/* style */}
					<Route path={`${match.url}/DecorationImage`} 			component={ Import('flutter/widget/image/style/DecorationImage') } exact />
					<Route path={`${match.url}/AssetImage`} 				component={ Import('flutter/widget/image/style/AssetImage') } exact />
					<Route path={`${match.url}/NetworkImage`} 				component={ Import('flutter/widget/image/style/NetworkImage') } exact />
					<Route path={`${match.url}/BoxFit`} 					component={ Import('flutter/widget/image/style/x/BoxFit') } exact />
					<Route path={`${match.url}/ImageRepeat`} 				component={ Import('flutter/widget/image/style/x/ImageRepeat') } exact />
					<Route path={`${match.url}/BlendMode`} 					component={ Import('flutter/widget/image/style/x/BlendMode') } exact />
					<Route path={`${match.url}/ColorFilter`} 				component={ Import('flutter/widget/image/style/x/ColorFilter') } exact />
					<Route path={`${match.url}/FilterQuality`} 				component={ Import('flutter/widget/image/style/x/FilterQuality') } exact />
				</Switch>
		)
	}
}