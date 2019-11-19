import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'文本提示工具',
	keyword:'Tooltip( )',
	type:'Tooltip',
	url:'TooltipPage',
	data:[
		{ keyword:'message', type:'String', pro:'内容' },
		{ keyword:'height', type:'double', pro:'高' },
		{ keyword:'verticalOffset', type:'double', pro:'垂直偏移' },
		{ keyword:'padding', type:'EdgeInsetsGeometry', pro:'补白', link:'/flutter/style/offset/EdgeInsets' },
		{ keyword:'margin', type:'EdgeInsetsGeometry', pro:'边距', link:'/flutter/style/offset/EdgeInsets' },
		{ keyword:'preferBelow', type:'bool', pro:'true: 提示在 label 的下面，false: 提示在 lable 上面' },
		{ keyword:'excludeFromSemantics', type:'bool', pro:'是否排除表单语义' },
		{ keyword:'textStyle', type:'TextStyle', pro:'文本颜色', link:'/flutter/style/TextStyle' },
		{ keyword:'waitDuration', type:'Duration', pro:'等待动画过渡时长', link:'/flutter/time/Duration' },
		{ keyword:'showDuration', type:'Duration', pro:'显示动画过渡时长', link:'/flutter/time/Duration' },
		
		
		{ 
			keyword:'decoration', type:'Decoration', pro:'装饰',
			code:[ {path:'flutter/widget/layout/style/Container/decoration'} ],
			link:[
				{ title:'BoxDecoration', url:'/flutter/style/decoration/BoxDecoration'},
				{ title:'ShapeDecoration', url:'/flutter/style/decoration/ShapeDecoration'},
				{ title:'UnderlineTabIndicator', url:'/flutter/style/decoration/UnderlineTabIndicator'}
			]
		},
		{ keyword:'child', type:'widget', pro:'控件' },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }