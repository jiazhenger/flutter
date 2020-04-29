/* ====================================== 滚动条  ====================================== */
import React from 'react'
// ===================================================================== antd
import { UpCircleOutlined,DownCircleOutlined,RightCircleOutlined,ShareAltOutlined } from '@ant-design/icons'
// ===================================================================== 
export default ({ children, hasArrow, show, order, hasClick, onClick, hasGo })=> (
	<div className={`f14 bbor1 ptb10 fxmj ${hasArrow||hasClick?'cp tap':''}`} style={{userSelect:'none'}} onClick={onClick}>
		<div className='fxm'>
			{
				order ? <span>{order}、</span> : <ShareAltOutlined className='f14'/>
			}
			<div className='ml10'>{children}</div>
		</div>
		{hasArrow && <span className='c0'>{show?<UpCircleOutlined className='f24' />:<DownCircleOutlined className='f24' />}</span>}
		{hasClick && <span className='c0'><RightCircleOutlined className='f24' /></span>}
	</div>
)
