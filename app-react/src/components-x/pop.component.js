/* ====================================== toast  ====================================== */
import React from 'react';
import CloseImage from '@images/close.png'
// ===================================================================== 
export default class PopContent extends React.Component{
	state = {
		show:this.props.show
	}
	open = () => {
		this.setState({show:true})
	}
	close = () => {
		this.setState({show:false})
	}
	onMaskClose = () => {
		if(this.props.maskClose){
			this.close()
		}
	}
	render(){
		const { show } = this.state
		const { children, width, mode, title, height, borderRadius } = this.props
		let radius = borderRadius || '5px'
		if(mode==='slideUp'){
			radius ='5px 5px 0 0'
		}
		return (
			<div className={`pop ${show?'show':''}`} >
				<div className={`wh fxc ${!mode?'fxmc':''} ${mode==='slideUp'?'xb':''}`} onClick={this.onMaskClose}>
					<div className={`bcf oh fv ${mode==='slideUp'?'slide':''}`} style={{width: width||'90%',height:height,borderRadius:radius,minHeight:'200px'}} onClick={e=>e.stopPropagation()}>
						{
							title ? (
								<header className='h50 tc f15 bbor1 b rel'>
									{title}
									<div onClick={this.close} className='abs_rt h fxmc tap' style={{width:'50px'}}><img style={{width:'20px'}} src={CloseImage} alt=''/></div>
								</header>
							) : null
						}
						<div className='ex oys'>
							{children}
						</div>
					</div>
				</div>
			</div>
		)
	}
}