/* ====================================== 滚动条  ====================================== */
import React from 'react'
// ===================================================================== antd
import { UpCircle,DownCircle,RightCircle,ShareAlt } from '@ant-design/icons'
// ===================================================================== 
export default ({ children, hasArrow, show, order, hasClick, onClick, hasGo })=> (
	<div className={`f14 bbor1 ptb10 fxmj ${hasArrow||hasClick?'cp tap':''}`} style={{userSelect:'none'}} onClick={onClick}>
		<div className='fxm'>
			{
				order ? <span>{order}、</span> : <ShareAlt className='f14'/>
			}
			<div className='ml10'>{children}</div>
		</div>
		{hasArrow && <span className='c0'>{show?<UpCircle className='f24' />:<DownCircle className='f24' />}</span>}
		{hasClick && <span className='c0'><RightCircle className='f24' /></span>}
	</div>
)
