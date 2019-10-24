import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'时间声明',
	data:[
		{ pro:'Dart sdk 安装', code:[ { title:'Windows', path:'dart/install/windows-dart'} ]},
		{ pro:'安装 angular', code:[ { path:'dart/install/angular-dart'} ]},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }