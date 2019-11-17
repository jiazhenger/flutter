import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'极小尺寸的盒子',
	keyword:'FractionallySizedBox( )',
	type:'FractionallySizedBox',
	data:[
		{ keyword:'widthFactor', type:'double', pro:'宽度度因素' },
		{ keyword:'heightFactor', type:'double', pro:'高度因素' },
		{ keyword:'child', type:'Widget', pro:'控件' }
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }