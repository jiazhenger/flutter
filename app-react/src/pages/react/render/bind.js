import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'模板插值',
	data:[
		{ pro:'基本插值', keyword:'{ }', code:[ {path:'react/render/bind/base'} ]},
		{ pro:'组件插值', keyword:'<Component />', code:[ {path:'react/render/bind/component'} ]},
		{ pro:'html插值', keyword:"dangerouslySetInnerHTML = { { __html: ' ' } }", code:[ {path:'react/render/bind/html'} ]},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }