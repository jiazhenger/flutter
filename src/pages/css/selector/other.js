import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'其它选择器',
	data:[
		{ keyword:'::-webkit-input-placeholder', pro:'选择 placeholder', code:[ {path:'css/selector/other/placeholder'} ] }
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }