﻿/* ====================================== 模块子路由配置  ====================================== */
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
					<Route path={`${match.url}/Form`} 	component={ Import('flutter/widget/form/Form') } exact />
					<Route path={`${match.url}/TextFormField`} 	component={ Import('flutter/widget/form/TextFormField') } exact />
					<Route path={`${match.url}/TextField`} 	component={ Import('flutter/widget/form/TextField') } exact />
					<Route path={`${match.url}/Checkbox`} 	component={ Import('flutter/widget/form/Checkbox') } exact />
					<Route path={`${match.url}/Radio`} 	component={ Import('flutter/widget/form/Radio') } exact />
					<Route path={`${match.url}/Switch`} 	component={ Import('flutter/widget/form/Switch') } exact />
					<Route path={`${match.url}/Slider`} 	component={ Import('flutter/widget/form/Slider') } exact />
					<Route path={`${match.url}/showDatePicker`} 	component={ Import('flutter/widget/form/showDatePicker') } exact />
					<Route path={`${match.url}/showTimePicker`} 	component={ Import('flutter/widget/form/showTimePicker') } exact />
					{/* style */}
					<Route path={`${match.url}/TextEditingValue`} 	component={ Import('flutter/widget/form/x/TextEditingValue') } exact />
					<Route path={`${match.url}/TextRange`} 	component={ Import('flutter/widget/form/x/TextRange') } exact />
					<Route path={`${match.url}/TextSelection`} 	component={ Import('flutter/widget/form/x/TextSelection') } exact />
					<Route path={`${match.url}/TextPosition`} 	component={ Import('flutter/widget/form/x/TextPosition') } exact />
					<Route path={`${match.url}/ToolbarOptions`} 	component={ Import('flutter/widget/form/x/ToolbarOptions') } exact />
					<Route path={`${match.url}/ScrollController`} 	component={ Import('flutter/widget/form/x/ScrollController') } exact />
				</Switch>
		)
	}
}