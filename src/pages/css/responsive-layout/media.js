import React from 'react'
// ===================================================================== public component
import UbContent from '@cpx/ub-content.component'
import BoxComponent from '@cpt/box.component'
// ===================================================================== component
const $fn = window.$fn
export default class Index extends React.Component{
	state = {
		
	}
	componentDidMount(){
		$fn.setTitle('媒体查询器')
		$fn.hidePhone()
	}
	render(){
		return (
			<UbContent className='page-content'>
				<BoxComponent keyword='@media' pro='媒体查询器' code={[ {path:'css/responsive-layout/media'} ]} />
				<BoxComponent keyword='only/not/and' pro='三种计算方式' code={[ {path:'css/responsive-layout/media-way'} ]} />
			</UbContent>
		)
	}
}