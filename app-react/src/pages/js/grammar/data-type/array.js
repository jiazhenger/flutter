import React from 'react'
// ===================================================================== public component
import UbContent from '@cpx/ub-content.component'
import BoxComponent from '@cpt/box.component'
//import CaseJs from '@cpt/case-js.component'
// ===================================================================== component
const { $fn } = window
export default class Index extends React.Component{
	componentDidMount(){
		$fn.setTitle('数组类型')
		$fn.hidePhone()
	}
	render(){
		return (
			<UbContent className='page-content'>
				<BoxComponent order={1} pro='类型声明' code={[ {path:'js/grammar/data-type/array/base'} ]} />
				<BoxComponent order={2} pro='设置值' code={[ {path:'js/grammar/data-type/array/set'} ]} />
				<BoxComponent order={3} pro='获取值' code={[ {path:'js/grammar/data-type/array/get'} ]} />
				<BoxComponent pro='属性' link='/js/object/array/property' {...this.props}/>
				<BoxComponent pro='方法' link='/js/object/array/method' {...this.props}/>
			</UbContent>
		)
	}
}
