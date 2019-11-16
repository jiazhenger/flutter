import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'转换',
	isGroup:true,
	data:[
		{
			title:'转换',
			keyword:'Transform()',
			type:'Transform',
			url:'TransformPage',
			data:[
				{ keyword:'transform', type:'Matrix4', pro:'矩阵变形', link:'/flutter/style/rotation' },
				{ 
					deviceTitle:'公共属性', keyword:'alignment', type:'Alignment', pro:'对齐方式',
					code:[ {path:'flutter/public/alignment'} ],
					link:[
						{ title:'Alignment', url:'/flutter/style/align/Alignment' },
						{ title:'FractionalOffset', url:'/flutter/style/align/FractionalOffset' },
					]	
				},
				{ keyword:'origin', type:'Offset', pro:'变形点', link:'/flutter/style/offset/Offset' },
				{ keyword:'transformHitTests', type:'bool', pro:'是否在执行hit测试时应用转换' },
				{ keyword:'child', type:'Widget', pro:'单个控件'},
			]
		},
		{
			title:'旋转',
			keyword:'Transform.rotate( )',
			type:'ListView',
			data:[
				{ keyword:'angle', type:'double', pro:'旋转角度', code:[ {path:'flutter/widget/layout/style/Transform/angle'} ] },
				{ noOrder:true, pro:'Transform( ) 公共属性' },
			]
		},
		{
			title:'缩放',
			keyword:'Transform.scale( )',
			type:'ListView',
			data:[
				{ keyword:'scale', type:'double', pro:'缩放倍数' },
				{ noOrder:true, pro:'Transform( ) 公共属性' },
			]
		},
		{
			title:'平移',
			keyword:'Transform.translate( )',
			type:'ListView',
			data:[
				{ keyword:'offset', type:'Offset', pro:'偏移', link:'/flutter/style/offset/Offset' },
				{ keyword:'transformHitTests', type:'bool', pro:'是否在执行hit测试时应用转换' },
				{ keyword:'child', type:'Widget', pro:'单个控件'},
			]
		},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }