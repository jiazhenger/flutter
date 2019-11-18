import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'app 入口',
	data:[
		{ pro:'区分css支持浏览器的前缀', code:[ {path:'css/base/browser/prefix'} ]},
		{ pro:'css hacker', code:[ {path:'css/base/browser/hacker'} ]},
		{ pro:'区别 IE', code:[ {path:'css/base/browser/ie'} ]},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }