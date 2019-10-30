import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'两个注解',
	data:[
		{ keyword:'@override', pro:'重写类成员', code:[ {path:'dart/grammar/metadata/override'} ]},
		{ keyword:'@deprecated', pro:'标注弃用', code:[ {path:'dart/grammar/metadata/deprecated'} ]},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }