import React from 'react'
// ===================================================================== public component
import UbContent from '@cpx/ub-content.component'
import BoxComponent from '@cpt/box.component'
// ===================================================================== component
const $fn = window.$fn
export default class Index extends React.Component{
	componentDidMount(){
		$fn.setTitle('颜色样式')
	}
	render(){
		return (
			<UbContent className='page-content'>
				<BoxComponent keyword='Colors.red' pro='内置颜色' code={[ {path:'flutter/style/Colors/Colors'} ]} url='Colors' />
				<BoxComponent keyword='Color(0xffffff)' pro='十六进制颜色' code={[ {path:'flutter/style/Colors/color16'} ]} url='color16' />
				<BoxComponent keyword='Color.fromRGBO()' pro='rgba颜色' code={[ {path:'flutter/style/Colors/fromRGBO'} ]} url='rgba' />
				<BoxComponent keyword='Color.fromARGB()' pro='argb颜色' code={[ {path:'flutter/style/Colors/fromARGB'} ]} url='rgba' />
			</UbContent>
		)
	}
}
