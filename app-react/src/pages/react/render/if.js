import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'模板判断',
	data:[
		{ pro:'运算符判断', keyword:'? && ||', code:[ {path:'react/render/if/three'} ]},
		{ pro:'if 判断', keyword:'if', code:[ {path:'react/render/if/if'} ]},
		{ pro:'hidden 判断', keyword:'hidden', code:[ {path:'react/render/if/hidden'} ]},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }