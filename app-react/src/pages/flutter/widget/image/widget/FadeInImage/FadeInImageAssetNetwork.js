import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'封面图为项目图片',
	isGroup:true,
	data:[
		{
			title:'封面图为项目图片',
			keyword:'FadeInImage.assetNetwork( )',
			type:'FadeInImage',
			url:'FadeInImageAssetNetworkPage',
			data:[
				{ 
					keyword:'placeholder', type:'String', pro:'封面图，项目图片', 
					code:[ {path:'flutter/widget/image/widget/FadeInImage/assetNetwork/placeholder'} ],
				},
				{ 
					keyword:'image', type:'String', pro:'正图，网络图片', 
					code:[ {path:'flutter/widget/image/widget/FadeInImage/assetNetwork/image'} ],
				},
				{ keyword:'placeholderScale', type:'double', pro:'封面图缩放' },
				{ keyword:'imageScale', type:'double', pro:'正面图缩放' },
				{ keyword:'bundle', type:'AssetBundle', pro:'' },
				{ noOrder:true, pro:'FadeInImage 图片公共属性', link:'/flutter/image/FadeInImage'},
				
			]
		}
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }