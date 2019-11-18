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
					<Route path={`${match.url}/showModalBottomSheet`} 	component={ Import('flutter/popover/showModalBottomSheet') } exact />
					<Route path={`${match.url}/showBottomSheet`} 	component={ Import('flutter/popover/showBottomSheet') } exact />
					<Route path={`${match.url}/SnackBar`} 	component={ Import('flutter/popover/SnackBar') } exact />
					<Route path={`${match.url}/PopupMenuButton`} 	component={ Import('flutter/popover/PopupMenuButton') } exact />
					<Route path={`${match.url}/showDialog`} 	component={ Import('flutter/popover/showDialog') } exact />
					<Route path={`${match.url}/SimpleDialog`} 	component={ Import('flutter/popover/SimpleDialog') } exact />
					<Route path={`${match.url}/AlertDialog`} 	component={ Import('flutter/popover/AlertDialog') } exact />
					<Route path={`${match.url}/ExpansionPanel`} 	component={ Import('flutter/popover/ExpansionPanel') } exact />
					{/* x */}
					<Route path={`${match.url}/SnackBarAction`} 	component={ Import('flutter/popover/x/SnackBarAction') } exact />
					<Route path={`${match.url}/PopupMenuItem`} 	component={ Import('flutter/popover/x/PopupMenuItem') } exact />
				</Switch>
		)
	}
}