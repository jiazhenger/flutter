import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'math 包',
	data:[
		{ keyword:'Random( )', pro:'随机值', code:[ {path:'dart/package/math/Random'} ]},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }