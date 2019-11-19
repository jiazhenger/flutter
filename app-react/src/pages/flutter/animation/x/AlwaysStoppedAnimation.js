import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'总是停止的动画',
	keyword:'AlwaysStoppedAnimation( )',
	type:'AlwaysStoppedAnimation<T>',
	data:[
		{ keyword:'value', type:'T', pro:'任意数据类型' }
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }