import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'一个会中断用户操作的对话框，需要用户确认，相当于 alert( )',
	keyword:'AlertDialog( )',
	type:'AlertDialog',
	url:'AlertDialogPage',
	data:[
		{ deviceTitle:'标题', keyword:'title', type:'Widget', pro:'标题控件' },
		{ keyword:'titlePadding', type:'EdgeInsetsGeometry', pro:'标题补白', link:'/flutter/style/offset/EdgeInsets' },
		{ keyword:'titleTextStyle', type:'TextStyle', pro:'标题样式', link:'/flutter/style/TextStyle' },
		{ deviceTitle:'内容', keyword:'content', type:'Widget', pro:'内容控件' },
		{ keyword:'contentPadding', type:'EdgeInsetsGeometry', pro:'内容补白', link:'/flutter/style/offset/EdgeInsets' },
		{ keyword:'contentTextStyle', type:'TextStyle', pro:'内容样式', link:'/flutter/style/TextStyle' },
		{ deviceTitle:'弹框样式',keyword:'backgroundColor', type:'Color', pro:'背景色', link:'/flutter/style/Colors' },
		{ keyword:'elevation', type:'double', pro:'阴影' },
		{ 
			keyword:'shape', type:'ShapeBorder', pro:'形状',
			code:[ {path:'flutter/public/shape'} ],
			link:[ 
				{ title:'BeveledRectangleBorder', url:'/flutter/style/shape/BeveledRectangleBorder' },
				{ title:'CircleBorder', url:'/flutter/style/shape/CircleBorder' },
				{ title:'RoundedRectangleBorder', url:'/flutter/style/shape/RoundedRectangleBorder' },
				{ title:'StadiumBorder', url:'/flutter/style/shape/StadiumBorder' },
				{ title:'UnderlineInputBorder', url:'/flutter/style/shape/UnderlineInputBorder' },
				{ title:'Border', url:'/flutter/style/border/Border' }
			]
		},
		{ deviceTitle:'动作', keyword:'actions', type:'List<Widget>', pro:'操作控件列表'},
		{ deviceTitle:'其它',  keyword:'semanticsLabel', type:'String', pro:'弹窗的语义描述', code:[ {path:'flutter/public/semanticsLabel'} ]},
		{ 
			noOrder:true, pro:'示例', 
			code:[ {path:'flutter/popover/AlertDialog/AlertDialog'} ],
			link:[
				{ title:'MaterialButton', url:'/flutter/button/MaterialButton' },
				{ title:'showDialog', url:'/flutter/popover/showDialog' },
				{ title:'Container', url:'/flutter/layout/Container' },
			]
		},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }