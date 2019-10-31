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
			keyword:'NetworkImage( )',
			type:'NetworkImage',
			data:[
				{ keyword:'url', type:'String', pro:'图片地址', isValue:true, code:[ {path:'flutter/image/style/NetworkImage/name'} ] },
				{ keyword:'scale', type:'double', pro:'缩放' },
				{ keyword:'headers', type:'Map<String, String>', pro:'网络请求头', code:[ {path:'flutter/image/widget/Image.network/headers'} ]},
				
			]
		}
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }