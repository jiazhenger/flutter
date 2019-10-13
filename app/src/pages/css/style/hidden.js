import React from 'react'
// ===================================================================== public component
import UbContent from '@cpx/ub-content.component'
import BoxComponent from '@cpt/box.component'
import CaseComponent from '@cpt/case-css.component'
// ===================================================================== image
import TestImage from '@images/test.png'
// ===================================================================== component
const $fn = window.$fn
export default class Index extends React.Component{
	state = {
		
	}
	componentDidMount(){
		$fn.setTitle('显示及隐藏')
		$fn.hidePhone()
	}
	render(){
		return (
			<UbContent className='page-content'>
				<BoxComponent keyword='display' pro='规定元素应该生成的框的类型' code={[ {path:'css/style/hidden/display'} ]}>
					<CaseComponent
						getValue={ v=>this.setState({ display: v }) }
						data={{
							radio:['block','inline','inline-block','none','list-item','table','inline-table']
						}}>
						<div style={{width:'50px',height:'50px',background:'yellow',display:this.state.display}}>1</div>
						<div style={{width:'50px',height:'50px',background:'pink',display:this.state.display}}>2</div>
						<div style={{width:'50px',height:'50px',background:'yellow',display:this.state.display}}>3</div>
					</CaseComponent>
				</BoxComponent>
				
				<BoxComponent keyword='visibility' pro='是否显示对象' code={[ {path:'css/style/hidden/visibility'} ]}>
					<div className='mt10'>
						<div style={{width:'50px',height:'50px',background:'yellow'}}>1</div>
						<div style={{width:'50px',height:'50px',background:'pink',visibility:this.state.visibility,display:this.state.displays}}>2</div>
						<div style={{width:'50px',height:'50px',background:'yellow'}}>3</div>
					</div>
					<CaseComponent
						getValue={ v=>this.setState({ visibility: v }) }
						data={{
							radio:['inherit','visible','collapse','hidden']
						}}>
						<b className='c1'>visibility:</b>
					</CaseComponent>
					<CaseComponent
						getValue={ v=>this.setState({ displays: v }) }
						data={{
							radio:['block','none']
						}}>
						<b className='c1'>display:</b>
					</CaseComponent>
				</BoxComponent>
				<h2 className='sub-title ptb10 b bbor1'>溢出/超出处理:</h2>
				<BoxComponent keyword='overflow' pro='溢出/超出处理' code={[ {path:'css/style/hidden/overflow'} ]}>
					<CaseComponent
						getValue={ v=>this.setState({ overflow: v }) }
						data={{
							radio:['visible','auto','hidden','scroll']
						}}>
						<div contentEditable='true' style={{width:'100%',height:'80px',display:'block',resize:'none',background:'yellow',overflow:this.state.overflow}}>
							<p>正文内容1</p>
							<p>正文内容2</p>
							<p>正文内容3</p>
							<p>正文内容4</p>
						</div>
						<div style={{height:'50px'}}></div>
					</CaseComponent>
				</BoxComponent>
				<BoxComponent keyword='overflow-x' pro='横向溢出/超出处理' code={[ {path:'css/style/hidden/overflow-x'} ]}/>
				<BoxComponent keyword='overflow-y' pro='横向溢出/超出处理' code={[ {path:'css/style/hidden/overflow-y'} ]}/>
				<h2 className='sub-title ptb10 b bbor1'>裁剪:</h2>
				<BoxComponent keyword='clip' pro='裁剪' isGray code={[ {path:'css/style/hidden/clip'} ]}>
					<CaseComponent
						getValue={ v=>this.setState({ clip: v }) }
						data={{
							radio:['auto','rect(0 100px 100px 0)','rect(37px, 182px, 80px, 22px)']
						}}>
						<div style={{position:'relative',width:'300px',height:'150px',background:'yellow'}}>
							<img style={{position:this.state.position,clip:this.state.clip}} src={TestImage} alt='' />
						</div>
					</CaseComponent>
					<CaseComponent
						getValue={ v=>this.setState({ position: v }) }
						data={{
							radio:['static','relative','absolute','fixed']
						}}>
						<b className='c1'>position:</b>
					</CaseComponent>
				</BoxComponent>
			</UbContent>
		)
	}
}
