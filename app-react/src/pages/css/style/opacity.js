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
		$fn.setTitle('透明')
		$fn.hidePhone()
	}
	render(){
		return (
			<UbContent className='page-content'>
				<BoxComponent keyword='opacity' pro='透明' code={[ {path:'css/style/opacity/opacity'} ]}>
					<CaseComponent
						getValue={ v=>this.setState({ opacity: v }) }
						data={{
							radio:['0','.2','.4','.6','.8','1']
						}}>
						<div className='p10' style={{height:'50px',background:'yellow',margin:'0 auto',opacity:this.state.opacity}}>透明</div>
					</CaseComponent>
				</BoxComponent>
			</UbContent>
		)
	}
}
