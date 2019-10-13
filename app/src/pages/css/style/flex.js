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
		$fn.setTitle('弹性盒子布局')
		$fn.hidePhone()
	}
	render(){
		return (
			<UbContent className='page-content'>
				<h2 className='sub-title ptb10 c1 bbor1'>在父级使用的属性:</h2>
				
				<BoxComponent keyword='display' pro='定义弹性盒子' code={[ {path:'css/style/flex/display'} ]}/>
				<h2 className='sub-title ptb10 b bbor1'>排列方式:</h2>
				<BoxComponent keyword='flex-direction' pro='指定弹性子元素在父容器中排列方式' code={[ {path:'css/style/flex/flex-direction'} ]}/>
				<BoxComponent keyword='flex-wrap' pro='用于指定弹性盒子的子元素换行方式' code={[ {path:'css/style/flex/flex-wrap'} ]}/>
				<BoxComponent keyword='flex-flow' pro='flex-direction 和 flex-wrap 属性的复合属性' code={[ {path:'css/style/flex/flex-flow'} ]}/>
				<h2 className='sub-title ptb10 b bbor1'>水平或垂直对齐方式:</h2>
				<BoxComponent keyword='justify-content' pro='弹性子元素在父容器中主轴上水平或垂直对齐方式' code={[ {path:'css/style/flex/justify-content'} ]}/>
				<BoxComponent keyword='align-items' pro='弹性子元素在父容中器主轴上垂直或水平对齐方式' code={[ {path:'css/style/flex/align-items'} ]}/>
				
				<BoxComponent keyword='align-content' pro='在弹性容器内的各项没有占用交叉轴上所有可用的空间时垂直对齐容器内的各项' code={[ {path:'css/style/flex/align-content'} ]}/>
				<BoxComponent pro='示例'>
					<div style={{
						background:'red',
						height:'120px',
						marginBottom:'10px',
						display:this.state.display,
						flexDirection:this.state.flexDirection,
						justifyContent:this.state.justifyContent,
						alignItems:this.state.alignItems,
						flexWrap:this.state.flexWrap,
						alignContent:this.state.alignContent
					}}>
						<div style={{padding:'5px',background:'yellow'}}>1</div>
						<div style={{padding:'5px',background:'pink'}}>2</div>
						<div style={{padding:'5px',background:'yellow'}}>3</div>
					</div>
					<div style={{
						background:'red',
						height:'120px',
						marginBottom:'10px',
						display:this.state.display,
						flexDirection:this.state.flexDirection,
						justifyContent:this.state.justifyContent,
						alignItems:this.state.alignItems,
						flexWrap:this.state.flexWrap,
						alignContent:this.state.alignContent
					}}>
						<div style={{width:'30px',height:'30px',background:'yellow'}}>1</div>
						<div style={{width:'30px',height:'30px',background:'pink'}}>2</div>
						<div style={{width:'30px',height:'30px',background:'yellow'}}>3</div>
					</div>
					<div style={{
						background:'red',
						display:this.state.display,
						flexDirection:this.state.flexDirection,
						justifyContent:this.state.justifyContent,
						alignItems:this.state.alignItems,
						flexWrap:this.state.flexWrap,
						alignContent:this.state.alignContent
					}}>
						<div style={{width:'33%',height:'30px',background:'yellow'}}>1</div>
						<div style={{width:'33%',height:'30px',background:'pink'}}>2</div>
						<div style={{width:'33%',height:'30px',background:'yellow'}}>3</div>
						<div style={{width:'33%',height:'30px',background:'pink'}}>4</div>
						<div style={{width:'33%',height:'30px',background:'yellow'}}>5</div>
						<div style={{width:'33%',height:'30px',background:'pink'}}>6</div>
					</div>
					<CaseComponent
						getValue={ v=>this.setState({ display: v }) }
						data={{
							radio:['block','flex']
						}}>
						<b className='c1'>display:</b>
					</CaseComponent>
					<CaseComponent
						getValue={ v=>this.setState({ flexDirection: v }) }
						data={{
							radio:['row','row-reverse','column','column-reverse']
						}}>
						<b className='c1'>flex-direction:</b>
					</CaseComponent>
					<CaseComponent
						getValue={ v=>this.setState({ flexWrap : v }) }
						data={{
							radio:['nowrap','wrap','wrap-reverse']
						}}>
						<b className='c1'>flex-wrap:</b>
					</CaseComponent>
					<CaseComponent
						getValue={ v=>this.setState({ justifyContent : v }) }
						data={{
							radio:['flex-start','flex-end','center','space-between','space-around']
						}}>
						<b className='c1'>justify-content:</b>
					</CaseComponent>
					<CaseComponent
						getValue={ v=>this.setState({ alignItems : v }) }
						data={{
							radio:['flex-start','flex-end','center','baseline','stretch']
						}}>
						<b className='c1'>align-items:</b>
					</CaseComponent>
					<CaseComponent
						getValue={ v=>this.setState({ alignContent : v }) }
						data={{
							radio:['stretch','flex-start','flex-end','center','space-between','space-around']
						}}>
						<b className='c1'>align-content:</b>
					</CaseComponent>
				</BoxComponent>
				
				<h2 className='sub-title ptb10 c1 bbor1'>在子级中使用的属性:</h2>
				
				<BoxComponent keyword='align-self' pro='设置弹性元素自身在侧轴（纵轴）方向上的对齐方式' code={[ {path:'css/style/flex/align-self'} ]}>
					<CaseComponent
						getValue={ v=>this.setState({ alignSelf: v }) }
						data={{
							radio:['auto','flex-start','flex-end','center','baseline','stretch']
						}}>
						<div style={{
							background:'red',
							height:'60px',
							marginBottom:'10px',
							display:'flex',
						}}>
							<div style={{padding:'5px',background:'yellow'}}>1</div>
							<div style={{padding:'5px',background:'pink',alignSelf:this.state.alignSelf}}>flex</div>
							<div style={{padding:'5px',background:'yellow'}}>3</div>
						</div>
						<div style={{
							background:'red',
							height:'80px',
							display:'flex',
							flexDirection:'column'
						}}>
							<div style={{padding:'5px',background:'yellow'}}>1</div>
							<div style={{padding:'5px',background:'pink',alignSelf:this.state.alignSelf}}>flex</div>
							<div style={{padding:'5px',background:'yellow'}}>3</div>
						</div>
					</CaseComponent>
				</BoxComponent>
				<BoxComponent keyword='order' pro='用整数值来定义排列顺序，数值小的排在前面。可以为负值' code={[ {path:'css/style/flex/order'} ]}>
					<CaseComponent
						getValue={ v=>this.setState({ order: v }) }
						data={{
							radio:['0','2','4','6','8']
						}}>
						<div style={{
							background:'red',
							height:'60px',
							marginBottom:'10px',
							display:'flex',
						}}>
							<div style={{padding:'5px',background:'yellow',order:7}}>order=9</div>
							<div style={{padding:'5px',background:'pink',order:this.state.order}}>order={this.state.order}</div>
							<div style={{padding:'5px',background:'blue',order:7}}>order=7</div>
							<div style={{padding:'5px',background:'black',order:5}}>order=5</div>
							<div style={{padding:'5px',background:'green',order:3}}>order=3</div>
							<div style={{padding:'5px',background:'purple',order:1}}>order=1</div>
						</div>
					</CaseComponent>
				</BoxComponent>
				
				<h2 className='sub-title ptb10 b bbor1'>分配空间方式:</h2>
				
				<BoxComponent keyword='flex-grow' pro='定义弹性盒子元素的扩展比率' code={[ {path:'css/style/flex/flex-grow'} ]}/>
				<BoxComponent keyword='flex-shrink' pro='定义弹性盒子元素的收缩比率' code={[ {path:'css/style/flex/flex-shrink'} ]}/>
				<BoxComponent keyword='flex-basis' pro='定义弹性盒子元素的默认基准值' code={[ {path:'css/style/flex/flex-basis'} ]}/>
				<BoxComponent pro='示例'>
					<div style={{
						background:'red',
						height:'60px',
						marginBottom:'10px',
						display:'flex',
					}}>
						<div style={{padding:'5px',background:'yellow'}}>1</div>
						<div style={{padding:'5px',background:'pink',flexGrow:this.state.flexGrow,flexShrink:this.state.flexShrink,flexBasis:this.state.flexBasis}}>flex</div>
						<div style={{padding:'5px',background:'yellow'}}>3</div>
					</div>
					<CaseComponent
						getValue={ v=>this.setState({ flexGrow: v }) }
						data={{
							radio:['0','1','2']
						}}>
						<b className='c1'>flex-grow:</b>
					</CaseComponent>
					<CaseComponent
						getValue={ v=>this.setState({ flexShrink: v }) }
						data={{
							radio:['1','0','2']
						}}>
						<b className='c1'>flex-shrink:</b>
					</CaseComponent>
					<CaseComponent
						getValue={ v=>this.setState({ flexBasis: v }) }
						data={{
							radio:['auto','200px','20%','50%']
						}}>
						<b className='c1'>flex-basis:</b>
					</CaseComponent>
				</BoxComponent>
				<BoxComponent keyword='flex' pro='flex-grow、flex-shrink、flex-basis 复合属性。指定弹性子元素如何分配空间' code={[ {path:'css/style/flex/flex'} ]}>
					<CaseComponent
						getValue={ v=>this.setState({ flex: v }) }
						data={{
							radio:['none','auto','0 1 auto','1','2']
						}}>
						<div style={{
							background:'red',
							height:'60px',
							display:'flex',
						}}>
							<div style={{padding:'5px',background:'yellow'}}>1</div>
							<div style={{padding:'5px',background:'pink',flex:this.state.flex}}>flex</div>
							<div style={{padding:'5px',background:'yellow'}}>3</div>
						</div>
					</CaseComponent>
				</BoxComponent>
			</UbContent>
		)
	}
}
