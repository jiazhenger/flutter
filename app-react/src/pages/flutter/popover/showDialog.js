import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'弹出弹窗',
	keyword:'showDialog( )',
	type:'showDialog',
	url:'showDialogPage',
	data:[
		{ keyword:'context', type:'BuildContext', pro:'' },
		{ keyword:'barrierDismissible', type:'bool', pro:'是否必须是按钮点击触发弹窗' },
		{ keyword:'builder', type:'Widget Function(BuildContext)', pro:'自定义弹窗内容', code:[ {path:'flutter/popover/showDialog/builder'} ]},
		{ 
			noOrder:true, pro:'示例', 
			code:[ {path:'flutter/popover/showDialog/showDialog'} ],
			link:[
				{ title:'MaterialButton', url:'/flutter/button/MaterialButton' },
				{ title:'Align', url:'/flutter/layout/Align' },
				{ title:'Container', url:'/flutter/layout/Container' },
			]
		},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }