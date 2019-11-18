import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'类基础',
	data:[
		{ keyword:'MyClass( ){ }', pro:'标准', code:[ { title:'有参数',path:'dart/grammar/class/constructor/base' } ]},
		{ keyword:'MyClass( )', pro:'简写', code:[{ path:'dart/grammar/class/constructor/simple' }]},
		{ keyword:'MyClass.createInstance(value)', pro:'创建新的构造函数', code:[ 
			{ title:'单个参数', path:'dart/grammar/class/constructor/createInstance/one-param' },
			{ title:'多个参数', path:'dart/grammar/class/constructor/createInstance/many-param' },
		]},
		{ keyword:'const MyClass( )', pro:'常量构造函数，创建永不改变的类', code:[{ path:'dart/grammar/class/constructor/const' }]},
		{ keyword:'MyClass.fromJson( )', pro:'命名构造函数', code:[
			{ title:'基础用法（改变传参结构,使数据结构更清晰）', path:'dart/grammar/class/constructor/fromJson/base' },
			{ title:'父类没有默认构造函数', path:'dart/grammar/class/constructor/fromJson/extends' }
		]},
		{ keyword:'MyClass.alongXAxis(int x):this(x,0)', pro:'重定向构造函数', code:[{ path:'dart/grammar/class/constructor/alongXAxis' }]},
		{ keyword:'factory MyClass( ){ }', pro:'工厂构造函数', code:[{ path:'dart/grammar/class/constructor/factory' }]},
		{ noOrder:true, pro:'综合', code:[ {path:'dart/grammar/class/constructor/format'} ]},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }