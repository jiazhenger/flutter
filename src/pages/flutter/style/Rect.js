import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'Rect',
	isGroup:true,
	data:[
		{ title:'无', keyword:'Rect.zero', type:'Rect' },
		{
			title:'',
			keyword:'Rect.fromCenter( )',
			type:'Rect',
			data:[
				{ keyword:'center', type:'Offset', pro:'偏移', link:'/flutter/style/offset/Offset' },
				{ keyword:'width', type:'double', pro:'宽' },
				{ keyword:'height', type:'double', pro:'高' },
			]
		},
		{
			title:'',
			keyword:'Rect.fromCircle( )',
			type:'Rect',
			data:[
				{ keyword:'center', type:'Offset', pro:'偏移', link:'/flutter/style/offset/Offset' },
				{ keyword:'radius', type:'double', pro:'圆角' },
			]
		},
		{
			title:'',
			keyword:'Rect.fromLTRB( )',
			type:'Rect',
			data:[
				{ keyword:'left', type:'double', pro:'左' },
				{ keyword:'top', type:'double', pro:'上' },
				{ keyword:'right', type:'double', pro:'右' },
				{ keyword:'bottom', type:'double', pro:'下' },
			]
		},
		{
			title:'',
			keyword:'Rect.fromLTWH( )',
			type:'Rect',
			data:[
				{ keyword:'left', type:'double', pro:'左' },
				{ keyword:'top', type:'double', pro:'上' },
				{ keyword:'width', type:'double', pro:'高' },
				{ keyword:'height', type:'double', pro:'宽' },
			]
		}
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }