import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'地区配置',
	isGroup:true,
	data:[
		{
			title:'地区', 
			keyword:'Locale( )', 
			type:'Locale',
			data:[
				{ keyword:'languageCode', type:'String',  pro:'语言标记', isValue:true },
				{ keyword:'countryCode', type:'Widget',  pro:'国家标记', isValue:true },
				{ keyword:'scriptCode', type:'String',  pro:'脚本标记', isValue:true },
				{ noOrder:true, pro:'示例', code:[ {path:'flutter/style/locale/Locale'} ] }
			]
		},
		{
			title:'对象',
			keyword:'Locale.fromSubtags( )',
			type:'Locale',
			data:[
				{ keyword:'languageCode', type:'String',  pro:'语言标记' },
				{ keyword:'countryCode', type:'Widget',  pro:'国家标记' },
				{ keyword:'scriptCode', type:'String',  pro:'脚本标记' },
				{ noOrder:true, pro:'示例', code:[ {path:'flutter/style/locale/fromSubtags'} ] }
			]
		}
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }