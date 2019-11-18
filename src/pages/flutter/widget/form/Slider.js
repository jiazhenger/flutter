import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'滑动',
	keyword:'Slider( )',
	type:'Slider',
	url:'SliderPage',
	data:[
		{ keyword:'value', type:'double', pro:'滑动值' },
		{ keyword:'min', type:'double', pro:'最小值，默认 0.0' },
		{ keyword:'max', type:'double', pro:'最大值，默认 1.0' },
		{ keyword:'label', type:'String', pro:'标签' },
		{ keyword:'divisions', type:'int', pro:'分段' },
		{ keyword:'activeColor', type:'Color', pro:'选中时的轨道及拖柄背景颜色', link:'/flutter/style/Colors' },
		{ keyword:'inactiveColor', type:'Color', pro:'未选中时的轨道背景颜色', link:'/flutter/style/Colors' },
		{ keyword:'semanticFormatterCallback', type:'String Function( double )', pro:'', code:[{path:'flutter/widget/Form/Slider/semanticFormatterCallback'}] },
		{ keyword:'onChanged', type:'void Function( double )', pro:'改变时执行', code:[ {path:'flutter/widget/Form/Slider/onChanged'} ] },
		{ keyword:'onChangeStart', type:'void Function( double )', pro:'改变开始执行', code:[ {path:'flutter/widget/Form/Slider/onChangeStart'} ] },
		{ keyword:'onChangeEnd', type:'void Function( double )', pro:'改变结束执行', code:[ {path:'flutter/widget/Form/Slider/onChangeEnd'} ] },
		{ noOrder:true, pro:'示例', code:[ {path:'flutter/widget/Form/Slider/Slider'} ] },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }