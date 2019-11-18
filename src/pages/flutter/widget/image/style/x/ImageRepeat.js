import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'平铺方式',
	keyword:'ImageRepeat.x',
	type:'ImageRepeat',
	url:'ImageRepeatPage',
	data:[
		{ keyword:'noRepeat', 		type:'BoxFit', pro:'不平铺， 默认' },
		{ keyword:'repeatX', 		type:'BoxFit', pro:'横向平铺'  },
		{ keyword:'repeatY', 		type:'BoxFit', pro:'纵向平铺'  },
		{ keyword:'repeat', 		type:'BoxFit', pro:'横向、纵向都平铺'  },
		{ noOrder:true, pro:'示例', code:[ {path:'flutter/widget/image/style/x/repeat'} ] },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }