import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'字符串类型',
	data:[
		{ pro:'类型声明', code:[ {path:'dart/grammar/var/type/string'} ]},
		{ pro:'拼接', code:[ {path:'dart/grammar/data-type/string/joint'} ]},
		{ pro:'插值', code:[ {path:'dart/grammar/data-type/string/insert-value'} ]},
		{ pro:'转义字符串', code:[ {path:'dart/grammar/data-type/string/unicode'} ]},
		{ pro:'去空格', code:[ {path:'dart/grammar/data-type/string/trim'} ]},
		{ pro:'转换大小写', code:[ {path:'dart/grammar/data-type/string/toCase'} ]},
		{ pro:'查找字符串', code:[ {path:'dart/grammar/data-type/string/search'} ]},
		{ pro:'替换字符串', code:[ {path:'dart/grammar/data-type/string/replace'} ]},
		{ pro:'截取字符串', code:[ {path:'dart/grammar/data-type/string/substring'} ]},
		{ pro:'字符串填充', code:[ {path:'dart/grammar/data-type/string/pad'} ]},
		{ pro:'转换为 List', code:[ {path:'dart/grammar/data-type/string/toList'} ]},
		{ pro:'私有方法', code:[ {path:'dart/grammar/data-type/string/method'} ]},
		{ pro:'私有属性', code:[ {path:'dart/grammar/data-type/string/property'} ]},
		{ pro:'公共属性', code:[ {path:'dart/grammar/entrance/public-property'} ]},
		{ pro:'公共方法', code:[ {path:'dart/grammar/entrance/public-method'} ]},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }