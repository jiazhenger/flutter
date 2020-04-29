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
		const str = '123456'
		const str2 = '1,2,3,4,5,6'
		const str3 = 'ABC'
		const str4 = 'abc'
		const str5 = 'a'
		const str6 = 'b'
		return (
			<UbContent className='page-content'>
				<BoxComponent deviceTitle='查找字符串' order={1} keyword='indexOf( )' pro='检索字符串' code={[ {path:'js/object/string/method/indexOf'} ]}>
					<CaseJs>
						<li>var str = '123456'</li>
						<li>var num = str.<b>indexOf</b>(2) <u>=> {str.indexOf(2)}</u></li>
						<li>var num = str.<b>indexOf</b>(0) <u>=> {str.indexOf(0)}</u></li>
						<li>var num = str.<b>indexOf</b>(5,3) <u>=> {str.indexOf(5,3)}</u></li>
					</CaseJs>
				</BoxComponent>
				<BoxComponent order={2} keyword='lastIndexOf( )' pro='从后向前搜索字符串' code={[ {path:'js/object/string/method/lastIndexOf'} ]}>
					<CaseJs>
						<li>var str = '123456'</li>
						<li>var num = str.<b>lastIndexOf</b>(2) <u>=> {str.lastIndexOf(2)}</u></li>
						<li>var num = str.<b>lastIndexOf</b>(0) <u>=> {str.lastIndexOf(0)}</u></li>
						<li>var num = str.<b>lastIndexOf</b>(1,3) <u>=> {str.lastIndexOf(1,3)}</u></li>
					</CaseJs>
				</BoxComponent>
				<BoxComponent order={3} keyword='search( )' pro='检索与正则表达式相匹配的值' code={[ {path:'js/object/string/method/search'} ]}>
					<CaseJs>
						<li>var str = '123456'</li>
						<li>var num = str.<b>search</b>(/12/) <u>=> {str.search(/12/)}</u></li>
						<li>var num = str.<b>search</b>(/89/) <u>=> {str.search(/89/)}</u></li>
					</CaseJs>
				</BoxComponent>
				<BoxComponent order={4} keyword='replace( )' pro='替换与正则表达式匹配的子串' code={[ {path:'js/object/string/method/replace'} ]}>
					<CaseJs>
						<li>var str = '123456'</li>
						<li>var str = str.<b>replace</b>(/12/g,'abc') <u>=> {str.replace(/12/g,'abc')}</u></li>
					</CaseJs>
				</BoxComponent>
				<BoxComponent order={5} keyword='match( )' pro='找到一个或多个正则表达式的匹配' code={[ {path:'js/object/string/method/match'} ]}>
					<CaseJs>
						<li>var str = '123456'</li>
						<li>var str = str.<b>match</b>('12') <u>=> {str.match('12')}</u></li>
						<li>var str = str.<b>match</b>(/34/) <u>=> {str.match(/34/)}</u></li>
					</CaseJs>
				</BoxComponent>
				<BoxComponent order={6} keyword='charAt( )' pro='返回在指定位置的字符' code={[ {path:'js/object/string/method/charAt'} ]}>
					<CaseJs>
						<li>var str = '123456'</li>
						<li>var str = str.<b>charAt</b>(2) <u>=> {str.charAt(2)}</u></li>
						<li>var str = str.<b>charAt</b>(8) <u>=> {str.charAt(8)}</u></li>
					</CaseJs>
				</BoxComponent>
				<BoxComponent order={7} keyword='charCodeAt( )' pro='返回在指定的位置的字符的 Unicode 编码' code={[ {path:'js/object/string/method/charCodeAt'} ]}>
					<CaseJs>
						<li>var str = '123456'</li>
						<li>var str = str.<b>charCodeAt</b>(2) <u>=> {str.charCodeAt(2)}</u></li>
						<li>var str = str.<b>charCodeAt</b>(8) <u>=> {str.charCodeAt(8)}</u></li>
					</CaseJs>
				</BoxComponent>
				<BoxComponent order={8} keyword='fromCharCode( )' pro='从字符编码创建一个字符串' code={[ {path:'js/object/string/method/fromCharCode'} ]}>
					<CaseJs>
						<li>var str = String.<b>fromCharCode</b>(72,69,76,76,79) <u>=> {String.fromCharCode(72,69,76,76,79)}</u></li>
					</CaseJs>
				</BoxComponent>
				
				<BoxComponent order={1} deviceTitle='字符串拼接与拆分' keyword='concat( )' pro='连接两个或多个字符串' code={[ {path:'js/object/string/method/concat'} ]}>
					<CaseJs>
						<li>var str = '123456'</li>
						<li>var str = str.<b>concat</b>('7','8','9') <u>=> {str.concat('7','8','9')}</u></li>
					</CaseJs>
				</BoxComponent>
				<BoxComponent order={2} keyword='split( )' pro='把字符串分割为字符串数组' code={[ {path:'js/object/string/method/split'} ]}>
					<CaseJs>
						<li>var str = '1,2,3,4,5,6'</li>
						<li>var str = str.<b>split</b>(',') <u>=> {JSON.stringify(str2.split(','))}</u></li>
					</CaseJs>
				</BoxComponent>
				
				<BoxComponent order={1} deviceTitle='截取字符串' keyword='substr( )' pro='从起始索引号提取字符串中指定数目的字符' code={[ {path:'js/object/string/method/substr'} ]}>
					<CaseJs>
						<li>var str = '123456'</li>
						<li>var str = str.<b>substr</b>(2) <u>=> {str.substr(2)}</u></li>
						<li>var str = str.<b>substr</b>(2,3) <u>=> {str.substr(2,3)}</u></li>
						<li>var str = str.<b>substr</b>(-2) <u>=> {str.substr(-2)}</u></li>
						<li>var str = str.<b>substr</b>(-3,2) <u>=> {str.substr(-3,2)}</u></li>
					</CaseJs>
				</BoxComponent>
				<BoxComponent order={2} keyword='substring( )' pro='提取字符串中两个指定的索引号之间的字符' code={[ {path:'js/object/string/method/substring'} ]}>
					<CaseJs>
						<li>var str = '123456'</li>
						<li>var str = str.<b>substring</b>(2) <u>=> {str.substring(2)}</u></li>
						<li>var str = str.<b>substring</b>(2,5) <u>=> {str.substring(2,5)}</u></li>
						<li>var str = str.<b>substring</b>(5,2) <u>=> {str.substring(5,2)}</u></li>
						<li>var str = str.<b>substring</b>(2,2) <u>=> {str.substring(2,2)}</u></li>
					</CaseJs>
				</BoxComponent>
				<BoxComponent order={3} keyword='slice( )' pro='提取字符串的片断，并在新的字符串中返回被提取的部分' code={[ {path:'js/object/string/method/slice'} ]}>
					<CaseJs>
						<li>var str = '123456'</li>
						<li>var str = str.<b>slice</b>(2) <u>=> {str.slice(2)}</u></li>
						<li>var str = str.<b>slice</b>(2,5) <u>=> {str.slice(2,5)}</u></li>
						<li>var str = str.<b>slice</b>(-2) <u>=> {str.slice(-2)}</u></li>
						<li>var str = str.<b>slice</b>(-3,-1) <u>=> {str.slice(-3,-1)}</u></li>
						<li>var str = str.<b>slice</b>(-1,-3) <u>=> {str.slice(-1,-3)}</u></li>
						<li>var str = str.<b>slice</b>(5,2) <u>=> {str.slice(5,2)}</u></li>
						<li>var str = str.<b>slice</b>(2,2) <u>=> {str.slice(2,2)}</u></li>
					</CaseJs>
				</BoxComponent>
				
				<BoxComponent order={1} deviceTitle='大小写转换' keyword='toLowerCase( )' pro='把字符串转换为小写' code={[ {path:'js/object/string/method/toLowerCase'} ]}>
					<CaseJs>
						<li>var str = 'ABC'</li>
						<li>var str = str.<b>toLowerCase( )</b> <u>=> {str3.toLowerCase()}</u></li>
					</CaseJs>
				</BoxComponent>
				<BoxComponent order={2} keyword='toLocaleLowerCase( )' pro='按照本地方式把字符串转换为小写' code={[ {path:'js/object/string/method/toLocaleLowerCase'} ]}>
					<CaseJs>
						<li>var str = 'ABC'</li>
						<li>var str = str.<b>toLocaleLowerCase( )</b> <u>=> {str3.toLocaleLowerCase()}</u></li>
					</CaseJs>
				</BoxComponent>
				<BoxComponent order={3} keyword='toUpperCase( )' pro='把字符串转换为大写' code={[ {path:'js/object/string/method/toUpperCase'} ]}>
					<CaseJs>
						<li>var str = 'abc'</li>
						<li>var str = str.<b>toUpperCase( )</b> <u>=> {str4.toUpperCase()}</u></li>
					</CaseJs>
				</BoxComponent>
				<BoxComponent order={4} keyword='toLocaleUpperCase( )' pro='按照本地方式把字符串转换为大写' code={[ {path:'js/object/string/method/toLocaleUpperCase'} ]}>
					<CaseJs>
						<li>var str = 'abc'</li>
						<li>var str = str.<b>toLocaleUpperCase( )</b> <u>=> {str4.toLocaleUpperCase()}</u></li>
					</CaseJs>
				</BoxComponent>
				
				<BoxComponent order={1} deviceTitle='给字符串添加样式' keyword='bold( )' pro='加粗'>
					<CaseJs>
						<li>var str = '123456'</li>
						<li>var str = str.<b>bold( )</b> <u>=> {str.bold()}</u></li>
					</CaseJs>
				</BoxComponent>
				<BoxComponent order={2} keyword='italics( )' pro='倾斜'>
					<CaseJs>
						<li>var str = '123456'</li>
						<li>var str = str.<b>italics( )</b> <u>=> {str.italics()}</u></li>
					</CaseJs>
				</BoxComponent>
				<BoxComponent order={3} keyword='strike( )' pro='删除线'>
					<CaseJs>
						<li>var str = '123456'</li>
						<li>var str = str.<b>strike( )</b> <u>=> {str.strike()}</u></li>
					</CaseJs>
				</BoxComponent>
				<BoxComponent order={4} keyword='sup( )' pro='上标'>
					<CaseJs>
						<li>var str = '123456'</li>
						<li>var str = str.<b>sup( )</b> <u>=> {str.sup()}</u></li>
					</CaseJs>
				</BoxComponent>
				<BoxComponent order={5} keyword='sub( )' pro='下标'>
					<CaseJs>
						<li>var str = '123456'</li>
						<li>var str = str.<b>sub( )</b> <u>=> {str.sub()}</u></li>
					</CaseJs>
				</BoxComponent>
				<BoxComponent order={6} keyword='blink( )' pro='闪动'>
					<CaseJs>
						<li>var str = '123456'</li>
						<li>var str = str.<b>blink( )</b> <u>=> {str.blink()}</u></li>
					</CaseJs>
				</BoxComponent>
				<BoxComponent order={7} keyword='fixed( )' pro='以打字机文本显示'>
					<CaseJs>
						<li>var str = '123456'</li>
						<li>var str = str.<b>fixed( )</b> <u>=> {str.fixed()}</u></li>
					</CaseJs>
				</BoxComponent>
				<BoxComponent order={8} keyword='big( )' pro='大号字'>
					<CaseJs>
						<li>var str = '123456'</li>
						<li>var str = str.<b>big( )</b> <u>=> {str.big()}</u></li>
					</CaseJs>
				</BoxComponent>
				<BoxComponent order={9} keyword='small( )' pro='小号字'>
					<CaseJs>
						<li>var str = '123456'</li>
						<li>var str = str.<b>small( )</b> <u>=> {str.small()}</u></li>
					</CaseJs>
				</BoxComponent>
				<BoxComponent order={10} keyword='fontsize( )' pro='指定字体尺寸'>
					<CaseJs>
						<li>var str = '123456'</li>
						<li>var str = str.<b>fontsize(1)</b> <u>=> {str.fontsize(1)}</u></li>
						<li>var str = str.<b>fontsize(2)</b> <u>=> {str.fontsize(2)}</u></li>
						<li>var str = str.<b>fontsize(3)</b> <u>=> {str.fontsize(3)}</u></li>
						<li>var str = str.<b>fontsize(4)</b> <u>=> {str.fontsize(4)}</u></li>
						<li>var str = str.<b>fontsize(5)</b> <u>=> {str.fontsize(5)}</u></li>
						<li>var str = str.<b>fontsize(6)</b> <u>=> {str.fontsize(6)}</u></li>
						<li>var str = str.<b>fontsize(7)</b> <u>=> {str.fontsize(7)}</u></li>
					</CaseJs>
				</BoxComponent>
				<BoxComponent order={11} keyword='fontcolor( )' pro='指定文本颜色'>
					<CaseJs>
						<li>var str = '123456'</li>
						<li>var str = str.<b>fontcolor('red')</b> <u>=> {str.fontcolor('red')}</u></li>
						<li>var str = str.<b>fontcolor('#fff')</b> <u>=> {str.fontcolor('#fff')}</u></li>
					</CaseJs>
				</BoxComponent>
				<BoxComponent order={12} keyword='link( )' pro='链接'>
					<CaseJs>
						<li>var str = '123456'</li>
						<li>var str = str.<b>link('http://www.baidu.com')</b> <u>=> {str.link('http://www.baidu.com')}</u></li>
					</CaseJs>
				</BoxComponent>
				<BoxComponent order={13} keyword='anchor( )' pro='创建 HTML 锚'>
					<CaseJs>
						<li>var str = '123456'</li>
						<li>var str = str.<b>anchor('myanchor')</b> <u>=> {str.anchor('myanchor')}</u></li>
					</CaseJs>
				</BoxComponent>
				
				<BoxComponent order={1} deviceTitle='其它功能' keyword='localeCompare( )' pro='用本地特定的顺序来比较两个字符串' code={[ {path:'js/object/string/method/localeCompare'} ]}>
					<CaseJs>
						<li>var str5 = 'a'</li>
						<li>var str6 = 'b'</li>
						<li>var str = str5.<b>localeCompare(str6)</b> <u>=> {str5.localeCompare(str6)}</u></li>
						<li>var str = str6.<b>localeCompare(str5)</b> <u>=> {str6.localeCompare(str5)}</u></li>
						<li>var str = str5.<b>localeCompare(str5)</b> <u>=> {str5.localeCompare(str5)}</u></li>
					</CaseJs>
				</BoxComponent>
				<BoxComponent order={2} keyword='toString( )' pro='返回字符串' code={[ {path:'js/object/string/method/toString'} ]}>
					<CaseJs>
						<li>var str = 'abc'</li>
						<li>var str = str.<b>toString( )</b> <u>=> {str4.toString()}</u></li>
					</CaseJs>
				</BoxComponent>
				<BoxComponent order={3} keyword='valueOf( )' pro='返回某个字符串对象的原始值' code={[ {path:'js/object/string/method/valueOf'} ]}>
					<CaseJs>
						<li>var str = '123456'</li>
						<li>var str = str.<b>valueOf( )</b> <u>=> {str.valueOf().toString()}</u></li>
					</CaseJs>
				</BoxComponent>
			</UbContent>
		)
	}
}