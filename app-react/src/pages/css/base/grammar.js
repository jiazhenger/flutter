import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'app 入口',
	data:[
		{ pro:'书写格式', code:[ {path:'css/base/grammar/format'} ]},
		{ pro:'注释', code:[ {path:'css/base/grammar/annotation'} ]},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }