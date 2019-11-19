import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'步骤指示器',
	grayText:'const',
	keyword:'Stepper( )',
	type:'Stepper',
	url:'StepperPage',
	data:[
		{ keyword:'steps', type:'List<Step>', pro:'步骤列表',
			code:[{path:'flutter/ui/Stepper/steps'}],
			link:[{title:'Step',url:'/flutter/style/Step'}]
		},
		{ keyword:'currentStep', type:'int', pro:'当前步骤' },
		{ keyword:'type', type:'StepperType', pro:'步骤类型', code:[{path:'flutter/ui/Stepper/StepperType'}] },
		{ keyword:'physics', type:'ScrollPhysics', pro:'响应用户输入', code:[{ path:'flutter/public/ScrollPhysics'}] },
		{ 
			keyword:'controlsBuilder', type:'Widget Function(BuildContext, {onStepContinue: void Function(), onStepCancel: void Function()})', pro:'控制器',
			code:[{path:'flutter/ui/Stepper/controlsBuilder'}]
		},
		{ keyword:'onStepTapped', type:'void Function( int )', pro:'点击步骤时执行', code:[ {path:'flutter/ui/Stepper/onStepTapped'} ] },
		{ keyword:'onStepContinue', type:'void Function( )', pro:'执行 controlsBuilder 中的 onStepContinue', code:[ {path:'flutter/ui/Stepper/onStepContinue'} ] },
		{ keyword:'onStepCancel', type:'void Function( )', pro:'执行 controlsBuilder 中的 onStepCancel', code:[ {path:'flutter/ui/Stepper/onStepCancel'} ] },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }