import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'加载缓存图片',
	isGroup:true,
	data:[
		{
			title:'加载缓存图片',
			keyword:'Image.memory( )',
			type:'Image',
			url:'ImageMemoryPage',
			data:[
				{ keyword:'bytes', type:'Uint8List', pro:'加载Uint8List中的图片', isValue:true, code:[ {path:'flutter/image/widget/Image.memory/bytes'} ] },
				{ keyword:'scale', type:'double', pro:'缩放' },
				{ keyword:'package', type:'String', pro:'加载包' },
				{ keyword:'frameBuilder', type:'ImageFrameBuilder', pro:'创建图片的 widget', code:[ {path:'flutter/image/frameBuilder'} ] },
				{ noOrder:true, pro:'Image 图片公共属性', link:'/flutter/image/Image' },
			]
		}
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }