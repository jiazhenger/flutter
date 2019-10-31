import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'带封面图的图片控件',
	isGroup:true,
	data:[
		{
			title:'带封面图的图片控件',
			keyword:'FadeInImage( )',
			type:'FadeInImage',
			url:'FadeInImagePage',
			data:[
				{ 
					keyword:'placeholder', type:'ImageProvider<dynamic>', pro:'图片', 
					code:[ {path:'flutter/image/image'} ],
					link:[
						{ title:'AssetImage', url:'/flutter/image/AssetImage' },
						{ title:'NetworkImage', url:'/flutter/image/NetworkImage' },
					]
				},
				{
					keyword:'image', type:'ImageProvider<dynamic>', pro:'图片', 
					code:[ {path:'flutter/image/image'} ],
					link:[
						{ title:'AssetImage', url:'/flutter/image/AssetImage' },
						{ title:'NetworkImage', url:'/flutter/image/NetworkImage' },
					]
				},
				{ 
					deviceTitle:'FadeInImage 图片公共属性',
					keyword:'fadeInDuration', type:'Duration', pro:'淡出过渡时长',
					code:[ {path:'flutter/time/Duration'} ],
					link:[
						{ title:'Duration', url:'/flutter/time/Duration' },
					]
				},
				{ 
					keyword:'fadeOutDuration', type:'Duration', pro:'淡隐过渡时长',
					code:[ {path:'flutter/time/Duration'} ],
					link:[
						{ title:'Duration', url:'/flutter/time/Duration' },
					]
				},
				{ keyword:'fadeInCurve', type:'Curves', pro:'淡出过渡效果', link:'/flutter/animation/Curves' },
				{ keyword:'fadeOutCurve', type:'Curves', pro:'淡隐过渡效果', link:'/flutter/animation/Curves' },
				
				{ deviceTitle:'所有图片公共属性', keyword:'width', type:'double', pro:'宽度' },
				{ keyword:'height', type:'double', pro:'高度' },
				{ 
					keyword:'fit', type:'BoxFit', pro:'填充方式',
					code:[ {path:'flutter/image/style/x/fit'} ],
					link:[
						{ title:'BoxFit', url:'/flutter/image/BoxFit' },
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
					keyword:'alignment', type:'AlignmentGeometry', pro:'对齐方式',
					code:[ {path:'flutter/public/alignment'} ],
					link:[
						{ title:'Alignment', url:'/flutter/style/align/Alignment' },
						{ title:'FractionalOffset', url:'/flutter/style/align/FractionalOffset' },
					]
				},
				{ keyword:'excludeFromSemantics', type:'bool', pro:'是否从语义中排除此图像' },
				{ keyword:'matchTextDirection', type:'bool', pro:'是否在文本方向上绘制图像' },
				{ keyword:'imageSemanticLabel', type:'String', pro:'图像的语义描述'},
				
			]
		}
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }