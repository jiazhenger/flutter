import React from 'react';
// ===================================================================== antd
import { Radio } from 'antd'
// =====================================================================
const $fn = window.$fn
export default class Index extends React.Component{
	state = {
		value:''
	}
	
	componentDidMount(){
		
	}
	
	onChange = e => {
		let v = e.target.value
    	this.setState({ value: v },()=>{ this.props.getValue && this.props.getValue(v)})
	}
	
	render(){
		const { value } = this.state
		const { data, children, styleName } = this.props
		// 返回主要模板内容
		return (
			<section className='bor1 r5px p10 mtb10'>
				<div className='bbor1 pb10 mb10' style={{[styleName]:value,color:'#888'}}>{children || '测试样例 test case'}</div>
				<Radio.Group onChange={this.onChange} value={value}>
			        {
			        	$fn.hasArray(data.radio) && data.radio.map((v,i)=><Radio key={i} value={v}><span className='f12 ar' style={{color:'green'}}>{v}</span></Radio>)
			        }
		      	</Radio.Group>
            </section>
		)
	}
}
