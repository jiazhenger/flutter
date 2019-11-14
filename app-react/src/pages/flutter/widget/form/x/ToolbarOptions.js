import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'工具栏选项',
	keyword:'ToolbarOptions( )',
	type:'ToolbarOptions',
	grayText:'const',
	data:[
		{ keyword:'copy', type:'bool', pro:'复制' },
		{ keyword:'cut', type:'bool', pro:'剪切' },
		{ keyword:'paste', type:'bool', pro:'粘贴' },
		{ keyword:'selectAll', type:'bool', pro:'全选' },
		{ noOrder:true, pro:'示例', code:[{ path:'flutter/widget/form/TextFormField/x/ToolbarOptions'}], },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }