import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'match',
	data:[
		{ keyword:'path', pro:'访问路由名称',  code:[ {path:'react/router/props/match/match'} ]},
		{ keyword:'url', pro:'实际路由名称',  code:[ {path:'react/router/props/match/match'} ]},
		{ keyword:'param', pro:'必选参数',  code:[ {path:'react/router/props/match/match'} ]},
		{ keyword:'isExact', pro:'路由是否完全匹配',  code:[ {path:'react/router/props/match/match'} ]},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }