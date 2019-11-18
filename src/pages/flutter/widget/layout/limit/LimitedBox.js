import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'限制盒子最大尺寸',
	keyword:'LimitedBox( )',
	type:'LimitedBox',
	data:[
		{ keyword:'maxWidth', type:'double', pro:'最大宽度，默认：double.infinity'},
		{ keyword:'maxHeight', type:'double', pro:'最大高度，默认：double.infinity'},
		{ keyword:'child', type:'Widget', pro:'控件' }
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }