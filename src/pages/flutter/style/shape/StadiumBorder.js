import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'椭圆',
	keyword:'StadiumBorder( )',
	url:'StadiumBorderPage',
	data:[
		{ 
			keyword:'side', type:'BorderSide', pro:'边框样式',
			code:[ {path:'flutter/style/shape/StadiumBorder'} ],
			link: [ { title:'BorderSide', url:'/flutter/style/border/BorderSide'} ]
		}
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }