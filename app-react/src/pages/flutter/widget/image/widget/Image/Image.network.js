import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'加载网络图片',
	isGroup:true,
	data:[
		{
			title:'加载网络图片',
			keyword:'Image.network( )',
			type:'Image',
			url:'ImageNetworkPage',
			data:[
				{ keyword:'name', type:'String', pro:'图片路径', isValue:true, code:[ {path:'flutter/widget/image/widget/Image.network/name'} ] },
				{ keyword:'scale', type:'double', pro:'缩放' },
				{ keyword:'headers', type:'Map<String, String>', pro:'网络请求头', code:[ {path:'flutter/widget/image/widget/Image.network/headers'} ]},
				{ keyword:'frameBuilder', type:'ImageFrameBuilder', pro:'创建图片的 widget', code:[ {path:'flutter/widget/image/frameBuilder'} ] },
				{ keyword:'loadingBuilder', type:'ImageLoadingBuilder', pro:'显示图片加载时的 widget', code:[ {path:'flutter/widget/image/loadingBuilder'} ]},
				{ noOrder:true, pro:'Image 图片公共属性', link:'/flutter/image/Image' },
			]
		}
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }