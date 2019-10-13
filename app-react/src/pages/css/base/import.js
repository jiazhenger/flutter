import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'app 入口',
	data:[
		{ pro:'行内样式', code:[ {path:'css/base/import/inline'} ]},
		{ pro:'内部样式表/内联式', code:[ {path:'css/base/import/inner'} ]},
		{ pro:'外部样式表/外联式', code:[ {path:'css/base/import/link'} ]},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }