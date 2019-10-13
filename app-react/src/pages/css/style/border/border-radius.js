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
		$fn.setTitle('圆角')
		$fn.hidePhone()
	}
	render(){
		return (
			<UbContent className='page-content'>
				<BoxComponent order={1} keyword='border-top-left-radius' pro='左上角' code={[ {path:'css/style/border/border-radius/border-top-left-radius'} ]}>
					<CaseComponent
						getValue={ v=>this.setState({ borderTopLeftRadius: v }) }
						data={{
							radio:['10px','15px','20px 50px','50%','100%']
						}}>
						<div style={{width:'50px',height:'50px',background:'red',margin:'0 auto',borderTopLeftRadius:this.state.borderTopLeftRadius}}></div>
					</CaseComponent>
				</BoxComponent>
				
				<BoxComponent order={2} keyword='border-top-right-radius' pro='右上角' code={[ {path:'css/style/border/border-radius/border-top-right-radius'} ]}>
					<CaseComponent
						getValue={ v=>this.setState({ borderTopRightRadius: v }) }
						data={{
							radio:['10px','15px','20px 50px','50%','100%']
						}}>
						<div style={{width:'50px',height:'50px',background:'red',margin:'0 auto',borderTopRightRadius:this.state.borderTopRightRadius}}></div>
					</CaseComponent>
				</BoxComponent>
				
				<BoxComponent order={3} keyword='border-bottom-right-radius' pro='右下角' code={[ {path:'css/style/border/border-radius/border-bottom-right-radius'} ]}>
					<CaseComponent
						getValue={ v=>this.setState({ borderBottomRightRadius: v }) }
						data={{
							radio:['10px','15px','20px 50px','50%','100%']
						}}>
						<div style={{width:'50px',height:'50px',background:'red',margin:'0 auto',borderBottomRightRadius:this.state.borderBottomRightRadius}}></div>
					</CaseComponent>
				</BoxComponent>
				
				<BoxComponent order={4} keyword='border-bottom-left-radius' pro='左下角' code={[ {path:'css/style/border/border-radius/border-bottom-left-radius'} ]}>
					<CaseComponent
						getValue={ v=>this.setState({ borderBottomLeftRadius: v }) }
						data={{
							radio:['10px','15px','20px 50px','50%','100%']
						}}>
						<div style={{width:'50px',height:'50px',background:'red',margin:'0 auto',borderBottomLeftRadius:this.state.borderBottomLeftRadius}}></div>
					</CaseComponent>
				</BoxComponent>
				
				<BoxComponent keyword='border-radius' pro='圆角' code={[ {path:'css/style/border/border-radius/border-radius'} ]}>
					<CaseComponent
						getValue={ v=>this.setState({ borderRadius: v }) }
						data={{
							radio:['3px','5px','10px','15px','20px','50%','100%','5px 10px 15px 20px']
						}}>
						<div style={{width:'50px',height:'50px',background:'red',margin:'0 auto',borderRadius:this.state.borderRadius}}></div>
					</CaseComponent>
				</BoxComponent>
			</UbContent>
		)
	}
}
