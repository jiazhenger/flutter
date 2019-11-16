import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'碎片列表',
	keyword:'SliverChildListDelegate( )',
	type:'SliverChildListDelegate',
	url:'CustomScrollViewPage',
	data:[
		{ keyword:'children', type:'List<Widget>', pro:'控件列表', isValue:true, code:[ {path:'flutter/widget/scroll/SliverChildListDelegate/children'} ] },
		{ keyword:'addAutomaticKeepAlives', type:'bool', pro:'' },
		{ keyword:'addRepaintBoundaries', type:'bool', pro:'' },
		{ keyword:'addSemanticIndexes', type:'bool', pro:'' },
		{ keyword:'semanticIndexCallback', type:'int Function(Widget, int)', pro:'', code:[ {path:'flutter/widget/scroll/SliverChildListDelegate/semanticIndexCallback'} ] },
		{ keyword:'semanticIndexOffset', type:'int', pro:'' },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }