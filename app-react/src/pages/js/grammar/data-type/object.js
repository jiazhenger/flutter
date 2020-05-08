import React from 'react'
// ===================================================================== public component
import UbContent from '@cpx/ub-content.component'
import BoxComponent from '@cpt/box.component'
//import CaseJs from '@cpt/case-js.component'
// ===================================================================== component
const $fn = window.$fn
export default class Index extends React.Component{
	componentDidMount(){
		$fn.setTitle('字符串类型')
		$fn.hidePhone()
	}
	render(){
		return (
			<UbContent className='page-content'>
				<BoxComponent order={1} pro='类型声明' code={[ {path:'js/grammar/data-type/object/base'} ]} />
				<BoxComponent order={2} pro='对象字面量' code={[ {path:'js/grammar/data-type/object/literal'} ]} />
				<BoxComponent 
					order={3}
					pro='创建对象的 4 种方式' 
					code={[ {path:'js/grammar/data-type/object/create'} ]}
					link={
						[
							{title:'Object.assign()', url:'/js/object/object/method'},
						]
					}
					{...this.props}
				/>
				<BoxComponent pro='Object 构造函数的属性' link='/js/object/object/property' {...this.props}/>
				<BoxComponent pro='Object 构造函数的方法' link='/js/object/object/method' {...this.props}/>
				<BoxComponent pro='Object 原型对象的属性' link='/js/object/object/prototype-property' {...this.props}/>
				<BoxComponent pro='Object 原型对象的方法' link='/js/object/object/prototype-method' {...this.props}/>
			</UbContent>
		)
	}
}
