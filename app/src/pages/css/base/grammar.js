import React from 'react'
// ===================================================================== public component
import UbContent from '@cpx/ub-content.component'
import BoxComponent from '@cpt/box.component'
// ===================================================================== component
const $fn = window.$fn
export default class Index extends React.Component{
	componentDidMount(){
		$fn.setTitle('Css 语法')
		$fn.hidePhone()
	}
	render(){
		return (
			<UbContent className='page-content'>
				<BoxComponent title='书写格式' show={true} code={[ {path:'css/base/grammar/format'} ]} />
				<BoxComponent title='注释' show={true}  code={[ {path:'css/base/grammar/annotation'} ]} />
			</UbContent>
		)
	}
}
