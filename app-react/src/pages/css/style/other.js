import React from 'react'
// ===================================================================== public component
import UbContent from '@cpx/ub-content.component'
import BoxComponent from '@cpt/box.component'
import CaseComponent from '@cpt/case-css.component'
// ===================================================================== component
const $fn = window.$fn
export default class Index extends React.Component{
	state = {}
	componentDidMount(){
		$fn.setTitle('其它')
		$fn.hidePhone()
	}
	render(){
		return (
			<UbContent className='page-content'>
				<BoxComponent order={1} keyword='resize' pro='允许用户调整元素大小' code={[ {path:'css/style/other/resize'} ]}>
					<CaseComponent
						getValue={ v=>this.setState({ resize: v }) }
						data={{
							radio:['none','both','horizontal','vertical']
						}}>
						<div className='p10' style={{height:'50px',overflow:'auto',background:'yellow',resize:this.state.resize}}></div>
					</CaseComponent>
				</BoxComponent>
				
				<BoxComponent order={2} keyword='appearance' pro='允许使元素看上去像标准的用户界面元素' code={[ {path:'css/style/other/appearance'} ]}>
					<CaseComponent
						getValue={ v=>this.setState({ appearance: v }) }
						data={{
							radio:['none','normal','icon','window','button','menu','field']
						}}>
						<div style={{height:'50px',WebkitAppearance:this.state.appearance}}></div>
					</CaseComponent>
				</BoxComponent>
				
				<BoxComponent order={3} keyword='user-select' pro='是否允许用户选中文本' code={[ {path:'css/style/other/user-select'} ]}>
					<CaseComponent
						getValue={ v=>this.setState({ userSelect: v }) }
						data={{
							radio:['text','none','element','all']
						}}>
						<div style={{height:'50px',userSelect:this.state.userSelect}}>
							是否允许用户选中文本
						</div>
					</CaseComponent>
				</BoxComponent>
			</UbContent>
		)
	}
}
