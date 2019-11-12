import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'TextFormField 表单元素，只能存在在于 Form( ) 控件中',
	keyword:'TextFormField( )',
	type:'TextFormField',
	url:'TextFormFieldPage',
	data:[
		{ keyword:'initialValue', type:'String', pro:'默认值'},
		{ keyword:'decoration', type:'InputDecoration', pro:'输入框装饰器', 
			code:[{ path:'flutter/widget/form/TextFormField/decoration'}],
			link:[{ title:'InputDecoration', url:'/flutter/style/decoration/InputDecoration' }]
		},
		{ deviceTitle:'配置', keyword:'readOnly', type:'bool', pro:'只读' },
		{ keyword:'enabled', type:'bool', pro:'启用' },
		{ keyword:'enableInteractiveSelection', type:'bool', pro:'启用长按操作' },
		{ keyword:'showCursor', type:'bool', pro:'显示/隐藏光标' },
		
		{ deviceTitle:'校验', keyword:'autovalidate', type:'bool', pro:'是否自动检验输入内容' },
		{ keyword:'autocorrect', type:'bool', pro:'自动纠错' },
		{ keyword:'minLength', type:'int', pro:'内容最大长度' },
		{ keyword:'inputFormatters', type:'List<TextInputFormatter>', pro:'输入验证', code:[{ path:'flutter/widget/form/TextFormField/inputFormatters'}] },
		{ keyword:'validator', type:'', pro:'输入验证', code:[{ path:'flutter/widget/form/TextFormField/inputFormatters'}] },
		
		
		{ deviceTitle:'多行', keyword:'minLines', type:'int', pro:'内容最小行数' },
		{ keyword:'maxLines', type:'int', pro:'内容最大行数' },
		
		{ deviceTitle:'光标', keyword:'cursorColor', type:'Color', pro:'光标颜色', link:'/flutter/style/Colors' },
		{ keyword:'cursorRadius', type:'Radius', pro:'光标圆角', link:'/flutter/style/borderRadius/Radius' },
		{ keyword:'cursorWidth', type:'double', pro:'光标宽度' },
		
		{ deviceTitle:'键盘', keyword:'keyboardType', type:'TextInputType', pro:'键盘类型', code:[{ path:'flutter/widget/form/TextFormField/TextInputType'}]  },
		{ keyword:'keyboardAppearance', type:'Brightness', pro:'键盘的外观',code:[{ path:'flutter/public/Brightness'}]  },
		{ keyword:'textInputAction', type:'TextInputAction', pro:'键盘操作按钮的类型', code:[{ path:'flutter/widget/form/TextFormField/TextInputAction'}] },
		{ keyword:'textCapitalization', type:'TextCapitalization', pro:'选择大写或小写键盘', code:[{ path:'flutter/widget/form/TextFormField/TextCapitalization'}] },
		
		{ deviceTitle:'通用', keyword:'padding', type:'EdgeInsetsGeometry', pro:'补白', link:'/flutter/style/offset/EdgeInsets' },
		{ keyword:'scrollPadding', type:'EdgeInsetsGeometry', pro:'滚动边距', link:'/flutter/style/offset/EdgeInsets' },
		{ keyword:'textAlign', type:'TextAlign', pro:'对齐方式', code:[ {path:'flutter/widget/text/TextAlign'} ] },
		{ keyword:'style', type:'TextStyle', pro:'文本样式', link:'/flutter/style/TextStyle' },
		{ keyword:'strutStyle', type:'StrutStyle', pro:'支撑样式', link:'/flutter/style/StrutStyle' },
		{ keyword:'textDirection', type:'TextDirection', pro:'排列顺序', code:[ {path:'flutter/widget/text/TextDirection'} ] },
		
		{ deviceTitle:'事件', keyword:'onChanged', type:'void Function( String )', pro:'输入内容发改变时执行', code:[ {path:'flutter/event/onChanged'} ] },
		{ 
			keyword:'onSaved', type:'void Function( String )', pro:'保存值', 
			code:[ {path:'flutter/widget/Form/form/onSaved'} ],
			link:[{ title:'key', url:'/flutter/com/key' }]
		},
		{ keyword:'onEditingComplete', type:'void Function( )', pro:'点“完成”按钮执行', code:[ {path:'flutter/widget/form/TextFormField/onEditingComplete'} ] },
		{ keyword:'onFieldSubmitted', type:'void Function( String )', pro:'提交表单时执行', code:[ {path:'flutter/widget/form/TextFormField/onFieldSubmitted'} ] },
		{ 
			keyword:'focusNode', type:'FocusNode', pro:'获取键盘焦点并处理键盘事件',
			code:[{path:'flutter/event/FocusNode/removeListener'}],
			link:[{ title:'FocusNode', url:'/flutter/event/FocusNode' },]
		},
		{ keyword:'buildCounter', type:'Widget Function(BuildContext, {currentLength: int, maxLength: int, isFocused: bool})', pro:'自定义InputDecorator的回调', code:[ {path:'flutter/widget/form/TextFormField/buildCounter'} ] },
		{ keyword:'autofocus', type:'bool', pro:'是否自动聚焦' },
		
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }