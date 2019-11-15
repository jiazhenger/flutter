import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'横向布局',
	keyword:'Row( )',
	type:'Row',
	url:'RowPage',
	data:[
		{ noOrder:true,pro:'Flex 公共属性', link:'/flutter/layout/Flex' },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }