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
		return (
			<UbContent className='page-content'>
				<BoxComponent order={1} deviceTitle='数字处理' keyword='parseFloat( )' pro='解析一个字符串并返回一个浮点数' code={[ {path:'js/object/function/method/parseFloat'} ]}>
					<CaseJs>
						<li>var num = <b>parseFloat</b>('123') <u>=> {parseFloat('123')}</u></li>
						<li>var num = <b>parseFloat</b>(123.123) <u>=> {parseFloat(123.123)}</u></li>
						<li>var num = <b>parseFloat</b>('abc') <u>=> {parseFloat('abc')}</u></li>
					</CaseJs>
				</BoxComponent>
				<BoxComponent order={2} keyword='parseInt( )' pro='解析一个字符串并返回一个整数' code={[ {path:'js/object/function/method/parseInt'} ]}>
					<CaseJs>
						<li>var num = <b>parseInt</b>('123.123') <u>=> {parseInt('123.123')}</u></li>
						<li>var num = <b>parseInt</b>('123',2) <u>=> {parseInt('123',2)}</u></li>
						<li>var num = <b>parseInt</b>('010') <u>=> {parseInt('010')}</u></li>
						<li>var num = <b>parseInt</b>('abc') <u>=> {parseInt('abc')}</u></li>
					</CaseJs>
				</BoxComponent>
				
				<BoxComponent order={1} deviceTitle='判断数字' keyword='isNaN( )' pro='检查某个值是否是非数字' code={[ {path:'js/object/function/method/isNaN'} ]}>
					<CaseJs>
						<li>var num = <b>isNaN</b>(123) <u>=> {isNaN(123).toString()}</u></li>
						<li>var num = <b>isNaN</b>(5-2) <u>=> {isNaN(5-2).toString()}</u></li>
						<li>var num = <b>isNaN</b>(0) <u>=> {isNaN(0).toString()}</u></li>
						<li>var num = <b>isNaN</b>('123') <u>=> {isNaN('123').toString()}</u></li>
						<li>var num = <b>isNaN</b>(true) <u>=> {isNaN(true).toString()}</u></li>
						<li>var num = <b>isNaN</b>('true') <u>=> {isNaN('true').toString()}</u></li>
						<li>var num = <b>isNaN</b>('abc') <u>=> {isNaN('abc').toString()}</u></li>
						<li>var num = <b>isNaN</b>('2020/03/01') <u>=> {isNaN('2020/03/01').toString()}</u></li>
					</CaseJs>
				</BoxComponent>
				<BoxComponent order={2} keyword='isFinite( )' pro='检查某个值是否为有穷大的数' code={[ {path:'js/object/function/method/isFinite'} ]}>
					<CaseJs>
						<li>var num = <b>isFinite</b>(123) <u>=> {isFinite(123).toString()}</u></li>
						<li>var num = <b>isFinite</b>(-123) <u>=> {isFinite(-123).toString()}</u></li>
						<li>var num = <b>isFinite</b>(0) <u>=> {isFinite(0).toString()}</u></li>
						<li>var num = <b>isFinite</b>('123') <u>=> {isFinite('123').toString()}</u></li>
						<li>var num = <b>isFinite</b>(true) <u>=> {isFinite(true).toString()}</u></li>
						<li>var num = <b>isFinite</b>('true') <u>=> {isFinite('true').toString()}</u></li>
						<li>var num = <b>isFinite</b>('abc') <u>=> {isFinite('abc').toString()}</u></li>
						<li>var num = <b>isFinite</b>('2020/03/01') <u>=> {isFinite('2020/03/01').toString()}</u></li>
					</CaseJs>
				</BoxComponent>
				
				<BoxComponent order={1} deviceTitle='编码解码 URI' keyword='encodeURI( )' pro='把字符串编码为 URI' code={[ {path:'js/object/function/method/encodeURI'} ]}>
					<CaseJs>
						<li>var str = <b>encodeURI</b>('http://www.baidu.com/#/?name=a b c') <u>=> {encodeURI('http://www.baidu.com/#/?name=a b c')}</u></li>
						<li>var str = <b>encodeURI</b>('?!=()#%&') <u>=> {encodeURI('?!=()#%&')}</u></li>
						<li>var str = <b>encodeURI</b>('*@-_+./') <u>=> {encodeURI('*@-_+./')}</u></li>
					</CaseJs>
				</BoxComponent>
				<BoxComponent order={2} keyword='decodeURI( )' pro='解码某个编码的 URI' code={[ {path:'js/object/function/method/decodeURI'} ]}>
					<CaseJs>
						<li>var str = <b>decodeURI</b>('http://www.baidu.com/#/?name=a%20b%20c') <u>=> {decodeURI('http://www.baidu.com/#/?name=a%20b%20c')}</u></li>
						<li>var str = <b>decodeURI</b>('?!=()#%25&') <u>=> {decodeURI('?!=()#%25&')}</u></li>
					</CaseJs>
				</BoxComponent>
				
				<BoxComponent order={1} deviceTitle='编码解码 URI 组件' keyword='encodeURIComponent( )' pro='把字符串编码为 URI 组件' code={[ {path:'js/object/function/method/encodeURIComponent'} ]}>
					<CaseJs>
						<li>var str = <b>encodeURIComponent</b>('http://www.baidu.com/#/?name=a b c') <u>=> {encodeURIComponent('http://www.baidu.com/#/?name=a b c')}</u></li>
						<li>var str = <b>encodeURIComponent</b>('?!=()#%&') <u>=> {encodeURIComponent('?!=()#%&')}</u></li>
						<li>var str = <b>encodeURIComponent</b>('*@-_+./') <u>=> {encodeURIComponent('*@-_+./')}</u></li>
					</CaseJs>
				</BoxComponent>
				<BoxComponent order={2} keyword='decodeURIComponent( )' pro='解码一个编码的 URI 组件' code={[ {path:'js/object/function/method/decodeURIComponent'} ]}>
					<CaseJs>
						<li>var str = <b>decodeURIComponent</b>('http%3A%2F%2Fwww.baidu.com%2F%23%2F%3Fname%3Da%20b%20c') <u>=> {decodeURIComponent('http%3A%2F%2Fwww.baidu.com%2F%23%2F%3Fname%3Da%20b%20c')}</u></li>
						<li>var str = <b>decodeURIComponent</b>('%3F!%3D()%23%25%26') <u>=> {decodeURIComponent('%3F!%3D()%23%25%26')}</u></li>
						<li>var str = <b>decodeURIComponent</b>('*%40-_%2B.%2F') <u>=> {decodeURIComponent('*%40-_%2B.%2F')}</u></li>
					</CaseJs>
				</BoxComponent>
				
				<BoxComponent order={1} deviceTitle='字符串编码解码' keyword='escape( )' pro='对字符串进行编码' code={[ {path:'js/object/function/method/escape'} ]}>
					<CaseJs>
						<li>var str = <b>escape</b>('a b c') <u>=> {escape('a b c')}</u></li>
						<li>var str = <b>escape</b>('?!=()#%&') <u>=> {escape('?!=()#%&')}</u></li>
						<li>var str = <b>escape</b>('*@-_+./') <u>=> {escape('*@-_+./')}</u></li>
					</CaseJs>
				</BoxComponent>
				<BoxComponent order={2} keyword='unescape( )' pro='对字符串进行解码' code={[ {path:'js/object/function/method/decodeURIComponent'} ]}>
					<CaseJs>
						<li>var str = <b>unescape</b>('a%20b%20c') <u>=> {unescape('a%20b%20c')}</u></li>
						<li>var str = <b>unescape</b>('%3F%21%3D%28%29%23%25%26') <u>=> {unescape('%3F%21%3D%28%29%23%25%26')}</u></li>
					</CaseJs>
				</BoxComponent>
				
				<BoxComponent order={1} deviceTitle='数据类型转换' keyword='String( )' pro='把对象的值转换为字符串'>
					<CaseJs>
						<li>var str = <b>String</b>(123) <u>=> { String(123) }</u></li>
					</CaseJs>
				</BoxComponent>
				<BoxComponent order={2} keyword='Number( )' pro='把对象的值转换为数字'>
					<CaseJs>
						<li>var str = <b>Number</b>(123) <u>=> { Number(123) }</u></li>
					</CaseJs>
				</BoxComponent>
				<BoxComponent order={3} keyword='Boolean( )' pro='把对象的值转换为布尔值'>
					<CaseJs>
						<li>var str = <b>Boolean</b>(1) <u>=> { Boolean(1).toString() }</u></li>
						<li>var str = <b>Boolean</b>(-1) <u>=> { Boolean(-1).toString() }</u></li>
						<li>var str = <b>Boolean</b>('abc') <u>=> { Boolean('abc').toString() }</u></li>
						<li>var str = <b>Boolean</b>(0) <u>=> { Boolean(0).toString() }</u></li>
					</CaseJs>
				</BoxComponent>
				
				<BoxComponent order={1} deviceTitle='其它' keyword='eval( )' pro='计算 JavaScript 字符串，并把它作为脚本代码来执行' code={[ {path:'js/object/function/method/eval'} ]}>
					<CaseJs>
						<li>var str = <b>eval</b>('x=10;y=20;document.write(x*y)')</li>
						<li>var str = <b>eval</b>('2+2') <u>=> 4</u></li>
					</CaseJs>
				</BoxComponent>
				<BoxComponent order={2} isGray keyword='getClass( )' pro='返回一个 JavaObject 的 JavaClass' code={[ {path:'js/object/function/method/getClass'} ]}>
					<CaseJs>
						<li>var obj = new java.awt.Rectangle()</li>
						<li>var cls = <b>getClass</b>(obj)</li>
					</CaseJs>
				</BoxComponent>
			</UbContent>
		)
	}
}