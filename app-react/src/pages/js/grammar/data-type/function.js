import React from 'react'
// ===================================================================== public component
import UbContent from '@cpx/ub-content.component'
import BoxComponent from '@cpt/box.component'
// ===================================================================== component
const $fn = window.$fn

export default class Index extends React.Component{
	componentDidMount(){
		$fn.setTitle('函数类型')
		$fn.hidePhone()
	}
	render(){
		return (
			<UbContent className='page-content'>
				<BoxComponent order={1} pro='函数声明' code={[ {path:'js/grammar/data-type/function/declare'} ]} />
				<BoxComponent order={2} pro='函数表达式' code={[ {path:'js/grammar/data-type/function/expression'} ]} />
				<BoxComponent order={3} pro='箭头函数表达式' code={[ {path:'js/grammar/data-type/function/arrow'} ]} />
				<BoxComponent order={4} pro='创建函数的3种方式' code={[ {path:'js/grammar/data-type/function/create'} ]} />
				<BoxComponent order={5} pro='函数参数' code={[ {path:'js/grammar/data-type/function/param'} ]} />
				<BoxComponent order={6} pro='函数调用' code={[ {path:'js/grammar/data-type/function/use'} ]} />
				<BoxComponent order={7} pro='函数返回值' code={[ {path:'js/grammar/data-type/function/return'} ]} />
				<BoxComponent order={8} pro='局部变量' code={[ {path:'js/grammar/data-type/function/partvar'} ]} />
				<BoxComponent order={9} pro='匿名函数' code={[ {path:'js/grammar/data-type/function/noname'} ]} />
				<BoxComponent pro='Arguments 对象' link='/js/object/function/arguments' {...this.props}/>
				<BoxComponent pro='全局属性' link='/js/object/function/property' {...this.props}/>
				<BoxComponent pro='全局方法' link='/js/object/function/method' {...this.props}/>
			</UbContent>
		)
	}
}