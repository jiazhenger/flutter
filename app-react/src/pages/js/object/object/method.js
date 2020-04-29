import React from 'react'
// ===================================================================== public component
import UbContent from '@cpx/ub-content.component'
import BoxComponent from '@cpt/box.component'
import CaseJs from '@cpt/case-js.component'
// ===================================================================== component
const $fn = window.$fn
export default class Index extends React.Component{
	componentDidMount(){
		$fn.setTitle('Object 构造函数的方法')
		$fn.hidePhone()
	}
	render(){
		var obj = { }
		Object.assign(obj,{a:0,b:1})
		var obj2 = {}
		var obj3 = {}
		Object.setPrototypeOf(obj3,{a:0,b:1})
		return (
			<UbContent className='page-content'>
				<BoxComponent order={1} deviceTitle='创建对象' keyword='Object.create( )' pro='使用指定的原型对象和属性创建一个新对象' code={[ {path:'js/object/object/method/create'} ]}>
					<CaseJs>
						<li>var obj = <b>Object.create</b>(<i>｛ ｝</i>) <u>=> {JSON.stringify(Object.create({}))}</u></li>
						<li>var obj = <b>Object.create</b>(<i>null</i>).<b>__proto__</b> <u>=> {JSON.stringify(Object.create(null).__proto__)}</u></li>
						<li>var obj = <b>Object.create</b>(<i>｛ a: 0 ｝</i>).<b>__proto__</b> <u>=> {JSON.stringify(Object.create({a:0}).__proto__)}</u></li>
					</CaseJs>
				</BoxComponent>
				
				<BoxComponent order={1} deviceTitle='合并对象' keyword='Object.assign( )' pro='通过复制一个或多个对象来创建一个新的对象' code={[ {path:'js/object/object/method/assign'} ]}>
					<CaseJs>
						<li>var obj = <b>Object.assign</b>(<i>｛ ｝</i>) <u>=> {JSON.stringify(Object.assign({}))}</u></li>
						<li>var obj = <b>Object.assign</b>(<i>｛ a:0, b:1 ｝</i>) <u>=> {JSON.stringify(Object.assign({a:0,b:1}))}</u></li>
						<li>var obj = <b>Object.assign</b>(<i>｛ a:0 ｝,｛ b:1 ｝</i>) <u>=> {JSON.stringify(Object.assign({a:0},{b:1}))}</u></li>
						<li>var obj = <b>Object.assign</b>(<i>｛ a:0 ｝,｛ b:1 ｝,｛ c:2 ｝</i>) <u>=> {JSON.stringify(Object.assign({a:0},{b:1},{c:2}))}</u></li>
					</CaseJs>
					<CaseJs>
						<li>var obj = ｛ ｝</li>
						<li><b>Object.assign</b>(<i>obj,｛a:0,b:1｝</i>)</li>
						<li><i>obj => {JSON.stringify(obj)}</i></li>
					</CaseJs>
				</BoxComponent>
				
				<BoxComponent order={1} deviceTitle='设置对象' keyword='Object.defineProperty( )' pro='给对象添加一个属性并指定该属性的配置' code={[ {path:'js/object/object/method/defineProperty'} ]}/>
				<BoxComponent order={2} keyword='Object.defineProperties( )' pro='给对象添加多个属性并分别指定它们的配置' code={[ {path:'js/object/object/method/defineProperties'} ]}/>
				<BoxComponent order={3} keyword='Object.setPrototypeOf( )' pro='设置对象的原型' code={[ {path:'js/object/object/method/setPrototypeOf'} ]}>
					<CaseJs>
						<li>var obj = ｛ ｝</li>
						<li>var obj2 = <b>Object.setPrototypeOf</b>(obj, <i>｛ a: 0, b: 1 ｝</i>) <u>=> {JSON.stringify(Object.setPrototypeOf(obj2,{a:0,b:1}).__proto__)}</u></li>
						<li>obj.__proto__ == {JSON.stringify(obj3.__proto__)}</li>
					</CaseJs>
				</BoxComponent>
				
				<BoxComponent order={1} deviceTitle='枚举对象' keyword='Object.entries( )' pro='返回给定对象自身可枚举属性的 [key, value] 数组' code={[ {path:'js/object/object/method/entries'} ]}>
					<CaseJs>
						<li>var obj = <b>Object.entries</b>(<i>｛ a: 0, b: 1｝</i>) <u>=> {JSON.stringify(Object.entries({a:0,b:1}))}</u></li>
					</CaseJs>
				</BoxComponent>
				<BoxComponent order={2} keyword='Object.keys( )' pro='返回指定对象的原型对象' code={[ {path:'js/object/object/method/getPrototypeOf'} ]}>
					<CaseJs>
						<li>var obj = <b>Object.keys</b>(<i>｛ a: 0, b: 1 ｝</i>) <u>=> {JSON.stringify(Object.keys({a:0,b:1}))}</u></li>
					</CaseJs>
				</BoxComponent>
				<BoxComponent order={3} keyword='Object.values( )' pro='返回给定对象自身可枚举值的数组' code={[ {path:'js/object/object/method/values'} ]}>
					<CaseJs>
						<li>var obj = <b>Object.values</b>(<i>｛ a: 0, b: 1 ｝</i>) <u>=> {JSON.stringify(Object.values({a:0,b:1}))}</u></li>
					</CaseJs>
				</BoxComponent>
				
				<BoxComponent order={1} deviceTitle='限制对象' keyword='Object.freeze( )' pro='冻结对象：其他代码不能删除或更改任何属性' code={[ {path:'js/object/object/method/freeze'} ]}>
					<CaseJs>
						<li>var obj = <b>Object.freeze</b>(<i>｛ a: 0, b: 1｝</i>) <u>=> {JSON.stringify(Object.freeze({a:0,b:1}))}</u></li>
					</CaseJs>
					<CaseJs>
						<li>var obj = ｛ ｝</li>
						<li><b>Object.freeze</b>(<i>obj</i>)<u>=> obj 被冻结</u></li>
					</CaseJs>
				</BoxComponent>
				<BoxComponent order={2} keyword='Object.preventExtensions( )' pro='防止对象的任何扩展' code={[ {path:'js/object/object/method/preventExtensions'} ]}>
					<CaseJs>
						<li>var obj = <b>Object.preventExtensions</b>(<i>｛ a: 0 ｝</i>) <u>=> {JSON.stringify(Object.preventExtensions({a:0}))}</u></li>
					</CaseJs>
					<CaseJs>
						<li>var obj = ｛ ｝</li>
						<li><b>Object.preventExtensions</b>(<i>obj</i>)<u>=> obj 不可扩展</u></li>
					</CaseJs>
				</BoxComponent>
				<BoxComponent order={3} keyword='Object.seal( )' pro='封闭一个对象，防止其他代码删除对象的属性' code={[ {path:'js/object/object/method/seal'} ]}>
					<CaseJs>
						<li>var obj = <b>Object.seal</b>(<i>｛ a: 0 ｝</i>) <u>=> {JSON.stringify(Object.seal({a:0}))}</u></li>
					</CaseJs>
					<CaseJs>
						<li>var obj = ｛ ｝</li>
						<li><b>Object.seal</b>(<i>obj</i>)<u>=> obj 不可扩展</u></li>
					</CaseJs>
				</BoxComponent>
				
				<BoxComponent order={1} deviceTitle='获取对象信息' keyword='Object.getOwnPropertyDescriptor( )' pro='返回对象指定的属性配置' code={[ {path:'js/object/object/method/getOwnPropertyDescriptor'} ]}>
					<CaseJs>
						<li>var obj = <b>Object.getOwnPropertyDescriptor</b>(<i>｛ a: 0 ｝</i>, <i>'a'</i>) <u>=> {JSON.stringify(Object.getOwnPropertyDescriptor({a:0},'a'))}</u></li>
					</CaseJs>
				</BoxComponent>
				<BoxComponent order={2} keyword='Object.getOwnPropertyNames( )' pro='返回一个数组，它包含了指定对象所有的可枚举或不可枚举的属性名' code={[ {path:'js/object/object/method/getOwnPropertyDescriptor'} ]}>
					<CaseJs>
						<li>var obj = <b>Object.getOwnPropertyNames</b>(<i>｛ a: 0 ｝</i>) <u>=> {JSON.stringify(Object.getOwnPropertyNames({a:0}))}</u></li>
					</CaseJs>
				</BoxComponent>
				<BoxComponent order={3} keyword='Object.getOwnPropertySymbols( )' pro='返回一个数组，它包含了指定对象自身所有的符号属性' code={[ {path:'js/object/object/method/getOwnPropertySymbols'} ]}/>
				<BoxComponent order={4} keyword='Object.getPrototypeOf( )' pro='返回指定对象的原型对象' code={[ {path:'js/object/object/method/getPrototypeOf'} ]}>
					<CaseJs>
						<li>var obj = <b>Object.getPrototypeOf</b>(<i>｛ a: 0 ｝</i>) <u>=> {JSON.stringify(Object.getPrototypeOf({a:0}))}</u></li>
					</CaseJs>
				</BoxComponent>
				
				<BoxComponent order={1} deviceTitle='判断' keyword='Object.is( )' pro='比较两个值是否相同。所有 NaN 值都相等（这与==和===不同）' code={[ {path:'js/object/object/method/is'} ]}>
					<CaseJs>
						<li>var obj = <b>Object.is</b>(<i>'foo'</i>,<i>'foo'</i>) <u>=> {JSON.stringify(Object.is('foo','foo'))}</u></li>
						<li>var obj = <b>Object.is</b>(<i>null</i>,<i>null</i>) <u>=> {JSON.stringify(Object.is(null,null))}</u></li>
						<li>var obj = <b>Object.is</b>(<i>[ ]</i>,<i>[ ]</i>) <u>=> {JSON.stringify(Object.is([],[]))}</u></li>
						<li>var obj = <b>Object.is</b>(<i>0</i>,<i>-0</i>) <u>=> {JSON.stringify(Object.is(0,-0))}</u></li>
						<li>var obj = <b>Object.is</b>(<i>0</i>,<i>+0</i>) <u>=> {JSON.stringify(Object.is(0,+0))}</u></li>
						<li>var obj = <b>Object.is</b>(<i>-0</i>,<i>-0</i>) <u>=> {JSON.stringify(Object.is(-0,-0))}</u></li>
						<li>var obj = <b>Object.is</b>(<i>NaN</i>,<i>0/0</i>) <u>=> {JSON.stringify(Object.is(NaN,0/0))}</u></li>
					</CaseJs>
				</BoxComponent>
				<BoxComponent order={2} keyword='Object.isExtensible( )' pro='判断对象是否可扩展' code={[ {path:'js/object/object/method/isExtensible'} ]}>
					<CaseJs>
						<li>var obj = <b>Object.isExtensible</b>(<i>｛ ｝</i>) <u>=> {JSON.stringify(Object.isExtensible({}))}</u></li>
						<li>var obj = <b>Object.isExtensible</b>(<i>Object.preventExtensions(｛ ｝)</i>) <u>=> {JSON.stringify(Object.isExtensible(Object.preventExtensions({})))}</u></li>
						<li>var obj = <b>Object.isExtensible</b>(<i>Object.seal(｛ ｝)</i>) <u>=> {JSON.stringify(Object.isExtensible(Object.seal({})))}</u></li>
						<li>var obj = <b>Object.isExtensible</b>(<i>Object.freeze(｛ ｝)</i>) <u>=> {JSON.stringify(Object.isExtensible(Object.freeze({})))}</u></li>
					</CaseJs>
				</BoxComponent>
				<BoxComponent order={3} keyword='Object.isFrozen( )' pro='判断对象是否已经冻结' code={[ {path:'js/object/object/method/isFrozen'} ]}>
					<CaseJs>
						<li>var obj = <b>Object.isFrozen</b>(<i>｛ ｝</i>) <u>=> {JSON.stringify(Object.isFrozen({}))}</u></li>
						<li>var obj = <b>Object.isFrozen</b>(<i>Object.preventExtensions(｛ ｝)</i>) <u>=> {JSON.stringify(Object.isExtensible(Object.isFrozen({})))}</u></li>
						<li>var obj = <b>Object.isFrozen</b>(<i>Object.seal(｛ ｝)</i>) <u>=> {JSON.stringify(Object.isExtensible(Object.isFrozen({})))}</u></li>
						<li>var obj = <b>Object.isFrozen</b>(<i>Object.freeze(｛ ｝)</i>) <u>=> {JSON.stringify(Object.isFrozen(Object.freeze({})))}</u></li>
					</CaseJs>
				</BoxComponent>
				<BoxComponent order={4} keyword='Object.isSealed( )' pro='判断对象是否已经密封' code={[ {path:'js/object/object/method/isSealed'} ]}>
					<CaseJs>
						<li>var obj = <b>Object.isSealed</b>(<i>｛ ｝</i>) <u>=> {JSON.stringify(Object.isSealed({}))}</u></li>
						<li>var obj = <b>Object.isSealed</b>(<i>Object.preventExtensions(｛ ｝)</i>) <u>=> {JSON.stringify(Object.isSealed(Object.isFrozen({})))}</u></li>
						<li>var obj = <b>Object.isSealed</b>(<i>Object.seal(｛ ｝)</i>) <u>=> {JSON.stringify(Object.isSealed(Object.isFrozen({})))}</u></li>
						<li>var obj = <b>Object.isSealed</b>(<i>Object.freeze(｛ ｝)</i>) <u>=> {JSON.stringify(Object.isSealed(Object.freeze({})))}</u></li>
					</CaseJs>
				</BoxComponent>
			</UbContent>
		)
	}
}