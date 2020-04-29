import React from 'react'
// ===================================================================== public component
import UbContent from '@cpx/ub-content.component'
import BoxComponent from '@cpt/box.component'
import CaseJs from '@cpt/case-js.component'
// ===================================================================== component
const $fn = window.$fn

function Tree(){ this.code = 'react' }
var obj = new Tree()
Tree.prototype.name = 'tree'
obj.__proto__.color = 'green'
obj.age = 123

export default class Index extends React.Component{
	componentDidMount(){
		$fn.setTitle('Object 原型对象的属性')
		$fn.hidePhone()
	}
	render(){
		return (
			<UbContent className='page-content'>
				<BoxComponent order={1} keyword='Object.prototype' pro='函数的原型对象，用于创建一个对象的原型。函数独有'>
					<CaseJs title='含义'
						sub={[
							'函数的原型对象，也就是这个函数所创建的实例的原型对象',
							'每个构造函数都有一个prototype对象，这个对象指向该构造函数的原型',
							'任何函数在创建的时候，其实会默认同时创建该函数的prototype对象',
							'让该函数所实例化的对象们都可以找到公用的属性和方法'
						]}
					>
						<li>var a = <b>Object.prototype</b> <u>=> {JSON.stringify(Object.prototype)}</u></li>
						<li>var a = <b>Number.prototype</b> <u>=> {JSON.stringify(Number.prototype)}</u></li>
						<li>var a = <b>String.prototype</b> <u>=> {JSON.stringify(String.prototype)}</u></li>
						<li>var a = <b>Boolean.prototype</b> <u>=> {JSON.stringify(Boolean.prototype)}</u></li>
						<li>var a = <b>Array.prototype</b> <u>=> {JSON.stringify(Array.prototype)}</u></li>
						<li>var a = <b>RegExp.prototype</b> <u>=> {JSON.stringify(RegExp.prototype)}</u></li>
						<li>var a = <b>Function.prototype</b> <u>=> {JSON.stringify(Function.prototype.toString())}</u></li>
					</CaseJs>
					<CaseJs title='对象扩展或重置'>
						<li><b>Object.prototype</b>.run = function( )｛ ｝ <u>=> anyObject.run( )</u></li>
						<li><b>Number.prototype</b>.run = function( )｛ ｝ <u>=> numObject.run( )</u></li>
						<li><b>String.prototype</b>.run = function( )｛ ｝ <u>=> strObject.run( )</u></li>
						<li><b>Boolean.prototype</b>.run = function( )｛ ｝ <u>=> boolObject.run( )</u></li>
					</CaseJs>
					<CaseJs title='自定义创建对象原型扩展'>
						<li>function Tree( )｛ this.code = 'react' ｝ <q># 构造函数</q></li>
						<li>var obj = new Tree( ) <q># 实例化对象</q></li>
						<li>Tree.<b>prototype</b>.name = 'tree' <q># 构造函数创建原型对象</q></li>
						<li>obj.age = 123 <q># 创建对象内部属性</q></li>
						
						<li>var obj = obj <u>=> {JSON.stringify(obj)}</u> <q># 访问实例对象，只显示内部属性</q></li>
						
						<li>var proto = Tree.<b>prototype</b> <u>=> {JSON.stringify(Tree.prototype)}</u> <q># 访问构造函数的原型对象</q></li>
						
						<li>obj.name <u>=> {obj.name}</u> <q># 访问原型对象中的属性</q></li>
						<li>obj.age <u>=> {obj.age}</u> <q># 访问对象内部属性</q></li>
					</CaseJs>
				</BoxComponent>
				
				<BoxComponent order={2} keyword='Object.prototype.__proto__' pro='实例对象的原型对象，用于创建一个对象的原型。对象独有'>
					<CaseJs title='含义' sub={[
						'指向当对象被实例化的时候，用作原型的对象',
						'实例对象的属性，每个实例对象都有一个 __proto__ 属性，这个属性指向实例化该实例的构造函数的原型对象（prototype）',
						'__proto__ 属性都是由一个对象指向一个对象',
						'字符串方法、数组方法、对象方法、函数方法等都是靠 __proto__ 继承而来的'
					]}>
						<li>var proto = <b>Object.prototype.__proto__</b> <u>=> {JSON.stringify(Object.prototype.__proto__)}</u></li>
						<li>var bool = <b>Tree.prototype === obj.__proto__</b> <u>=> {JSON.stringify(Tree.prototype === obj.__proto__)}</u> <q># 两种原型对象相等</q></li>
					</CaseJs>
					<CaseJs title='原型链' sub='__proto__ 属性的作用就是当访问一个对象的属性时，如果该对象内部不存在这个属性，那么就会去它的 __proto__ 属性所指向的那个对象（父对象）里找，一直找，直到 __proto__ 属性的终点 null，再往上找就相当于在 null 上取值，会报错。通过 __proto__ 属性将对象连接起来的这条链路即我们所谓的原型链'>
						<li>var proto = <b>Object.__proto__</b> <u>=> {JSON.stringify(Object.__proto__.toString())}</u> <q># 到原型对象查找</q></li>
						<li>var proto = <b>Object.__proto__.__proto__</b> <u>=> {JSON.stringify(Object.__proto__.__proto__)}</u> <q># 往父级原型对象中查找</q></li>
						<li>var proto = <b>Object.__proto__.__proto__.__proto__</b> <u>=> {JSON.stringify(Object.__proto__.__proto__.__proto__)}</u> <q># 直到 null 停止查找</q></li>
					</CaseJs>
					<CaseJs title='与 prototype 对比使用'>
						<li>function Tree( )｛ this.code = 'react' ｝ <q># 构造函数</q></li>
						<li>var obj = new Tree( ) <q># 实例化对象</q></li>
						<li>Tree.<b>prototype</b>.name = 'tree' <q># 构造函数创建原型对象</q></li>
						<li>obj.<b>__proto__</b>.color = 'green' <q># 实例对象创建原型对象</q></li>
						<li>obj.age = 123 <q># 创建对象内部属性</q></li>
						
						<li>var obj = obj <u>=> {JSON.stringify(obj)}</u> <q># 访问实例对象，只显示内部属性</q></li>
						
						<li>var proto = obj.<b>__proto__</b> <u>=> {JSON.stringify(obj.__proto__)}</u> <q># 访问实例对象的原型对象</q></li>
						<li>var proto = Tree.<b>prototype</b> <u>=> {JSON.stringify(Tree.prototype)}</u> <q># 访问构造函数的原型对象</q></li>
						<li>var bool = <b>Tree.prototype === obj.__proto__</b> <u>=> {JSON.stringify(Tree.prototype === obj.__proto__)}</u> <q># 两种原型对象相等</q></li>
						
						<li>obj.name <u>=> {obj.name}</u> <q># 访问原型对象中的属性</q></li>
						<li>obj.color <u>=> {obj.color}</u> <q># 访问原型对象中的属性</q></li>
						<li>obj.age <u>=> {obj.age}</u> <q># 访问对象内部属性</q></li>
					</CaseJs>
					<CaseJs title='检测浏览器是否支持 __proto__'>
						<li>var bool = <b>Object.getPrototypeOf(｛__proto__: null｝) === null</b> <u>=> {JSON.stringify(Object.getPrototypeOf({__proto__: null}) === null)}</u></li>
					</CaseJs>
					<CaseJs title='对象的 __proto__' sub='注意: 以下有方法，未显示出来'>
						<li>var a = <b>(2).__proto__</b> <u>=> {JSON.stringify((2).__proto__)}</u></li>
						<li>var a = <b>('abc').__proto__</b> <u>=> {JSON.stringify(('abc').__proto__)}</u></li>
						<li>var a = <b>｛a:1｝.__proto__</b> <u>=> {JSON.stringify({a:1}.__proto__)}</u></li>
						<li>var a = <b>[0].__proto__</b> <u>=> {JSON.stringify([0].__proto__)}</u></li>
						<li>var a = <b>(true).__proto__</b> <u>=> {JSON.stringify((true).__proto__)}</u></li>
					</CaseJs>
					<CaseJs title='函数的 __proto__ '>
						<li>var a = <b>Object.__proto__</b> <u>=> {JSON.stringify(Object.__proto__.toString())}</u></li>
						<li>var a = <b>Number.__proto__</b> <u>=> {JSON.stringify(Number.__proto__.toString())}</u></li>
						<li>var a = <b>String.__proto__</b> <u>=> {JSON.stringify(String.__proto__.toString())}</u></li>
						<li>var a = <b>Boolean.__proto__</b> <u>=> {JSON.stringify(Boolean.__proto__.toString())}</u></li>
						<li>var a = <b>Array.__proto__</b> <u>=> {JSON.stringify(Array.__proto__.toString())}</u></li>
						<li>var a = <b>Date.__proto__</b> <u>=> {JSON.stringify(Date.__proto__.toString())}</u></li>
						<li>var a = <b>RegExp.__proto__</b> <u>=> {JSON.stringify(RegExp.__proto__.toString())}</u></li>
						<li>var a = <b>Function.__proto__</b> <u>=> {JSON.stringify(Function.__proto__.toString())}</u></li>
					</CaseJs>
				</BoxComponent>
				<BoxComponent order={1} keyword='Object.prototype.constructor' pro='特定的函数，用于创建一个对象的原型。对象独有' code={[ {path:'js/object/object/prototype-property/constructor'} ]}>
					<CaseJs title='内置函数' className='mt15'>
						<li>var a = <b>Object</b> <u>=> {Object.toString()}</u></li>
						<li>var a = <b>Number</b> <u>=> {Number.toString()}</u></li>
						<li>var a = <b>String</b> <u>=> {String.toString()}</u></li>
						<li>var a = <b>Boolean</b> <u>=> {Boolean.toString()}</u></li>
						<li>var a = <b>Array</b> <u>=> {Array.toString()}</u></li>
						<li>var a = <b>Date</b> <u>=> {Date.toString()}</u></li>
						<li>var a = <b>RegExp</b> <u>=> {RegExp.toString()}</u></li>
						<li>var a = <b>Function</b> <u>=> {Function.toString()}</u></li>
					</CaseJs>
					<CaseJs title='对象的构造函数'>
						<li>var a = <b>｛｝.constructor</b> <u>=> {{}.constructor.toString()}</u></li>
						<li>var a = <b>[].constructor</b> <u>=> {[].constructor.toString()}</u></li>
					</CaseJs>
					<CaseJs title='原型对象的构造函数'>
						<li>var a = <b>Object.prototype.constructor</b> <u>=> {Object.prototype.constructor.toString()}</u></li>
						<li>var a = <b>Number.prototype.constructor</b> <u>=> {Number.prototype.constructor.toString()}</u></li>
						<li>var a = <b>String.prototype.constructor</b> <u>=> {String.prototype.constructor.toString()}</u></li>
						<li>var a = <b>Boolean.prototype.constructor</b> <u>=> {Boolean.prototype.constructor.toString()}</u></li>
						<li>var a = <b>Array.prototype.constructor</b> <u>=> {Array.prototype.constructor.toString()}</u></li>
						<li>var a = <b>Date.prototype.constructor</b> <u>=> {Date.prototype.constructor.toString()}</u></li>
						<li>var a = <b>RegExp.prototype.constructor</b> <u>=> {RegExp.prototype.constructor.toString()}</u></li>
						<li>var a = <b>Function.prototype.constructor</b> <u>=> {Function.prototype.constructor.toString()}</u></li>
					</CaseJs>
					<CaseJs title='最顶层的构造函数'>
						<li>var a = <b>Object.constructor</b> <u>=> {Object.constructor.toString()}</u></li>
						<li>var a = <b>Number.constructor</b> <u>=> {Number.constructor.toString()}</u></li>
						<li>var a = <b>String.constructor</b> <u>=> {String.constructor.toString()}</u></li>
						<li>var a = <b>Boolean.constructor</b> <u>=> {Boolean.constructor.toString()}</u></li>
						<li>var a = <b>Array.constructor</b> <u>=> {Array.constructor.toString()}</u></li>
						<li>var a = <b>Date.constructor</b> <u>=> {Date.constructor.toString()}</u></li>
						<li>var a = <b>RegExp.constructor</b> <u>=> {RegExp.constructor.toString()}</u></li>
						<li>var a = <b>Function.constructor</b> <u>=> {Function.constructor.toString()}</u></li>
					</CaseJs>
				</BoxComponent>
			</UbContent>
		)
	}
}
