import React from 'react'
// ===================================================================== public component
import UbContent from '@cpx/ub-content.component'
import BoxComponent from '@cpt/box.component'
import CaseJs from '@cpt/case-js.component'
// ===================================================================== component
const $fn = window.$fn
export default class Index extends React.Component{
	componentDidMount(){
		$fn.setTitle('字符串类型')
		$fn.hidePhone()
	}
	render(){
		return (
			<UbContent className='page-content'>
				<BoxComponent order={1} pro='类型声明' code={[ {path:'js/grammar/data-type/string/base'} ]} />
				<BoxComponent order={2} pro='创建对象' code={[ {path:'js/grammar/data-type/string/create'} ]}>
					<CaseJs>
						<li>var str = <b>String</b>(123) <u>=> { String(123) }</u></li>
					</CaseJs>
				</BoxComponent>
				<BoxComponent order={3} pro='字符串拼接' code={[ {path:'js/grammar/data-type/string/concat'} ]}/>
				<BoxComponent pro='属性' link='/js/object/string/property' {...this.props}/>
				<BoxComponent pro='方法' link='/js/object/string/method' {...this.props}/>
			</UbContent>
		)
	}
}
