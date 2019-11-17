import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'纵横比',
	keyword:'AspectRatio( )',
	type:'AspectRatio',
	data:[
		{ keyword:'aspectRatio', type:'double', pro:'纵横比' },
		{ keyword:'child', type:'Widget', pro:'控件' }
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }