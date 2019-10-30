import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'枚举类',
	data:[
		{ keyword:'enum', pro:'定义枚举类', code:[{ path:'dart/grammar/class/enum/base' }]},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }