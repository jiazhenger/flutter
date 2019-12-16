import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'文本主题',
	keyword:'TextTheme( )',
	type:'TextTheme',
	url:'TextThemePage',
	data:[
		{ deviceTitle:'字体大小', keyword:'display1', type:'TextStyle', pro:'大字体样式', link:'/flutter/style/TextStyle' },
		{ keyword:'display2', type:'TextStyle', pro:'较大字体样式', link:'/flutter/style/TextStyle' },
		{ keyword:'display3', type:'TextStyle', pro:'非常大字体样式', link:'/flutter/style/TextStyle' },
		{ keyword:'display4', type:'TextStyle', pro:'最大文本样式', link:'/flutter/style/TextStyle' },
		
		{ deviceTitle:'字体大小', keyword:'body1', type:'TextStyle', pro:'Material 主体内容文本样式', link:'/flutter/style/TextStyle' },
		{ keyword:'body2', type:'TextStyle', pro:'主体内容文本样式', link:'/flutter/style/TextStyle' },
		
		{ keyword:'button', type:'TextStyle', pro:'按钮文本样式', link:'/flutter/style/TextStyle' },
		{ keyword:'caption', type:'TextStyle', pro:'用于与图像关联的辅助文本', link:'/flutter/style/TextStyle' },
		{ keyword:'headline', type:'TextStyle', pro:'用于对话框中的大型文本', link:'/flutter/style/TextStyle' },
		{ keyword:'overline', type:'TextStyle', pro:'最小的风格', link:'/flutter/style/TextStyle' },
		{ keyword:'subhead', type:'TextStyle', pro:'用于列表中的主要文本', link:'/flutter/style/TextStyle' },
		{ keyword:'subtitle', type:'TextStyle', pro:'副标题文本', link:'/flutter/style/TextStyle' },
		{ keyword:'title', type:'TextStyle', pro:'用于应用程序栏和对话框中的主要文本', link:'/flutter/style/TextStyle' },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }