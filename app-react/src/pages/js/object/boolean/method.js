import React from 'react'
// ===================================================================== public component
import UbContent from '@cpx/ub-content.component'
import BoxComponent from '@cpt/box.component'
import CaseJs from '@cpt/case-js.component'
// ===================================================================== component
const $fn = window.$fn
export default class Index extends React.Component{
	componentDidMount(){
		$fn.setTitle('字符串方法')
		$fn.hidePhone()
	}
	render(){
		const bool = false
		return (
			<UbContent className='page-content'>
				<BoxComponent order={1} keyword='toString( )' pro='把逻辑值转换为字符串，并返回结果' code={[ {path:'js/object/boolean/method/toString'} ]}>
					<CaseJs>
						<li>var bool = true</li>
						<li>var str = bool.<b>toString( )</b> <u>=> {bool.toString()}</u></li>
					</CaseJs>
				</BoxComponent>
				<BoxComponent order={2} keyword='valueOf( )' pro='返回 Boolean 对象的原始值' code={[ {path:'js/object/boolean/method/valueOf'} ]}>
					<CaseJs>
						<li>var bool = true</li>
						<li>var str = bool.<b>valueOf( )</b> <u>=> {bool.valueOf().toString()}</u></li>
					</CaseJs>
				</BoxComponent>
			</UbContent>
		)
	}
}