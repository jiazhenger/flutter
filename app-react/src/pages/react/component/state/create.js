import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'创建组件方式',
	data:[
		{ pro:'基本组成', code:[ {path:'react/component/state/create/base'} ]},
		{ pro:'创建形式', code:[ {path:'react/component/state/create/way'} ]},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }