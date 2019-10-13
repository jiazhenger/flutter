import React from 'react'
// ===================================================================== public component
import UbContent from '@cpx/ub-content.component'
import BoxComponent from '@cpt/box.component'
// ===================================================================== component
const $fn = window.$fn
export default class Index extends React.Component{
	componentDidMount(){
		$fn.setTitle('MaterialApp()')
	}
	render(){
		return (
			<UbContent className='page-content'>
				<BoxComponent keyword='MaterialApp()' pro='入口配置' code={[ {path:'flutter/app/MaterialApp'} ]} />
			</UbContent>
		)
	}
}
