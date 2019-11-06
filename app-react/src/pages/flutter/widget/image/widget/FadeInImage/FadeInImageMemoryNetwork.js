import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'封面图为缓存图片',
	keyword:'FadeInImage.memoryNetwork( )',
	type:'FadeInImage',
	url:'FadeInImageMemoryNetworkPage',
	data:[
		{ keyword:'placeholder', type:'Uint8List', pro:'封面图，缓存图片'},
		{ 
			keyword:'image', type:'String', pro:'正图，网络图片', 
			code:[ {path:'flutter/widget/image/widget/FadeInImage/assetNetwork/image'} ],
		},
		{ keyword:'placeholderScale', type:'double', pro:'封面图缩放' },
		{ keyword:'imageScale', type:'double', pro:'正面图缩放' },
		{ noOrder:true, pro:'FadeInImage 图片公共属性', link:'/flutter/image/FadeInImage'},
		
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }