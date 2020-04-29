import React from 'react'
// ===================================================================== public component
import UbContent from '@cpx/ub-content.component'
import BoxComponent from '@cpt/box.component'
// ===================================================================== component
const { $fn } = window
export default class extends React.Component{
	componentDidMount(){
		$fn.setTitle('数字类型')
		$fn.hidePhone()
	}
	render(){
		var str = '100.05'
		return (
			<UbContent className='page-content'>
				<BoxComponent order={1} pro='类型声明' code={[ {path:'js/grammar/data-type/number/base'} ]} />
				<BoxComponent order={2} pro='创建对象' code={[ {path:'js/grammar/data-type/number/create'} ]}>
					<ul className='js-code-list'>
						<li>var num = <b>Number</b>('100.05') <u>=> { Number('100.5') }</u></li>
						<li>var num = <b>Number</b>('abc') <u>=> { Number('abc') }</u></li>
					</ul>
				</BoxComponent>
				<BoxComponent order={3} pro='转为数字类型的4种方式' code={[ {path:'js/grammar/data-type/number/string-to-num'} ]}>
					<ul className='js-code-list'>
						<li>var str = '100.05'</li>
						<li>var num = str<b>*1</b> <u>=> {str*1}</u></li>
						<li>var num = <b>parseInt</b>(str) <u>=> {parseInt(str)}</u></li>
						<li>var num = <b>+</b>str <u>=> { +str }</u></li>
					</ul>
				</BoxComponent>
				<BoxComponent pro='属性' link='/js/object/number/property' {...this.props}/>
				<BoxComponent pro='方法' link='/js/object/number/method' {...this.props}/>
			</UbContent>
		)
	}
}
