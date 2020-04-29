import React from 'react'
// ===================================================================== public component
import UbContent from '@cpx/ub-content.component'
import BoxComponent from '@cpt/box.component'
// ===================================================================== component
const $fn = window.$fn
export default class Index extends React.Component{
	componentDidMount(){
		$fn.setTitle('全局属性')
		$fn.hidePhone()
	}
	render(){
		return (
			<UbContent className='page-content'>
				<BoxComponent order={1} keyword='Infinity' pro='代表正的无穷大的数值'/>
				<BoxComponent order={2} keyword='NaN' pro='指示某个值是不是数字值'/>
				<BoxComponent order={3} keyword='undefined' pro='指示未定义的值'/>
				<BoxComponent order={4} keyword='java' pro='代表 java.* 包层级的一个 JavaPackage'/>
				<BoxComponent order={5} keyword='Packages' pro='根 JavaPackage 对象'/>
			</UbContent>
		)
	}
}
