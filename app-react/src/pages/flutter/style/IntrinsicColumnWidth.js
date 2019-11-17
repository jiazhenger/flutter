import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'列宽度', 
	keyword:'IntrinsicColumnWidth( )',
	type:'IntrinsicColumnWidth',
	data:[
		{ keyword:'flex', type:'double',  pro:'分配比例' },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }