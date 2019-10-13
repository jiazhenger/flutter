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
		$fn.setTitle('内补丁')
		$fn.hidePhone()
	}
	render(){
		return (
			<UbContent className='page-content'>
				<BoxComponent order={1} keyword='padding-top' pro='上边距' code={[ {path:'css/style/padding/padding-top'} ]}>
					<CaseComponent
						getValue={ v=>this.setState({ paddingTop: v }) }
						data={{
							radio:['0','10px','20px','30px']
						}}>
						<div style={{background:'yellow',paddingTop:this.state.paddingTop}}>padding</div>
					</CaseComponent>
				</BoxComponent>
				
				<BoxComponent order={2} keyword='padding-right' pro='右边距' code={[ {path:'css/style/padding/padding-right'} ]}>
					<CaseComponent
						getValue={ v=>this.setState({ paddingRight: v }) }
						data={{
							radio:['0','50px','100px','50%']
						}}>
						<div style={{display:'inline-block',background:'yellow',paddingRight:this.state.paddingRight}}>padding</div>
					</CaseComponent>
				</BoxComponent>
				
				<BoxComponent order={3} keyword='padding-bottom' pro='下边距' code={[ {path:'css/style/padding/padding-bottom'} ]}>
					<CaseComponent
						getValue={ v=>this.setState({ paddingBottom: v }) }
						data={{
							radio:['0','10px','20px','30px']
						}}>
						<div style={{background:'yellow',paddingBottom:this.state.paddingBottom}}>padding</div>
					</CaseComponent>
				</BoxComponent>
				
				<BoxComponent order={4} keyword='padding-left' pro='左边距' code={[ {path:'css/style/padding/padding-left'} ]}>
					<CaseComponent
						getValue={ v=>this.setState({ paddingLeft: v }) }
						data={{
							radio:['0','50px','100px','50%']
						}}>
						<div style={{background:'yellow',paddingLeft:this.state.paddingLeft}}>padding</div>
					</CaseComponent>
				</BoxComponent>
				
				<BoxComponent keyword='padding' pro='[padding-top] [padding-right] [padding-bottom] [padding-left]' code={[ {path:'css/style/padding/padding'} ]}>
					<CaseComponent
						getValue={ v=>this.setState({ padding: v }) }
						data={{
							radio:['20px','50px','10%','10px 20px 30px 40px','20px 0','0 20px','10px 20px 30px']
						}}>
						<div style={{display:'inline-block',background:'yellow',padding:this.state.padding}}>padding</div>
					</CaseComponent>
				</BoxComponent>
			</UbContent>
		)
	}
}
