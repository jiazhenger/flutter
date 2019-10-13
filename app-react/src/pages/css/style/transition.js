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
		$fn.setTitle('动画')
		$fn.hidePhone()
	}
	render(){
		return (
			<UbContent className='page-content'>
				<BoxComponent keyword='transition-property' pro='CSS属性' code={[ {path:'css/style/transition/transition-property'} ]}/>
				<BoxComponent keyword='transition-duration' pro='过渡时间' code={[ {path:'css/style/transition/transition-duration'} ]}/>
				<BoxComponent keyword='transition-delay' pro='延迟时间' code={[ {path:'css/style/transition/transition-delay'} ]}/>
				<BoxComponent keyword='transition-timing-function' pro='过渡效果' code={[ {path:'css/style/transition/transition-timing-function'} ]}/>
				<BoxComponent keyword='transition' pro='复合属性' code={[ {path:'css/style/transition/transition'} ]}/>
				
				<BoxComponent pro='用例'>
					<div className='transition-case' style={{
						height:'50px',
						background:'red',
						transitionProperty:this.state.transitionProperty,
						transitionDuration: this.state.transitionDuration,
						transitionDelay: this.state.transitionDelay,
						transitionTimingFunction: this.state.transitionTimingFunction,
					}}></div>
					<CaseComponent
						getValue={ v=>this.setState({ transitionProperty : v }) }
						data={{
							radio:['all','background','width','height','background,width,height']
						}}>
						<b className='c1 mr10'>transition-property:</b>
					</CaseComponent>
					<CaseComponent
						getValue={ v=>this.setState({ transitionDuration: v }) }
						data={{
							radio:['0s','.5s','2s','3s','5s']
						}}>
						<b className='c1 mr10'>transition-duration:</b>
					</CaseComponent>
					<CaseComponent
						getValue={ v=>this.setState({ transitionDelay: v }) }
						data={{
							radio:['0s','.5s','2s']
						}}>
						<b className='c1 mr10'>transition-delay:</b>
					</CaseComponent>
					<CaseComponent
						getValue={ v=>this.setState({ transitionTimingFunction : v }) }
						data={{
							radio:['ease','linear','ease-in','ease-out','ease-in-out']
						}}>
						<b className='c1 mr10'>transition-timing-function:</b>
					</CaseComponent>
				</BoxComponent>
			</UbContent>
		)
	}
}
