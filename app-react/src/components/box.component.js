/* ====================================== 滚动条  ====================================== */
import React from 'react'
// ===================================================================== antd
import TitleComponent from '@cpt/title.component'
import CodeComponent from '@cpt/code.component'
// ===================================================================== antd
import { Button } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons'
// ===================================================================== 
const $fn = window.$fn
export default class Index extends React.Component{
	state = {
		
	}
	
	componentDidMount(){
		
	}
	
	onClick = () => {
		const { code, link, hasShow, children } = this.props
		
		if($fn.hasArray(code) || hasShow || children ){
			this.setState({ show: !this.state.show })
		}
		
		if($fn.isString(link)){
			this.props.history.push(link)
		}
	}
	
	onShow = () =>　{
		$fn.showPhone(this.props.url)
	}
	
	render(){
		const { title, type, children, pro, keyword, code, deviceTitle, isGray, link, url, order, noOrder, isValue, hasShow } = this.props
		const { show } = this.state
		return (
			<>
				{ deviceTitle && <h2 className='ptb10 c1 bbor1'>{deviceTitle}</h2> }
				<section className='box'>
					<TitleComponent show={show} hasArrow={$fn.hasArray(code) || hasShow || children } hasClick={$fn.isString(link)} order={noOrder ? null : order} onClick={this.onClick}>
						{
							keyword && <span className={`title-keyword ar f16 ${isGray ? 'gray' : ''} ${isValue ? 'c2' : 'c0'}`} style={{cursor:'text',userSelect:'text'}} onClick={$fn.stop}>{keyword}</span>
						}
						{
							title && <span className='c0'>{title}</span>
						}
						{
							keyword && !isValue ? <i className='mlr10'>:</i> : <i className='ml10'></i> 
						}
						{
							(type && keyword) && [
								<ArrowRightOutlined key='arrow' type='arrow-right' style={{color:'#999',fontSize:'12px'}} />,
								<span key='type' className='f14 mlr10 c0' style={{color:'pink'}}>{type}</span>
							]
						}
						{
							pro && <span className='g6 f13' key={2}>{pro}</span>
						}
					</TitleComponent>
					{
							show !== undefined && ($fn.hasArray(code) || hasShow || children) ? (
								<div className={`rel bbor1 ${show?'':'dn'}`} style={{padding:$fn.hasArray(link) ? '10px 0 5px' : '10px 0'}} onClick={$fn.stop}>
								{
									$fn.hasArray(code) && code.map((v,i)=> (
										<div key={i} className='sub-title-wrap'>
											{ v.title && <h2 className='sub-title ptb10 b' key='title'>{v.title}: </h2> }
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
						) : null
					}
				</section>
			</>
		)
	}
}
