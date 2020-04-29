import React from 'react'
// =====================================================================
const { $fn } = window
export default class Index extends React.Component{
	state = {}
	
	componentDidMount(){
		
	}
	
	render(){
		const { title, children, sub, className } = this.props
		return (
			<section className={`case-js ${className||''}`}>
				{ title && <h2 className='b' style={{fontSize:'16px',color:$fn.c0}}>{title}</h2> }
				{ sub && (
					<>
						{
							$fn.hasArray(sub) ? sub.map((v,i)=><h3 key={i} className='tj' style={{fontSize:'13px',color:'#999'}}>{i+1}、{v}</h3>) : 
							<h3 className='tj' style={{fontSize:'13px',color:'#999'}}>{sub}</h3>
						}
					</>
				)}
				<ul className='js-code-list'>
					{children}
				</ul>
            </section>
		)
	}
}
