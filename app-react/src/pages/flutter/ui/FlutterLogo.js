import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'flutter logo 控件',
	keyword:'FlutterLogo( )',
	type:'FlutterLogo',
	url:'FlutterLogoPage',
	data:[
		{ keyword:'colors', type:'MaterialColor', pro:'颜色', link:'/flutter/style/Colors' },
		{ keyword:'curve', type:'Curve', pro:'阴影', link:'/flutter/animation/Curves' },
		{ keyword:'duration', type:'Duration', pro:'过渡时间', link:'/flutter/time/Duration' },
		{ keyword:'size', type:'double', pro:'尺寸大小' },
		{ keyword:'textColor', type:'Color', pro:'文本颜色', link:'/flutter/style/Colors' },
		{ keyword:'style', type:'FlutterLogoStyle', pro:'控件', code:[{path:'flutter/public/FlutterLogoStyle'}] }
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }