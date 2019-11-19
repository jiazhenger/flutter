import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'简单对话框可以显示附加的提示或操作',
	keyword:'SimpleDialog( )',
	type:'SimpleDialog',
	url:'SimpleDialogPage',
	data:[
		{ keyword:'title', type:'Widget', pro:'标题控件' },
		{ keyword:'titlePadding', type:'EdgeInsetsGeometry', pro:'标题补白', link:'/flutter/style/offset/EdgeInsets' },
		{ keyword:'contentPadding', type:'EdgeInsetsGeometry', pro:'内容补白', link:'/flutter/style/offset/EdgeInsets' },
		{ keyword:'backgroundColor', type:'Color', pro:'背景色', link:'/flutter/style/Colors' },
		{ keyword:'elevation', type:'double', pro:'阴影' },
		{ keyword:'shape', type:'ShapeBorder', pro:'形状', link:'/flutter/public/shape' },
		{ keyword:'semanticsLabel', type:'String', pro:'弹窗的语义描述', code:[ {path:'flutter/public/semanticsLabel'} ]},
		{ keyword:'children', type:'List<Widget>', pro:'列表控件', code:[ {path:'flutter/public/widget-children'} ]  },
		{ 
			noOrder:true, pro:'示例', 
			code:[ {path:'flutter/popover/SimpleDialog/SimpleDialog'} ],
			link:[
				{ title:'MaterialButton', url:'/flutter/button/MaterialButton' },
				{ title:'showDialog', url:'/flutter/popover/showDialog' },
				{ title:'SimpleDialogOption', url:'/flutter/popover/SimpleDialogOption' }
			]
		}
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }