import React from 'react'
// ===================================================================== public component
import UbContent from '@cpx/ub-content.component'
import BoxComponent from '@cpt/box.component'
// ===================================================================== component
const $fn = window.$fn
export default class Index extends React.Component{
	state = {
		
	}
	componentDidMount(){
		$fn.setTitle('基础选择器')
		$fn.hidePhone()
	}
	render(){
		return (
			<UbContent className='page-content'>
				<BoxComponent keyword='*{ }' pro='选择任何元素' code={[ {path:'css/selector/base/any'} ]} />
				<BoxComponent keyword='div{ }' pro='html 元素选择器' code={[ {path:'css/selector/base/tag'} ]} />
				<BoxComponent keyword='.class{ }' pro='class 类选择器' code={[ {path:'css/selector/base/class'} ]} />
				<BoxComponent keyword='#id{ }' pro='id 选择器' code={[ {path:'css/selector/base/id'} ]} />
				<BoxComponent keyword='[attr]{ }' pro='属性选择器' code={[ {path:'css/selector/base/attr'} ]} />
				<BoxComponent keyword='div,p,span{ }' pro='分组选择器' code={[ {path:'css/selector/base/group'} ]} />
				<BoxComponent keyword='div.class{ }、.class.class{ }' pro='限制选择器' code={[ {path:'css/selector/base/limit'} ]} />
				<BoxComponent keyword='div span{ }' pro='包含选择器' code={[ {path:'css/selector/base/child-all'} ]} />
				<BoxComponent keyword='div>span{ }' pro='子对象选择器' code={[ {path:'css/selector/base/child'} ]} />
				<BoxComponent keyword='div+p{ }、div~p{ }' pro='兄弟选择器' code={[ {path:'css/selector/base/brother'} ]} />
			</UbContent>
		)
	}
}