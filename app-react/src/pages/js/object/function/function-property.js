import React from 'react'
// ===================================================================== public component
import UbContent from '@cpx/ub-content.component'
import BoxComponent from '@cpt/box.component'
import CaseJs from '@cpt/case-js.component'
// ===================================================================== component
const $fn = window.$fn

function fn(a,b,c){}

export default class Index extends React.Component{
	componentDidMount(){
		$fn.setTitle('Function 对象的属性')
		$fn.hidePhone()
	}
	render(){
		return (
			<UbContent className='page-content'>
				<BoxComponent order={1} keyword='Function.length' pro='函数形参个数'>
					<CaseJs>
						<li><b>Function.length</b> <u>=> {Function.length}</u></li>
					</CaseJs>
					<CaseJs>
						<li>function fn(a,b,c)｛｝</li>
						<li>var len = <b>fn.length</b> <u>=> {fn.length}</u></li>
					</CaseJs>
				</BoxComponent>
				<BoxComponent order={2} keyword='Function.name' pro='获取函数名'>
					<CaseJs>
						<li>function fn(a,b,c)｛｝</li>
						<li>var name = <b>fn.name</b> <u>=> {fn.name}</u></li>
					</CaseJs>
				</BoxComponent>
				<BoxComponent order={3} keyword='Function.caller' pro='返回顶层函数，在非严格模式下有效'>
					<CaseJs>
						<li>function fn(a,b,c)｛｝</li>
						<li>var caller = <b>fn.caller</b></li>
					</CaseJs>
				</BoxComponent>
				<BoxComponent order={3} keyword='Function.prototype.constructor' pro='声明函数的原型构造方法'>
					<CaseJs>
						<li>function fn(a,b,c)｛｝</li>
						<li>var a = <b>Function.prototype.constructor</b> <u>=> {JSON.stringify(Function.prototype.constructor.toString())}</u></li>
					</CaseJs>
				</BoxComponent>
			</UbContent>
		)
	}
}
