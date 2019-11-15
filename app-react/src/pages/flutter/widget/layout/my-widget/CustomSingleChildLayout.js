import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'自定义 child 控件',
	keyword:'CustomSingleChildLayout( )',
	type:'CustomSingleChildLayout',
	url:'CustomSingleChildLayoutPage',
	data:[
		{ 
			keyword:'delegate', type:'My', pro:'自定义',
			code:[ {path:'flutter/widget/layout/my-widget/CustomSingleChildLayout'} ],
			link:[ {title:'BoxConstraints',url:'/flutter/style/BoxConstraints'} ]
		},
		{ keyword:'child', type:'Widget', pro:'控件' }
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }