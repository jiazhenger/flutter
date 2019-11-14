import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'编辑值',
	keyword:'TextEditingValue( )',
	type:'TextEditingValue',
	data:[
		{ keyword:'text', type:'String', pro:'编辑文本' },
		{ keyword:'selection', type:'TextSelection', pro:'文本选择', link:'/flutter/form/TextSelection' },
		{ keyword:'composing', type:'TextRange', pro:'编辑 range' ,link:'/flutter/form/TextRange' },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }