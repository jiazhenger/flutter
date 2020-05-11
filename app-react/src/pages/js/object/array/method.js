import React from 'react'
// ===================================================================== public component
import UbContent from '@cpx/ub-content.component'
import BoxComponent from '@cpt/box.component'
import CaseJs from '@cpt/case-js.component'
// ===================================================================== component
const $fn = window.$fn
export default class Index extends React.Component{
	componentDidMount(){
		$fn.setTitle('数组方法')
		$fn.hidePhone()
	}
	render(){
		const arr = [1,2,3]
		const arr1 = [1,2,3]
		const arr2 = [1,2,3]
		const arr3 = [1,2,3]
		const arr4 = [1,2,3]
		const arr5 = [1,2,3]
		const arr6 = [1,2,3,4]
		const arr7 = [1,2,3,4]
		const arr8 = [3,1,2]
		const arr9 = [1,2,3]
		const arr10 = [1,2,3]
		const arr11 = [1,2,3]
		const arr13 = [1,2,3]
		const arr14 = [1,2,3,4,5]
		return (
			<UbContent className='page-content'>
				<BoxComponent order={1} keyword='concat( )' pro='连接两个或更多的数组，并返回结果' code={[ {path:'js/object/array/method/concat'} ]}>
					<CaseJs>
						<li>var arr = [1,2,3]</li>
						<li>var str = arr.<b>concat([ 4,5,6 ])</b> <u>=> 返回新数组: {arr10.concat([4,5,6]).toString()}<span className='ml20'>原数组: {arr10.toString()}</span></u></li>
						<li>var str = arr.<b>concat(4,5,6)</b> <u>=> 返回新数组: {arr11.concat(4,5,6).toString()}<span className='ml20'>原数组: {arr10.toString()}</span></u></li>
						<li>var str = arr.<b>concat([4,5,6],[7,8,9])</b> <u>=> 返回新数组: {arr11.concat([4,5,6],[7,8,9]).toString()}<span className='ml20'>原数组: {arr11.toString()}</span></u></li>
					</CaseJs>
				</BoxComponent>
				<BoxComponent order={2} keyword='join( )' pro='把数组转为字符串' code={[ {path:'js/object/array/method/join'} ]}>
					<CaseJs>
						<li>var arr = [1,2,3]</li>
						<li>var str = arr.<b>join( )</b> <u>=> 返回字符串: {arr13.join().toString()}<span className='ml20'>原数组: {arr13.toString()}</span></u></li>
						<li>var str = arr.<b>join('/')</b> <u>=> 返回字符串: {arr13.join('/').toString()}<span className='ml20'>原数组: {arr13.toString()}</span></u></li>
						<li>var str = arr.<b>join('*')</b> <u>=> 返回字符串: {arr13.join('*').toString()}<span className='ml20'>原数组: {arr13.toString()}</span></u></li>
					</CaseJs>
				</BoxComponent>
				<BoxComponent order={3} keyword='slice( )' pro='从某个已有的数组返回选定的元素' code={[ {path:'js/object/array/method/slice'} ]}>
					<CaseJs>
						<li>var arr = [1,2,3,4,5]</li>
						<li>var str = arr.<b>slice(2)</b> <u>=> 返回选中元素组成的新数组: {arr14.slice(2).toString()}<span className='ml20'>原数组: {arr14.toString()}</span></u></li>
						<li>var str = arr.<b>slice(1,3)</b> <u>=> 返回选中元素组成的新数组: {arr14.slice(1,3).toString()}<span className='ml20'>原数组: {arr14.toString()}</span></u></li>
					</CaseJs>
				</BoxComponent>
				
				<BoxComponent order={1} deviceTitle='添加元素' keyword='push( )' pro='向数组的末尾添加一个或更多元素，并返回新的长度' code={[ {path:'js/object/array/method/push'} ]}>
					<CaseJs>
						<li>var arr = [1,2,3]</li>
						<li>var str = arr.<b>push(4)</b> <u>=> 返回值长度: {arr.push(4)}<span className='ml20'>原数组: {arr.toString()}</span></u></li>
						<li>var str = arr.<b>push(4,5,6)</b> <u>=> 返回值长度: {arr1.push(4,5,6)}<span className='ml20'>原数组: {arr1.toString()}</span></u></li>
					</CaseJs>
				</BoxComponent>
				<BoxComponent order={2} keyword='unshift( )' pro='向数组的开头添加一个或更多元素，并返回新的长度' code={[ {path:'js/object/array/method/unshift'} ]}>
					<CaseJs>
						<li>var arr = [1,2,3]</li>
						<li>var str = arr.<b>unshift(4)</b> <u>=> 返回值长度: {arr2.unshift(4)}<span className='ml20'>原数组: {arr2.toString()}</span></u></li>
						<li>var str = arr.<b>unshift(4,5,6)</b> <u>=> 返回值长度: {arr3.unshift(4,5,6)}<span className='ml20'>原数组: {arr3.toString()}</span></u></li>
					</CaseJs>
				</BoxComponent>
				
				<BoxComponent order={1} deviceTitle='删除元素' keyword='pop( )' pro='删除并返回数组的最后一个元素' code={[ {path:'js/object/array/method/pop'} ]}>
					<CaseJs>
						<li>var arr = [1,2,3]</li>
						<li>var arr1 = [ ]</li>
						<li>var str = arr.<b>pop( )</b> <u>=> 返回最后一个被删除的元素: {arr4.pop()}<span className='ml20'>原数组: {arr4.toString()}</span></u></li>
						<li>var str = arr1.<b>pop( )</b> <u>=> 空数组返回: undefined<span className='ml20'>原数组: [ ]</span></u></li>
					</CaseJs>
				</BoxComponent>
				<BoxComponent order={2} keyword='shift( )' pro='删除并返回数组的第一个元素' code={[ {path:'js/object/array/method/shift'} ]}>
					<CaseJs>
						<li>var arr = [1,2,3]</li>
						<li>var arr1 = [ ]</li>
						<li>var str = arr.<b>shift( )</b> <u>=> 返回第一个被删除的元素: {arr5.shift()}<span className='ml20'>原数组: {arr5.toString()}</span></u></li>
						<li>var str = arr1.<b>shift( )</b> <u>=> 空数组返回: undefined<span className='ml20'>原数组: [ ]</span></u></li>
					</CaseJs>
				</BoxComponent>
				<BoxComponent order={3} keyword='splice( )' pro='删除元素，并向数组添加新元素' code={[ {path:'js/object/array/method/splice'} ]}>
					<CaseJs>
						<li>var arr = [1,2,3,4]</li>
						<li>var str = arr.<b>splice(0,2)</b> <u>=> 返回包含被删除元素的数组: {arr6.splice(0,2).toString()}<span className='ml20'>原数组: {arr6.toString()}</span></u></li>
						<li>var str = arr.<b>splice(1,2,'a','b','c')</b> <u>=> 返回包含被删除元素的数组: {arr7.splice(1,2,'a','b','c').toString()}<span className='ml20'>原数组: {arr7.toString()}</span></u></li>
					</CaseJs>
				</BoxComponent>
				
				<BoxComponent order={1} deviceTitle='排序' keyword='sort( )' pro='对数组的元素进行排序' code={[ {path:'js/object/array/method/sort'} ]}>
					<CaseJs>
						<li>var arr = [3,1,2]</li>
						<li>var str = arr.<b>sort()</b> <u>=> 返回改变后的数组: {arr8.sort().toString()}<span className='ml20'>原数组: {arr8.toString()}</span></u></li>
					</CaseJs>
				</BoxComponent>
				<BoxComponent order={2} keyword='reverse( )' pro='颠倒数组中元素的顺序' code={[ {path:'js/object/array/method/reverse'} ]}>
					<CaseJs>
						<li>var arr = [1,2,3]</li>
						<li>var str = arr.<b>reverse( )</b> <u>=> 返回改变后的数组: {arr9.reverse().toString()}<span className='ml20'>原数组: {arr9.toString()}</span></u></li>
					</CaseJs>
				</BoxComponent>
				
				<BoxComponent order={1} deviceTitle='其它' keyword='toString( )' pro='把数组转换为字符串，并返回结果' code={[ {path:'js/object/array/method/toString'} ]}>
					<CaseJs>
						<li>var arr = [1,2,3]</li>
						<li>var str = arr.<b>toString( )</b> <u>=> {arr.toString()}</u></li>
					</CaseJs>
				</BoxComponent>
				<BoxComponent order={2} keyword='toLocaleString( )' pro='把数组转换为本地数组，并返回结果' code={[ {path:'js/object/array/method/toLocaleString'} ]}>
					<CaseJs>
						<li>var arr = [1,2,3]</li>
						<li>var str = arr.<b>toLocaleString( )</b> <u>=> {arr.toLocaleString()}</u></li>
					</CaseJs>
				</BoxComponent>
				<BoxComponent order={3} keyword='valueOf( )' pro='返回数组对象的原始值' code={[ {path:'js/object/array/method/valueOf'} ]}>
					<CaseJs>
						<li>var arr = [1,2,3]</li>
						<li>var str = arr.<b>valueOf( )</b> <u>=> {arr.valueOf()}</u></li>
					</CaseJs>
				</BoxComponent>
			</UbContent>
		)
	}
}