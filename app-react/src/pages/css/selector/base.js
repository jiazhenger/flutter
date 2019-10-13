import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'基础选择器',
	data:[
		{ keyword:'*{ }', pro:'选择任何元素', code:[ {path:'css/selector/base/any'} ] },
		{ keyword:'div{ }', pro:'html 元素选择器', code:[ {path:'css/selector/base/tag'} ] },
		{ keyword:'.class{ }', pro:'lass 类选择器', code:[ {path:'css/selector/base/class'} ] },
		{ keyword:'#id{ }', pro:'id 类选择器', code:[ {path:'css/selector/base/id'} ] },
		{ keyword:'[attr]{ }', pro:'属性选择器', code:[ {path:'css/selector/base/attr'} ] },
		{ keyword:'div,p,span{ }', pro:'分组选择器', code:[ {path:'css/selector/base/group'} ] },
		{ keyword:'div.class{ }、.class.class{ }', pro:'限制选择器', code:[ {path:'css/selector/base/limit'} ] },
		{ keyword:'div span{ }', pro:'包含选择器', code:[ {path:'css/selector/base/child-all'} ] },
		{ keyword:'div>span{ }', pro:'子对象选择器', code:[ {path:'css/selector/base/child'} ] },
		{ keyword:'div+p{ }、div~p{ }', pro:'兄弟选择器', code:[ {path:'css/selector/base/brother'} ]},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }