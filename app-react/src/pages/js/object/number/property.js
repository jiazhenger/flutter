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
		var num = 123
		return (
			<UbContent className='page-content'>
				<BoxComponent order={1} keyword='constructor' pro='返回对创建此对象的 Number 函数的引用'>
					<CaseJs>
						<li>var num = 123</li>
						<li>var con = num.<b>constructor</b> <u>=> {num.constructor.toString()}</u></li>
					</CaseJs>
				</BoxComponent>
				
				<BoxComponent order={2} keyword='prototype' pro='允许向对象添加属性和方法'>
					<CaseJs>
						<li>var num = 123</li>
						<li>num.<b>prototype</b>.name = 'abc'</li>
						<li>num.<b>prototype</b>.run = function( )｛｝</li>
					</CaseJs>
				</BoxComponent>
				
				<BoxComponent order={3} keyword='MAX_VALUE' pro='最大的数'>
					<CaseJs>
						<li>var num = <b>Number.MAX_VALUE</b> <u>=> {Number.MAX_VALUE}</u></li>
					</CaseJs>
				</BoxComponent>
				
				<BoxComponent order={4} keyword='MIN_VALUE' pro='最小的数'>
					<CaseJs>
						<li>var num = <b>Number.MIN_VALUE</b> <u>=> {Number.MIN_VALUE}</u></li>
					</CaseJs>
				</BoxComponent>
				
				<BoxComponent order={5} keyword='NaN' pro='非数字值'>
					<CaseJs>
						<li>var num = <b>Number.NaN</b> <u>=> {Number.NaN}</u></li>
					</CaseJs>
				</BoxComponent>
				
				<BoxComponent order={6} keyword='NEGATIVE_INFINITY' pro='负无穷大，溢出时返回该值'>
					<CaseJs>
						<li>var num = <b>Number.NEGATIVE_INFINITY</b> <u>=> {Number.NEGATIVE_INFINITY}</u></li>
					</CaseJs>
				</BoxComponent>
				
				<BoxComponent order={7} keyword='POSITIVE_INFINITY' pro='正无穷大，溢出时返回该值'>
					<CaseJs>
						<li>var num = <b>Number.POSITIVE_INFINITY</b> <u>=> {Number.POSITIVE_INFINITY}</u></li>
					</CaseJs>
				</BoxComponent>
			</UbContent>
		)
	}
}
