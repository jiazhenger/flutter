/* ====================================== 滚动条  ====================================== */
import React from 'react'
// ===================================================================== antd
import TitleComponent from '@cpt/title.component'
import CodeComponent from '@cpt/code.component'
// ===================================================================== antd
import { Button, Icon } from 'antd'
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
		const { title, type, children, pro, keyword, code, isGray, link, url, order, noOrder } = this.props
		const { show } = this.state
		return (
			<section>
				<TitleComponent show={show} hasArrow={true} order={noOrder ? null : order} onClick={this.onClick}>
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
						type && [
							<Icon key='arrow' type='arrow-right' style={{color:'#999',fontSize:'12px'}} />,
							<span key='type' className='f14 mlr10 c0' style={{color:'pink'}}>{type}</span>
						]
					}
					{
						pro && <span className='g6 f13' key={2}>{pro}</span>
					}
				</TitleComponent>
				<div className={`rel bbor1 ${show?'':'dn'}`} style={{padding:$fn.hasArray(link) ? '10px 0 5px' : '10px 0'}}>
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
						url && (
							<div className='abs' style={{right:'2px',top:'12px'}}>
								<Button className='ml5' type='primary' size='small' onClick={this.onShow} style={{fontSize:'12px'}}>预览</Button>
							</div>
						)
					}
					{
						$fn.hasArray(link) && (
							<div className='mt10'>
								{
									link.map((v,i)=> <Button key={i} className='mr5 mb5' size='small' onClick={()=>this.props.history.push(v.url)} style={{fontSize:'12px'}}><span className='c0'>{v.title}</span></Button>)
								}
							</div>
						)
					}
				</div>
			</section>
		)
	}
}
