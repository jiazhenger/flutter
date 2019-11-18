import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'弹性横向、纵向布局',
	keyword:'Flex( )',
	type:'Flex',
	url:'FlexPage',
	data:[
		{ keyword:'direction', type:'Axis', pro:'排列方向，默认水平', code:[ {path:'flutter/widget/layout/list/Wrap/Axis'} ] },
		{ deviceTitle:'公共属性', keyword:'mainAxisAlignment', type:'MainAxisAlignment', pro:'主轴对齐方式', code:[ {path:'flutter/public/MainAxisAlignment'} ] },
		{ keyword:'crossAxisAlignment', type:'CrossAxisAlignment', pro:'副轴对齐方式', code:[ {path:'flutter/widget/layout/flex/CrossAxisAlignment'} ] },
		{ keyword:'mainAxisSize', type:'MainAxisSize', pro:'主轴尺寸', code:[ {path:'flutter/public/MainAxisSize'} ] },
		{ keyword:'verticalDirection', type:'VerticalDirection', pro:'排列摆放顺序', code:[ {path:'flutter/widget/layout/list/Wrap/VerticalDirection'} ] },
		{ keyword:'textBaseline', type:'TextBaseline', pro:'文本绘制基线', code:[ {path:'flutter/public/TextBaseline'} ] },
		{ keyword:'textDirection', type:'TextDirection', pro:'排列顺序', code:[ {path:'flutter/widget/text/TextDirection'} ] },
		{ keyword:'children', type:'List<Widget>', pro:'列表控件', code:[ {path:'flutter/public/widget-children'} ]  }
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }