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
		var a = '100.05'
		return (
			<UbContent className='page-content'>
				<BoxComponent pro='字符串类型声明' code={[ {path:'js/grammar/data-type/number/base'} ]} />
				<BoxComponent pro='将字符串转为数字的3种方式' code={[ {path:'js/grammar/data-type/number/string-to-num'} ]}>
					<ul className='js-code-list'>
						<li>var a = '100.05'</li>
						<li><b>a*1</b> = {a*1}</li>
						<li><b>parseInt(a)</b> = {parseInt(a)}</li>
						<li><b>+a</b> = { +a }</li>
					</ul>
				</BoxComponent>
			</UbContent>
		)
	}
}
