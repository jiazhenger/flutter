import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'动画控件器',
	keyword:'AnimationController( )',
	type:'AnimationController',
	data:[
		{ keyword:'value', type:'double', pro:'' },
		{ keyword:'lowerBound', type:'double', pro:'' },
		{ keyword:'upperBound', type:'double', pro:'' },
		{ keyword:'debugLabel', type:'String', pro:'可读描述' },
		{ keyword:'duration', type:'Duration', pro:'过渡时间', link:'/flutter/time/Duration' },
		{ keyword:'reverseDuration', type:'Duration', pro:'反转过渡时间', link:'/flutter/time/Duration' },
		{ keyword:'animationBehavior', type:'AnimationBehavior', pro:'动画行为', code:[{path:'flutter/animation/AnimationBehavior'}] },
		{ keyword:'vsync', type:'TickerProvider', pro:'垂直同步', code:[{path:'flutter/public/vsync'}] }
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }