import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'模板样式',
	data:[
		{ pro:'style', keyword:'style={{ }}', code:[ {path:'react/render/style/style'} ]},
		{ pro:'className', keyword:"className='clearfix'", code:[ {path:'react/render/style/className'} ]},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }