import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'透明',
	keyword:'Opacity( )',
	type:'Opacity',
	data:[
		{ keyword:'opacity', type:'double', pro:'透明度，v>=0 && v<=1' },
		{ keyword:'alwaysIncludeSemantics', type:'bool', pro:'是否始终包含子级的语义信息' },
		{ keyword:'child', type:'Widget', pro:'控件' }
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }