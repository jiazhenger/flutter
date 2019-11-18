import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'固定列宽度',
	keyword:'FixedColumnWidth( )',
	type:'FixedColumnWidth',
	data:[
		{ keyword:'value', type:'double', pro:'宽度', isValue:true },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }