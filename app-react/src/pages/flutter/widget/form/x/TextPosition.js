import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'文本定位',
	keyword:'TextPosition( )',
	type:'TextSelection',
	grayText:'const',
	data:[
		{ keyword:'offset', type:'int', pro:'偏移' },
		{ keyword:'affinity', type:'TextAffinity', pro:'', code:[{ path:'flutter/widget/form/TextFormField/x/TextAffinity'}] },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }