import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'变量声明',
	data:[
		{ keyword:'var', pro:'声明任意变量 （不能带数据类型）', code:[ {path:'dart/grammar/var/var/var'} ]},
		{ keyword:'final', pro:'声明可改变一次的变量（必须初始化变量）', code:[ {path:'dart/grammar/var/var/final'} ]},
		{ keyword:'const', pro:'声明常量，不可改变（必须初始化变量）', code:[ {path:'dart/grammar/var/var/const'} ]},
		{ noOrder:true, keyword:'??', pro:'给变量设有效默认值', code:[ {path:'dart/grammar/var/var/set-value'} ]},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }