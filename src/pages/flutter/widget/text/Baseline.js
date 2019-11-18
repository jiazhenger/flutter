import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'基线定位',
	keyword:'Baseline( )',
	type:'Baseline',
	url:'BaselinePage',
	data:[
		{ keyword:'baseline', type:'double', pro:'上边距离' },
		{ keyword:'baselineType', type:'TextBaseline', pro:'基线定位类型', code:[ {path:'flutter/public/TextBaseline'} ] },
		{ keyword:'child', type:'Widget', pro:'子控件' },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }