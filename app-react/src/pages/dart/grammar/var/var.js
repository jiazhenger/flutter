import React from 'react'
// ===================================================================== public component
import UbContent from '@cpx/ub-content.component'
import BoxComponent from '@cpt/box.component'
// ===================================================================== component
const $fn = window.$fn
export default class Index extends React.Component{
	componentDidMount(){
		$fn.setTitle('变通变量声明')
		$fn.hidePhone()
	}
	render(){
		return (
			<UbContent className='page-content'>
				<BoxComponent pro='变量声明，变量必须声明，不能省略(不能重复相同变量)' code={[ {path:'dart/grammar/var/var'} ]} />
			</UbContent>
		)
	}
}
