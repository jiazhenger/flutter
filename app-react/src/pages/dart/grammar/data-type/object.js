import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'通用类型',
	data:[
		{ pro:'类型声明', code:[ {path:'dart/grammar/var/type/object'} ]},
		{ pro:'创建列表', code:[ {path:'dart/grammar/data-type/object/create'} ]},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }