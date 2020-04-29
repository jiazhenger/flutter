import React from 'react'
// ===================================================================== public component
import UbContent from '@cpx/ub-content.component'
import BoxComponent from '@cpt/box.component'
import CaseJs from '@cpt/case-js.component'
// ===================================================================== component
const $fn = window.$fn

function Tree(){}
var my = new Tree()

export default class Index extends React.Component{
	componentDidMount(){
		$fn.setTitle('判断数据类型')
		$fn.hidePhone()
		console.log((new Date()) instanceof Date)
	}
	render(){
		return (
			<UbContent className='page-content'>
				<BoxComponent order={1} keyword='typeof( )' pro='未经计算的操作数的类型' code={[ {path:'js/grammar/type/typeof'} ]}>
					<CaseJs title='两种语法' className='mt10'>
						<li>var type = <b>typeof</b> 123 <u>=> {typeof 123}</u></li>
						<li>var type = <b>typeof</b>( 123 ) <u>=> {typeof(123)}</u></li>
					</CaseJs>
					<CaseJs title='判断数据类型'>
						<li>var isNumber = <b>typeof</b>( 123 ) <u>=> {typeof(123)}</u></li>
						<li>var isString = <b>typeof</b>( 'abc' ) <u>=> {typeof('abc')}</u></li>
						<li>var isBoolean = <b>typeof</b>( true ) <u>=> {typeof(true)}</u></li>
						<li>var isFunction = <b>typeof</b>( function( )｛ ｝ ) <u>=> {typeof(function(){})}</u></li>
						<li>var isUndefined = <b>typeof</b>( undefined ) <u>=> {typeof(undefined)}</u></li>
						<li>var isObject = <b>typeof</b>( ｛ ｝ ) <u>=> {typeof({})}</u></li>
						<li>var isObject = <b>typeof</b>( [ ] ) <u>=> {typeof([])}</u></li>
						<li>var isObject = <b>typeof</b>( null ) <u>=> {typeof(null)}</u></li>
					</CaseJs>
				</BoxComponent>
				
				<BoxComponent order={2} keyword='Object.prototype.toString.call( )/.apply( )/bind( )' pro='原型对象判断数据类型'>
					<CaseJs>
						<li>var isNumber = <b>Object.prototype.toString.call</b> ( 123 ) <u>=> {Object.prototype.toString.call(123)}</u></li>
						<li>var isNumber = <b>｛ ｝.toString.call</b> ( 123 ) <u>=> {{}.toString.call(123)}</u></li>
						<li>var isNumber = <b>Object.prototype.toString.apply</b> ( 123 ) <u>=> {Object.prototype.toString.apply(123)}</u></li>
						<li>var isNumber = <b>｛ ｝.toString.apply</b> ( 123 ) <u>=> {{}.toString.apply(123)}</u></li>
						<li>var isNumber = <b>Object.prototype.toString.bind</b> ( 123 )<b>( )</b> <u>=> {Object.prototype.toString.bind(123)()}</u></li>
						<li>var isNumber = <b>｛ ｝.toString.bind</b> ( 123 )<b>( )</b> <u>=> {{}.toString.bind(123)()}</u></li>
					</CaseJs>
					<CaseJs>
						<li>var isNumber = <b>Object.prototype.toString.call</b> ( 123 ) <u>=> {Object.prototype.toString.call(123)}</u></li>
						<li>var isString = <b>Object.prototype.toString.call</b> ( 'abc' ) <u>=> {Object.prototype.toString.call('abc')}</u></li>
						<li>var isBoolean = <b>Object.prototype.toString.call</b> ( true ) <u>=> {Object.prototype.toString.call(true)}</u></li>
						<li>var isFunction = <b>Object.prototype.toString.call</b> ( Function ) <u>=> {Object.prototype.toString.call(Function)}</u></li>
						<li>var isObject = <b>Object.prototype.toString.call</b> (｛ ｝) <u>=> {Object.prototype.toString.call({})}</u></li>
						<li>var isArray = <b>Object.prototype.toString.call</b> ( [ ] ) <u>=> {Object.prototype.toString.call([])}</u></li>
						<li>var isDate = <b>Object.prototype.toString.call</b> ( new Date( ) ) <u>=> {Object.prototype.toString.call(new Date())}</u></li>
						<li>var isRegExp = <b>Object.prototype.toString.call</b> ( /0/ ) <u>=> {Object.prototype.toString.call(/0/)}</u></li>
						<li>var isError = <b>Object.prototype.toString.call</b> ( new Error( ) ) <u>=> {Object.prototype.toString.call(new Error())}</u></li>
						<li>var isSymbol = <b>Object.prototype.toString.call</b> ( Symbol('a') ) <u>=> {Object.prototype.toString.call(Symbol('a'))}</u></li>
						<li>var isMy = <b>Object.prototype.toString.call</b> ( my ) <u>=> {Object.prototype.toString.call(my)}</u></li>
						<li>var isNull = <b>Object.prototype.toString.call</b> ( null ) <u>=> {Object.prototype.toString.call(null)}</u></li>
						<li>var isUndefined = <b>Object.prototype.toString.call</b> ( undefined ) <u>=> {Object.prototype.toString.call(undefined)}</u></li>
						<li>var isDocument = <b>Object.prototype.toString.call</b> ( document ) <u>=> {Object.prototype.toString.call(document)}</u></li>
						<li>var isWindow = <b>Object.prototype.toString.call</b> ( window ) <u>=> {Object.prototype.toString.call(window)}</u></li>
					</CaseJs>
				</BoxComponent>
				
				<BoxComponent order={3} keyword='obj.constructor' pro='通过构造函数判断数据类型'>
					<CaseJs>
						<li>var isNumber = ( 123 ).<b>constructor === Number</b>) <u>=> { ((123).constructor === Number).toString() }</u></li>
						<li>var isString = ( 'abc' ).<b>constructor === String</b>) <u>=> { (('abc').constructor === String).toString() }</u></li>
						<li>var isBoolean = ( true ).<b>constructor === Boolean</b>) <u>=> { ((true).constructor === Boolean).toString() }</u></li>
						<li>var isFunction = ( function( )｛ ｝ ).<b>constructor === Function</b>) <u>=> { ((function(){}).constructor === Function).toString() }</u></li>
						<li>var isObject = ｛ ｝.<b>constructor === Object</b>) <u>=> { ({}.constructor === Object).toString() }</u></li>
						<li>var isArray = [ ].<b>constructor === Array</b>) <u>=> { ([].constructor === Array).toString() }</u></li>
						<li>var isDate = (new Date()).<b>constructor === Date</b>) <u>=> { ((new Date()).constructor === Date).toString() }</u></li>
						<li>var isRegExp = (/0/).<b>constructor === RegExp</b>) <u>=> { ((/0/).constructor === RegExp).toString() }</u></li>
						<li>var isError = (new Error()).<b>constructor === Error</b>) <u>=> { ((new Error()).constructor === Error).toString() }</u></li>
						<li>var isSymbol = Symbol('a').<b>constructor === Symbol</b>) <u>=> { (Symbol('a').constructor === Symbol).toString() }</u></li>
						<li>var isMy = my.<b>constructor === Tree</b>) <u>=> { (my.constructor === Tree).toString() }</u></li>
					</CaseJs>
				</BoxComponent>
				
				<BoxComponent order={4} keyword='Array.isArray( )' pro='判断是否是数组'>
					<CaseJs>
						<li>var isArray = <b>Array.isArray</b>( [ ] )) <u>=> {(Array.isArray([])).toString() }</u></li>
					</CaseJs>
				</BoxComponent>
				
				<BoxComponent order={5} keyword='A instanceof B' pro='判断A是否为B的实例'>
					<CaseJs>
						<li>var isNumber = (<b>new Number</b>( 123 )) <b>instanceof Number</b> <u>=> true</u></li>
						<li>var isString = (<b>new String</b>( 'abc' )) <b>instanceof String</b> <u>=> true</u></li>
						<li>var isBoolean = (<b>new Boolean</b>( true )) <b>instanceof Boolean</b> <u>=> true</u></li>
						<li>var isFunction = (<b>new Function</b>( )) <b>instanceof Function</b> <u>=> true</u></li>
						<li>var isObject =｛ ｝ <b>instanceof Object</b> <u>=> {({} instanceof Object).toString() }</u></li>
						<li>var isArray = [ ] <b>instanceof Array</b> <u>=> {([] instanceof Array).toString() }</u></li>
						<li>var isDate = (<b>new Date</b>( )) <b>instanceof Date</b> <u>=> {((new Date()) instanceof Date).toString()}</u></li>
						<li>var isRegExp = (/0/) <b>instanceof RegExp</b> <u>=> {((/0/) instanceof RegExp).toString()}</u></li>
						<li>var isError = (<b>new Error</b>( )) <b>instanceof Error</b> <u>=> {((new Error()) instanceof Error).toString()}</u></li>
						<li>var isMy = my <b>instanceof Tree</b> <u>=> {(my instanceof Tree).toString() }</u></li>
					</CaseJs>
					<CaseJs>
						<li>var isNumber = 123 <b>instanceof Number</b> <u>=> {(123 instanceof Number).toString() }</u></li>
						<li>var isString = 'abc' <b>instanceof String</b> <u>=> {('abc' instanceof String).toString() }</u></li>
						<li>var isBoolean = true <b>instanceof Boolean</b> <u>=> {(true instanceof Boolean).toString() }</u></li>
					</CaseJs>
				</BoxComponent>
			</UbContent>
		)
	}
}