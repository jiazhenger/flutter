﻿import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'顶级入口',
	data:[
		{ keyword:'main', pro:'dart 顶级入口', code:[ {path:'dart/grammar/entrance/main'} ]},
		{ pro:'公共属性', code:[ {path:'dart/grammar/entrance/public-property'} ]},
		{ pro:'公共方法', code:[ {path:'dart/grammar/entrance/public-method'} ]},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }