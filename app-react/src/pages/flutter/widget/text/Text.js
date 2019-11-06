import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'文本',
	keyword:'Text( )',
	type:'Text',
	url:'TextPage',
	data:[
		{ keyword:'data', type:'String', pro:'文本', isValue:true },
		{ keyword:'style', type:'TextStyle', pro:'文本样式', link:'/flutter/style/TextStyle' },
		{ keyword:'strutStyle', type:'StrutStyle', pro:'支撑样式', link:'/flutter/style/StrutStyle' },
		{ keyword:'textAlign', type:'TextAlign', pro:'对齐方式', code:[ {path:'flutter/widget/text/TextAlign'} ] },
		{ keyword:'textDirection', type:'TextDirection', pro:'排列顺序', code:[ {path:'flutter/widget/text/TextDirection'} ] },
		{ keyword:'softWrap', type:'bool', pro:'自动换行' },
		{ keyword:'textScaleFactor', type:'double', pro:'字体显示倍率' },
		{ keyword:'overflow', type:'TextOverflow', pro:'处理溢出文字, 与 maxLines 配合使用', code:[ {path:'flutter/widget/text/TextOverflow'} ] },
		{ keyword:'maxLines', type:'int', pro:'最大行数, 与 overflow 配合使用' },
		{ keyword:'textWidthBasis', type:'TextWidthBasis', pro:'文本长依据', code:[ {path:'flutter/widget/text/TextWidthBasis'} ] },
		{ keyword:'semanticsLabel', type:'String', pro:'文本的语义描述', code:[ {path:'flutter/public/semanticsLabel'} ] },
		{ keyword:'locale', type:'Locale', pro:'语言', code:[ {path:'flutter/public/Locale'} ] },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }