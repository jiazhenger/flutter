import React from 'react'
// ===================================================================== public component
import UbContent from '@cpx/ub-content.component'
import BoxComponent from '@cpt/box.component'
import CaseJs from '@cpt/case-js.component'
// ===================================================================== component
const $fn = window.$fn
export default class Index extends React.Component{
	componentDidMount(){
		$fn.setTitle('Object 构造函数的属性')
		$fn.hidePhone()
	}
	render(){
		return (
			<UbContent className='page-content'>
				<BoxComponent order={1} keyword='length' pro='对象长度'>
					<CaseJs>
						<li>var num = Object.<b>length</b> <u>=> {Object.length}</u></li>
					</CaseJs>
				</BoxComponent>
				
				<BoxComponent order={2} keyword='prototype' pro='为所有 Object 类型的对象添加属性'>
					<CaseJs>
						<li>Object.<b>prototype</b>.name = 'abc'</li>
						<li>Object.<b>prototype</b>.run = function( )｛｝</li>
					</CaseJs>
				</BoxComponent>
			</UbContent>
		)
	}
}
