import React from 'react'
// ===================================================================== public component
import UbContent from '@cpx/ub-content.component'
import BoxComponent from '@cpt/box.component'
// ===================================================================== component
const $fn = window.$fn
export default class Index extends React.Component{
	componentDidMount(){
		$fn.setTitle('集合类型')
		$fn.hidePhone()
	}
	render(){
		return (
			<UbContent className='page-content'>
				<BoxComponent pro='类型声明' code={[ {path:'dart/grammar/var/type/set'} ]} />
				<BoxComponent pro='创建集合' code={[ {path:'dart/grammar/data-type/set/create'} ]} />
				<BoxComponent pro='集合属性' code={[ {path:'dart/grammar/data-type/set/property'} ]} />
				<BoxComponent pro='添加元素' code={[ {path:'dart/grammar/data-type/set/add'} ]} />
				<BoxComponent pro='删除元素' code={[ {path:'dart/grammar/data-type/set/remove'} ]} />
				<BoxComponent pro='检索元素' code={[ {path:'dart/grammar/data-type/set/search'} ]} />
				<BoxComponent pro='数据转换' code={[ {path:'dart/grammar/data-type/set/output-type'} ]} />
				<BoxComponent pro='迭代循环' code={[ {path:'dart/grammar/data-type/set/for'} ]} />
			</UbContent>
		)
	}
}