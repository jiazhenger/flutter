﻿import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'背景图片',
	keyword:'DecorationImage( )',
	type:'DecorationImage',
	data:[
		{ 
			keyword:'image', type:'ImageProvider<dynamic>', pro:'图片', 
			code:[ {path:'flutter/widget/image/image'} ],
			link:[
				{ title:'AssetImage', url:'/flutter/image/AssetImage' },
				{ title:'NetworkImage', url:'/flutter/image/NetworkImage' },
			]
		},
		{ 
			keyword:'fit', type:'BoxFit', pro:'填充方式',
			code:[ {path:'flutter/widget/image/style/x/fit'} ],
			link:[
				{ title:'BoxFit', url:'/flutter/image/BoxFit' },
			]
		},
		{ 
			keyword:'colorFilter', type:'ColorFilter', pro:'颜色滤镜',
			code:[ {path:'flutter/widget/image/style/DecorationImage/colorFilter'} ],
			link:[
				{ title:'ColorFilter', url:'/flutter/image/ColorFilter' },
				{ title:'Colors', url:'/flutter/style/Colors' },
				{ title:'BlendMode', url:'/flutter/image/BlendMode' },
			]
		},
		{ 
			keyword:'repeat', type:'ImageRepeat', pro:'填充方式',
			code:[ {path:'flutter/widget/image/style/x/repeat'} ],
			link:[
				{ title:'ImageRepeat', url:'/flutter/image/ImageRepeat' },
			]
		},
		{ 
			keyword:'centerSlice', type:'Rect', pro:'拉伸',
			code:[ {path:'flutter/widget/image/centerSlice'} ],
			link:[
				{ title:'Rect', url:'/flutter/style/Rect' },
			]
		},
		{ 
			keyword:'alignment', type:'Alignment', pro:'对齐方式',
			code:[ {path:'flutter/public/alignment'} ],
			link:[
				{ title:'Alignment', url:'/flutter/style/align/Alignment' },
				{ title:'FractionalOffset', url:'/flutter/style/align/FractionalOffset' },
			]
		},
		{ keyword:'matchTextDirection', type:'bool', pro:'是否在文本方向上绘制图像' },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }