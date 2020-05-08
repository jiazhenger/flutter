import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'路由配置',
	data:[
		{ pro:'入口路由', code:[ {path:'react/router6/HashRouter'} ]},
		{ pro:'基础路由', code:[ {path:'react/router6/Routes'} ]},
		{ pro:'路由嵌套', code:[ {path:'react/router6/children/path',title:'方法一（/*）'},{path:'react/router6/children/route',title:'方法二 （Route 嵌套）'} ]},
		{ pro:'页面嵌套', code:[ {path:'react/router6/children/page',title:'方法一（/*）'},{path:'react/router6/children/outlet',title:'方法二 （Outlet）'} ]},
		{ pro:'路由配置', code:[ {path:'react/router6/router-config'} ]},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }