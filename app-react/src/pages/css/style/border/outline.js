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
				<BoxComponent keyword='outline-width' pro='边框宽度' code={[ {path:'css/style/border/outline/outline-width'} ]}>
					<CaseComponent
						getValue={ v=>this.setState({ outlineWidth: v }) }
						data={{
							radio:['medium','thin','thick','.5px','1px','2px','1px 2px 3px 4px']
						}}>
						<div style={{outlineStyle:'solid',height:'50px',outlineWidth:this.state.outlineWidth}}></div>
					</CaseComponent>
				</BoxComponent>
				
				<BoxComponent keyword='outline-style' pro='边框样式' code={[ {path:'css/style/border/outline/outline-style'} ]}>
					<CaseComponent
						getValue={ v=>this.setState({ outlineStyle: v }) }
						data={{
							radio:['none','solid','dotted','dashed','double','groove','ridge','inset','outset','groove ridge inset outset']
						}}>
						<div style={{height:'50px',outlineWidth:'1px',outlineStyle:this.state.outlineStyle}}></div>
					</CaseComponent>
				</BoxComponent>
				
				<BoxComponent keyword='outline-color' pro='边框颜色' code={[ {path:'css/style/border/outline/outline-color'} ]}>
					<CaseComponent
						getValue={ v=>this.setState({ outlineColor: v }) }
						data={{
							radio:['transparent','yellowgreen','green','#ff0000','rgba(0,0,0,.1)','red blue green yellow']
						}}>
						<div style={{height:'50px',outlineWidth:'2px',outlineStyle:'solid',outlineColor:this.state.outlineColor}}></div>
					</CaseComponent>
				</BoxComponent>
				
				<BoxComponent keyword='outline' pro='[outline-width] [outline-style] [outline-color] ' code={[ {path:'css/style/border/outline/outline'} ]} />
				
				<BoxComponent keyword='outline-offset' pro='定义轮廓距离容器的值' code={[ {path:'css/style/border/outline/outline-offset'} ]}>
					<CaseComponent
						getValue={ v=>this.setState({ outlineOffset: v }) }
						data={{
							radio:['2px','3px','5px','-5px','-10px']
						}}>
						<div style={{height:'50px',outlineColor:'red',outlineWidth:'1px',outlineStyle:'solid',outlineOffset:this.state.outlineOffset}}>定义轮廓距离容器的值</div>
					</CaseComponent>
				</BoxComponent>
			</UbContent>
		)
	}
}
