import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'圆角',
	isGroup:true,
	data:[
		{ title:'无圆角', grayText:'const', keyword:'BorderRadius.zero', type:'BorderRadius' },
		{
			title:'四角圆角',
			grayText:'const',
			keyword:'BorderRadius.all( )',
			type:'BorderRadius',
			link:'/flutter/style/borderRadius/Radius',
			url:'BorderRadiusAll',
			data:[
				{ keyword:'radius', type:'Radius', pro:'圆角值', isValue:true, link:'/flutter/style/borderRadius/Radius' },
				{ noOrder:true, pro:'示例', code:[ {path:'flutter/style/borderRadius/BorderRadius/all'} ] },
			],
		},
		{
			title:'四角圆角',
			keyword:'BorderRadius.circular( )',
			type:'BorderRadius',
			url:'BorderRadiusCircular',
			data:[
				{ keyword:'radius', type:'double', pro:'圆角值', isValue:true }
			]
		},
		{
			title:'水平圆角',
			grayText:'const',
			keyword:'BorderRadius.horizontal( )',
			type:'BorderRadius',
			url:'BorderRadiusHorizontal',
			data:[
				{ keyword:'left', type:'Radius', pro:'左侧', isValue:true, link:'/flutter/style/borderRadius/Radius' },
				{ keyword:'right', type:'Radius', pro:'右侧', isValue:true, link:'/flutter/style/borderRadius/Radius' },
				{ noOrder:true, pro:'示例', code:[ {path:'flutter/style/borderRadius/BorderRadius/horizontal'} ] },
			]
		},
		{
			title:'垂直圆角',
			grayText:'const',
			keyword:'BorderRadius.vertical( )',
			type:'BorderRadius',
			url:'BorderRadiusVertical',
			data:[
				{ keyword:'top', type:'Radius', pro:'顶部', isValue:true, link:'/flutter/style/borderRadius/Radius' },
				{ keyword:'bottom', type:'Radius', pro:'底部', isValue:true, link:'/flutter/style/borderRadius/Radius' },
				{ noOrder:true, pro:'示例', code:[ {path:'flutter/style/borderRadius/BorderRadius/vertical'} ] },
			]
		},
		{
			title:'垂直圆角',
			grayText:'const',
			keyword:'BorderRadius.only( )',
			type:'BorderRadius',
			url:'BorderRadiusOnly',
			data:[
				{ keyword:'topLeft', type:'Radius', pro:'左上角', link:'/flutter/style/borderRadius/Radius' },
				{ keyword:'topRight', type:'Radius', pro:'右上角', link:'/flutter/style/borderRadius/Radius' },
				{ keyword:'bottomLeft', type:'Radius', pro:'左下角', link:'/flutter/style/borderRadius/Radius' },
				{ keyword:'bottomRight', type:'Radius', pro:'右下角', link:'/flutter/style/borderRadius/Radius' },
				{ noOrder:true, pro:'示例', code:[ {path:'flutter/style/borderRadius/BorderRadius/only'} ] },
			]
		},
	]
}

export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }