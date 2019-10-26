import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'四边偏移量',
	data:[
		{ keyword:'EdgeInsets.zero', type:'EdgeInsets', pro:'无', code:[ {path:'flutter/style/EdgeInsets/zero'} ] },
		{ keyword:'EdgeInsets.all(double value)', type:'EdgeInsets', pro:'四边', code:[ {path:'flutter/style/EdgeInsets/all'} ],url:'EdgeInsetsAll' },
		{ keyword:'EdgeInsets.only(double left:0.0, double top:0.0, double right:0.0, double bottom:0.0)', type:'EdgeInsets', pro:'单边', code:[ {path:'flutter/style/EdgeInsets/only'} ], url:'EdgeInsetsOnly' },
		{ keyword:'EdgeInsets.symmetric(double vertical:0.0, double horizontal:0.0)', type:'EdgeInsets', pro:'水平垂直', code:[ {path:'flutter/style/EdgeInsets/symmetric'} ], url:'EdgeInsetsSymmetric' },
		{ keyword:'EdgeInsets.fromLTRB(double left, double top, double right, double bottom)', type:'EdgeInsets', pro:'四边', code:[ {path:'flutter/style/EdgeInsets/fromLTRB'} ],url:'EdgeInsetsFromLTRB' },
		{ 
			keyword:'EdgeInsets.fromWindowPadding(ui.WindowPadding padding, double devicePixelRatio)',
			type:'EdgeInsets',
			pro:'根据机型屏幕尺寸定义', 
			code:[ {path:'flutter/style/EdgeInsets/fromWindowPadding'} ],
			url:'EdgeInsetsFromWindowPadding'
		},
		{ keyword:'EdgeInsets.lerp(EdgeInsets a, EdgeInsets b, double t)', type:'EdgeInsets', code:[ {path:'flutter/style/EdgeInsets/lerp'} ], url:'EdgeInsetsLerp' },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }