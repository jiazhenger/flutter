import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'盒子饰器',
	keyword:'BoxDecoration( )',
	url:'BoxDecorationPage',
	data:[
		{ keyword:'color', type:'Color', pro:'背景色，与 gradient 互斥', link:'/flutter/style/Colors' },
		{ keyword:'border', type:'Border', pro:'边框', link:'/flutter/style/border/Border' },
		{ keyword:'borderRadius', type:'BorderRadius', pro:'圆角', link:'/flutter/style/borderRadius/BorderRadius' },
		{ 
			keyword:'shape', type:'BoxShape', pro:'圆角',
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
			keyword:'boxShadow', type:'List<BoxShadow>', pro:'阴影',
			code:[ {path:'flutter/public/boxShadow'} ],
			link:[ { title:'BoxShadow', url:'/flutter/style/shadow/BoxShadow' }]
		},
		{ keyword:'image', type:'DecorationImage', pro:'背景图片', link:'/flutter/image/DecorationImage' },
		{ keyword:'backgroundBlendMode', type:'BlendMode', pro:'背景融合模式', link:'/flutter/image/BlendMode' },
		
		{ noOrder:true, pro:'示例', code:[ {path:'flutter/style/decoration/BoxDecoration/BoxDecoration'} ] },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }