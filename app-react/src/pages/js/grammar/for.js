import React from 'react'
// ===================================================================== public component
import UbContent from '@cpx/ub-content.component'
import BoxComponent from '@cpt/box.component'
// ===================================================================== component
const $fn = window.$fn

export default class Index extends React.Component{
	componentDidMount(){
		$fn.setTitle('循环语句')
		$fn.hidePhone()
		var a = [5,8,9]
		
		a.forEach((v,i,n)=>{
			console.log(n)
		})
	}
	render(){
		return (
			<UbContent className='page-content'>
				<BoxComponent order={1} keyword='for( )' pro='基本循环' code={[ {path:'js/grammar/for/for'} ]} />
				<BoxComponent order={2} keyword='for in' pro='循环数组、对象、字符串' code={[ {path:'js/grammar/for/for-in'} ]} />
				<BoxComponent order={3} keyword='for of' pro='循环数组、字符串' code={[ {path:'js/grammar/for/for-of'} ]} />
				
				<BoxComponent order={1} deviceTitle='专用数组循环' keyword='forEach' pro='一般循环' code={[ {path:'js/grammar/for/forEach'} ]} />
				<BoxComponent order={2} keyword='map' pro='循环处理元素' code={[ {path:'js/grammar/for/map'} ]} />
				<BoxComponent order={3} keyword='filter' pro='过滤' code={[ {path:'js/grammar/for/filter'} ]} />
				<BoxComponent order={4} keyword='every' pro='全真为 true' code={[ {path:'js/grammar/for/every'} ]} />
				<BoxComponent order={5} keyword='some' pro='一个为真为 true' code={[ {path:'js/grammar/for/some'} ]} />,
				<BoxComponent order={6} keyword='reduce' pro='计算值' code={[ {path:'js/grammar/for/reduce'} ]} />
			</UbContent>
		)
	}
}