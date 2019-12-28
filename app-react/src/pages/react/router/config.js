import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'路由配置',
	data:[
		{ keyword:'< Switch >', pro:'渲染与位置匹配的第一个子元素<Route> 或 <Redirect>，即：仅仅渲染一个路由', code:[ {path:'react/router/config/Switch'} ]},
		{ keyword:'< Route >', pro:'路径与当前URL匹配时呈现的UI组件', code:[ {path:'react/router/config/Route'} ]},
		{ keyword:'< Redirect >', pro:'重定向路由', code:[ {path:'react/router/config/Redirect'} ]},
		{ pro:'404', code:[ {path:'react/router/config/404'} ]},
		{ pro:'声明子路由的三种方式 ',  code:[ {path:'react/router/config/children'} ]},
		{ keyword:'withRouter( )', pro:'添加 history, location, match 到组件 props 中 ',  code:[ {path:'react/router/config/withRouter'} ]},
		{ keyword:'< Prompt >', pro:'提示路由退出，通常是在表单输入时使用', code:[ {path:'react/router/config/Prompt'} ]},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }