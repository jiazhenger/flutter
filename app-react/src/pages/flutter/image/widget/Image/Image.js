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
						{ title:'AssetImage', url:'/flutter/image/AssetImage' },
						{ title:'NetworkImage', url:'/flutter/image/NetworkImage' },
					]
				},
				{ keyword:'frameBuilder', type:'ImageFrameBuilder', pro:'创建图片的 widget', code:[ {path:'flutter/image/frameBuilder'} ] },
				{ keyword:'loadingBuilder', type:'ImageLoadingBuilder', pro:'显示图片加载时的 widget', code:[ {path:'flutter/image/loadingBuilder'} ]},
				{ deviceTitle:'Image 图片公共属性', keyword:'color', type:'Color', pro:'混合的颜色', link:'/flutter/style/Colors' },
				{ 
					keyword:'centerSlice', type:'Rect', pro:'拉伸',
					code:[ {path:'flutter/image/centerSlice'} ],
					link:[
						{ title:'Rect', url:'/flutter/style/Rect' },
					]
				},
				{ 
					keyword:'filterQuality', type:'FilterQuality', pro:'图片质量',
					code:[ {path:'flutter/image/style/x/filterQuality'} ],
					link:[
						{ title:'FilterQuality', url:'/flutter/image/FilterQuality' },
					]
				},
				{ keyword:'colorBlendMode', type:'BlendMode', pro:'混合的模式', link:'/flutter/image/BlendMode' },
				{ keyword:'gaplessPlayback', type:'bool', pro:'是否保留原图' },
				{ keyword:'semanticsLabel', type:'String', pro:'图像的语义描述'},
				
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
			]
		}
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }