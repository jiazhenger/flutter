import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'点击弹出式菜单列表',
	keyword:'PopupMenuButton( )',
	type:'PopupMenuButton',
	url:'PopupMenuButtonPage',
	data:[
		{ keyword:'initialValue', type:'T', pro:'默认值，任意数据类型' },
		{ 
			keyword:'itemBuilder', type:'List<PopupMenuEntry<T>> Function(BuildContext) itemBuilder', pro:'自定义菜单列表',
			code:[ {path:'flutter/popover/PopupMenuButton/itemBuilder'} ],
			link:[
				{ title:'PopupMenuItem', url:'/flutter/popover/PopupMenuItem' },
			]
		},
		{ keyword:'tooltip', type:'String', pro:'操作提示' },
		{ keyword:'elevation', type:'double', pro:'阴影' },
		{ keyword:'padding', type:'EdgeInsetsGeometry', pro:'补白', link:'/flutter/style/offset/EdgeInsets' },
		{ keyword:'icon', type:'Icon', pro:'图标', link:'/flutter/icon/Icon' },
		{ keyword:'offset', type:'Offset', pro:'偏移', link:'/flutter/style/offset/Offset' },
		{ keyword:'onSelected', type:'void Function(T)', pro:'选择时执行', code:[ {path:'flutter/event/onSelected'} ], },
		{ keyword:'onCanceled', type:'void Function( )', pro:'取消后执行', code:[ {path:'flutter/event/onCanceled'} ], },
		{ keyword:'child', type:'Widget', pro:'点击的控件，不能为 button'},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }