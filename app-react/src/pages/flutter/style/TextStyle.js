import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'文本样式',
	keyword:'TextStyle( )',
	data:[
		{ deviceTitle:'颜色设置', keyword:'color', type:'Color', pro:'文本颜色', link:'/flutter/style/Colors' },
		{ keyword:'backgroundColor', pro:'背景颜色', type:'Color', link:'/flutter/style/Colors' },
		{ keyword:'foreground', type:'Paint', pro:'前景', code:[ {path:'flutter/style/TextStyle/color/foreground'} ], 
			link:[
				{title:'Color',url:'/flutter/style/Colors'},
				{title:'Paint( )',url:'/flutter/style/Colors'},
				{title:'ui.Gradient.linear( )',url:'/flutter/style/Colors'},
			]
		},
		{ keyword:'background', type:'Paint', pro:'背景', code:[ {path:'flutter/style/TextStyle/color/background'} ], 
			link:[
				{ title:'Color',url:'/flutter/style/Colors' },
				{ title:'Paint( )',url:'/flutter/style/Colors' },
				{ title:'ui.Gradient.linear( )',url:'/flutter/style/Colors' },
			]
		},
		{ deviceTitle:'字体设置', type:'String', keyword:'fontFamily', pro:'字体', 
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
		{ keyword:'package', type:'String', pro:'引用字体包', code:[ {path:'flutter/style/TextStyle/font/package'} ] },
		{ keyword:'fontFeatures', type:'List<FontFeature>', pro:'影响字体的字体特性列表', code:[ {path:'flutter/style/TextStyle/font/fontFeatures'} ] },
		
		{ deviceTitle:'文本间距', type:'double', keyword:'letterSpacing', pro:'字符间距' },
		{ keyword:'wordSpacing', type:'double', pro:'单词间距' },
		
		{ deviceTitle:'文本装饰', type:'TextDecoration', keyword:'decoration', pro:'装饰', code:[ {path:'flutter/style/TextStyle/decoration/decoration'} ] },
		{ keyword:'decorationColor', type:'Color', pro:'装饰器颜色', link:'/flutter/style/Colors' },
		{ keyword:'decorationStyle', type:'TextDecorationStyle', pro:'装饰器样式', code:[ {path:'flutter/style/TextStyle/decoration/decorationStyle'} ] },
		{ keyword:'decorationThickness', type:'double', pro:'装饰器厚度' },
		
		{ deviceTitle:'其它', type:'TextBaseline', keyword:'textBaseline', pro:'文本绘制基线', code:[ {path:'flutter/public/TextBaseline'} ] },
		{ 
			keyword:'shadows', type:'List<Shadow/BoxShadow>', pro:'阴影',
			code:[ {path:'/flutter/public/shadows'} ], 
			link:[
				{ title:'Shadow',url:'/flutter/style/shadow/Shadow'},
				{ title:'BoxShadow',url:'/flutter/style/shadow/BoxShadow'}
			]
		},
		{ keyword:'locale', type:'Locale', pro:'语言', code:[ {path:'flutter/public/locale'} ] },
		{ keyword:'inherit', type:'bool', pro:'继承', code:[ {path:'flutter/public/inherit'} ] },
		{ keyword:'debugLabel', type:'String', pro:'文本样式的可读描述', code:[ {path:'flutter/public/debugLabel'} ] },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }