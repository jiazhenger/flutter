import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'形状装饰',
	keyword:'ShapeDecoration( )',
	url:'ShapeDecorationPage',
	data:[
		{ keyword:'color', type:'Color', pro:'背景色，与 gradient 互斥', link:'/flutter/style/Colors' },
		{ 
			keyword:'shape', type:'ShapeBorder', pro:'圆角',
			code:[ {path:'flutter/style/decoration/shape'} ],
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
			keyword:'gradient', type:'Gradient', pro:'渐变，与 color 互斥', 
			code:[ {path:'flutter/public/gradient'} ],
			link:[ 
				{ title:'LinearGradient', url:'/flutter/style/gradient/LinearGradient' },
				{ title:'RadialGradient', url:'/flutter/style/gradient/RadialGradient' },
				{ title:'SweepGradient', url:'/flutter/style/gradient/SweepGradient' }
			]
		},
		{ 
			keyword:'shadows', type:'List<BoxShadow>', pro:'阴影',
			code:[ {path:'flutter/public/shadows-BoxShadow'} ],
			link:[ { title:'BoxShadow', url:'/flutter/style/shadow/BoxShadow' }]
		},
		{ keyword:'image', type:'DecorationImage', pro:'背景图片', link:'/flutter/image/DecorationImage' },
		{ noOrder:true, pro:'示例', code:[ {path:'flutter/style/decoration/ShapeDecoration/ShapeDecoration'} ] },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }