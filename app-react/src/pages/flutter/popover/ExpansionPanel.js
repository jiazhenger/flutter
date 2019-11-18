import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'展开、收缩弹窗',
	keyword:'ExpansionPanel( )',
	type:'ExpansionPanel',
	url:'ExpansionPanelPage',
	data:[
		{ keyword:'content', type:'Widget', pro:'主要内容' },
		{ keyword:'backgroundColor', type:'Color', pro:'背景色', link:'/flutter/style/Colors' },
		{ keyword:'elevation', type:'double', pro:'阴影' },
		{ keyword:'shape', type:'ShapeBorder', pro:'形状', link:'/flutter/public/shape' },
		{ keyword:'behavior', type:'SnackBarBehavior', pro:'行为', code:[ {path:'flutter/public/SnackBarBehavior'} ] },
		{ keyword:'duration', type:'Duration', pro:'动画过渡时长', link:'/flutter/time/Duration' },
		{ keyword:'animation', type:'Animation<double>', pro:'动画', code:[ {path:'flutter/public/animation'} ] },
		{ keyword:'action', type:'SnackBarAction', pro:'关闭按钮控件', link:'/flutter/popover/SnackBarAction' },
		{ 
			noOrder:true, pro:'示例', 
			code:[ {path:'flutter/popover/SnackBar/SnackBar'} ],
			link:[
				{ title:'Builder', url:'/flutter/widget/Builder' },
				{ title:'Center', url:'/flutter/layout/Center' },
				{ title:'RaisedButton', url:'/flutter/button/RaisedButton' },
				{ title:'SnackBarAction', url:'/flutter/popover/SnackBarAction' }
			]
		}
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }