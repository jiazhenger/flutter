import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'模板循环',
	data:[
		{ pro:'循环数组', keyword:'map', code:[ {path:'react/render/for/array'} ]},
		{ pro:'循环对象', keyword:'map', code:[ {path:'react/render/for/object'} ]},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }