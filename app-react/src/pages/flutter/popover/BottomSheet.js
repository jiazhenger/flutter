import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'弹窗',
	keyword:'BottomSheet( )',
	type:'BottomSheet ',
	url:'BottomSheetPage',
	data:[
		{ keyword:'builder', type:'Widget Function(BuildContext)', pro:'自动定义弹窗内容', code:[ {path:'flutter/public/builder'} ] },
		{ keyword:'backgroundColor', type:'Color', pro:'背景色', link:'/flutter/style/Colors' },
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
		{ keyword:'enableDrag', type:'bool', pro:'开启拖动' },
		{ keyword:'animationController', type:'AnimationController', pro:'动画控件器' },
		{ keyword:'onClosing', type:'void Function', pro:'关闭时执行', code:[ {path:'flutter/event/onClosing'} ], },
		{ 
			noOrder:true, pro:'示例', 
			code:[ {path:'flutter/popover/showModalBottomSheet/showModalBottomSheet'} ],
			link:[
				{ title:'RaisedButton', url:'/flutter/button/RaisedButton' },
			]
		},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }