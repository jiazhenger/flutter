import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'圆角值',
	data:[
		{ keyword:'Radius.zero', type:'Radius', pro:'无圆角', code:[ {path:'flutter/style/borderRadius/Radius/zero'} ] },
		{ keyword:'Radius.circular(double radius)', type:'Radius', pro:'圆角', code:[ {path:'flutter/style/borderRadius/Radius/circular'} ] },
		{ keyword:'Radius.elliptical(double x, double y)', type:'Radius', pro:'圆角', code:[ {path:'flutter/style/borderRadius/Radius/elliptical'} ] },
		{ keyword:'Radius.lerp(Radius a,Radius b, double t)', type:'Radius', pro:'圆角', code:[ {path:'flutter/style/borderRadius/Radius/lerp'} ] },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }