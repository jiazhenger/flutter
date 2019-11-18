import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'配置主题',
	isGroup:true,
	data:[
		{ title:'主题', keyword:'Theme( )', type:'Theme', 
			data:[
				{ keyword:'data', type:'ThemeData', pro:'配置主题' },
				{ keyword:'isMaterialAppTheme', type:'bool', pro:'是否使用全局主题' },
				{ keyword:'child', type:'Widget', pro:'控件' },
			]
		},
		{
			title:'获取主题', keyword:'Theme.of(context).X',type:'Theme',url:'get-theme',
			data:[
				{ noOrder:true, pro:'获取主题', code:[ {path:'flutter/app/theme/get-theme'} ] },
			]
		},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }