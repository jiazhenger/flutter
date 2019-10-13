import React from 'react'
// ===================================================================== public component
import UbContent from '@cpx/ub-content.component'
import BoxComponent from '@cpt/box.component'
import CaseComponent from '@cpt/case-css.component'
// ===================================================================== image
import TestImage from '@images/test.png'
// ===================================================================== component
const $fn = window.$fn
export default class Index extends React.Component{
	state = {}
	componentDidMount(){
		$fn.setTitle('列表')
		$fn.hidePhone()
	}
	render(){
		return (
			<UbContent className='page-content'>
				<BoxComponent order={1} keyword='list-style-type' pro='列表样式' code={[ {path:'css/style/list/list-style-type'} ]} />
				<BoxComponent order={2} keyword='list-style-position' pro='列表排列位置' code={[ {path:'css/style/list/list-style-position'} ]} />
				<BoxComponent order={3} keyword='list-style-image' pro='列表图片' code={[ {path:'css/style/list/list-style-image'} ]} />
				<BoxComponent keyword='list-style' pro='[list-style-type] [list-style-position] [list-style-image]' code={[ {path:'css/style/list/list-style'} ]} />
				
				<BoxComponent pro='示例'>
					<ul style={{paddingLeft:'30px'}}>
						<li style={{listStyleType:this.state.listStyleType,listStylePosition:this.state.listStylePosition,listStyleImage:this.state.listStyleImage}}>list-style-type</li>
						<li style={{listStyleType:this.state.listStyleType,listStylePosition:this.state.listStylePosition,listStyleImage:this.state.listStyleImage}}>list-style-type</li>
						<li style={{listStyleType:this.state.listStyleType,listStylePosition:this.state.listStylePosition,listStyleImage:this.state.listStyleImage}}>list-style-type</li>
					</ul>
					<CaseComponent
						getValue={ v=>this.setState({ listStyleType: v }) }
						data={{
							radio:['disc','circle','decimal','lower-roman ','upper-roman','lower-alpha','upper-alpha','none','armenianl',
								'cjk-ideographic','georgian','lower-greek','hebrew','hiragana','hiragana-iroha','katakana','katakana-iroha','lower-latin','upper-latin']
						}}>
						<b className='c1'>list-style-type:</b>
					</CaseComponent>
					<CaseComponent
						getValue={ v=>this.setState({ listStylePosition: v }) }
						data={{
							radio:['outside','inside']
						}}>
						<b className='c1'>list-style-position:</b>
					</CaseComponent>
					<CaseComponent
						getValue={ v=>this.setState({ listStyleImage: v === 'none' ? 'none' : 'url(' + TestImage + ')' }) }
						data={{
							radio:['none','./assets/images/test.png']
						}}>
						<b className='c1'>list-style-image:</b>
					</CaseComponent>
				</BoxComponent>
			</UbContent>
		)
	}
}
