import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'padding 与  margin',
	data:[
		{ keyword:'EdgeInsets.zero', pro:'无', code:[ {path:'flutter/style/EdgeInsets/zero'} ] },
		{ keyword:'EdgeInsets.all(0.0)', type:'double', pro:'四边', code:[ {path:'flutter/style/EdgeInsets/all'} ] },
		{ keyword:'EdgeInsets.only(left:0.0,top:0.0,right:0.0,bottom:0.0)', type:'double', pro:'单边', code:[ {path:'flutter/style/EdgeInsets/only'} ] },
		{ keyword:'EdgeInsets.symmetric(vertical:0.0,horizontal:0.0)', type:'double', pro:'水平垂直', code:[ {path:'flutter/style/EdgeInsets/symmetric'} ] },
		{ keyword:'EdgeInsets.fromLTRB(0.0,0.0,0.0,0.0)', type:'double', pro:'四边', code:[ {path:'flutter/style/EdgeInsets/fromLTRB'} ] },
		{ keyword:'EdgeInsets.lerp(EdgeInsets a, EdgeInsets b, double t)', pro:'', code:[ {path:'flutter/style/EdgeInsets/lerp'} ] },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }