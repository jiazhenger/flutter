import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'',
	keyword:'final _key =  GlobalKey( ) ',
	data:[
		{ keyword:'_key.currentState', type:'state<StateFulWidget>', pro:'有状态的 state', code:[{path:'flutter/com/key/currentState'}] },
		{ keyword:'_key.currentContext', type:'BuildContext', pro:''},
		{ keyword:'_key.currentContext', type:'widget', pro:'当前 widget'},
		
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }