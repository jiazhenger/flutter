import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'圆形',
	isGroup:true,
	data:[
		{
			title:'圆形',
			keyword:'CircleAvatar( )',
			type:'CircleAvatar',
			url:'CircleAvatarPage',
			data:[
				{ keyword:'backgroundColor', type:'Color', pro:'背景色', link:'/flutter/style/Colors' },
				{ keyword:'foregroundColor', type:'Color', pro:'前景色', link:'/flutter/style/Colors' },
				{
					keyword:'backgroundImage', type:'ImageProvider<dynamic>', pro:'背景图片', 
					code:[ {path:'flutter/image/image'} ],
					link:[
						{ title:'AssetImage', url:'/flutter/image/AssetImage' },
						{ title:'NetworkImage', url:'/flutter/image/NetworkImage' },
					]
				},
				{ keyword:'radius', type:'double', pro:'圆角' },
				{ keyword:'minRadius', type:'double', pro:'最小圆角' },
				{ keyword:'maxRadius', type:'double', pro:'最大圆角' },
				{ keyword:'child', type:'Widget', pro:'子控件' },
			]
		}
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }