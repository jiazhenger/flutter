import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'泛类型',
	data:[
		{ keyword:'List <T>list = <T>[ ]', pro:'列表', code:[ {path:'dart/grammar/var/generic/list'} ]},
		{ keyword:'Set <T>set = <T>{ }', pro:'映射', code:[ {path:'dart/grammar/var/generic/set'} ]},
		{ keyword:'Map <T, T>map = <T, T>{ }', pro:'集合', code:[ {path:'dart/grammar/var/generic/map'} ]},
		{ noOrder:true,pro:'泛类型：定义以上三种数据类型中的数据类型', code:[ {path:'dart/grammar/var/generic/base'} ]},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }