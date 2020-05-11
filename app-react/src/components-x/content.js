/* ====================================== 滚动条  ====================================== */
import React from 'react'
// =====================================================================
/*
const Fv = ({ className, header, footer, contentClassName, children }) => (
	<Content scrollY={false} className={`fv ${className||''}`}>
	
		{ header && header }
		
		<section className='rel ex'>
			<Content className={ contentClassName ? contentClassName : '' }>
				{ children }
			</Content>
		</section>
		
		{ footer && footer }
	</Content>
)
*/
const Page = props => <Content isPage {...props} />
export default class Content extends React.Component{
//	static Fv = Fv
	static Page = Page
	render(){
		const { id, className, style, children, onClick, scrollY, scrollX, scrollXY, isPage, pageClass, wraperStyle, title, subTitle, headerSuffix, isFull } = this.props
		let scroll = 'oys'
		if(scrollX){ scroll = 'oxs' }
		if(scrollY){ scroll = 'oys' }
		if(scrollXY || isPage){ scroll = 'oxys' }
		if(scrollY === false){ scroll = null }
		return (
			<div 
				id 			={ id } 
				className	={ `abs_lt wh ${scroll||''} ${className||'bcb'}` }
				style		={ style } 
				onClick		={ onClick }
			>
				{
					isPage ? (
						<section 
							style={{padding:`${title?'0':'15px'} 15px 15px`,minWidth:'1000px',minHeight:'800px',...wraperStyle}} 
							className={`${pageClass||''} ${isFull?'h':''}`}
						>
							{
								title && (
									<header className='h50 fxm'>
										<div className='ex fx'>
											<h2 className='b f18'>{title}</h2>
											<div className='f16'>{subTitle}</div>
										</div>
										{ headerSuffix }
									</header>
								)
							}
							
							{children}
						</section>
					) : <>{children}</>
				}
			</div>
		)
	}
}