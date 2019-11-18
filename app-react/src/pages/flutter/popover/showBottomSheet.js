import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'上滑弹窗',
	keyword:'showBottomSheet( )',
	type:'Future<T> ',
	url:'showBottomSheetPage',
	data:[
		{ keyword:'context', type:'BuildContext', pro:'要显示元素的索引值' },
		{ keyword:'builder', type:'Widget Function(BuildContext)', pro:'自动定义弹窗内容', code:[ {path:'flutter/public/builder'} ] },
		{ 
			noOrder:true, pro:'示例', 
			code:[ {path:'flutter/popover/showModalBottomSheet/showModalBottomSheet'} ],
			link:[
				{ title:'RaisedButton', url:'/flutter/button/RaisedButton' },
			]
		}
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }