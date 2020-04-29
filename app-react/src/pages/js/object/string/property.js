import React from 'react'
// ===================================================================== public component
import UbContent from '@cpx/ub-content.component'
import BoxComponent from '@cpt/box.component'
import CaseJs from '@cpt/case-js.component'
// ===================================================================== component
const $fn = window.$fn
export default class Index extends React.Component{
	componentDidMount(){
		$fn.setTitle('字符串属性')
		$fn.hidePhone()
	}
	render(){
		var str = '123456'
		return (
			<UbContent className='page-content'>
				<BoxComponent order={1} keyword='length' pro='字符串的长度'>
					<CaseJs>
						<li>var str = '123456'</li>
						<li>var len = str.<b>length</b> <u>=> {str.length}</u></li>
					</CaseJs>
				</BoxComponent>
				
				<BoxComponent order={2} keyword='constructor' pro='对创建该对象的函数的引用'>
					<CaseJs>
						<li>var str = '123456'</li>
						<li>var str2 = new String(str)</li>
						<li>var con = str2.<b>constructor</b> <u>=> {str.constructor.toString()}</u></li>
					</CaseJs>
				</BoxComponent>
				
				<BoxComponent order={3} keyword='prototype' pro='允许向对象添加属性和方法'>
					<CaseJs>
						<li>var str = '123456'</li>
						<li>str.<b>prototype</b>.name = 'abc'</li>
						<li>str.<b>prototype</b>.run = function( )｛｝</li>
					</CaseJs>
				</BoxComponent>
			</UbContent>
		)
	}
}
