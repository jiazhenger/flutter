import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'配置主题',
	isGroup:true,
	data:[
		{ title:'设置主题，全局配置', keyword:'ThemeData( )', type:'ThemeData', 
			data:[
				{ noOrder:true, pro:'属性配置',code:[ {path:'flutter/app/theme/set-theme'} ]}
			]
		},
		{ title:'深色', keyword:'ThemeData.dark( )', type:'ThemeData' },
		{ title:'浅色', keyword:'ThemeData.light( )', type:'ThemeData' },
		{ title:'', keyword:'ThemeData.fallback( )', type:'ThemeData' },
		{ title:'自定义配置，属性同 ThemeData( )', keyword:'ThemeData.row( )', type:'ThemeData' }
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }