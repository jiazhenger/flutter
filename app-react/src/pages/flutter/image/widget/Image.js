import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'图片控件',
	isGroup:true,
	data:[
		{
			title:'图片控件',
			keyword:'Image( )',
			type:'Image',
			url:'ImagePage',
			data:[
				{ 
					keyword:'image', type:'ImageProvider<dynamic>', pro:'图片', 
					code:[ {path:'flutter/image/image'} ],
					link:[
						{ title:'AssetImage', url:'/flutter/image/gradient/AssetImage' },
						{ title:'NetworkImage', url:'/flutter/image/NetworkImage' },
					]
				},
				{ keyword:'width', type:'double', pro:'宽度' },
				{ keyword:'height', type:'double', pro:'高度' },
				{ keyword:'color', type:'Color', pro:'混合的颜色', link:'/flutter/style/Colors' },
				
				{ 
					keyword:'fit', type:'BoxFit', pro:'填充方式',
					code:[ {path:'flutter/image/style/x/fit'} ],
					link:[
						{ title:'BoxFit', url:'/flutter/image/BoxFit' },
					]
				},
				{ 
					keyword:'colorFilter', type:'ColorFilter', pro:'颜色滤镜',
					code:[ {path:'flutter/image/DecorationImage/colorFilter'} ],
					link:[
						{ title:'ColorFilter', url:'/flutter/image/ColorFilter' },
						{ title:'Colors', url:'/flutter/style/Colors' },
						{ title:'BlendMode', url:'/flutter/image/BlendMode' },
					]
				},
				{ 
					keyword:'repeat', type:'ImageRepeat', pro:'填充方式',
					code:[ {path:'flutter/image/style/x/repeat'} ],
					link:[
						{ title:'ImageRepeat', url:'/flutter/image/ImageRepeat' },
					]
				},
				{ 
					keyword:'centerSlice', type:'Rect', pro:'拉伸',
					code:[ {path:'flutter/image/style/DecorationImage/centerSlice'} ],
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
				{ keyword:'colorBlendMode', type:'BlendMode', pro:'混合的模式', link:'/flutter/image/BlendMode' },
				{ keyword:'matchTextDirection', type:'bool', pro:'是否在文本方向上绘制图像' },
				{ keyword:'semanticsLabel', type:'String', pro:'盲人专用', code:[ {path:'flutter/public/alignment'} ] },
			]
		}
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }