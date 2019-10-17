import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'get/set',
	data:[
		{ keyword:'String get name{ }', pro:'获取时执行', code:[
			{ title:'完整写法', path:'dart/grammar/class/get-set/get/full' },
			{ title:'简写', path:'dart/grammar/class/get-set/get/simple' }
		]},
		{ keyword:'set name(String value){ }', pro:'设置时执行', code:[ 
			{ title:'完整写法', path:'dart/grammar/class/get-set/set/full' },
			{ title:'简写', path:'dart/grammar/class/get-set/set/simple' } 
		]},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }