import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'配置主题',
	data:[
		{ keyword:'ThemeData()', pro:'设置主题，全局配置', code:[ {path:'flutter/app/theme/set-theme'} ]},
		{ keyword:'Theme.of(context).X', pro:'获取主题', code:[ {path:'flutter/app/theme/get-theme'} ], url:'get-theme' },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }