import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'Hook',
	data:[
		{ keyword:'useNavigate', pro:'路由跳转', code:[ {path:'react/router6/skip'} ]},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }