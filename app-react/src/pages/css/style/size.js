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
		$fn.setTitle('尺寸')
		$fn.hidePhone()
	}
	render(){
		return (
			<UbContent className='page-content'>
				<BoxComponent order={1} keyword='width' pro='宽度' code={[ {path:'css/style/size/width'} ]}>
					<CaseComponent
						getValue={ v=>this.setState({ width: v }) }
						data={{
							radio:['auto','100px','200px','50%','100%']
						}}>
						<div style={{height:'50px',background:'yellow',width:this.state.width}}></div>
					</CaseComponent>
				</BoxComponent>
				
				<BoxComponent order={2} keyword='min-width' pro='最小宽度' code={[ {path:'css/style/size/min-width'} ]}>
					<CaseComponent
						getValue={ v=>this.setState({ minWidth: v }) }
						data={{
							radio:['0','100px','200px','50%','100%']
						}}>
						<div style={{display:'inline-block',height:'50px',background:'yellow',minWidth:this.state.minWidth}}>最小宽度最小宽度最小宽度</div>
					</CaseComponent>
				</BoxComponent>
				
				<BoxComponent order={3} keyword='max-width' pro='最大宽度' code={[ {path:'css/style/size/max-width'} ]}>
					<CaseComponent
						getValue={ v=>this.setState({ maxWidth: v }) }
						data={{
							radio:['none','100px','200px','50%','100%']
						}}>
						<div style={{display:'inline-block',height:'50px',background:'yellow',maxWidth:this.state.maxWidth}}>最小宽度最小宽度最小宽度</div>
					</CaseComponent>
				</BoxComponent>
				
				<BoxComponent order={4} keyword='height' pro='高度' code={[ {path:'css/style/size/height'} ]} />
				<BoxComponent order={5} keyword='min-height' pro='最小高度' code={[ {path:'css/style/size/min-height'} ]} />
				<BoxComponent order={6} keyword='max-height' pro='最大高度' code={[ {path:'css/style/size/max-height'} ]} />
				<BoxComponent keyword='calc()' pro='响应式计算函数' code={[ {path:'css/style/size/calc'} ]}>
					<CaseComponent
						getValue={ v=>this.setState({ calc: 'calc(100% - ' + v + ')' }) }
						data={{
							radio:['100px','200px','300px','50%']
						}}>
						<div style={{height:'50px',background:'yellow',width:this.state.calc}}></div>
					</CaseComponent>
				</BoxComponent>
			</UbContent>
		)
	}
}
