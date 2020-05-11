import React from 'react'
// ===================================================================== public component
import UbContent from '@cpx/ub-content.component'
import BoxComponent from '@cpt/box.component'
import CaseJs from '@cpt/case-js.component'
// ===================================================================== component
const $fn = window.$fn
export default class Index extends React.Component{
	componentDidMount(){
		$fn.setTitle('数组属性')
		$fn.hidePhone()
	}
	render(){
		var arr = [1,2,3]
		return (
			<UbContent className='page-content'>
				<BoxComponent order={1} keyword='constructor' pro='返回对创建此对象的数组函数的引用'>
					<CaseJs>
						<li>var arr = [1,2,3]</li>
						<li>var con = arr.<b>constructor</b> <u>=> {arr.constructor.toString()}</u></li>
					</CaseJs>
				</BoxComponent>
				
				<BoxComponent order={2} keyword='prototype' pro='使您有能力向对象添加属性和方法'>
					<CaseJs>
						<li>var arr = [1,2,3]</li>
						<li>arr.<b>prototype</b>.name = 'abc'</li>
						<li>arr.<b>prototype</b>.run = function( )｛｝</li>
					</CaseJs>
				</BoxComponent>
				
				<BoxComponent order={3} keyword='length' pro='设置或返回数组中元素的数目'>
					<CaseJs>
						<li>var arr = [1,2,3]</li>
						<li>arr.<b>length</b> <u>=> { arr.length}</u></li>
					</CaseJs>
				</BoxComponent>
			</UbContent>
		)
	}
}
