import React from 'react'
// ===================================================================== public component
import UbContent from '@cpx/ub-content.component'
import BoxComponent from '@cpt/box.component'
// ===================================================================== component
const $fn = window.$fn
export default class Index extends React.Component{
	componentDidMount(){
		$fn.setTitle('区分css支持的浏览器')
		$fn.hidePhone()
	}
	render(){
		return (
			<UbContent className='page-content'>
				<BoxComponent pro='区分css支持浏览器的前缀' code={[ {path:'css/base/browser/prefix'} ]} />
				<BoxComponent pro='css hacker' code={[ {path:'css/base/browser/hacker'} ]} />
			</UbContent>
		)
	}
}
