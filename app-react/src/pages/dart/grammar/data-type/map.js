import React from 'react'
// ===================================================================== public component
import UbContent from '@cpx/ub-content.component'
import BoxComponent from '@cpt/box.component'
// ===================================================================== component
const $fn = window.$fn
export default class Index extends React.Component{
	componentDidMount(){
		$fn.setTitle('映射类型')
		$fn.hidePhone()
	}
	render(){
		return (
			<UbContent className='page-content'>
				<BoxComponent pro='类型声明' code={[ {path:'dart/grammar/var/type/map'} ]} />
				<BoxComponent pro='创建映射' code={[ {path:'dart/grammar/data-type/map/create'} ]} />
				<BoxComponent pro='集合属性' code={[ {path:'dart/grammar/data-type/map/property'} ]} />
				<BoxComponent pro='添加元素' code={[ {path:'dart/grammar/data-type/map/add'} ]} />
				<BoxComponent pro='删除元素' code={[ {path:'dart/grammar/data-type/map/remove'} ]} />
				<BoxComponent pro='检索元素' code={[ {path:'dart/grammar/data-type/map/search'} ]} />
				<BoxComponent pro='数据转换' code={[ {path:'dart/grammar/data-type/map/output-type'} ]} />
				<BoxComponent pro='迭代循环' code={[ {path:'dart/grammar/data-type/map/for'} ]} />
			</UbContent>
		)
	}
}