/* ====================================== 滚动条  ====================================== */
import React from 'react'
// ===================================================================== public component
import UbContent from '@cpx/ub-content.component'
import BoxComponent from '@cpt/box.component'
// ===================================================================== antd
import { Button, Icon } from 'antd'
// ===================================================================== 
const $fn = window.$fn
export default class Index extends React.Component{
	state = {
		
	}
	componentDidMount(){
		window.$fn.setTitle(this.props.data.title)
	}
	onShow = (data,index) => {
		this.setState({show:!this.state.show})
	}
	render(){
		const data = this.props.data
		const { isGroup } = data
		
		const DataComponent = ({ data, index }) => {
			return (
				<div>
					{
						$fn.hasObject(data) && data.keyword && (
							<header className='fxm' style={{borderBottom:'1px solid red',padding:'10px 0',flexWrap:'wrap'}}>
								{
									index && <b className='f16 c1'>{index}、</b>
								}
								{
									data.grayText && <span className='mr5 g9'>{data.grayText}</span>
								}
								<h2 className='b f16 mr10' style={{margin:0}}>{data.keyword}</h2>
								{
									(data.type && data.keyword) && [
										<Icon key='arrow' className='ml10' type='arrow-right' style={{color:'#999',fontSize:'12px'}} />,
										<span key='type' className='f14 mlr10 c0' style={{color:'pink'}}>{data.type}</span>
									]
								}
								<h3 className='g9 ex' style={{margin:'0 0 0 15px'}}>{data.title}</h3>
								{
									data.url && (
										<Button className='ml5' type='primary' size='small' onClick={()=>$fn.showPhone(data.url)} style={{fontSize:'12px'}}>预览</Button>
									)
								}
							</header>
						)
					}
					<div>
						{
							$fn.hasArray(data.data) && data.data.map((v,i)=>[
								v.title ? <h2 key={'a'+i} className='sub-title ptb10 bbor1'>{v.title}:</h2>:null,
								v.deviceTitle ? <h2 key={'a'+i} className='sub-title ptb10 c1 bbor1'>{v.deviceTitle}:</h2>:null,
								<BoxComponent 
									key={'b'+i}
									type={v.type}
									order={i+1}
									noOrder={v.noOrder}
									keyword={v.keyword} 
									pro={v.pro} 
									code={v.code} 
									link={v.link} 
									url={v.url}
									isGray={v.isGray}
									isValue={v.isValue}
									{...this.props} 
								/>
							])
						}
					</div>
				</div>
			)
		}
		return (
			<UbContent className='page-content'>
				{
					isGroup ? data.data.map((v,i) => <DataComponent key={i} data={ v } index={i+1} />) : <DataComponent data={data} />
				}
			</UbContent>
		)
	}
}