import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'高阶组件的参数传递',
	data:[
		{ pro:'高阶组件参数声明',  code:[ {path:'react/WrappedComponent/param/create'} ]},
		{ pro:'使用参数高阶组件',  code:[ {path:'react/WrappedComponent/param/use'} ]},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }