import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'对齐方式',
	isGroup:true,
	data:[
		{
			title:'对齐方式，继承于 Alignment',
			keyword:'FractionalOffset.x',
			type:'FractionalOffset',
			url:'FractionalOffsetPosition',
			data:[
				{ keyword:'topLeft', pro:'水平居左，垂直居上' },
				{ keyword:'topCenter', pro:'水平居中，垂直居上' },
				{ keyword:'topRight', pro:'水平居右，垂直居上' },
				{ keyword:'centerLeft', pro:'水平居左，垂直居中' },
				{ keyword:'center', pro:'水平居中，垂直居中' },
				{ keyword:'centerRight', pro:'水平居右，垂直居中' },
				{ keyword:'bottomLeft', pro:' 水平居左，垂直居下' },
				{ keyword:'bottomCenter', pro:'水平居中，垂直居下' },
				{ keyword:'bottomRight', pro:'水平居右，垂直居下' },
				{ noOrder:true, pro:'示例', code:[ {path:'flutter/style/align/FractionalOffset/position'} ] },
			]
		},
		{
			title:'自定义对齐',
			keyword:'FractionalOffset( )',
			type:'FractionalOffset',
			url:'FractionalOffsetXY',
			data:[
				{ keyword:'x', type:'double', pro:'水平对齐', isValue:true },
				{ keyword:'y', type:'double', pro:'垂直对齐', isValue:true },
				{ noOrder:true, pro:'示例', code:[ {path:'flutter/style/align/FractionalOffset/xy'} ] },
			]
		},
		{
			title:'自定义对齐',
			keyword:'FractionalOffset.fromOffsetAndRect( )',
			type:'FractionalOffset',
			url:'FractionalOffsetFromOffsetAndRect',
			data:[
				{ keyword:'offset', type:'Offset', pro:'偏移', isValue:true, link:'/flutter/style/offset/Offset'},
				{ keyword:'rect', type:'Rect', pro:'', isValue:true,link:'/flutter/style/Rect' },
				{ noOrder:true, pro:'示例', code:[ {path:'flutter/style/align/FractionalOffset/fromOffsetAndRect'} ] },
			]
		},
		{
			title:'自定义对齐',
			keyword:'FractionalOffset.fromOffsetAndSize( )',
			type:'FractionalOffset',
			url:'FractionalOffsetFromOffsetAndSize',
			data:[
				{ keyword:'offset', type:'Offset', pro:'偏移', isValue:true, link:'/flutter/style/offset/Offset' },
				{ keyword:'size', type:'Size', pro:'大小', isValue:true, link:'/flutter/style/Size' },
				{ noOrder:true, pro:'示例', code:[ {path:'flutter/style/align/FractionalOffset/fromOffsetAndSize'} ] },
			]
		},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }