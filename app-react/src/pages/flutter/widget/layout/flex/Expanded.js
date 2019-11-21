import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'分配弹性盒子的空间',
	keyword:'Expanded( )',
	type:'Expanded',
	data:[
		{ keyword:'flex', type:'int', pro:'占剩余空间的份数，== flex:1' },
		{ keyword:'child', type:'Widget', pro:'控件' }
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }