import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'ImageIcon 图片 icon',
	keyword:'ImageIcon( )',
	type:'ImageIcon',
	url:'ImageIconPage',
	data:[
		{ 
			keyword:'image', type:'ImageProvider<dynamic>', pro:'图片', isValue:true,
			code:[ {path:'flutter/widget/image/image2'} ],
			link:[
				{ title:'AssetImage', url:'/flutter/image/AssetImage' },
				{ title:'NetworkImage', url:'/flutter/image/NetworkImage' },
			]
		},
		{ keyword:'color', type:'Color', pro:'颜色，仅对 png 图片有效', link:'/flutter/style/Colors' },
		{ keyword:'size', type:'double', pro:'尺寸' },
		{ keyword:'semanticsLabel', type:'String', pro:'icon 的语义描述', code:[ {path:'flutter/public/semanticsLabel'} ]},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }