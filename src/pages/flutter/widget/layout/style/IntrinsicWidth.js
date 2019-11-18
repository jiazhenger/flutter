import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'子控件宽度递增',
	keyword:'IntrinsicWidth( )',
	type:'IntrinsicWidth',
	data:[
		{ keyword:'stepWidth', type:'double', pro:'递增宽度' },
		{ keyword:'stepHeight', type:'double', pro:'递增高度' },
		{ keyword:'child', type:'Widget', pro:'控件' }
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }