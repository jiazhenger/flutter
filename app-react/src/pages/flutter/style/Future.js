import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'',
	keyword:'Future( )',
	type:'Future<T>',
	data:[
		{ keyword:'computation', type:'FutureOr<T> Function( )', pro:'', isValue:true, code:[ {path:'flutter/public/Future'} ] },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }