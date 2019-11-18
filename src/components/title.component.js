/* ====================================== 滚动条  ====================================== */
import React from 'react'
// ===================================================================== antd
import { Icon } from 'antd'
// ===================================================================== 
export default ({ children, hasArrow, show, order, hasClick, onClick, hasGo })=> (
	<div className={`f14 bbor1 ptb10 fxmj ${hasArrow||hasClick?'cp tap':''}`} style={{userSelect:'none'}} onClick={onClick}>
		<div className='fxm'>
			{
				order ? <span>{order}、</span> : <Icon className='f14' type='share-alt'/>
			}
			<div className='ml10'>{children}</div>
		</div>
		{hasArrow && <span className='c0'><Icon className='f24' type={show?'up-circle':'down-circle'} /></span>}
		{hasClick && <span className='c0'><Icon className='f24' type='right-circle' /></span>}
	</div>
)
