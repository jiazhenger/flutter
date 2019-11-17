import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'Size',
	isGroup:true,
	data:[
		{
			title:'尺寸', keyword:'Size( )',type:'Rect',
			data:[
				{ keyword:'width', type:'double', pro:'宽' },
				{ keyword:'height', type:'double', pro:'高' },
			]
		},
		{ title:'无', keyword:'Size.zero', type:'Rect' },
		{ title:'无限', keyword:'Size.infinite', type:'Rect' },
		{
			title:'复制', keyword:'Size.copy( )',type:'Rect',
			data:[
				{ keyword:'source', type:'Size', pro:'', isValue:true,  code:[ {path:'flutter/style/Size/copy'} ] },
			]
		},
		{
			title:'正方形', keyword:'Size.square( )',type:'Rect',
			data:[
				{ keyword:'dimension', type:'double', pro:'', isValue:true  },
			]
		},
		{
			title:'宽', keyword:'Size.fromWidth( )',type:'Rect',
			data:[
				{ keyword:'width', type:'double', pro:'高', isValue:true  },
			]
		},
		{
			title:'高', keyword:'Size.fromHeight( )',type:'Rect',
			data:[
				{ keyword:'height', type:'double', pro:'高', isValue:true  },
			]
		},
		{
			title:'圆角', keyword:'Size.fromRadius( )',type:'Rect',
			data:[
				{ keyword:'radius', type:'double', pro:'角度值', isValue:true  },
			]
		},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }