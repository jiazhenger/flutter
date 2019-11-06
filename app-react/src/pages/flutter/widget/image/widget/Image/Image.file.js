import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'加载本地文件中的图片',
	keyword:'Image.file( )',
	type:'Image',
	url:'ImageFilePage',
	data:[
		{ keyword:'file', type:'File', pro:'设备图片文件', isValue:true, code:[ {path:'flutter/widget/image/widget/Image.file/file'} ] },
		{ keyword:'scale', type:'double', pro:'缩放' },
		{ keyword:'frameBuilder', type:'ImageFrameBuilder', pro:'创建图片的 widget', code:[ {path:'flutter/widget/image/frameBuilder'} ] },
		{ noOrder:true, pro:'Image 图片公共属性', link:'/flutter/image/Image' },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }