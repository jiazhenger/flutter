import React from 'react'
// ===================================================================== public component
import UbContent from '@cpx/ub-content.component'
import BoxComponent from '@cpt/box.component'
import CaseJs from '@cpt/case-js.component'
// ===================================================================== component
const $fn = window.$fn
export default class Index extends React.Component{
	componentDidMount(){
		$fn.setTitle('布尔值属性')
		$fn.hidePhone()
	}
	render(){
		var bool = true
		return (
			<UbContent className='page-content'>
				<BoxComponent order={1} keyword='constructor' pro='返回对创建此对象的 Boolean 函数的引用'>
					<CaseJs>
						<li>var bool = true</li>
						<li>var con = bool.<b>constructor</b> <u>=> {bool.constructor.toString()}</u></li>
					</CaseJs>
				</BoxComponent>
				
				<BoxComponent order={2} keyword='prototype' pro='允许向对象添加属性和方法'>
					<CaseJs>
						<li>var bool = true</li>
						<li>bool.<b>prototype</b>.name = 'abc'</li>
						<li>bool.<b>prototype</b>.run = function( )｛｝</li>
					</CaseJs>
				</BoxComponent>
			</UbContent>
		)
	}
}
