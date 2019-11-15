import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'限制高宽',
	isGroup:true,
	data:[
		{
			title:'限制高宽',
			keyword:'BoxConstraints( )',
			data:[
				{ keyword:'minWidth', type:'double', pro:'最小宽度' },
				{ keyword:'maxWidth', type:'double', pro:'最大宽度' },
				{ keyword:'minHeight', type:'double', pro:'最大高度' },
				{ keyword:'maxHeight', type:'double', pro:'最大高度' },
				{ noOrder:true, pro:'示例', code:[ {path:'flutter/style/BoxConstraints/BoxConstraints'} ] },
			]
		},
		{
			title:'限制高宽',
			keyword:'BoxConstraints.tight( )',
			data:[
				{ keyword:'size', type:'Size', pro:'尺寸', isValue:true, link:'/flutter/style/Size' },
			]
		},
		{
			title:'限制高宽',
			keyword:'BoxConstraints.expand( )',
			data:[
				{ keyword:'width', type:'double', pro:'宽度' },
				{ keyword:'height', type:'double', pro:'高度' },
			]
		},
		{
			title:'限制高宽',
			keyword:'BoxConstraints.tightForFinite( )',
			data:[
				{ keyword:'width', type:'double', pro:'宽度，默认 = double.infinity' },
				{ keyword:'height', type:'double', pro:'高度，默认 = double.infinity' },
			]
		},
		{
			title:'限制高宽',
			keyword:'BoxConstraints.tightFor( )',
			data:[
				{ keyword:'width', type:'double', pro:'宽度' },
				{ keyword:'height', type:'double', pro:'高度' },
			]
		},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }