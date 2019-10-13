import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'挂载路由',
	data:[
		{ keyword:'routes: <String, WidgetBuilder>{ }', pro:'基本路由格式', code:[ {path:'flutter/app/router/base-router/base-router'} ]},
		{ keyword:'routes: Router.router', pro:'导入外部路由', 
			code:[ 
				{title:'home.dart',path:'flutter/app/router/base-router/home-page'},
				{title:'router.dart',path:'flutter/app/router/base-router/router'},
				{title:'使用',path:'flutter/app/router/base-router/outer-router'},
			]
		},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }