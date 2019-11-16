/* ====================================== 模块子路由配置  ====================================== */
import React from 'react'
import { Switch, Route } from 'react-router-dom'
//import { TransitionGroup, CSSTransition } from 'react-transition-group'
// ===================================================================== 异步加载
import { Import } from '@common/bundle'
// ===================================================================== 二级路由
export default class 
 extends React.Component{
	render(){
		const { match } = this.props
		return (
			<Switch>
				<Route path={`${match.url}/ListView`} 	component={ Import('flutter/widget/scroll/ListView') } exact />
				<Route path={`${match.url}/GridView`} 	component={ Import('flutter/widget/scroll/GridView') } exact />
				<Route path={`${match.url}/CustomScrollView`} 	component={ Import('flutter/widget/scroll/CustomScrollView') } exact />
				{/* x */}
				<Route path={`${match.url}/SliverPadding`} 	component={ Import('flutter/widget/scroll/x/SliverPadding') } exact />
				<Route path={`${match.url}/SliverList`} 	component={ Import('flutter/widget/scroll/x/SliverList') } exact />
				<Route path={`${match.url}/SliverChildListDelegate`} 	component={ Import('flutter/widget/scroll/x/SliverChildListDelegate') } exact />
			</Switch>
		)
	}
}