import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'判断语句',
	data:[
		{ keyword:'for', pro:'List、Set、Map', code:[ {path:'dart/grammar/statement/for/for'} ]},
		{ keyword:'for in', pro:'List、Set', code:[ {path:'dart/grammar/statement/for/for-in'} ]},
		{ keyword:'do-while', pro:'List、Set、Map',code:[ {path:'dart/grammar/statement/for/while'} ]},
		{ keyword:'forEach', pro:'List、Set、Map',code:[ {path:'dart/grammar/statement/for/forEach'} ]},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }