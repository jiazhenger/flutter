import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'集合类型',
	data:[
		{ pro:'类型声明', code:[ {path:'dart/grammar/var/type/set'} ]},
		{ pro:'创建集合', code:[ {path:'dart/grammar/data-type/set/create'} ]},
		{ pro:'添加元素', code:[ {path:'dart/grammar/data-type/set/add'} ]},
		{ pro:'删除元素', code:[ {path:'dart/grammar/data-type/set/remove'} ]},
		{ pro:'检索元素', code:[ {path:'dart/grammar/data-type/set/search'} ]},
		{ pro:'合并元素', code:[ {path:'dart/grammar/data-type/set/merge'} ]},
		{ pro:'数据转换', code:[ {path:'dart/grammar/data-type/set/output-type'} ]},
		{ pro:'迭代循环', code:[ {path:'dart/grammar/data-type/set/for'} ]},
		{ pro:'私有方法', code:[ {path:'dart/grammar/data-type/set/method'} ]},
		{ pro:'私有属性', code:[ {path:'dart/grammar/data-type/set/property'} ]},
		{ pro:'公共属性', code:[ {path:'dart/grammar/entrance/public-property'} ]},
		{ pro:'公共方法', code:[ {path:'dart/grammar/entrance/public-method'} ]},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }