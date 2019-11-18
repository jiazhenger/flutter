import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'卡片',
	keyword:'Card( )',
	type:'Card',
	data:[
		{ keyword:'color', type:'Color', pro:'背景色', link:'/flutter/style/Colors' },
		{ keyword:'elevation', type:'double', pro:'阴影' },
		{ keyword:'margin', type:'EdgeInsetsGeometry', pro:'边距', link:'/flutter/style/offset/EdgeInsets' },
		{ 
			keyword:'shape', type:'ShapeBorder', pro:'形状',
			code:[ {path:'flutter/public/shape'} ],
			link:[ 
				{ title:'BeveledRectangleBorder', url:'/flutter/style/shape/BeveledRectangleBorder' },
				{ title:'CircleBorder', url:'/flutter/style/shape/CircleBorder' },
				{ title:'RoundedRectangleBorder', url:'/flutter/style/shape/RoundedRectangleBorder' },
				{ title:'StadiumBorder', url:'/flutter/style/shape/StadiumBorder' },
				{ title:'UnderlineInputBorder', url:'/flutter/style/shape/UnderlineInputBorder' },
				{ title:'Border', url:'/flutter/style/border/Border' }
			]
		},
		{ 
			keyword:'clipBehavior', type:'Clip', pro:'裁剪方式',
			code:[ {path:'flutter/style/Clip/Clip'} ],
			link:[{ title:'Clip', url:'/flutter/style/Clip' } ]
		
		},
		{ keyword:'borderOnForeground', type:'bool', pro:'边框在前景' },
		{ keyword:'semanticContainer', type:'bool', pro:'是否是描述性容器' },
		{ keyword:'child', type:'Widget', pro:'控件' }
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }