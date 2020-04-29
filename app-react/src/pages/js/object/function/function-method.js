import React from 'react'
// ===================================================================== public component
import UbContent from '@cpx/ub-content.component'
import BoxComponent from '@cpt/box.component'
import CaseJs from '@cpt/case-js.component'
// ===================================================================== component
const $fn = window.$fn

function Parent(){ this.code = 'react'; }
var obj = new Parent()
Parent.prototype.name = 'prototype'
obj.age = 123

function Child(){ Parent.call(this) }
var obj2 = new Child()

function my(x,y){
	return x + y
}

function Child3(){ Parent.bind(this)() }
var obj3 = new Child3()

export default class Index extends React.Component{
	componentDidMount(){
		$fn.setTitle('Function 对象的方法')
		$fn.hidePhone()
	}
	render(){
		return (
			<UbContent className='page-content'>
				<BoxComponent order={1} keyword='Function' pro='构造函数' code={[ {path:'js/object/function/function-method/Function'} ]}>
					<CaseJs>
						<li><b>(new Function(<i>'a','b','return a+b'</i>))</b>(10,20) <u>=> 30</u></li>
						<li><b>(Function(<i>'a','b','return a+b'</i>))</b>(10,20) <u>=> 30</u></li>
					</CaseJs>
					<CaseJs title='每个 JavaScript 函数实际上都是一个 Function 对象'>
						<li>var bool = <b>(function(){}).constructor === Function</b> <u>=>{JSON.stringify((function(){}).constructor === Function)}</u></li>
					</CaseJs>
				</BoxComponent>
				
				<BoxComponent order={2} keyword='Function.prototype.call( )' pro='在一个对象的上下文中应用另一个对象的方法；参数能够以列表形式传入' code={[ {path:'js/object/function/function-method/call'} ]}>
					<CaseJs title='参数传递' className='mt10'>
						<li>function my( x, y )｛ return x+y ｝</li>
						<li>var v = my.<b>call</b>(null,10,20) <u>=> {my.call(null,10,20)}</u></li>
					</CaseJs>
					<CaseJs title='继承初始化值'>
						<li>function Parent( )｛ this.code = 'react' ｝</li>
						<li>function Child( )｛ Parent.<b>call(this)</b> ｝ <q># 继承 Parent，即将 Parent 的 this 绑定到 Child 函数，不影响 Parent 的 this</q></li>
						<li>var code = obj.code <u>=> {obj2.code}</u></li>
					</CaseJs>
				</BoxComponent>
				
				<BoxComponent order={3} keyword='Function.prototype.apply( )' pro='在一个对象的上下文中应用另一个对象的方法；参数能够以数组形式传入' code={[ {path:'js/object/function/function-method/apply'} ]}>
					<CaseJs title='参数传递' className='mt10'>
						<li>function my( x, y )｛ return x+y ｝</li>
						<li>var v = my.<b>call</b>(null,<b>[</b> 10,20 <b>]</b>) <u>=> {my.apply(null,[10,20])}</u></li>
					</CaseJs>
				</BoxComponent>
				
				<BoxComponent order={4} keyword='Function.prototype.bind( )' pro='创建一个新函数，称为绑定函数' code={[ {path:'js/object/function/function-method/bind'} ]}>
					<CaseJs title='参数传递' className='mt10'>
						<li>function my( x, y )｛ return x+y ｝</li>
						<li>var v = my.<b>bind(</b>null,10,20<b>)( )</b> <u>=> {my.bind(null,10,20)()}</u></li>
					</CaseJs>
					<CaseJs title='继承初始化值'>
						<li>function Parent( )｛ this.code = 'react' ｝</li>
						<li>function Child( )｛ Parent.<b>bind(this)( )</b> ｝ <q># 继承 Parent，即将 Parent 的 this 绑定到 Child 函数，不影响 Parent 的 this</q></li>
						<li>var code = obj.code <u>=> {obj3.code}</u></li>
					</CaseJs>
				</BoxComponent>
				
				<BoxComponent order={5} keyword='Function.prototype.isGenerator( )' pro='判断一个函数是否是一个生成器' code={[ {path:'js/object/function/function-method/isGenerator'} ]} />
			
				<BoxComponent order={6} keyword='Function.prototype.toString( )' pro='获取函数的实现源码的字符串' code={[ {path:'js/object/function/function-method/toString'} ]}>
					<CaseJs>
						<li>function my( x, y )｛ return x+y ｝</li>
						<li>var v = my.<b>toString( )</b> <u>=> {my.toString()}</u></li>
					</CaseJs>
				</BoxComponent>
			</UbContent>
		)
	}
}