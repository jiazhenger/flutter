import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'路由 props',
	data:[
		{ keyword:'withRouter( )', pro:'将一个组件包裹进Route里面，history, location, match 就会被放进这个组件的 props属性中 ',  code:[ {path:'react/router/props/withRouter'} ]},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }