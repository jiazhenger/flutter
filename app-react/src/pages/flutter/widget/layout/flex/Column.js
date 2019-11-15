import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'纵向布局',
	keyword:'Column( )',
	type:'Column',
	url:'ColumnPage',
	data:[
		{ noOrder:true,pro:'Flex 公共属性', link:'/flutter/layout/Flex' },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }