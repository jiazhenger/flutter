import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'',
	keyword:'有状态、无状态控件',
	data:[
		{ keyword:'StatelessWidget', type:'StatelessWidget', pro:'无状态', code:[{path:'flutter/com/widget-state/StatelessWidget'}]},
		{ keyword:'StatefullWidget', type:'StatefullWidget', pro:'有状态', code:[{path:'flutter/com/widget-state/StatefullWidget'}]},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }