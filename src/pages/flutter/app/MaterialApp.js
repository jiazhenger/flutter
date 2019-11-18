import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'app 入口',
	data:[
		{ keyword:'MaterialApp( )', pro:'app 入口配置', code:[ {path:'flutter/app/MaterialApp'} ]},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }