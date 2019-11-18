import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'自定义 children 控件',
	keyword:'CustomMultiChildLayout( )',
	type:'CustomMultiChildLayout',
	url:'CustomMultiChildLayoutPage',
	data:[
		{ keyword:'delegate', type:'My', pro:'自定义', code:[ {path:'flutter/widget/layout/my-widget/CustomMultiChildLayout'} ] },
		{ keyword:'children', type:'List<Widget>', pro:'列表控件', code:[ {path:'flutter/public/widget-children'} ]  },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }