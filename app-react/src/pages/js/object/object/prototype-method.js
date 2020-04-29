import React from 'react'
// ===================================================================== public component
import UbContent from '@cpx/ub-content.component'
import BoxComponent from '@cpt/box.component'
import CaseJs from '@cpt/case-js.component'
// ===================================================================== component
const $fn = window.$fn

function Tree(){ this.code = 'react' }
var obj = new Tree()
Tree.prototype.create = function(){}
obj.age = 123

export default class Index extends React.Component{
	componentDidMount(){
		$fn.setTitle('Object 原型对象的方法')
		$fn.hidePhone()
	}
	render(){
		return (
			<UbContent className='page-content'>
				<BoxComponent order={1} keyword='Object.prototype.hasOwnProperty( )' pro='表示某个对象是否含有指定的属性，而且此属性非原型链继承的' code={[ {path:'js/object/object/prototype-method/hasOwnProperty'} ]}>
					<CaseJs>
						<li>function Tree( )｛ ｝</li>
						<li>var obj = new Tree( )</li>
						<li>Tree.<b>prototype</b>.create = function( )｛ ｝</li>
						<li>obj.age = 123</li>
						<li>var bool = <b>Object.prototype.hasOwnProperty</b>(<i>'create'</i>)) <u>=> {JSON.stringify(Object.prototype.hasOwnProperty('create'))}</u></li>
						<li>var bool = obj.<b>hasOwnProperty</b>(<i>'create'</i>)) <u>=> {JSON.stringify(obj.hasOwnProperty('create'))}</u></li>
						<li>var bool = obj.<b>hasOwnProperty</b>(<i>'age'</i>)) <u>=> {JSON.stringify(obj.hasOwnProperty('age'))}</u></li>
					</CaseJs>
				</BoxComponent>
				<BoxComponent order={2} keyword='Object.prototype.isPrototypeOf( )' pro='表示指定的对象是否在本对象的原型链中' code={[ {path:'js/object/object/prototype-method/isPrototypeOf'} ]}>
					<CaseJs>
						<li>function Tree( )｛ ｝</li>
						<li>var obj = new Tree( )</li>
						<li>Tree.<b>prototype</b>.create = function( )｛ ｝</li>
						<li>obj.age = 123</li>
						<li>var bool = Tree.<b>prototype.isPrototypeOf</b>(<i>obj</i>)) <u>=> {JSON.stringify(Tree.prototype.isPrototypeOf(obj))}</u></li>
					</CaseJs>
				</BoxComponent>
				<BoxComponent order={3} keyword='Object.prototype.propertyIsEnumerable( )' pro='判断指定属性是否可枚举' code={[ {path:'js/object/object/prototype-method/propertyIsEnumerable'} ]}>
					<CaseJs>
						<li>function Tree( )｛ ｝</li>
						<li>var obj = new Tree( )</li>
						<li>Tree.<b>prototype</b>.create = function( )｛ ｝</li>
						<li>obj.age = 123</li>
						<li>var bool = obj.<b>propertyIsEnumerable</b>(<i>'age'</i>)) <u>=> {JSON.stringify(obj.propertyIsEnumerable('age'))}</u></li>
					</CaseJs>
				</BoxComponent>
				<BoxComponent order={4} keyword='Object.prototype.toLocaleString( )' pro='返回对象的本地字符串表示' code={[ {path:'js/object/object/prototype-method/toLocaleString'} ]}>
					<CaseJs>
						<li>var str = ([0,1,2]).<b>toLocaleString</b>( )) <u>=> {JSON.stringify(([0,1,2]).toLocaleString( ))}</u></li>
					</CaseJs>
				</BoxComponent>
				<BoxComponent order={5} keyword='Object.prototype.toString( )' pro='返回对象的字符串表示' code={[ {path:'js/object/object/prototype-method/toString'} ]}>
					<CaseJs>
						<li>var str = ([0,1,2]).<b>toString</b>( )) <u>=> {JSON.stringify(([0,1,2]).toString( ))}</u></li>
					</CaseJs>
				</BoxComponent>
				<BoxComponent order={6} keyword='Object.prototype.valueOf( )' pro='返回指定对象的原始值' code={[ {path:'js/object/object/prototype-method/valueOf'} ]}>
					<CaseJs>
						<li>var str = ([0,1,2]).<b>valueOf</b>( )) <u>=> {JSON.stringify(([0,1,2]).valueOf( ))}</u></li>
						<li>var str = (｛a:1｝).<b>valueOf</b>( )) <u>=> {JSON.stringify(({a:1}).valueOf( ))}</u></li>
					</CaseJs>
				</BoxComponent>
			</UbContent>
		)
	}
}