import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'列表类型',
	data:[
		{ pro:'类型声明', code:[ {path:'dart/grammar/var/type/list'} ]},
		{ pro:'创建列表', code:[ {path:'dart/grammar/data-type/list/create'} ]},
		{ pro:'获取元素', code:[ {path:'dart/grammar/data-type/list/read'} ]},
		{ pro:'添加元素', code:[ {path:'dart/grammar/data-type/list/add'} ]},
		{ pro:'删除元素', code:[ {path:'dart/grammar/data-type/list/remove'} ]},
		{ pro:'检索元素', code:[ {path:'dart/grammar/data-type/list/search'} ]},
		{ pro:'列表排序', code:[ {path:'dart/grammar/data-type/list/sort'} ]},
		{ pro:'替换元素', code:[ {path:'dart/grammar/data-type/list/replace'} ]},
		{ pro:'合并元素', code:[ {path:'dart/grammar/data-type/list/merge'} ]},
		{ pro:'数据转换', code:[ {path:'dart/grammar/data-type/list/output-type'} ]},
		{ pro:'迭代循环', code:[ {path:'dart/grammar/data-type/list/for'} ]},
		{ pro:'私有方法', code:[ {path:'dart/grammar/data-type/list/method'} ]},
		{ pro:'私有属性', code:[ {path:'dart/grammar/data-type/list/property'} ]},
		{ pro:'公共属性', code:[ {path:'dart/grammar/entrance/public-property'} ]},
		{ pro:'公共方法', code:[ {path:'dart/grammar/entrance/public-method'} ]},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }