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
		$fn.setTitle('外补丁')
		$fn.hidePhone()
	}
	render(){
		return (
			<UbContent className='page-content'>
				<BoxComponent order={1} keyword='margin-top' pro='上边距' code={[ {path:'css/style/margin/margin-top'} ]}>
					<CaseComponent
						getValue={ v=>this.setState({ marginTop: v }) }
						data={{
							radio:['auto','10px','20px','30px']
						}}>
						<div style={{height:'5px',background:'red'}}></div>
						<div className='p10' style={{height:'20px',background:'yellow',marginTop:this.state.marginTop}}></div>
					</CaseComponent>
				</BoxComponent>
				
				<BoxComponent order={2} keyword='margin-right' pro='右边距' code={[ {path:'css/style/margin/margin-right'} ]}>
					<CaseComponent
						getValue={ v=>this.setState({ marginRight: v }) }
						data={{
							radio:['auto','50px','100px','50%']
						}}>
						<div className='p10' style={{height:'20px',background:'yellow',marginRight:this.state.marginRight}}></div>
					</CaseComponent>
				</BoxComponent>
				
				<BoxComponent order={3} keyword='margin-bottom' pro='下边距' code={[ {path:'css/style/margin/margin-bottom'} ]}>
					<CaseComponent
						getValue={ v=>this.setState({ marginBottom: v }) }
						data={{
							radio:['auto','10px','20px','30px']
						}}>
						<div className='p10' style={{height:'20px',background:'yellow',marginBottom:this.state.marginBottom}}></div>
						<div style={{height:'5px',background:'red'}}></div>
					</CaseComponent>
				</BoxComponent>
				
				<BoxComponent order={4} keyword='margin-left' pro='左边距' code={[ {path:'css/style/margin/margin-left'} ]}>
					<CaseComponent
						getValue={ v=>this.setState({ marginLeft: v }) }
						data={{
							radio:['auto','50px','100px','50%']
						}}>
						<div className='p10' style={{height:'20px',background:'yellow',marginLeft:this.state.marginLeft}}></div>
					</CaseComponent>
				</BoxComponent>
				
				<BoxComponent keyword='margin' pro='[margin-top] [margin-right] [margin-bottom] [margin-left]' code={[ {path:'css/style/margin/margin'} ]}>
					<CaseComponent
						getValue={ v=>this.setState({ margin: v }) }
						data={{
							radio:['20px','50px','10%','10px 20px 30px 40px','20px 0','0 20px','10px 20px 30px']
						}}>
						<div style={{height:'20px',background:'yellow',margin:this.state.margin}}></div>
					</CaseComponent>
					<CaseComponent
						getValue={ v=>this.setState({ margin2: v }) }
						data={{
							radio:['0','auto','0 auto']
						}}>
						<div style={{width:'200px',height:'20px',background:'yellow',margin:this.state.margin2}}></div>
					</CaseComponent>
				</BoxComponent>
			</UbContent>
		)
	}
}
