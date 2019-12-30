import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'location',
	data:[
		{ keyword:'pathname', pro:'路由名称',  code:[ {path:'react/router/props/location/location'} ]},
		{ keyword:'search', pro:'可选参数',  code:[ {path:'react/router/props/location/search'} ]},
		{ keyword:'hash', pro:'hash参数',  code:[ {path:'react/router/props/location/location'} ]},
		{ keyword:'state', pro:'state 参数',  code:[ {path:'react/router/props/location/location'} ]},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }