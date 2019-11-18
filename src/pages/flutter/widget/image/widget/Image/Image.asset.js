import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'加载asset项目资源中的文件',
	keyword:'Image.asset( )',
	type:'Image',
	url:'ImageAssetPage',
	data:[
		{ keyword:'name', type:'String', pro:'图片路径', isValue:true, code:[ {path:'flutter/widget/image/widget/Image.asset/name'} ] },
		{ keyword:'scale', type:'double', pro:'缩放' },
		{ keyword:'package', type:'String', pro:'加载包' },
		{ keyword:'frameBuilder', type:'ImageFrameBuilder', pro:'创建图片的 widget', code:[ {path:'flutter/widget/image/frameBuilder'} ] },
		{ noOrder:true, pro:'Image 图片公共属性', link:'/flutter/image/Image' },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }