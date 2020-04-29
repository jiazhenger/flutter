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
		const num = 123
		return (
			<UbContent className='page-content'>
				<BoxComponent order={1} keyword='toString( )' pro='把数字转换为字符串，使用指定的基数' code={[ {path:'js/object/number/method/toString'} ]}>
					<CaseJs>
						<li>var num = 123</li>
						<li>var num = num.<b>toString( )</b> <u>=> {num.toString()}</u></li>
						<li>var num = num.<b>toString(2)</b> <u>=> {num.toString(2)}</u></li>
					</CaseJs>
				</BoxComponent>
				<BoxComponent order={2} keyword='valueOf( )' pro='返回一个 Number 对象的基本数字值' code={[ {path:'js/object/number/method/valueOf'} ]}>
					<CaseJs>
						<li>var num = 123</li>
						<li>var num = num.<b>valueOf( )</b> <u>=> {num.valueOf().toString()}</u></li>
					</CaseJs>
				</BoxComponent>
				<BoxComponent order={3} keyword='toFixed( )' pro='把数字转换为字符串，结果的小数点后有指定位数的数字' code={[ {path:'js/object/number/method/toFixed'} ]}>
					<CaseJs>
						<li>var num = 123</li>
						<li>var num = num.<b>toFixed(2)</b> <u>=> {num.toFixed(2)}</u></li>
						<li>var num = num.<b>toFixed(5)</b> <u>=> {num.toFixed(5)}</u></li>
					</CaseJs>
				</BoxComponent>
				<BoxComponent order={4} keyword='toLocaleString( )' pro='把数字转换为字符串，使用本地数字格式顺序' code={[ {path:'js/object/number/method/toLocaleString'} ]}>
					<CaseJs>
						<li>var num = 123</li>
						<li>var num = num.<b>toLocaleString( )</b> <u>=> {num.toLocaleString()}</u></li>
					</CaseJs>
				</BoxComponent>
				<BoxComponent order={5} keyword='toExponential( )' pro='把对象的值转换为指数计数法' code={[ {path:'js/object/number/method/toExponential'} ]}>
					<CaseJs>
						<li>var num = 123</li>
						<li>var num = num.<b>toExponential(0)</b> <u>=> {num.toExponential(0)}</u></li>
						<li>var num = num.<b>toExponential(5)</b> <u>=> {num.toExponential(5)}</u></li>
						<li>var num = num.<b>toExponential(20)</b> <u>=> {num.toExponential(20)}</u></li>
					</CaseJs>
				</BoxComponent>
				<BoxComponent order={6} keyword='toPrecision( )' pro='把数字格式化为指定的长度' code={[ {path:'js/object/number/method/toPrecision'} ]}>
					<CaseJs>
						<li>var num = 123</li>
						<li>var num = num.<b>toPrecision(1)</b> <u>=> {num.toPrecision(1)}</u></li>
						<li>var num = num.<b>toPrecision(5)</b> <u>=> {num.toPrecision(5)}</u></li>
						<li>var num = num.<b>toPrecision(21)</b> <u>=> {num.toPrecision(21)}</u></li>
					</CaseJs>
				</BoxComponent>
			</UbContent>
		)
	}
}