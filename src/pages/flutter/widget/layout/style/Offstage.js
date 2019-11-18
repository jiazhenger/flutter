import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'不在屏幕之内，不占物理空间 == display:none',
	keyword:'Offstage( )',
	type:'Offstage',
	data:[
		{ keyword:'offstage', type:'bool', pro:'是否在屏幕之外，默认 true，在屏幕之外' },
		{ keyword:'child', type:'Widget', pro:'控件' }
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }