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
		$fn.setTitle('边框')
		$fn.hidePhone()
	}
	render(){
		return (
			<UbContent className='page-content'>
				<BoxComponent order={1} keyword='border-width' pro='边框宽度' code={[ {path:'css/style/border/border/border-width'} ]}>
					<CaseComponent
						getValue={ v=>this.setState({ borderWidth: v }) }
						data={{
							radio:['medium','thin','thick','.5px','1px','2px','1px 2px 3px 4px']
						}}>
						<div style={{borderStyle:'solid',height:'50px',borderWidth:this.state.borderWidth}}></div>
					</CaseComponent>
				</BoxComponent>
				
				<BoxComponent order={2} keyword='border-style' pro='边框样式' code={[ {path:'css/style/border/border/border-style'} ]}>
					<CaseComponent
						getValue={ v=>this.setState({ borderStyle: v }) }
						data={{
							radio:['none','solid','dotted','dashed','double','groove','ridge','inset','outset','groove ridge inset outset']
						}}>
						<div style={{height:'50px',borderStyle:this.state.borderStyle}}></div>
					</CaseComponent>
				</BoxComponent>
				
				<BoxComponent order={3} keyword='border-color' pro='边框颜色' code={[ {path:'css/style/border/border/border-color'} ]}>
					<CaseComponent
						getValue={ v=>this.setState({ borderColor: v }) }
						data={{
							radio:['transparent','yellowgreen','green','#ff0000','rgba(0,0,0,.1)','red blue green yellow']
						}}>
						<div style={{borderStyle:'solid',height:'50px',borderColor:this.state.borderColor}}></div>
					</CaseComponent>
				</BoxComponent>
				
				<BoxComponent keyword='border' pro='[border-width] [border-style] [border-color] ' code={[ {path:'css/style/border/border/border'} ]} />
			</UbContent>
		)
	}
}
