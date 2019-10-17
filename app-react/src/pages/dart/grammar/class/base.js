import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'类基础',
	data:[
		{ keyword:'class MyClass{ }', pro:'声明', code:[ {path:'dart/grammar/class/base/format'} ]},
		{ keyword:'[ var / final ] dynamic a = 0', pro:'公共属性：内外部可访问', code:[ {path:'dart/grammar/class/base/public-var'} ]},
		{ keyword:'statck [ var / final / const ] dynamic a = 0', pro:'私有属性：只在内部访问', code:[ {path:'dart/grammar/class/base/private-var'} ]},
		{ keyword:'fn( ){ }', pro:'公共方法：内外部访问', code:[ {path:'dart/grammar/class/base/public-fn'} ]},
		{ keyword:'static fn( ){ }', pro:'私有方法：只在内部访问', code:[ {path:'dart/grammar/class/base/private-fn'} ]},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }