import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'类基础',
	data:[
		{ pro:'类声明', code:[ {path:'dart/grammar/class/base/format'} ]},
		{ pro:'公共属性：内外部访问', code:[ {path:'dart/grammar/class/base/public-var'} ]},
		{ pro:'公共方法：内外部访问', code:[ {path:'dart/grammar/class/base/public-fn'} ]},
		{ pro:'私有属性：仅内部访问', code:[ {path:'dart/grammar/class/base/private-var'} ]},
		{ pro:'私有方法：仅内部访问', code:[ {path:'dart/grammar/class/base/private-fn'} ]},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }