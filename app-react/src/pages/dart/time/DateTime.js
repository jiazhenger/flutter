import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'时间声明',
	data:[
		{ keyword:'DateTime( )', pro:'时间声明', code:[ {path:'dart/time/DateTime'} ]},
		{ keyword:'DateTime', pro:'时间方法及属性', code:[ {path:'dart/time/time'} ]},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }