/* ====================================== 滚动条  ====================================== */
import React from 'react'
// ===================================================================== public component
import UbContent from '@cpx/ub-content.component'
import BoxComponent from '@cpt/box.component'
// ===================================================================== 
const $fn = window.$fn
export default class Index extends React.Component{
	componentDidMount(){
		window.$fn.setTitle(this.props.data.title)
	}
	render(){
		const { data } = this.props.data
		return (
			<UbContent className='page-content'>
				{
					this.props.data.keyword && <h2 className='b f16' style={{borderBottom:'2px solid red',padding:'10px 0'}}>{this.props.data.keyword}</h2>
				}
				{
					$fn.hasArray(data) && data.map((v,i)=>[
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
							{...this.props} 
						/>
					])
				}
			</UbContent>
		)
	}
}