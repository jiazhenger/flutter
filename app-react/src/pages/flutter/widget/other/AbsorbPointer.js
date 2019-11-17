import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'在命中测试期间吸收指针的小部件',
	keyword:'AbsorbPointer( )',
	type:'AbsorbPointer',
	data:[
		{ keyword:'absorbing', type:'bool', pro:'' },
		{ keyword:'ignoringSemantics', type:'bool', pro:'忽略语义' },
		{ keyword:'child', type:'Widget', pro:'控件' },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }