import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'手势事件',
	keyword:'TapGestureRecognizer( )',
	type:'TapGestureRecognizer',
	data:[
		{ pro:'事件监听', code:[ {path:'flutter/event/TapGestureRecognizer/on'} ]},
		{ pro:'属性', code:[ {path:'flutter/event/TapGestureRecognizer/property'} ]},
		{ pro:'方法', code:[ {path:'flutter/event/TapGestureRecognizer/method'} ]},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }