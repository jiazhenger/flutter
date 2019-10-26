import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'对齐方式',
	data:[
		{ keyword:'Alignment.position', type:'Alignment', pro:'位置对齐', code:[ {path:'flutter/style/Alignment/position'} ], url:'AlignmentPosition' },
		{ keyword:'Alignment(double x,duble y)', type:'Alignment', pro:'自定义对齐', code:[ {path:'flutter/style/Alignment/xy'} ], url:'AlignmentXY' },
		{ keyword:'FractionalOffset(double dx,double dy)', type:'FractionalOffset', pro:'按比例对齐', code:[ {path:'flutter/style/Alignment/FractionalOffset'} ], url:'FractionalOffset' },
		{ keyword:'Alignment.lerp(Alignment a,Alignment b, double t)', type:'Alignment', pro:'', code:[ {path:'flutter/style/Alignment/lerp'} ], url:'AlignmentLerp' },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }