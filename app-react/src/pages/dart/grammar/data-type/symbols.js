import React from 'react'
// ===================================================================== public component
import UbContent from '@cpx/ub-content.component'
import BoxComponent from '@cpt/box.component'
// ===================================================================== component
const $fn = window.$fn
export default class Index extends React.Component{
	componentDidMount(){
		$fn.setTitle('符号类型')
		$fn.hidePhone()
	}
	render(){
		return (
			<UbContent className='page-content'>
				<BoxComponent pro='符号类型声明' code={[ {path:'dart/grammar/var/type/symbols'} ]} />
				<BoxComponent pro='符号类型使用' code={[ {path:'dart/grammar/data-type/symbols/base'} ]} />
			</UbContent>
		)
	}
}
