import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'多元素容器',
	keyword:'Wrap( )',
	type:'Wrap',
	url:'WrapPage',
	data:[
		{ keyword:'direction', type:'Axis', pro:'排列方向，默认水平', code:[ {path:'flutter/widget/layout/list/Wrap/Axis'} ] },
		
		{ deviceTitle:'对齐方式', keyword:'alignment', type:'WrapAlignment', pro:'主轴对齐方式，', code:[ {path:'flutter/widget/layout/list/Wrap/WrapAlignment'} ] },
		{ keyword:'runAlignment', type:'WrapAlignment', pro:'副轴对齐方式', code:[ {path:'flutter/widget/layout/list/Wrap/WrapAlignment'} ] },
		{ keyword:'crossAxisAlignment', type:'WrapCrossAlignment', pro:'横轴对齐方式', code:[ {path:'flutter/widget/layout/list/Wrap/WrapCrossAlignment'} ] },
		
		{ deviceTitle:'间距', keyword:'spacing', type:'double', pro:'水平间距' },
		{ keyword:'runSpacing', type:'double', pro:'垂直间距' },
		
		{ deviceTitle:'其它',keyword:'verticalDirection', type:'VerticalDirection', pro:'排列摆放顺序', code:[ {path:'flutter/widget/layout/list/Wrap/VerticalDirection'} ] },
		{ keyword:'textDirection', type:'TextDirection', pro:'排列顺序', code:[ {path:'flutter/widget/text/TextDirection'} ] },
		{ keyword:'children', type:'List<Widget>', pro:'列表控件', code:[ {path:'flutter/public/widget-children'} ]  }
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }