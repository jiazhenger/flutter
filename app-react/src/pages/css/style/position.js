import React from 'react'
// ===================================================================== public component
import UbContent from '@cpx/ub-content.component'
import BoxComponent from '@cpt/box.component'
import CaseComponent from '@cpt/case-css.component'
// ===================================================================== component
const $fn = window.$fn
export default class Index extends React.Component{
	state = {
		width:'50px',
		height:'50px'
	}
	componentDidMount(){
		$fn.setTitle('透明')
		$fn.hidePhone()
	}
	render(){
		return (
			<UbContent className='page-content'>
				<BoxComponent order={1} keyword='position' pro='定位' code={[ {path:'css/style/position/position'} ]}/>
				<BoxComponent order={2} keyword='left' pro='左移' code={[ {path:'css/style/position/left'} ]}/>
				<BoxComponent order={3} keyword='top' pro='上移' code={[ {path:'css/style/position/top'} ]}/>
				<BoxComponent order={4} keyword='right' pro='右移' code={[ {path:'css/style/position/right'} ]}/>
				<BoxComponent order={5} keyword='bottom' pro='下移' code={[ {path:'css/style/position/bottom'} ]}/>
				<BoxComponent order={6} keyword='z-index' pro='层叠顺序' code={[ {path:'css/style/position/z-index'} ]}/>
				
				<BoxComponent pro='示例' hasShow>
					<div className='rel' style={{height:'100px',background:'red',border:'1px solid #666',boxSizing:'border-box'}}>
						<div style={{width:'50px',height:'50px',background:'green'}}></div>
						<div style={{
							width:this.state.width,
							height:this.state.height,
							background:'yellow',
							position:this.state.position,
							left:this.state.left,
							top:this.state.top,
							right:this.state.right,
							bottom:this.state.bottom,
							zIndex:this.state.zIndex
						}}>
						</div>
					</div>
					<CaseComponent
						getValue={ v=>this.setState({ width: v }) }
						data={{
							radio:['auto','50px','100%']
						}}>
						<b className='c1'>width:</b>
					</CaseComponent>
					<CaseComponent
						getValue={ v=>this.setState({ height: v }) }
						data={{
							radio:['auto','50px','100%']
						}}>
						<b className='c1'>height:</b>
					</CaseComponent>
					<CaseComponent
						getValue={ v=>this.setState({ position: v }) }
						data={{
							radio:['static','relative','absolute','fixed']
						}}>
						<b className='c1'>position:</b>
					</CaseComponent>
					<CaseComponent
						getValue={ v=>this.setState({ left: v }) }
						data={{radio:['auto','0','50px','50%','-50%','100%']}}>
						<b className='c1'>left:</b>
					</CaseComponent>
					<CaseComponent
						getValue={ v=>this.setState({ top: v }) }
						data={{radio:['auto','0','50px','50%','-50%','100%']}}>
						<b className='c1'>top:</b>
					</CaseComponent>
					<CaseComponent
						getValue={ v=>this.setState({ right: v }) }
						data={{radio:['auto','0','50px','50%','-50%','100%']}}>
						<b className='c1'>right:</b>
					</CaseComponent>
					<CaseComponent
						getValue={ v=>this.setState({ bottom: v }) }
						data={{radio:['auto','0','50px','50%','-50%','100%']}}>
						<b className='c1'>bottom:</b>
					</CaseComponent>
					<CaseComponent
						getValue={ v=>this.setState({ zIndex: v }) }
						data={{
							radio:['0','1','-1','null']
						}}>
						<b className='c1'>z-index:</b>
					</CaseComponent>
				</BoxComponent>
			</UbContent>
		)
	}
}
