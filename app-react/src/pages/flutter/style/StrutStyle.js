import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'支撑样式',
	keyword:'StrutStyle( )',
	data:[
		{ type:'String', keyword:'fontFamily', pro:'字体', 
			code:[
				{ path:'flutter/style/TextStyle/font/fontFamily' },
				{ title:'自定义字体 ', path:'flutter/style/TextStyle/font/fontFamily-my' },
			]
		},
		{ keyword:'fontFamilyFallback', type:'List<String>', pro:'字体列表', code:[ {path:'flutter/style/TextStyle/font/fontFamilyFallback'} ]},
		{ keyword:'fontSize', type:'double', pro:'字体大小', code:[ {path:'flutter/style/TextStyle/font/fontSize'} ] },
		{ keyword:'fontWeight', type:'FontWeight', pro:'加粗', code:[ {path:'flutter/style/TextStyle/font/fontWeight'} ] },
		{ keyword:'fontStyle', type:'FontStyle', pro:'倾斜', code:[ {path:'flutter/style/TextStyle/font/fontStyle'} ] },
		{ keyword:'height', type:'double', pro:'行高' },
		{ keyword:'forceStrutHeight', type:'double', pro:'强制高度' },
		{ keyword:'leading', type:'double', pro:'自定义多个字体大小' },
		{ keyword:'debugLabel', type:'String', pro:'文本样式的可读描述', code:[ {path:'flutter/public/debugLabel'} ] },
		{ keyword:'package', type:'String', pro:'包' },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }