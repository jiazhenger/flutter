import React from 'react'
// ===================================================================== public component
import UbContent from '@cpx/ub-content.component'
import BoxComponent from '@cpt/box.component'
// ===================================================================== component
const $fn = window.$fn
export default class Index extends React.Component{
	componentDidMount(){
		$fn.setTitle('样式表配置')
		$fn.hidePhone()
	}
	render(){
		return (
			<UbContent className='page-content'>
				<BoxComponent title='行内样式' show={true} code={[ {path:'css/base/import/inline'} ]} />
				<BoxComponent title='内部样式表/内联式' show={true}  code={[ {path:'css/base/import/inner'} ]} />
				<BoxComponent title='外部样式表/外联式' show={true}  code={[ {path:'css/base/import/link'} ]} />
			</UbContent>
		)
	}
}
