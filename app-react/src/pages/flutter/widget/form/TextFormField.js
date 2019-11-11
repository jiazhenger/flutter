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
		{ deviceTitle:'校验', keyword:'autovalidate', type:'bool', pro:'是否自动检验输入内容' },
		{ keyword:'autocorrect', type:'bool', pro:'自动纠错' },
		{ keyword:'minLength', type:'int', pro:'内容最大长度' },
		{ keyword:'minLines', type:'int', pro:'内容最小行数' },
		{ keyword:'maxLines', type:'int', pro:'内容最大行数' },
		
		
		{ deviceTitle:'长度', keyword:'autovalidate', type:'bool', pro:'是否自动检验输入内容' },
		{ keyword:'autocorrect', type:'bool', pro:'自动纠错' },
		
		{ deviceTitle:'事件', keyword:'onChanged', type:'void Function(String)', pro:'输入内容发改变时执行', code:[ {path:'flutter/event/onChanged'} ] },
		{ 
			keyword:'onSaved', type:'void Function(String)', pro:'保存值', 
			code:[ {path:'flutter/widget/Form/form/onSaved'} ],
			link:[{ title:'key', url:'/flutter/com/key' }]
		},
		{ keyword:'autofocus', type:'bool', pro:'是否自动聚焦' },
		
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }