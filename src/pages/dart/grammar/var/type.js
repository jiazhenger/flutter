import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'数据类型变量声明',
	data:[
		{ keyword:'num', pro:'数字类型', code:[ {path:'dart/grammar/var/type/num'} ]},
		{ keyword:'String', pro:'字符串类型', code:[ {path:'dart/grammar/var/type/string'} ]},
		{ keyword:'bool', pro:'布尔类型', code:[ {path:'dart/grammar/var/type/bool'} ]},
		{ keyword:'List', pro:'列表类型', code:[ {path:'dart/grammar/var/type/list'} ]},
		{ keyword:'Set', pro:'集合类型', code:[ {path:'dart/grammar/var/type/set'} ]},
		{ keyword:'Map', pro:'映射类型', code:[ {path:'dart/grammar/var/type/map'} ]},
		{ keyword:'dynamic', pro:'无类型', code:[ {path:'dart/grammar/var/type/dynamic'} ]},
		{ keyword:'Object', pro:'通用类型', code:[ {path:'dart/grammar/var/type/object'} ]},
		{ keyword:'Symbol', pro:'符号类型', code:[ {path:'dart/grammar/var/type/symbols'} ]},
		{ noOrder:true, pro:'通用', code:[ {path:'dart/grammar/var/type/all'} ]},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }