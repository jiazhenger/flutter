import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'裁剪方式',
	isGroup:true,
	data:[
		{
			title:'裁剪方式', keyword:'Clip.x',type:'Clip',
			data:[
				{ keyword:'antiAliasWithSaveLayer',  pro:'抗锯齿，有屏幕缓冲，速度慢' },
				{ keyword:'antiAlias', pro:'抗锯齿，速度中' },
				{ keyword:'hardEdge', pro:'不抗锯齿，速度快' },
				{ keyword:'none', pro:'无' },
				{ noOrder:true, pro:'示例', code:[ {path:'flutter/style/Clip/Clip'} ] },
			]
		}
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }