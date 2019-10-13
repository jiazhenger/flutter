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
				<BoxComponent order={1} keyword='animation-name' pro='动画名称' code={[ {path:'css/style/animation/animation-name'} ]}/>
				<BoxComponent order={2} keyword='animation-duration' pro='播放一次需要的时间' code={[ {path:'css/style/animation/animation-duration'} ]}/>
				<BoxComponent order={3} keyword='animation-delay' pro='延迟播放时间' code={[ {path:'css/style/animation/animation-delay'} ]}/>
				<BoxComponent order={4} keyword='animation-timing-function' pro='过渡效果' code={[ {path:'css/style/animation/animation-timing-function'} ]}/>
				<BoxComponent order={5} keyword='animation-iteration-count' pro='循环次数' code={[ {path:'css/style/animation/animation-iteration-count'} ]}/>
				<BoxComponent order={6} keyword='animation-direction' pro='播放的方向' code={[ {path:'css/style/animation/animation-direction'} ]}/>
				<BoxComponent order={7} keyword='animation-fill-mode' pro='播放完后的状态' code={[ {path:'css/style/animation/animation-fill-mode'} ]}/>
				<BoxComponent order={8} keyword='animation-play-state' pro='播放状态' code={[ {path:'css/style/animation/animation-play-state'} ]}/>
				<BoxComponent keyword='animation' pro='复合属性' code={[ {path:'css/style/animation/animation'} ]}/>
				<BoxComponent pro='用例'>
					<div className='rel' style={{
						height:'50px',
						background:'red',
						animationName:'animationName',
						animationDuration: this.state.animationDuration,
						animationDelay: this.state.animationDelay,
						animationTimingFunction: this.state.animationTimingFunction,
						animationIterationCount: this.state.animationIterationCount,
						animationDirection: this.state.animationDirection,
						animationFillMode: this.state.animationFillMode,
						animationPlayState: this.state.animationPlayState
					}}></div>
					<CaseComponent
						getValue={ v=>this.setState({ animationDuration: v }) }
						data={{
							radio:['0s','.5s','2s','3s','5s']
						}}>
						<b className='c1 mr10'>animation-duration:</b>过渡时间(必选)
					</CaseComponent>
					<CaseComponent
						getValue={ v=>this.setState({ animationDelay: v }) }
						data={{
							radio:['0s','.5s','2s']
						}}>
						<b className='c1 mr10'>animation-delay:</b>延迟时间
					</CaseComponent>
					<CaseComponent
						getValue={ v=>this.setState({ animationTimingFunction : v }) }
						data={{
							radio:['ease','linear','ease-in','ease-out','ease-in-out']
						}}>
						<b className='c1 mr10'>animation-timing-function:</b>过渡效果
					</CaseComponent>
					<CaseComponent
						getValue={ v=>this.setState({ animationIterationCount : v }) }
						data={{
							radio:['1','infinite']
						}}>
						<b className='c1 mr10'>animation-iteration-count:</b>循环次数
					</CaseComponent>
					<CaseComponent
						getValue={ v=>this.setState({ animationDirection : v }) }
						data={{
							radio:['normal','reverse','alternate','alternate-reverse']
						}}>
						<b className='c1 mr10'>animation-direction:</b>方向
					</CaseComponent>
					<CaseComponent
						getValue={ v=>this.setState({ animationFillMode : v }) }
						data={{
							radio:['none','forwards','backwards','both']
						}}>
						<b className='c1 mr10'>animation-fill-mode:</b>播放完后的状态
					</CaseComponent>
					<CaseComponent
						getValue={ v=>this.setState({ animationPlayState : v }) }
						data={{
							radio:['running','paused']
						}}>
						<b className='c1 mr10'>animation-play-state:</b> 播放与暂停
					</CaseComponent>
				</BoxComponent>
			</UbContent>
		)
	}
}
