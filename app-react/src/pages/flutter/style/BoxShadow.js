import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'阴影',
	data:[
		{ keyword:'Alignment.position', type:'Alignment', pro:'位置对齐', code:[ {path:'flutter/style/Alignment/position'} ], url:'AlignmentPosition' },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }