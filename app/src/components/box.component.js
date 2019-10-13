/* ====================================== 滚动条  ====================================== */
import React from 'react'
// ===================================================================== antd
import TitleComponent from '@cpt/title.component'
import CodeComponent from '@cpt/code.component'
// ===================================================================== antd
import { Button } from 'antd'
// ===================================================================== 
const $fn = window.$fn
export default class Index extends React.Component{
	state = {
		
	}
	
	componentDidMount(){
		
	}
	
	onClick = () => {
		this.setState({ show: !this.state.show })
	}
	
	onShow = () =>　{
		$fn.showPhone(this.props.url)
	}
	
	render(){
		const { title, children, pro, keyword, code, isGray, link, url } = this.props
		const { show } = this.state
		return (
			<section>
				<TitleComponent show={show} hasArrow={true} onClick={this.onClick}>
					{
						keyword && <span className={`title-keyword c0 ar f16 ${isGray ? 'gray' : ''}`} style={{cursor:'text'}}>{keyword}</span>
					}
					{
						title && <span className='c0'>{title}</span>
					}
					{
						pro && (title||keyword) ? <i className='mlr10 g9' key={0}>:</i> : null
					}
					{
						pro && <span className='g6 f13' key={1}>{pro}</span>
					}
				</TitleComponent>
				<div className={`rel ${show?'':'dn'}`} style={{padding:'10px 0'}}>
					{
						show !== undefined && $fn.hasArray(code) && code.map((v,i)=> (
							<div key={i} className='sub-title-wrap'>
								{ v.title && <h2 className='sub-title ptb10' key='title'>{v.title}: </h2> }
								<CodeComponent type='text' url={v.path} />
							</div>
						))
					}
					{children}
					{
						(link || url) && (
							<div className='abs' style={{right:'2px',top:'12px'}}>
								{ link && <Button size='small' onClick={()=>this.props.history.push(link)} style={{fontSize:'12px'}}>关联</Button> }
								{ url && <Button type='primary' size='small' onClick={this.onShow} style={{fontSize:'12px'}}>预览</Button> }
							</div>
						)
					}
				</div>
			</section>
		)
	}
}
