import React from 'react'
// ===================================================================== public component
import UbContent from '@cpx/ub-content.component'
import BoxComponent from '@cpt/box.component'
// ===================================================================== component
const $fn = window.$fn
export default class Index extends React.Component{
	componentDidMount(){
		$fn.setTitle('挂载路由')
		$fn.hidePhone()
	}
	render(){
		return (
			<UbContent className='page-content'>
				<BoxComponent keyword='routes: <String, WidgetBuilder>{}' pro='基本路由格式' code={[ {path:'flutter/app/router/base-router/base-router'} ]} />
				
				<BoxComponent keyword='routes: Router.router' pro='导入外部路由' code={[ 
					{title:'home.dart',path:'flutter/app/router/base-router/home-page'},
					{title:'router.dart',path:'flutter/app/router/base-router/router'},
					{title:'使用',path:'flutter/app/router/base-router/outer-router'},
				]} />
			</UbContent>
		)
	}
}
