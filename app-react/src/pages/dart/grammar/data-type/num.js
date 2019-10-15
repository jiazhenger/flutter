import React from 'react'
// ===================================================================== public component
import UbContent from '@cpx/ub-content.component'
import BoxComponent from '@cpt/box.component'
// ===================================================================== component
const $fn = window.$fn
export default class Index extends React.Component{
	componentDidMount(){
		$fn.setTitle('数字类型')
		$fn.hidePhone()
	}
	render(){
		return (
			<UbContent className='page-content'>
				<BoxComponent pro='数字类型声明' code={[ {path:'dart/grammar/var/type/num'} ]} />
				<BoxComponent pro='将字符串转为数字' code={[ {path:'dart/grammar/data-type/num/string-to-num'} ]} />
			</UbContent>
		)
	}
}
