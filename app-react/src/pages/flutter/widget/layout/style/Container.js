import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'单元素容器',
	keyword:'Container( )',
	type:'Container',
	data:[
		{ keyword:'color', type:'Color', pro:'背景色', link:'/flutter/style/Colors' },
		{ keyword:'foregroundDecoration', type:'Color', pro:'前景色', link:'/flutter/style/Colors' },
		{ keyword:'width', type:'double', pro:'宽' },
		{ keyword:'height', type:'double', pro:'高' },
		{ keyword:'padding', type:'EdgeInsetsGeometry', pro:'补白', link:'/flutter/style/offset/EdgeInsets' },
		{ keyword:'margin', type:'EdgeInsetsGeometry', pro:'边距', link:'/flutter/style/offset/EdgeInsets' },
		{ 
			keyword:'alignment', type:'Alignment', pro:'对齐方式',
			code:[ {path:'flutter/public/alignment'} ],
			link:[
				{ title:'Alignment', url:'/flutter/style/align/Alignment'},
				{ title:'FractionalOffset', url:'/flutter/style/align/FractionalOffset'},
			]	
		},
		{ 
			keyword:'decoration', type:'Decoration', pro:'装饰',
			code:[ {path:'flutter/widget/layout/style/Container/decoration'} ],
			link:[
				{ title:'BoxDecoration', url:'/flutter/style/decoration/BoxDecoration'},
				{ title:'ShapeDecoration', url:'/flutter/style/decoration/ShapeDecoration'},
				{ title:'UnderlineTabIndicator', url:'/flutter/style/decoration/UnderlineTabIndicator'}
			]
		},
		{ keyword:'constraints', type:'BoxConstraints', pro:'限制高宽', link:'/flutter/style/BoxConstraints' },
		{ keyword:'transform', type:'Matrix4', pro:'矩阵变形', link:'/flutter/style/rotation' },
		
		{ keyword:'child', type:'Widget', pro:'控件' },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }