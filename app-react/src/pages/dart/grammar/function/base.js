import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'函数基础',
	data:[
		{ keyword:'fn(){ }', pro:'声明', code:[ {path:'dart/grammar/function/base/format'} ]},
		{ keyword:'fn(a,b){ }', pro:'传参', code:[ {path:'dart/grammar/function/base/param'} ]},
		{ keyword:'return', pro:'返回值', code:[ {path:'dart/grammar/function/base/return'} ]},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }