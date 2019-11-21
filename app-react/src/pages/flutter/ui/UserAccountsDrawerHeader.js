import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'用户账户头部',
	keyword:'UserAccountsDrawerHeader( )',
	type:'UserAccountsDrawerHeader',
	url:'UserAccountsDrawerHeaderPage',
	data:[
		{ keyword:'accountName', type:'Widget', pro:'标题' },
		{ keyword:'accountEmail', type:'Widget', pro:'副标题' },
		{ keyword:'currentAccountPicture', type:'Widget', pro:'主图片' },
		{ keyword:'otherAccountsPictures', type:'List<Widget>', pro:'副图片', code:[ {path:'flutter/public/widget-children'} ] },
		{ keyword:'margin', type:'EdgeInsetsGeometry', pro:'边距', link:'/flutter/style/offset/EdgeInsets' },
		{ 
			keyword:'decoration', type:'Decoration', pro:'装饰',
			code:[ {path:'flutter/widget/layout/style/Container/decoration'} ],
			link:[
				{ title:'BoxDecoration', url:'/flutter/style/decoration/BoxDecoration'},
				{ title:'ShapeDecoration', url:'/flutter/style/decoration/ShapeDecoration'},
				{ title:'UnderlineTabIndicator', url:'/flutter/style/decoration/UnderlineTabIndicator'}
			]
		},
		{ keyword:'onDetailsPressed', type:'void Function()', pro:'点副标题时执行', code:[{path:'flutter/event/onDetailsPressed'}] }
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }