import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'子控件高度递增',
	keyword:'IntrinsicHeight( )',
	type:'IntrinsicHeight',
	data:[
		{ keyword:'child', type:'Widget', pro:'控件' }
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }