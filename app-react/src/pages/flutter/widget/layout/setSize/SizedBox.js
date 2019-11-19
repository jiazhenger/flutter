import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'设置盒子尺寸',
	isGroup:true,
	data:[
		{ title:'设置盒子尺寸，子控件的尺寸会失效', keyword:'SizedBox( )', type:'SizedBox', 
			data:[
				{ keyword:'width', type:'double', pro:'宽度'},
				{ keyword:'height', type:'double', pro:'高度'},
				{ keyword:'child', type:'Widget', pro:'控件' }
			]
		},
		{ title:'设置盒子尺寸，子控件的尺寸会失效', keyword:'SizedBox.expand( )', type:'SizedBox', 
			data:[
				{ keyword:'child', type:'Widget', pro:'控件' }
			]
		},
		{ title:'设置盒子尺寸，子控件的尺寸会失效', keyword:'SizedBox.shrink( )', type:'SizedBox', 
			data:[
				{ keyword:'child', type:'Widget', pro:'控件' }
			]
		},
		{ title:'设置盒子尺寸，子控件的尺寸会失效', keyword:'SizedBox.fromSize( )', type:'SizedBox', 
			data:[
				{ keyword:'size', type:'Size', pro:'尺寸', link:'/flutter/style/Size' },
				{ keyword:'child', type:'Widget', pro:'控件' }
			]
		},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }
