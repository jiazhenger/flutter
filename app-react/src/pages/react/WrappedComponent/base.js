import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'高阶组件的基本格式',
	data:[
		{ pro:'创建高阶组件',  code:[ {path:'react/WrappedComponent/base/create'} ]},
		{ pro:'使用高阶组件',  code:[ {path:'react/WrappedComponent/base/use'} ]},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }