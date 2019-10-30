import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'操作符',
	data:[
		{ pro:'算术运算符', code:[ {path:'dart/grammar/operator/arithmetic'} ]},
		{ pro:'自增自减', code:[ {path:'dart/grammar/operator/increase-decrease'} ]},
		{ pro:'等价和关系操作符', code:[ {path:'dart/grammar/operator/bool'} ]},
		{ pro:'赋值运算符', code:[ {path:'dart/grammar/operator/value'} ]},
		{ pro:'逻辑运算符', code:[ {path:'dart/grammar/operator/logic'} ]},
		{ pro:'位操作与移位运算符', code:[ {path:'dart/grammar/operator/displacement'} ]},
		{ pro:'其它操作符', code:[ {path:'dart/grammar/operator/other'} ]},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }