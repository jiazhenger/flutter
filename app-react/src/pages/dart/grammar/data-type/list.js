import React from 'react'
// ===================================================================== public component
import UbContent from '@cpx/ub-content.component'
import BoxComponent from '@cpt/box.component'
// ===================================================================== component
const $fn = window.$fn
export default class Index extends React.Component{
	componentDidMount(){
		$fn.setTitle('列表类型')
		$fn.hidePhone()
	}
	render(){
		return (
			<UbContent className='page-content'>
				<BoxComponent pro='列表类型声明' code={[ {path:'dart/grammar/data-type/list/base'} ]} />
				<BoxComponent pro='创建列表' code={[ {path:'dart/grammar/data-type/list/create'} ]} />
				<BoxComponent pro='列表属性' code={[ {path:'dart/grammar/data-type/list/property'} ]} />
				<BoxComponent pro='添加元素' code={[ {path:'dart/grammar/data-type/list/add'} ]} />
				<BoxComponent pro='移除元素' code={[ {path:'dart/grammar/data-type/list/remove'} ]} />
				<BoxComponent pro='查询元素' code={[ {path:'dart/grammar/data-type/list/search'} ]} />
				<BoxComponent pro='列表排序' code={[ {path:'dart/grammar/data-type/list/sort'} ]} />
				<BoxComponent pro='替换元素' code={[ {path:'dart/grammar/data-type/list/replace'} ]} />
				<BoxComponent pro='转为不同类型' code={[ {path:'dart/grammar/data-type/list/output-type'} ]} />
				<BoxComponent pro='其它' code={[ {path:'dart/grammar/data-type/list/other'} ]} />
			</UbContent>
		)
	}
}