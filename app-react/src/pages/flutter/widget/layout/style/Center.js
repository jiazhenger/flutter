import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'水平居中',
	keyword:'Center( )',
	type:'Center',
	data:[
		{ keyword:'widthFactor', type:'double', pro:'宽度是child的倍数' },
		{ keyword:'heightFactor', type:'double', pro:'高度是child的倍数' },
		{ keyword:'child', type:'Widget', pro:'控件' }
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }