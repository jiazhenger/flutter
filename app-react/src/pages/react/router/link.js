import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'路由链接',
	data:[
		{ keyword:'<Link>', pro:'简单链接', code:[ {path:'react/router/link/Link'} ]},
		{ keyword:'<NavLink>', pro:'复杂链接', code:[ {path:'react/router/link/NavLink'} ]},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }