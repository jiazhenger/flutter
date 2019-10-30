import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'测试输出',
	data:[
		{ keyword:'print', pro:'测试打印', code:[ {path:'dart/grammar/test/print'} ]},
		{ keyword:'assert', pro:'断言', code:[ {path:'dart/grammar/test/assert'} ]},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }