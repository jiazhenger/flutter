import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'依赖父窗口大小的控件',
	keyword:'LayoutBuilder( )',
	type:'LayoutBuilder',
	url:'LayoutBuilderPage',
	data:[
		{ keyword:'builder', type:'Function(BuildContext, BoxConstraints)', pro:'生成一个高宽始终是 100% 的控件',code:[ {path:'flutter/widget/layout/style/LayoutBuilder/builder'} ] },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }