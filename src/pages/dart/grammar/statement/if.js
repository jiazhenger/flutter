import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'判断语句',
	data:[
		{ keyword:'if', pro:'判断', code:[ {path:'dart/grammar/statement/if/if'} ]},
		{ keyword:'switch', pro:'分支', code:[ {path:'dart/grammar/statement/if/switch'} ]},
		{ keyword:'?:', pro:'三元运算符', code:[ {path:'dart/grammar/statement/if/three'} ]},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }