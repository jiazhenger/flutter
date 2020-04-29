import React from 'react';
// =====================================================================
const $http = window.$http
const $fn = window.$fn
export default class Index extends React.Component{
	state = {
		data:[]
	}
	
	componentDidMount(){
		
	}
	
	getText = url => {
		$http.getText(url).then((data)=>{
			this.setState({ data : data.split('\n') })
		})
	}
	
	getDart = url => {
		$http.getDart(url).then((data)=>{
			this.setState({ data : data.split('\n') })
		})
	}
	
	render(){
		const { data } = this.state
		const { type,url } = this.props
		
		if(!$fn.hasArray(this.state.data) && !this.props.async){
			if(type === 'text'){
				this.getText(url)
			}else if(type === 'dart'){
				this.getDart(url)
			}
		}
		// 返回主要模板内容
		return (
			<section className='oxys' style={{maxHeight:'400px'}}>
            	{
            		data.length > 0 ? (
            			<div className={`code-list-container ${window.$fn.platform().isPc?'':'mobile'}`}>
		            		<dl className='code-number'>
		            			{
		            				data.map((v,i)=> <dt key={i}>{i+1}</dt> )
		            			}
		            		</dl>
		            		<dl className='code-content'>
		            			{
		            				data.map((v,i)=> <dd key={i} dangerouslySetInnerHTML={{__html:v}}></dd> )
		            			}
		            		</dl>
		            	</div>
            		) : (
            			<div className='p20 g9'>正在加载中......</div>
            		)
            	}
            </section>
		)
	}
}
