import React from 'react'
// ===================================================================== public component
import UbContent from '@cpx/ub-content.component'
import BoxComponent from '@cpt/box.component'
// ===================================================================== component
const $fn = window.$fn
export default class Index extends React.Component{
	componentDidMount(){
		$fn.setTitle('布尔类型')
		$fn.hidePhone()
	}
	render(){
		return (
			<UbContent className='page-content'>
				<BoxComponent order={1} pro='类型声明' code={[ {path:'js/grammar/data-type/boolean/base'} ]} />
				<BoxComponent order={2} pro='创建对象' code={[ {path:'js/grammar/data-type/boolean/create'} ]}>
					<ul className='js-code-list'>
						<li>var bool = <b>Boolean</b>(1) <u>=> { Boolean(1).toString() }</u></li>
						<li>var bool = <b>Boolean</b>(2) <u>=> { Boolean(2).toString() }</u></li>
						<li>var bool = <b>Boolean</b>(-1) <u>=> { Boolean(-1).toString() }</u></li>
						<li>var bool = <b>Boolean</b>(0) <u>=> { Boolean(0).toString() }</u></li>
						<li>var bool = <b>Boolean</b>(-0) <u>=> { Boolean(-0).toString() }</u></li>
						<li>var bool = <b>Boolean</b>(null) <u>=> { Boolean(null).toString() }</u></li>
						<li>var bool = <b>Boolean</b>(undefined) <u>=> { Boolean(undefined).toString() }</u></li>
						<li>var bool = <b>Boolean</b>(NaN) <u>=> { Boolean(NaN).toString() }</u></li>
						<li>var bool = <b>Boolean</b>(false) <u>=> { Boolean(false).toString() }</u></li>
						<li>var bool = <b>Boolean</b>( ) <u>=> { Boolean().toString() }</u></li>
					</ul>
				</BoxComponent>
				<BoxComponent pro='属性' link='/js/object/boolean/property' {...this.props}/>
				<BoxComponent pro='方法' link='/js/object/boolean/method' {...this.props}/>
			</UbContent>
		)
	}
}