import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'模板事件',
	data:[
		{ pro:'不带参数、不含 this 调用', code:[ {path:'react/render/event/noParam-noThis'} ]},
		{ pro:'不带参数、含 this 调用', code:[ {path:'react/render/event/noParam-hasThis'} ]},
		{ pro:'带参数、不含 this 调用', code:[ {path:'react/render/event/hasParam-noThis'} ]},
		{ pro:'带参数，含 this 调用', code:[ {path:'react/render/event/hasParam-hasThis'} ]},
		
		{ pro:'事件', code:[ {path:'react/render/event/event'} ]},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }