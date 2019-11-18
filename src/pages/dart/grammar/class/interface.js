import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'定义接口',
	data:[
		{ keyword:'abstract', pro:'抽象类', code:[ { path:'dart/grammar/class/interface/abstract' } ]},
		{ keyword:'implements', pro:'隐式接口', code:[ { path:'dart/grammar/class/interface/implements' } ]},
		{ keyword:'mixin', pro:'多继承', code:[ { path:'dart/grammar/class/interface/mixin' } ]},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }