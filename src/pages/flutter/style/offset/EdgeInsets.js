import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'四边偏移量',
	isGroup:true,
	data:[
		{ title:'无', grayText:'const', keyword:'EdgeInsets.zero', type:'EdgeInsets' },
		{
			title:'四边',
			grayText:'const',
			keyword:'EdgeInsets.all( )',
			type:'EdgeInsets',
			url:'EdgeInsetsAll',
			data:[
				{ keyword:'value', type:'double', pro:'垂直偏移', isValue:true },
			]
		},
		{
			title:'水平垂直',
			grayText:'const',
			keyword:'EdgeInsets.symmetric( )',
			type:'EdgeInsets',
			url:'EdgeInsetsSymmetric',
			data:[
				{ keyword:'vertical', type:'double', pro:'垂直' },
				{ keyword:'horizontal', type:'double', pro:'水平', code:[ {path:'flutter/style/offset/EdgeInsets/symmetric'} ] },
			]
		},
		{
			title:'单边',
			grayText:'const',
			keyword:'EdgeInsets.only( )',
			type:'EdgeInsets',
			url:'EdgeInsetsOnly',
			data:[
				{ keyword:'left', type:'double', pro:'左' },
				{ keyword:'top', type:'double', pro:'上' },
				{ keyword:'right', type:'double', pro:'右' },
				{ keyword:'bottom', type:'double', pro:'下', code:[ {path:'flutter/style/offset/EdgeInsets/only'} ]},
			]
		},
		{
			title:'单边',
			grayText:'const',
			keyword:'EdgeInsets.fromLTRB( )',
			type:'EdgeInsets',
			url:'EdgeInsetsOnly',
			data:[
				{ keyword:'left', type:'double', pro:'左', isValue:true },
				{ keyword:'top', type:'double', pro:'上', isValue:true },
				{ keyword:'right', type:'double', pro:'右', isValue:true },
				{ keyword:'bottom', type:'double', pro:'下', isValue:true, code:[ {path:'flutter/style/offset/EdgeInsets/fromLTRB'} ]},
			]
		},
		{
			title:'根据机型屏幕尺寸定义',
			grayText:'const',
			keyword:'EdgeInsets.fromWindowPadding( )',
			type:'EdgeInsets',
			url:'EdgeInsetsFromWindowPadding',
			data:[
				{ keyword:'padding', type:'ui.WindowPadding', pro:'右', isValue:true },
				{ keyword:'devicePixelRatio', type:'double', pro:'下', isValue:true, code:[ {path:'flutter/style/offset/EdgeInsets/fromWindowPadding'} ]},
			]
		}
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }