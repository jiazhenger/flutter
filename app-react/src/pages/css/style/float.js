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
				<BoxComponent order={1} keyword='float' pro='浮动' code={[ {path:'css/style/float/float'} ]}/>
				<BoxComponent order={2} keyword='clear' pro='清除浮动' code={[ {path:'css/style/float/clear'} ]}/>
				<BoxComponent pro='示例'>
					<div style={{height:'220px',border:'1px solid #666',boxSizing:'border-box'}}>
						<div className={this.state.clearfix} style={{background:'red',overflow:this.state.overflow,height:this.state.height}}>
							<div style={{width:'50px',height:'50px',background:'yellow',float:this.state.float}}>1</div>
							<div style={{width:'50px',height:'50px',background:'pink',float:this.state.float}}>2</div>
							<div style={{width:'50px',height:'50px',background:'yellow',float:this.state.float}}>3</div>
							<div style={{width:'50px',height:'50px',background:'pink',float:this.state.float}}>4</div>
							{
								this.state.clear === 'left' || this.state.clear === 'right' || this.state.clear === 'both' ?
									<div style={{clear:this.state.clear,height:'18px',background:'blue',color:'#fff',textAlign:'center'}}>子级占位 clear</div>
									: null
							}
						</div>
					</div>
					<CaseComponent
						getValue={ v=>this.setState({ float: v }) }
						data={{
							radio:['none','left','right']
						}}>
						<b className='c1'>float:</b>
					</CaseComponent>
					<CaseComponent
						getValue={ v=>this.setState({ clear: v }) }
						data={{
							radio:['none','left','right','both']
						}}>
						<b className='c1'>清除浮动:子级占位 clear:</b>
					</CaseComponent>
					<CaseComponent
						getValue={ v=>this.setState({ height: v }) }
						data={{
							radio:['auto','100px','150px']
						}}>
						<b className='c1'>清除浮动:父级设高 height:</b>
					</CaseComponent>
					<CaseComponent
						getValue={ v=>this.setState({ overflow: v }) }
						data={{
							radio:['hidden','visible']
						}}>
						<b className='c1'>清除浮动:父级添加隐藏元素 overflow:</b>
					</CaseComponent>
					<CaseComponent
						getValue={ v=>this.setState({ clearfix: v }) }
						data={{
							radio:['clearfix','none']
						}}>
						<b className='c1'>清除浮动:父级添加clearfix样式:</b>
					</CaseComponent>
				</BoxComponent>
			</UbContent>
		)
	}
}
