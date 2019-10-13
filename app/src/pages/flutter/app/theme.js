import React from 'react'
// ===================================================================== public component
import UbContent from '@cpx/ub-content.component'
import BoxComponent from '@cpt/box.component'
// ===================================================================== component
const $fn = window.$fn
export default class Index extends React.Component{
	componentDidMount(){
		$fn.setTitle('配置主题')
	}
	render(){
		return (
			<UbContent className='page-content'>
				<BoxComponent keyword='ThemeData()' pro='设置主题' code={[ {path:'flutter/app/theme/set-theme'} ]} />
				<BoxComponent keyword='Theme.of(context).X' pro='获取主题' code={[ {path:'flutter/app/theme/get-theme'} ]} url='get-theme' />
			</UbContent>
		)
	}
}