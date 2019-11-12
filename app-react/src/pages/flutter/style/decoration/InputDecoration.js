import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'表单输入框饰器',
	grayText:'const',
	keyword:'InputDecoration( )',
	data:[
		{ keyword:'icon', type:'Widget', pro:'图标，任意控件'},
		{ keyword:'contentPadding', type:'EdgeInsetsGeometry', pro:'补白', link:'/flutter/style/offset/EdgeInsets' },
		{ keyword:'enabled', type:'bool', pro:'输入框是否可用' },
		{ keyword:'isDense', type:'bool', pro:'改变输入框是否为密集型，默认为false，修改为true时，图标及间距会变小' },
		{ keyword:'alignLabelWithHint', type:'bool', pro:'' },
		
		
		{ deviceTitle:'提示信息', keyword:'hintText', type:'String', pro:'提示信息' },
		{ keyword:'hintStyle', type:'TextStyle', pro:'hintText 样式', link:'/flutter/style/TextStyle' },
		{ keyword:'hintMaxLines', type:'int', pro:'hintText 最大行数' },
		
		{ deviceTitle:'用于描述输入框', keyword:'labelText', type:'String', pro:'用于描述输入框，例如这个输入框是用来输入用户名还是密码的，当输入框获取焦点时默认会浮动到上方' },
		{ keyword:'labelStyle', type:'TextStyle', pro:'labelText样式', link:'/flutter/style/TextStyle' },
		{ keyword:'hasFloatingPlaceholder', type:'bool', pro:'labelText是否浮动，默认为true，修改为false则labelText在输入框获取焦点时不会浮动且不显示' },
		
		{ deviceTitle:'辅助文本', keyword:'helperText', type:'String', pro:'辅助文本，位于输入框下方，如果errorText不为空的话，则helperText不会显示' },
		{ keyword:'helperStyle', type:'TextStyle', pro:'hintText样式', link:'/flutter/style/TextStyle' },
		
		{ deviceTitle:'错误信息提示', keyword:'errorText', type:'String', pro:'错误信息提示' },
		{ keyword:'errorStyle', type:'TextStyle', pro:'errorText 样式', link:'/flutter/style/TextStyle' },
		{ keyword:'errorMaxLines', type:'int', pro:'errorText 最大行数' },
		
		{ deviceTitle:'头部 Widget', keyword:'prefix', type:'Widget', pro:'预先填充的Widget,跟prefixText同时只能出现一个' },
		{ keyword:'suffixText', type:'String', pro:'预填充的文本，例如手机号前面预先加上区号等' },
		{ keyword:'suffixStyle', type:'TextStyle', pro:'suffixText 样式', link:'/flutter/style/TextStyle' },
		{ keyword:'suffixIcon', type:'Widget', pro:'预填充图标，如用户、密码图标' },
		
		{ deviceTitle:'尾部 Widget', keyword:'suffix', type:'Widget', pro:'位于输入框尾部的控件，同样的不能和suffixText同时使用' },
		{ keyword:'prefixText', type:'String', pro:'位于尾部的填充文字' },
		{ keyword:'prefixStyle', type:'TextStyle', pro:'prefixText 样式', link:'/flutter/style/TextStyle' },
		{ keyword:'prefixIcon', type:'Widget', pro:'位于输入框后面的图片,例如一般输入框后面会有个眼睛，控制输入内容是否明文' },
		
		{ deviceTitle:'右下方 Widget', keyword:'counter', type:'Widget', pro:'输入框右下方的小控件，不能和counterText同时使用' },
		{ keyword:'counterText', type:'String', pro:'输入框右下方的文本' },
		{ keyword:'counterStyle', type:'TextStyle', pro:'counter 样式', link:'/flutter/style/TextStyle' },
		{ keyword:'semanticCounterText', type:'String', pro:'counter文本的可读描述'},
		
		
		{ deviceTitle:'输入填充颜色', keyword:'filled', type:'bool', pro:'如果为true，则输入使用fillColor指定的颜色填充' },
		{ keyword:'fillColor', type:'Color', pro:'输入填充颜色', link:'/flutter/style/Colors' },
		
		{ deviceTitle:'动态颜色', keyword:'focusColor', type:'Color', pro:'焦点时文本颜色', link:'/flutter/style/Colors' },
		{ keyword:'hoverColor', type:'Color', pro:'焦点时文本颜色', link:'/flutter/style/Colors' },
		
		{ 
			deviceTitle:'边框',keyword:'border', type:'InputBorder', pro:'外边线', 
			code: [ {path:'flutter/style/decoration/InputDecoration/border'} ],
			link: [
				{ title:'OutlineInputBorder', url:'/flutter/style/border/OutlineInputBorder'},
				{ title:'UnderlineInputBorder', url:'/flutter/style/border/UnderlineInputBorder'},
			]
		},
		{ 
			keyword:'focusedBorder', type:'InputBorder', pro:'输入框有焦点时的边框,如果errorText不为空的话，该属性无效', 
			code: [ {path:'flutter/style/decoration/InputDecoration/border'} ],
			link: [
				{ title:'OutlineInputBorder', url:'/flutter/style/border/OutlineInputBorder'},
				{ title:'UnderlineInputBorder', url:'/flutter/style/border/UnderlineInputBorder'},
			]
		},
		{ 
			keyword:'focusedErrorBorder', type:'InputBorder', pro:'errorText不为空时，输入框有焦点时的边框', 
			code: [ {path:'flutter/style/decoration/InputDecoration/border'} ],
			link: [
				{ title:'OutlineInputBorder', url:'/flutter/style/border/OutlineInputBorder'},
				{ title:'UnderlineInputBorder', url:'/flutter/style/border/UnderlineInputBorder'},
			]
		},
		{ 
			keyword:'errorBorder', type:'InputBorder', pro:'errorText不为空，输入框没有焦点时要显示的边框', 
			code: [ {path:'flutter/style/decoration/InputDecoration/border'} ],
			link: [
				{ title:'OutlineInputBorder', url:'/flutter/style/border/OutlineInputBorder'},
				{ title:'UnderlineInputBorder', url:'/flutter/style/border/UnderlineInputBorder'},
			]
		},
		{ 
			keyword:'enabledBorder', type:'InputBorder', pro:'输入框可用时显示的边框，如果errorText不为空的话，该属性无效', 
			code: [ {path:'flutter/style/decoration/InputDecoration/border'} ],
			link: [
				{ title:'OutlineInputBorder', url:'/flutter/style/border/OutlineInputBorder'},
				{ title:'UnderlineInputBorder', url:'/flutter/style/border/UnderlineInputBorder'},
			]
		},
		{ 
			keyword:'disabledBorder', type:'InputBorder', pro:'输入框禁用时显示的边框，如果errorText不为空的话，该属性无效', 
			code: [ {path:'flutter/style/decoration/InputDecoration/border'} ],
			link: [
				{ title:'OutlineInputBorder', url:'/flutter/style/border/OutlineInputBorder'},
				{ title:'UnderlineInputBorder', url:'/flutter/style/border/UnderlineInputBorder'},
			]
		},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }