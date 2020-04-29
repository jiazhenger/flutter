import React from 'react'
// ===================================================================== public component
import UbContent from '@cpx/ub-content.component'
import BoxComponent from '@cpt/box.component'
// ===================================================================== component
const $fn = window.$fn
export default class Index extends React.Component{
	componentDidMount(){
		$fn.setTitle('Arguments 对象')
		$fn.hidePhone()
	}
	render(){
		return (
			<UbContent className='page-content'>
				<BoxComponent order={1} keyword='arguments' pro='一个对应于传递给函数的参数的类数组对象' code={[ {path:'js/object/function/arguments/arguments'} ]}/>
				<BoxComponent order={2} keyword='arguments.callee' pro='指向当前执行的函数' code={[ {path:'js/object/function/arguments/callee'} ]}/>
				<BoxComponent order={3} keyword='arguments.length' pro='调用函数时所带的参数：实参个数' code={[ {path:'js/object/function/arguments/length'} ]}/>
				<BoxComponent order={4} keyword='arguments.callee.length' pro='创建函数时参数变量的个数：形参个数'/>
				<BoxComponent order={5} keyword='arguments.calle.caller.arguments[0] = 100' pro='设置顶层函数的第一个参数值为 100'/>
				<BoxComponent order={6} keyword='arguments.callee.caller.arguments.callee' pro='返回顶层函数的函数字符串'/>
				<BoxComponent order={7} keyword='arguments[@@iterator]' pro='返回一个新的Array迭代器对象，该对象包含参数中每个索引的值' code={[ {path:'js/object/function/arguments/iterator'} ]}/>
			</UbContent>
		)
	}
}