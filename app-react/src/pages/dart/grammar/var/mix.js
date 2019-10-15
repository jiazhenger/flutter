import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'变量声明',
	data:[
		{ keyword:'var/final/const', pro:'变量声明', code:[ {path:'dart/grammar/var/mix/var'} ]},
		{ keyword:'dynamic', pro:'数据类型声明', code:[ {path:'dart/grammar/var/mix/type'} ]},
		{ keyword:'final/const + dynamic', pro:'变量声明  + 数据类型声明', code:[ {path:'dart/grammar/var/mix/var-dynamic'} ]},
		{ keyword:'var/final/const + <T>', pro:'变量声明  + 泛类型声明', code:[ {path:'dart/grammar/var/mix/var-fan'} ]},
		{ keyword:'dynamic + <T>', pro:'数据类型声明  + 泛类型声明', code:[ {path:'dart/grammar/var/mix/dynamic-fan'} ]},
		{ keyword:'var/final/const + dynamic + <T>', pro:'变量声明  + 数据类型声明  + 泛类型声明', code:[ {path:'dart/grammar/var/mix/var-dynamic-fan'} ]},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }