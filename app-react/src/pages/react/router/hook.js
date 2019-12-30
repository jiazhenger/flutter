import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'路由模式',
	data:[
		{ keyword:'useHistory( )', pro:'props.history',  code:[ {path:'react/router/hook/useHistory'} ]},
		{ keyword:'useLocation( )', pro:'props.location',  code:[ {path:'react/router/hook/useLocation'} ]},
		{ keyword:'useParams( )', pro:'props.location.param',  code:[ {path:'react/router/hook/useParams'} ]},
		{ keyword:'useRouteMatch( )', pro:'matchPath( )',  code:[ {path:'react/router/hook/useRouteMatch'} ]},
		{ keyword:'useQuery( )', pro:'自定义获取可选参数',  code:[ {path:'react/router/hook/useQuery'} ]},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }